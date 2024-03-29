import fg from 'fast-glob'
import { existsSync } from 'fs'
import { execaCommand as _execaCommand } from 'execa'
import { createFsComputedWithStream } from 'file-computed'

function execaCommand(command: string) {
	return _execaCommand(command, {
		stdin: 'inherit',
		stderr: 'inherit',
		stdout: 'inherit'
	})
}

function generate() {
	return execaCommand('pnpm generate')
}

async function ensureGenerate() {
	if (!existsSync('.output')) {
		return generate()
	}

	const fsComputed = createFsComputedWithStream()

	const paths = await fg(['*.ts', '*.json', '*.lock'])

	// 文件型计算属性，当且仅当配置文件变更时才重新生成
	return fsComputed(paths, async function () {
		return generate()
	})
}

async function preview() {
	await ensureGenerate()
	const subprocess = execaCommand(
		'npx nuxi preview'
	)

	process.once('SIGINT', () => {
		subprocess.kill('SIGINT')
	})
}

preview()
