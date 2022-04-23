import{_ as u,r as c,o as i,c as r,a as n,b as a,w as p,F as k,d as s,e as o}from"./app.0ad0b766.js";const d={},g=n("h1",{id:"\u6A21\u5757\u81EA\u52A8\u52A0\u8F7D",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6A21\u5757\u81EA\u52A8\u52A0\u8F7D","aria-hidden":"true"},"#"),s(" \u6A21\u5757\u81EA\u52A8\u52A0\u8F7D")],-1),m=n("h2",{id:"\u4ED3\u5E93",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ED3\u5E93","aria-hidden":"true"},"#"),s(" \u4ED3\u5E93")],-1),f=s("\u6A21\u5757\u81EA\u52A8\u52A0\u8F7D\u63D2\u4EF6 "),h=n("code",null,"npm",-1),_=s(" \u5305\u5DF2\u5B9E\u73B0\uFF0C\u5177\u4F53\u53EF\u89C1\u8BE5\u4ED3\u5E93 \u{1F449} "),v={href:"https://github.com/dishait/vite-plugin-use-modules",target:"_blank",rel:"noopener noreferrer"},y=s("vite-plugin-use-modules"),w=s("\u3002"),j=n("br",null,null,-1),b=n("br",null,null,-1),x=n("h2",{id:"\u539F\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u539F\u7406","aria-hidden":"true"},"#"),s(" \u539F\u7406")],-1),I={id:"glob-\u5BFC\u5165",tabindex:"-1"},M=n("a",{class:"header-anchor",href:"#glob-\u5BFC\u5165","aria-hidden":"true"},"#",-1),C=s(),A={href:"https://cn.vitejs.dev/guide/features.html#glob-import",target:"_blank",rel:"noopener noreferrer"},V=s("Glob \u5BFC\u5165"),E=s("\u5728 "),G=n("code",null,"vite",-1),S=s(" \u4E2D\u6709\u4E2A\u975E\u5E38\u597D\u7528\u7684\u529F\u80FD\u53EB\u505A "),N={href:"https://cn.vitejs.dev/guide/features.html#glob-import",target:"_blank",rel:"noopener noreferrer"},q=s("Glob \u5BFC\u5165"),B=s("\u3002"),D=o(`<p>\u4F8B\u5982\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u8FB9\u7684\u65B9\u5F0F\u81EA\u52A8\u5F15\u5165 <code>src/modules</code> \u4E0B\u7684\u6240\u6709 <code>js</code> \u6A21\u5757</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span>
	<span class="token string">&#39;/src/modules/**/*.js&#39;</span>
<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>modules<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u4EE5\u5BF9\u8C61\u7684\u65B9\u5F0F\u8F93\u51FA\u5230\u524D\u7AEF\u63A7\u5236\u53F0</span>
</code></pre></div><br><br><h3 id="\u81EA\u52A8\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u6CE8\u518C" aria-hidden="true">#</a> \u81EA\u52A8\u6CE8\u518C</h3><p>\u6839\u636E\u4E0A\u8FB9\u7684\u539F\u7406\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u81EA\u52A8\u6CE8\u518C <code>vue</code> \u6A21\u5757</p><p>\u4F8B\u5982\u6CE8\u518C <code>pinia</code></p>`,7),F=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i pinia -D
`)])])],-1),L=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` pinia -D
`)])])],-1),O=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` pinia -D
`)])])],-1),P=o(`<p>\u7136\u540E\u521B\u5EFA\u6A21\u5757 <code>src/modules/pinia.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// src/modules/pinia.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7136\u540E\u5728 <code>src/main.js</code> \u4E0B\u4E66\u5199\u4EE5\u4E0B\u4EE3\u7801</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token comment">// \u5F15\u5165\u6240\u6709\u6A21\u5757</span>
<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span>
	<span class="token string">&#39;/src/modules/**/*.js&#39;</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u5B89\u88C5\u63D2\u4EF6</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>modules<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module<span class="token punctuation">.</span>default <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		module<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4EE5\u4E0A\u5C31\u7B97\u81EA\u52A8\u6CE8\u518C <code>pinia</code> \u6210\u529F\u4E86\uFF0C\u53EF\u4EE5\u521B\u5EFA <code>src/stores/counter.js</code> \u9A8C\u8BC1\u4E00\u4E0B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// src/stores/counter.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">inc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u540E\u5C31\u53EF\u4EE5\u5728 <code>src/App.vue</code> \u4E2D\u4F7F\u7528\u4E86</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useCounterStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./stores/counter&#39;</span>

	<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useCounterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.inc()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ store.counter }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br>`,10),T={id:"\u865A\u62DF\u6A21\u5757",tabindex:"-1"},z=n("a",{class:"header-anchor",href:"#\u865A\u62DF\u6A21\u5757","aria-hidden":"true"},"#",-1),H=s(),J={href:"https://cn.vitejs.dev/guide/api-plugin.html#importing-a-virtual-file",target:"_blank",rel:"noopener noreferrer"},K=s("\u865A\u62DF\u6A21\u5757"),Q=o(`<p>\u6211\u4EEC\u90FD\u77E5\u9053 <code>vite</code> \u63D2\u4EF6\u91CC\u6709\u4E2A\u975E\u5E38\u597D\u7528\u7684\u865A\u62DF\u6587\u4EF6\u6216\u8005\u865A\u62DF\u6A21\u5757\u529F\u80FD</p><p>\u4F8B\u5982\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A <code>plugins/foo.js</code> \u63D2\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// plugins/foo.js</span>
<span class="token comment">// \u865A\u62DF\u6A21\u5757 id</span>
<span class="token keyword">const</span> virtualModuleId <span class="token operator">=</span> <span class="token string">&#39;msg&#39;</span>
<span class="token comment">// \u5904\u7406\u4E4B\u540E\u7684\u865A\u62DF\u6A21\u5757 id</span>
<span class="token keyword">const</span> resolvedVirtualModuleId <span class="token operator">=</span> <span class="token string">&#39;\\0&#39;</span> <span class="token operator">+</span> virtualModuleId
<span class="token comment">// \u865A\u62DF\u6A21\u5757\u4EE3\u7801</span>
<span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">export default 100</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
	<span class="token function">resolveId</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">===</span> virtualModuleId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> resolvedVirtualModuleId
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">===</span> resolvedVirtualModuleId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> code
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u9700\u8981\u6CE8\u518C\u8BE5\u63D2\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;./plugins/foo&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> foo<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u540E\u5C31\u53EF\u4EE5\u5728\u524D\u7AEF\u91CC\u5F15\u5165\u8BE5\u865A\u62DF\u6A21\u5757\u4E86\uFF0C\u4F8B\u5982 <code>src/main.js</code> \u4E2D</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// ...</span>
<span class="token keyword">import</span> msg <span class="token keyword">from</span> <span class="token string">&#39;msg&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u5728\u524D\u7AEF\u63A7\u5236\u53F0\u8F93\u51FA 100</span>
<span class="token comment">// ...</span>
</code></pre></div><br><br><br><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2>`,11),R=s("\u540C\u7406\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u521B\u5EFA\u643A\u5E26 "),U={href:"https://cn.vitejs.dev/guide/features.html#glob-import",target:"_blank",rel:"noopener noreferrer"},W=s("Glob \u5BFC\u5165"),X=s(" \u5B9E\u73B0\u81EA\u52A8\u6CE8\u518C "),Y=n("code",null,"vue",-1),Z=s(" \u6A21\u5757\u7684\u4EE3\u7801"),$=o(`<p>\u9996\u5148\u521B\u5EFA <code>plugins/use-modules.js</code> \u63D2\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> virtualModuleId <span class="token operator">=</span> <span class="token string">&#39;virtual:modules&#39;</span>
	<span class="token keyword">const</span> resolvedVirtualModuleId <span class="token operator">=</span> <span class="token string">&#39;\\0&#39;</span> <span class="token operator">+</span> virtualModuleId

	<span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
export const modules = i<wbr>mport.meta.globEager(
    &#39;/src/modules/**/*.js&#39;
)

export const useModules = app =&gt; {
    Object.values(modules).forEach(module =&gt; {
        if (typeof module.default === &#39;function&#39;) {
            module.default(app)
        }
    })
}</span><span class="token template-punctuation string">\`</span></span>

	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vite-plugin-use-modules&#39;</span><span class="token punctuation">,</span>
		<span class="token function">resolveId</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">===</span> virtualModuleId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> resolvedVirtualModuleId
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">===</span> resolvedVirtualModuleId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> code
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u6CE8\u518C\u4E00\u4E0B\u63D2\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> Modules <span class="token keyword">from</span> <span class="token string">&#39;./plugins/use-modules&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Modules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6700\u540E\u5C31\u53EF\u4EE5\u5728 <code>main.js</code> \u4E2D\u6109\u5FEB\u7684\u4F7F\u7528\u6A21\u5757\u81EA\u52A8\u52A0\u8F7D\u4E86</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useModules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;virtual:modules&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token function">useModules</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,6);function nn(sn,an){const t=c("ExternalLinkIcon"),e=c("CodeGroupItem"),l=c("CodeGroup");return i(),r(k,null,[g,m,n("p",null,[f,h,_,n("a",v,[y,a(t)]),w]),j,b,x,n("h3",I,[M,C,n("a",A,[V,a(t)])]),n("p",null,[E,G,S,n("a",N,[q,a(t)]),B]),D,a(l,null,{default:p(()=>[a(e,{title:"npm",active:""},{default:p(()=>[F]),_:1}),a(e,{title:"yarn"},{default:p(()=>[L]),_:1}),a(e,{title:"pnpm"},{default:p(()=>[O]),_:1})]),_:1}),P,n("h3",T,[z,H,n("a",J,[K,a(t)])]),Q,n("p",null,[R,n("a",U,[W,a(t)]),X,Y,Z]),$],64)}var pn=u(d,[["render",nn],["__file","use-modules.html.vue"]]);export{pn as default};
