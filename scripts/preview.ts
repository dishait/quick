import consola from 'consola'
import { existsSync } from 'fs'
import type { Options } from 'execa'
import { execa as _execa } from 'execa'

const log = consola.withTag('quick')

function execa(command: string, inherit = true) {
	const [file, ...args] = command.split(' ')
	const options = { reject: false } as Options
	if (inherit) {
		Object.assign(options, {
			stdin: 'inherit',
			stderr: 'inherit',
			stdout: 'inherit'
		} as Options)
	}
	const subprocess = _execa(file, args, options)

	process.once('SIGINT', () => {
		subprocess.kill('SIGINT')
	})

	return subprocess
}

const dist = '.output/public'

const denoStdFileServerCdn =
	'https://deno.land/std@0.170.0/http/file_server.ts'

const commands = {
	denoCheckVersion: 'deno -V',
	nuxiGenerate: 'nuxi generate',
	nodeFileServer: `npx serve -s ${dist}`,
	denoFileServer: `deno run -A ${denoStdFileServerCdn} ${dist}`
}

async function checkDenoInstalled() {
	try {
		const { stderr, stdout } = await execa(
			commands.denoCheckVersion,
			false
		)
		return Boolean(stdout || !stderr)
	} catch (error) {
		return false
	}
}

async function preview() {
	const generated =
		existsSync('dist') || existsSync('.output')

	if (!generated) {
		log.warn('未生成')
		log.start('开始生成')
		await execa(commands.nuxiGenerate)
		log.success('生成成功')
	}

	console.log()

	if (await checkDenoInstalled()) {
		log.start('启用 deno 文件服务中')
		return await execa(commands.denoFileServer)
	}

	log.start('启用 node 文件服务中')

	await execa(commands.nodeFileServer)
}

preview()
