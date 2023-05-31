import{_ as v,M as o,p as k,q as m,R as n,t as s,v as i,N as e,V as p,Q as d,s as r,a1 as a}from"./framework-6700cb35.js";const b="/images/vue2/MVVM.png",g="/images/vue2/DiffImg.png",h="/images/vue2/lifecycle.png",y="/images/vue2/vmANDvc.png",x={},f=n("h2",{id:"模板语法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模板语法","aria-hidden":"true"},"#"),s(" 模板语法")],-1),j={id:"mastach语法-插值语法",tabindex:"-1"},V=n("a",{class:"header-anchor",href:"#mastach语法-插值语法","aria-hidden":"true"},"#",-1),w=a('<ul><li><code>{{ }}</code>内部只能书写<strong>js表达式语句</strong></li><li>表达式： 一个表达式会生成一个值，可以放在一个任何需要值的地方 <ol><li>a --&gt;值本身也是表达式</li><li>a+b --&gt; 运算表达式</li><li>foo( ) --&gt; 函数调用表达式</li><li>条件 ? 结果1 ： 结果2 --&gt; 三元表达式</li></ol></li><li>使用场景 <ul><li>在标签体内解析内容，可以直接读取到data中的所有属性</li><li><strong>其实模板语法中可以使用实例对象vm中的所有属性，以及Vue原型上的所有属性在模板中都能使用</strong></li></ul></li></ul><h2 id="指令语法" tabindex="-1"><a class="header-anchor" href="#指令语法" aria-hidden="true">#</a> 指令语法</h2>',2),_=a("<li><p><strong>v-bind</strong></p><ol><li>使用格式： v-bind:属性名 = “属性值” --&gt; 简写为 :属性名 --&gt; 实现动态绑定属性</li><li>使用场景 <ol><li>用于解析标签(包括： 标签属性、标签体内容、绑定事件......)</li><li>属性值也得是表达式</li><li>单向绑定(data 中的内容改变会影响使用处的内容跟着改变）</li></ol></li></ol></li><li><p><strong>v-on</strong></p><ol><li>使用格式： v-on:事件名 --&gt; 简写 @</li><li>使用场景 --&gt; 用于绑定事件</li></ol></li>",2),q=n("p",null,[n("strong",null,"v-text")],-1),D=n("li",null,[n("strong",null,"作用"),s("：向其所在的节点中渲染文本内容")],-1),$=n("strong",null,"与差值语法的区别",-1),M=n("p",null,[n("strong",null,"v-html")],-1),A=n("li",null,[n("p",null,[n("strong",null,"作用"),s("：向指定节点中渲染包含 html 结构的内容")])],-1),S=n("p",null,[n("strong",null,"与插值语法的区别")],-1),O=n("li",null,"v-html 可以识别 html 结构",-1),C=n("li",null,[n("p",null,[n("strong",null,"注意事项")]),n("ul",null,[n("li",null,[s("v-html的使用有安全问题 "),n("ul",null,[n("li",null,"在网站上动态渲染任意 HTML 是非常危险的，容易导致 XSS 攻击"),n("li",null,"一定要在可信的内容上使用 v-html，永远不要用在用户提交的内容上")])])])],-1),N=a("<li><p><strong>v-cloak</strong></p><ul><li>特点：该指令没有值</li><li>本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性</li><li>使用 css 配合 v-cloak 可以解决网速慢时页面展示出 <code>{{xxx}}</code> 的问题</li></ul></li><li><p><strong>v-once</strong></p><ul><li>v-once 所在节点在初次动态渲染后，就视为静态内容了</li><li>以后数据的改变不会引起 v-once 所在结构的更新，可以用于优化性能</li></ul></li><li><p><strong>v-pre</strong></p><ul><li>跳过其所在节点的编译过程</li><li>可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译</li></ul></li>",3),R=a(`<h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2><h3 id="单向数据绑定" tabindex="-1"><a class="header-anchor" href="#单向数据绑定" aria-hidden="true">#</a> 单向数据绑定</h3><ul><li><strong>v-bind</strong><ul><li>实现的是单向绑定,数据只能从data流向页面即<strong>单向数据流</strong>。</li></ul></li></ul><h3 id="双向数据绑定" tabindex="-1"><a class="header-anchor" href="#双向数据绑定" aria-hidden="true">#</a> 双向数据绑定</h3><ul><li><strong>v-model</strong><ul><li>实现的是双向数据绑定,数据可以<strong>双向流动</strong></li><li>双向数据绑定一般都应用在表单类元素（如：input、select等）</li><li><code>v-model:value</code> 可以简写为 v-model,因为v-model默认收集的就是value值。</li></ul></li></ul><h2 id="el和data的两种写法" tabindex="-1"><a class="header-anchor" href="#el和data的两种写法" aria-hidden="true">#</a> el和data的两种写法</h2><h3 id="写法一" tabindex="-1"><a class="header-anchor" href="#写法一" aria-hidden="true">#</a> 写法一</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// data的对象式写法</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写法二" tabindex="-1"><a class="header-anchor" href="#写法二" aria-hidden="true">#</a> 写法二</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token comment">// data的函数式写法 --&gt; 别用箭头函数，会有this指向问题</span>
	<span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span><span class="token punctuation">{</span>
		<span class="token comment">// 想要的对象</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">// 函数式写法简写</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
	<span class="token comment">// 想要的对象</span>
	<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// el的写法二</span>
vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 在实例对象vm上挂载目标容器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li><strong>由Vue管理的函数一定不要使用箭头函数,箭头函数的this指向的是全局window</strong></li></ul><h2 id="mvvm-模型" tabindex="-1"><a class="header-anchor" href="#mvvm-模型" aria-hidden="true">#</a> MVVM 模型</h2><ul><li>M <strong>模型</strong>(Model) : 对应data中的数据</li><li>V <strong>视图</strong>(View) : 模板</li><li>VM <strong>视图模型</strong>(ViewModel) : Vue实例对象 <img src="`+b+`" alt=""></li></ul><h2 id="js-小知识点补充" tabindex="-1"><a class="header-anchor" href="#js-小知识点补充" aria-hidden="true">#</a> JS 小知识点补充</h2><ul><li><strong>defineproperty(obj, property, 配置项{})</strong><ul><li><strong>用于给对象定义属性</strong><ol><li>参数一 绑定属性的目标对象</li><li>参数二 绑定的属性名</li><li>参数三 配置对象</li></ol></li><li><strong>配置对象的属性</strong><ol><li>value 设置属性默认值</li><li>writable 设置属性数否能够修改</li><li>enumerable 设置属性是否可，<strong>枚举</strong>(即是否可遍历)</li><li>configurable 设置属性是否可删除或编辑</li><li>在该函数内部可以书写<strong>getter</strong>和<strong>setter</strong></li></ol></li></ul></li></ul><h2 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><ul><li>通过一个对象代理对另一个对象中属性的操作(读/写)</li><li>在Vue2中数据代理是通过defineproperty来实现的</li><li>一旦data中的数据发生改变，页面中所有用到该数据的地方都会跟着改变</li></ul><h3 id="数据代理的好处" tabindex="-1"><a class="header-anchor" href="#数据代理的好处" aria-hidden="true">#</a> 数据代理的好处</h3><ul><li>更加方便的操作data中的数据</li></ul><h3 id="vue2数据代理实现示例" tabindex="-1"><a class="header-anchor" href="#vue2数据代理实现示例" aria-hidden="true">#</a> Vue2数据代理实现示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 实现：通过obj2来代理obj中的x属性</span>
	<span class="token keyword">let</span> obj <span class="token operator">=</span>  <span class="token punctuation">{</span><span class="token literal-property property">x</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
	<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">y</span> <span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">}</span>
	
	Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> obj<span class="token punctuation">.</span>x
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// setter中可以接收到属性修改值</span>
		<span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
		obj<span class="token punctuation">.</span>x <span class="token operator">=</span> value
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h2><ul><li>使用格式 <strong>@click.stop</strong><ul><li><strong>prevent</strong>： 阻止默认事件(常用)</li><li><strong>stop</strong> ： 阻止事件冒泡(常用)</li><li><strong>once</strong>：事件只触发一次(常用)</li><li><strong>capture</strong>：使用事件的捕获模式</li><li><strong>self</strong>：只有event.target是当前操作的元素时才触发事件</li><li><strong>passive</strong>：事件的默认行为立即执行，无需等待事件回调完毕</li></ul></li></ul><h2 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h2><ul><li><p><strong>Keydown</strong>和 <strong>Keyup</strong></p></li><li><p>使用格式</p><ul><li>@<strong>keyup</strong>.键名</li><li>@<strong>keydown</strong>.键名(键码 <strong>不推荐</strong>)</li></ul></li><li><p>Vue中<strong>常用按键别名</strong></p><ul><li><strong>enter</strong><ul><li>回车</li></ul></li><li><strong>delete</strong><ul><li>删除(退格)</li></ul></li><li><strong>esc</strong><ul><li>退出</li></ul></li><li><strong>space</strong><ul><li>空格</li></ul></li><li><strong>tab</strong><ul><li>换行(只能配合Keydown键使用，因为Keyup该元素已经失去焦点，无法再响应对应事件)</li></ul></li><li><strong>up</strong><ul><li>上</li></ul></li><li><strong>down</strong><ul><li>下</li></ul></li><li><strong>left</strong><ul><li>左</li></ul></li><li><strong>right</strong><ul><li>右</li></ul></li></ul></li><li><p>对于Vue未提供别名的按键，可以使用按键原始的key去绑定，但是要注意转为kebab-case(短横线命名)</p><ul><li>Vue.config.key <ul><li>获取对应按键的key</li></ul></li><li>Vue.config.keycodes <ul><li>获取对应按键的codes编码</li></ul></li></ul></li><li><p><strong>系统修饰按键</strong>(用法<strong>特殊</strong>): ctrl 、 alt 、 shift 、 meta (win键)</p><ul><li>配合Keyup使用 <ul><li>按下按键的同时，再按下其它键，接着释放其它按键，事件才会被触发</li></ul></li><li>配合Keydown使用 <ul><li>正常触发事件</li></ul></li></ul></li><li><p>可以使用KeyCode去指定具体按键(<strong>不推荐</strong>)</p></li><li><p><strong>自定义按键别名</strong></p><ul><li>Vue.config.keyCodes.自定义键名 = 键码</li></ul></li></ul><h2 id="计算属性-computed" tabindex="-1"><a class="header-anchor" href="#计算属性-computed" aria-hidden="true">#</a> 计算属性(computed)</h2><ul><li><strong>定义</strong><ul><li>要使用的属性不存在，需要通过已有属性计算得来</li></ul></li><li><strong>原理</strong><ul><li>底层借助了<strong>Object.defineProperty</strong>方法提供的<strong>getter</strong>和<strong>setter</strong></li></ul></li><li><strong>get函数什么时候执行？</strong><ol><li>初次读取该属性时会执行一次</li><li>当依赖的数据发生改变时会被再次调用</li></ol></li><li><strong>和methods比computed有什么优势？</strong><ul><li>computed内部有缓存机制(复用),效率更高，调试方便</li></ul></li><li><strong>补充</strong><ol><li>计算属性最终会出现在实例对象vm上，使用时可直接读取</li><li>如果计算属性要被修改，那么必须写<strong>set</strong>函数去响应修改，且<strong>set</strong>中要引起计算属性所<strong>依赖</strong>的数据发生变换</li><li>如果计算属性确定不考虑修改，则可以使用计算属性的简写形式</li><li>再页面中可以使用插值语法<code>{{**计算属性名**}}</code>来显示计算结果</li></ol></li><li><strong>计算属性的简写(不考虑修改才能简写)</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token comment">// 完整写法(计算属性要写成配置对象)</span>
	<span class="token literal-property property">计算属性名</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// set按需写</span>
		<span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 简写(不考虑修改)</span>
	<span class="token function-variable function">计算属性名</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 这个函数会被作为get函数使用</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监视属性-watch" tabindex="-1"><a class="header-anchor" href="#监视属性-watch" aria-hidden="true">#</a> 监视属性(watch)</h2><ul><li><strong>监视属性watch</strong><ol><li>当被监视的属性变化时，<strong>回调函数自动调用</strong>，进行相关操作</li><li><strong>监视的属性必须存在</strong>，才能进行监视</li><li>监视的两种写法 <ol><li>new Vue时传入watch配置</li><li>通过vm.$watch监视</li></ol></li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#root&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">监视属性</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token operator">/</span><span class="token boolean">true</span>， <span class="token comment">// 初始化时handler是否执行</span>
			<span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">// 执行语句</span>
			<span class="token punctuation">}</span>
		｝
	<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="计算属性-computed-和监视属性-watch-的区别" tabindex="-1"><a class="header-anchor" href="#计算属性-computed-和监视属性-watch-的区别" aria-hidden="true">#</a> 计算属性(computed)和监视属性(watch)的区别</h2><ul><li>computed能完成的功能，watch都能够完成</li><li>但是watch能完成的功能，computed不一定能完成。(watch可以进行异步操作)</li></ul><h2 id="样式绑定" tabindex="-1"><a class="header-anchor" href="#样式绑定" aria-hidden="true">#</a> 样式绑定</h2><ul><li><strong>class样式</strong><ul><li><strong>写法</strong>： class = &#39;xxx&#39; 其中xxx可以是字符串、对象、数组 <ol><li><strong>字符串写法</strong>：适用于类名不确定，需要动态获取</li><li><strong>对象写法</strong>：使用于要绑定多个样式，个数不确定、名字也不确定</li><li><strong>数组写法</strong>：适用于要绑定多个样式、个数确定、名字也确定，但是不确定用不用</li></ol></li></ul></li><li><strong>style样式</strong><ul><li>:style= &#39;{样式属性: xxx}&#39; 其中xxx是动态值</li><li>:style = &#39;[a, b]&#39; 其中a、b是样式对象</li></ul></li></ul><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2><ul><li><p><strong>v-if</strong></p><ul><li><strong>适用场景</strong>：切换频率较低</li><li><strong>特点</strong>：不符合if提交的元素直接移除(即无法通过DOM操作获取到元素)</li><li><strong>注意事项</strong>： v-if 和 v-else-if 以及 v-else 一起使用时，要求结构不能被打断</li></ul></li><li><p><strong>v-show</strong></p><ul><li><strong>适用场景</strong>： 切换频率较高的场景</li><li><strong>特点</strong>：利用的是display属性控制元素的隐藏与否</li><li><strong>注意事项</strong>：即使元素被隐藏，也可以通过通过DOM操作获取该元素</li></ul></li></ul><h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2><ul><li><strong>v-for指令</strong><ul><li>适用场景：用于展示列表数据</li><li>用法：v-for = &#39;(item, index) in xxx&#39;</li><li>可以利用v-for指令遍历数组、对象、字符串(非常少)、指定次数遍历(很少)</li></ul></li></ul><h3 id="v-for指令key原理" tabindex="-1"><a class="header-anchor" href="#v-for指令key原理" aria-hidden="true">#</a> v-for指令key原理</h3><ul><li>在使用v-for指令进行遍历时，如果没有指定key值，那么Vue会默认的将遍历时的索引值index作为key</li><li><strong>将index当作key有什么漏洞</strong>？ <ul><li>对列表数据进行破坏顺序的操作的时候，会产生没有必要的真实DOM的更新，如果此时结构中还有输入类的元素时(例如input输入框),此时会出现数据错乱的现象(和Vue的虚拟DOM对比规则有关)</li></ul></li><li><strong>Vue中虚拟DOM对比规则(Diff算法)</strong><ul><li>若在旧的虚拟DOM中找到了与新虚拟DOM中相同的key <ol><li>若虚拟Dom 中的内容没有改变，则直接使用之前的真实DOM</li><li>若虚拟DOM中的内容变化，则生成新的真实DOM，紧接着替换页面中之前的真实DOM</li></ol></li><li>若在旧的虚拟DOM中没有找到与新的虚拟DOM相同的key <ol><li>直接创建新的真实DOM，渲染页面</li></ol></li></ul></li></ul><p><img src="`+g+'" alt="Diff算法"></p><ul><li><strong>以index为key时，为什么在输入框中输入了数据，当进行破坏顺序的操作时数据还是会数据错乱？</strong><ul><li>用户在页面中进行的一切操作，都是在操作真实DOM，包括在输入框中输入内容，因此有内容的是真实DOM，但是在Vue的虚拟DOM中，input输入框是没有内容的，对比后发现相同就会将其进行复用，从而导致数据错乱</li></ul></li><li><strong>开发过程中key的选择</strong><ul><li>最好使用每条数据的唯一标识作为 key, 比如 id、手机号、身份证号、学号等唯一值</li><li>如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示， 使用 index 作为 key 是没有问题的</li></ul></li></ul><h2 id="vue数据监测" tabindex="-1"><a class="header-anchor" href="#vue数据监测" aria-hidden="true">#</a> Vue数据监测</h2><ul><li><strong>监测原理</strong><ol><li><p>Vue 会监视 <strong>data 中所有层次</strong>的数据</p></li><li><p>Vue是如何<strong>监测对象</strong>中的数据的？</p><ul><li>通过 setter 实现监视，且要在 new Vue 时就传入要监测的数据</li><li>正常操作给对象中后追加的属性，Vue默认不会对齐做响应式处理</li><li>如果需要给后添加的属性做响应式处理，可通过以下两个API实现： <ul><li>Vue.set(target，propertyName/index，value)</li><li>vm.$set(target，propertyName/index，value）</li></ul></li></ul></li><li><p><strong>Vue如何监测数组中的数据</strong>？</p><ul><li>通过包裹数组更新元素的方法实现，本质就是做了两件事： <ul><li>调用原生对应的方法对数组进行更新</li><li>重新解析模板，进而更新页面</li></ul></li></ul></li><li><p><strong>在Vue中操作数组中的某个元素使用如下方法可触发响应式</strong>：</p><ul><li><strong>API</strong>：<strong>push()、pop()、shift()、unshift()、splice()、sort()、reverse()</strong></li></ul></li><li><p><strong>注意事项</strong>：<strong>Vue.set() 和 vm.$set() 不能给 vm 或 vm 的根数据对象 添加属性</strong></p></li></ol></li></ul><h2 id="表单数据收集" tabindex="-1"><a class="header-anchor" href="#表单数据收集" aria-hidden="true">#</a> 表单数据收集</h2><ul><li><strong>若：&lt; input type=&quot;text&quot;&gt;，则 v-model 收集的是 value 值，用户输入的就是 value 值</strong></li><li><strong>若：&lt; input type=&quot;radio&quot;/&gt;，则 v-model 收集的是 value 值，且要给标签配置 value 值</strong></li><li><strong>若：&lt; input type=&quot;checkbox&quot;/&gt;</strong><ul><li><strong>没有配置</strong> input 的 <strong>value</strong> 属性，那么收集的就是 checked（勾选 or 未勾选，是布尔值）</li><li><strong>配置</strong> input 的 <strong>value</strong> 属性 <ul><li>v-model 的初始值是非数组，那么收集的就是 checked（勾选 or 未勾选，是布尔值）</li><li>v-model 的初始值是数组，那么收集的的就是 value 组成的数组</li></ul></li></ul></li><li><strong>v-model指令的修饰符</strong><ul><li><strong>lazy</strong>：失去焦点再收集数据</li><li><strong>number</strong>：输入字符串转为有效的数字</li><li><strong>trim</strong>：输入首尾空格过滤</li></ul></li></ul><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h2>',50),I=n("li",null,[n("p",null,[n("strong",null,"定义"),s("：对要显示的数据进行特定格式化后再显示(适用于处理一些简单的逻辑)")])],-1),E=n("p",null,[n("strong",null,"使用")],-1),P=n("li",null,[n("strong",null,"注册过滤器"),s("：Vue.filter(name,callback) 或 new Vue{filters:{}}")],-1),U=n("strong",null,"使用过滤器",-1),W=n("li",null,[n("p",null,[n("strong",null,"注意事项")]),n("ol",null,[n("li",null,"过滤器也可以接受额外参数、多个过滤器之间也可以串联"),n("li",null,"并没有改变原本的数据，而是产生一个对应的新的数据")])],-1),G=a(`<h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2><h3 id="局部指令" tabindex="-1"><a class="header-anchor" href="#局部指令" aria-hidden="true">#</a> 局部指令</h3><ul><li>在new Vue实例中配置directives对象</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token comment">// 对象式</span>
	<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>指令名：配置对象<span class="token punctuation">}</span>
	<span class="token comment">// 函数式</span>
	<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>指令名：回调函数<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局指令" tabindex="-1"><a class="header-anchor" href="#全局指令" aria-hidden="true">#</a> 全局指令</h3><ul><li>Vue.directive(指令名，配置对象)</li><li>Vue.directive(指令名，回调函数)</li></ul><h3 id="配置对象中常用的三个回调" tabindex="-1"><a class="header-anchor" href="#配置对象中常用的三个回调" aria-hidden="true">#</a> 配置对象中常用的三个回调</h3><ul><li>bind(element,binding)：指令与元素成功绑定时调用</li><li>inserted(element,binding)：指令所在元素被插入页面时调用</li><li>update(element,binding)：指令所在模板结构被重新解析时调用</li></ul><h3 id="自定义指令注意事项" tabindex="-1"><a class="header-anchor" href="#自定义指令注意事项" aria-hidden="true">#</a> 自定义指令注意事项</h3><ul><li>指令定义时不加 “v-”，但使用时要加 “v-”</li><li>指令名如果是多个单词，要使用 kebab-case 命名方式，不要用 camelCase 命名</li></ul><h2 id="vue实例生命周期" tabindex="-1"><a class="header-anchor" href="#vue实例生命周期" aria-hidden="true">#</a> Vue实例生命周期</h2><h3 id="生命周期定义" tabindex="-1"><a class="header-anchor" href="#生命周期定义" aria-hidden="true">#</a> 生命周期定义</h3><ul><li><strong>Vue实例生命周期</strong>又叫<strong>生命周期回调函数</strong>、<strong>生命周期函数</strong>、<strong>生命周期钩子</strong></li><li>它是Vue在关键时刻帮我们调用的一些特殊名称的函数</li><li>生命周期函数的，名字不可更改，但是函数的具体内容是由程序员根据自己的需要编写的</li><li>生命周期函数中的<strong>this指向</strong>是<strong>vm</strong>或<strong>组件实例对象</strong></li></ul><h3 id="生命周期原理" tabindex="-1"><a class="header-anchor" href="#生命周期原理" aria-hidden="true">#</a> 生命周期原理</h3><ul><li><strong>原理图</strong><img src="`+h+'" alt="生命周期图示"></li><li>常用生命周期钩子 <ol><li><strong>mounted</strong>：发送 ajax 请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】</li><li><strong>beforeDestroy</strong>：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】</li></ol></li><li>Vue实例的销毁 <ol><li>销毁后借助 Vue 开发者工具看不到任何信息</li><li>销毁后自定义事件会失效，但原生 DOM 事件依然有效</li><li>一般不会在 beforeDestroy 操作数据，因为即便操作数据，也不会再触发更新流程了</li></ol></li></ul><h2 id="vue组件化编程" tabindex="-1"><a class="header-anchor" href="#vue组件化编程" aria-hidden="true">#</a> Vue组件化编程</h2><h3 id="组件化的理解" tabindex="-1"><a class="header-anchor" href="#组件化的理解" aria-hidden="true">#</a> 组件化的理解</h3><ul><li><p><strong>模块</strong></p><ul><li><strong>理解</strong>：向外提供特定功能的js程序，一般就是一个js文件</li><li><strong>为什么使用模块</strong>？：js文件太多导致结构复杂</li><li><strong>模块作用</strong>：复用js，简化js的编写，提高js运行效率</li></ul></li><li><p><strong>组件</strong></p><ul><li><strong>理解</strong>：用来实现局部(特定)功能效果的代码集合(html/css/js/image…..)</li><li>**为什么使用组件？**一个界面的功能很复杂，根据各自的功能拆分为不同的组件，提高代码的复用，简化结构</li><li><strong>组件作用</strong>：复用编码, 简化项目编码, 提高运行效率</li></ul></li><li><p><strong>模块化</strong></p><ul><li>当应用中的 js 都以模块来编写的, 那这个应用就是一个模块化的应用。（就是把一个js文件拆成多个）</li></ul></li><li><p><strong>组件化</strong></p><ul><li>当应用中的功能都是多组件的方式来编写的, 那这个应用就是一个组件化的应用</li></ul></li></ul><h3 id="非单文件组件" tabindex="-1"><a class="header-anchor" href="#非单文件组件" aria-hidden="true">#</a> 非单文件组件</h3><ul><li><p><strong>非单文件组件</strong></p><ul><li>一个文件里有多个组件</li></ul></li><li><p><strong>Vue中使用组件的三大步骤</strong></p><ol><li>定义组件(创建组件)</li><li>注册组件</li><li>使用组件(通过标签的形式使用)</li></ol></li><li><p><strong>组件的定义</strong></p><ul><li><strong>Vue.extend(options)来进行创建</strong><ul><li>其中options和创建vm实例时的new Vue(options)的options几乎一样，但也有点区别： <ol><li><strong>el不用写</strong>，因为最终所有的组件都由一个vm的管理，由vm中的el决定组件服务于哪个容器</li><li><strong>data必须写成函数</strong>，因为对象的形式书写data时，组件在不同的地方引用时获得的都是同一个对象，会导致组件之间的数据产生关联。</li><li><strong>template可以配置组件结构</strong></li></ol></li></ul></li></ul></li><li><p><strong>组件的注册</strong></p><ul><li>局部注册 <ul><li>通过new Vue的时候传入components属性</li></ul></li><li>全局注册 <ul><li>通过Vue.components(&#39;组件名&#39;, 组件)</li></ul></li></ul></li><li><p><strong>组件使用的注意事项</strong></p><ul><li><p>组件名的注意事项</p><ul><li>一个单词组成时 <ol><li>写法一：首字母小写</li><li>写法二：首字母大写</li></ol></li><li>多个单词组成时 <ol><li>写法一：kebab-case命名(短横线命名)</li><li>写法二：CamelCase命名(驼峰命名)</li></ol></li></ul></li><li><p>组件标签注意事项</p><ul><li>写法一：双标签</li><li>写法二：单标签</li><li>注意：没使用脚手架时，单标签会导致后续组件不能正常渲染</li></ul></li><li><p>组件创建简写</p><ul><li>const school = Vue.extend(options)可以简写为：const school = options</li></ul></li></ul></li></ul><h3 id="vuecomponent" tabindex="-1"><a class="header-anchor" href="#vuecomponent" aria-hidden="true">#</a> VueComponent</h3>',21),J=n("li",null,[n("p",null,[s("school组件本质是一个名为"),n("strong",null,"VueComponent的构造函数"),s("，且不是程序员定义的，是Vue.extend生成的")])],-1),B=a("<li><p><strong>特别注意</strong>：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！</p></li><li><p>关于this指向</p><ul><li>组件配置中 <ul><li>data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】</li></ul></li><li>new Vue(options)配置中 <ul><li>data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】</li></ul></li></ul></li><li><p>VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）。Vue的实例对象简称vm</p></li>",3),H=a('<h3 id="vue和vuecomponent的关系" tabindex="-1"><a class="header-anchor" href="#vue和vuecomponent的关系" aria-hidden="true">#</a> Vue和VueComponent的关系</h3><ul><li><strong>一个重要的内置关系</strong>：VueComponent.prototype.<strong>proto</strong> === Vue.prototype</li><li><strong>为什么要有这个关系</strong>：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法</li></ul><p><img src="'+y+`" alt="Vue和VueComponent的原型关系图"></p><ul><li><strong>在上图中，VueComponent原型对象的隐式原型属性(<strong>proto</strong>)本应该直接指向Object的原型对象，但是为了组件实例对象(vc)可以访问到Vue原型对象上的属性和方法，Vue在内部将vueComponent原型对象的隐式原型属性指向了Vue的原型对象</strong></li></ul><h3 id="单文件组件" tabindex="-1"><a class="header-anchor" href="#单文件组件" aria-hidden="true">#</a> 单文件组件</h3><ul><li><strong>单文件组件</strong><ul><li>一个文件里只有一个组件</li><li>文件后缀为.vue</li></ul></li></ul><h2 id="vue脚手架" tabindex="-1"><a class="header-anchor" href="#vue脚手架" aria-hidden="true">#</a> Vue脚手架</h2><h3 id="脚手架文件结构" tabindex="-1"><a class="header-anchor" href="#脚手架文件结构" aria-hidden="true">#</a> 脚手架文件结构</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
├── node_modules
├── <span class="token keyword">public</span>
│ ├── favicon<span class="token punctuation">.</span>ico<span class="token operator">:</span> 页签图标
│ └── index<span class="token punctuation">.</span>html<span class="token operator">:</span> 主页面
├── src
│ ├── assets<span class="token operator">:</span> 存放静态资源
│ │ └── logo<span class="token punctuation">.</span>png
│ │── component<span class="token operator">:</span> 存放组件
│ │ └── HelloWorld<span class="token punctuation">.</span>vue
│ │── App<span class="token punctuation">.</span>vue<span class="token operator">:</span> 汇总所有组件
│ │── main<span class="token punctuation">.</span>js<span class="token operator">:</span> 入口文件
├── <span class="token punctuation">.</span>gitignore<span class="token operator">:</span> git 版本管制忽略的配置
├── babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js<span class="token operator">:</span> babel 的配置文件
├── <span class="token keyword">package</span><span class="token punctuation">.</span>json<span class="token operator">:</span> 应用包配置文件
├── <span class="token constant">README</span><span class="token punctuation">.</span>md<span class="token operator">:</span> 应用描述文件
├── <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json：包版本控制文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改默认配置" tabindex="-1"><a class="header-anchor" href="#修改默认配置" aria-hidden="true">#</a> 修改默认配置</h3><pre><code>- Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpack 配置， 请执行：
    **vue inspect &gt; output.js**
- 修改默认配置可参考官方文档在package.json同级目录下创建vue.config.json配置文件在里面配置
</code></pre><h3 id="render函数" tabindex="-1"><a class="header-anchor" href="#render函数" aria-hidden="true">#</a> render函数</h3><ul><li>关于不同版本的Vue <ol><li><p>vue.js与vue.runtime.xxx.js的区别</p><ul><li>vue.js是完整版的Vue，包含：核心功能+模板解析器</li><li>vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器</li></ul></li><li><p>因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容</p></li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref属性" tabindex="-1"><a class="header-anchor" href="#ref属性" aria-hidden="true">#</a> ref属性</h2><ul><li><strong>被用来给元素或子组件注册引用信息</strong>（id的替代者）</li><li><strong>应用在html标签上获取的是真实DOM元素</strong>，<strong>应用</strong>在组件标签上是<strong>组件实例对象</strong>（vc）</li><li><strong>使用方式</strong><ul><li>打标识：<code>&lt;h1 ref=&quot;xxx&quot;&gt;.....&lt;/h1&gt;</code> 或 <code>&lt;School ref=&quot;xxx&quot;&gt;&lt;/School&gt;</code></li><li>获取：<code>this.$refs.xxx</code></li></ul></li></ul><h2 id="props属性" tabindex="-1"><a class="header-anchor" href="#props属性" aria-hidden="true">#</a> props属性</h2><ul><li><strong>功能</strong>：让组件接收外部传过来的数据(外部数据优先级大于内部)</li><li><strong>传递数据格式</strong>：<code>&lt;Demo name=&quot;xxx&quot;/&gt;</code></li><li><strong>接收数据</strong>： <ol><li>第一种方式（只接收）：<code>props:[&#39;name&#39;] </code></li><li>第二种方式（限制类型）：<code>props:{name:String}</code></li><li>第三种方式（限制类型、限制必要性、指定默认值）</li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token comment">// 第三种方式（限制类型、限制必要性、指定默认值）</span>
	<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span> <span class="token comment">//类型</span>
            <span class="token literal-property property">required</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//必要性</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;老王&#39;</span> <span class="token comment">//默认值</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>注意事项</strong>：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据</li></ul><h2 id="mixin-混合、混入" tabindex="-1"><a class="header-anchor" href="#mixin-混合、混入" aria-hidden="true">#</a> mixin(混合、混入)</h2><ul><li><p>功能：可以把多个</p></li><li><p>组件共用的配置提取成一个混入对象</p><ul><li>如果内部数据和外部数据冲突 <ol><li>声明周期钩子内部和外部的都要，且外部的先执行</li><li>其它的如果内部有则混入的失效，没有则整合</li></ol></li></ul></li><li><p>混合的使用</p><ul><li>引入mixin.js</li><li>全局混入 <code>Vue.mixin(xxx)</code></li><li>局部混入<code>mixins[xxx,xxx]</code></li></ul></li></ul><h2 id="插件-plugins" tabindex="-1"><a class="header-anchor" href="#插件-plugins" aria-hidden="true">#</a> 插件(plugins)</h2><ul><li><strong>功能</strong>：用于增强Vue</li><li><strong>本质</strong>：就是一个包含<strong>install</strong>方法的一个对象，install方法的第一个参数是Vue，第二个及以后的参数是插件使用者传递的数据</li><li>定义插件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>对象<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 1. 添加全局过滤器</span>
	Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
	
	<span class="token comment">// 2. 添加全局指令</span>
	Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
	
	<span class="token comment">// 3. 配置全局混入</span>
	Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
	
	<span class="token comment">// 4. 给Vue原型上添加实例方法</span>
	<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	
	<span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用插件：<code>Vue.use(插件名)</code></li></ul><h3 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h3><p>Vue.js 的插件应该暴露一个 <code>install</code> 方法。这个方法的第一个参数是 <code>Vue</code> 构造器，第二个参数是一个可选的选项对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>MyPlugin<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 添加全局方法或 property</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">myGlobalMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 逻辑...</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 2. 添加全局资源</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">bind</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 逻辑...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 3. 注入组件选项</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 逻辑...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 4. 添加实例方法</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">methodOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 逻辑...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scoped样式" tabindex="-1"><a class="header-anchor" href="#scoped样式" aria-hidden="true">#</a> scoped样式</h2><ul><li>作用：让样式在局部生效，防止命名冲突导致的样式覆盖，减少污染样式命名空间 <code> &lt;style scoped&gt;</code></li></ul><h2 id="总结todolist案例" tabindex="-1"><a class="header-anchor" href="#总结todolist案例" aria-hidden="true">#</a> 总结TodoList案例</h2><ol><li><p>组件化编码流程：</p><p>​ (1).<strong>拆分静态组件</strong>：组件要按照功能点拆分，命名不要与html元素冲突。</p><p>​ (2).<strong>实现动态组件</strong>：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：</p><p>​ 1).一个组件在用：放在组件自身即可。</p><p>​ 2). 一些组件在用：放在他们共同的父组件上（<span style="color:red;">状态提升</span>）。</p><p>​ (3).<strong>实现交互</strong>：从绑定事件开始。</p></li><li><p><strong>props适用于</strong>：</p><p>​ (1).父组件 ==&gt; 子组件 通信</p><p>​ (2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数）</p></li><li><p><strong>使用v-model时要切记</strong>：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！</p></li><li><p>props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。</p></li></ol><h2 id="浏览器本地存储-webstorage" tabindex="-1"><a class="header-anchor" href="#浏览器本地存储-webstorage" aria-hidden="true">#</a> 浏览器本地存储(WebStorage)</h2><ul><li><p>存储内容大小一般支持5MB左右（不同浏览器可能还不一样）</p></li><li><p>浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制</p></li><li><p>API:</p><ol><li><code>xxxxxStorage.setItem(&#39;key&#39;, &#39;value&#39;);</code><ul><li>该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值</li></ul></li><li><code>xxxxxStorage.getItem(&#39;person&#39;);</code><ul><li>该方法接受一个键名作为参数，返回键名对应的值</li></ul></li><li><code>xxxxxStorage.removeItem(&#39;key&#39;);</code><ul><li>接收一个键名作为参数，并把该键名从存储中删除</li></ul></li><li><code> xxxxxStorage.clear()</code><ul><li>清空存储中的所有数据</li></ul></li></ol></li><li><p><strong>注意事项</strong></p><ul><li>SessionStorage存储的内容会随着浏览器窗口关闭而消失</li><li>LocalStorage存储的内容，需要手动清除才会消失</li><li><code>xxxxxStorage.getItem(xxx)</code>如果xxx对应的value获取不到，那么getItem的返回值是null</li><li><code>JSON.parse(null)</code>的结果依然是null</li></ul></li></ul><h2 id="组件自定义事件" tabindex="-1"><a class="header-anchor" href="#组件自定义事件" aria-hidden="true">#</a> 组件自定义事件</h2><h3 id="组件通信方式" tabindex="-1"><a class="header-anchor" href="#组件通信方式" aria-hidden="true">#</a> 组件通信方式</h3><ol><li>组件自定义事件是一种组件间通信方式，适用于：<strong>子组件 =&gt; 父组 件</strong> 传递数据</li><li>使用场景：子组件B想要给父组件A传递数据，则需要在组件A中给组件B绑定自定义事件(事件的回调在父组件中),然后在子组件中通过$emit(&#39;事件名&#39;)触发父组件中的回调</li><li>绑定方式： <ol><li>方式一 <ul><li>在父组件中： <code>通过v-on/@绑定事件 &lt;Demo @test=&quot;getMsg&quot;/&gt;</code></li><li>在子组件中：<code>this.$emit(&#39;test&#39;) 触发父组件中的getMsg回调</code></li></ul></li><li>方式二 <ul><li>在子组件中不变</li><li>在父组件中：</li></ul></li></ol></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>Demo ref<span class="token operator">=</span><span class="token string">&quot;demo&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token function">mounted</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// this.$refs.demo拿到Demo组件实例对象，再绑定事件</span>
		<span class="token comment">// 参数一 绑定的事件名，参数二，该事件触发时执行的回调</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>demo<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getMsg<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>自定义事件和内置事件一样具有相应的<strong>事件修饰符</strong></li><li><strong>触发自定义事件</strong><code>this.$emit(&#39;事件名&#39;, 【接收到的数据】) </code>【可选】</li><li><strong>解绑自定义事件</strong><code>this.$off(&#39;事件名&#39;)</code><ul><li>组件实例对象(vc)被销毁后该组件实例对象的所有自定义事件都失效了，但是原生DOM事件没有失效</li></ul></li><li>自定义组件上也可以绑定原生DOM事件，需要使用native修饰符</li><li><strong>注意</strong>：通过this.$refs.xxx.$on(&#39;atguigu&#39;,回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！</li></ol><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3><ul><li>绑定方式二更具有灵活性，可以异步执行事件绑定</li></ul><h2 id="全局事件总线-globaleventbus" tabindex="-1"><a class="header-anchor" href="#全局事件总线-globaleventbus" aria-hidden="true">#</a> 全局事件总线(GlobalEventBus)</h2><ul><li>一种组件间通信的方式，适用于任意组件间的通信</li><li>安装全局事件总线</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token operator">...</span><span class="token operator">...</span>
	<span class="token function">beforeCreate</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// 安装全局事件总线，$bus就是当前应用的vm</span>
		<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">this</span>
	<span class="token punctuation">}</span>，
	<span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用全局事件总线 <ol><li>接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在自身。</li></ol></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">mounted</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;自定义事件名&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>，
<span class="token comment">// 在组件实例销毁之前解绑自定义全局事件</span>
<span class="token function">beforeDestory</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;自定义事件名&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>2. 提供数据：\`\`\`this.$bus.$emit(&#39;自定义事件名&#39;,数据)\`\`\`
</code></pre><ul><li>最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件</li></ul><h2 id="消息订阅与发布-pubsub" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布-pubsub" aria-hidden="true">#</a> 消息订阅与发布(pubsub)</h2><ol><li>一种组件间通信的方式，适用于任意组件间通信</li><li>使用步骤 <ol><li>安装pubsub：<code>npm i pubsub-js</code></li><li>引入： <code>import pubsub from &#39;pubsub-js&#39; </code></li><li>接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身</li></ol></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//订阅消息</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pid <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeDestory</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// 组件实例销毁前取消订阅</span>
	pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pid<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4. 提供数据：\`\`\`pubsub.publish(&#39;xxx&#39;,数据)\`\`\`
5. 最好在beforeDestroy钩子中，用\`\`\`PubSub.unsubscribe(this.pid)\`\`\`去取消订阅
</code></pre><h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h2><ul><li><strong>语法</strong>：<code>this.$nextTick(回调)</code></li><li><strong>作用</strong>：在下一次DOM更新结束后执行其指定的回调</li><li><strong>什么时候使用</strong>：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行</li><li><strong>出现原因</strong>：当你在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个“tick”才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新</li></ul><h2 id="vue封装的过渡与动画" tabindex="-1"><a class="header-anchor" href="#vue封装的过渡与动画" aria-hidden="true">#</a> Vue封装的过渡与动画</h2><ol><li>作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名</li><li>写法 <ol><li>准备好样式 <ol><li>元素进入的样式 <ol><li>v-enter：进入的起点</li><li>v-enter-active：进入过程中</li><li>v-enter-to：进入的终点</li></ol></li><li>元素离开的样式 <ol><li>v-leave：离开的起点</li><li>v-leave-active：离开过程中</li><li>v-leave-to：离开的终点</li></ol></li></ol></li><li>使用<code>&lt;transition&gt;</code>包裹要过度的元素，并配置name属性：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>transition name<span class="token operator">=</span><span class="token string">&quot;hello&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">&quot;isShow&quot;</span><span class="token operator">&gt;</span>你好啊！<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>备注：若有多个元素需要过度，则需要使用：<code>&lt;transition-group&gt;</code>，且每个元素都要指定key值</li></ol></li></ol><h2 id="vue中的ajax" tabindex="-1"><a class="header-anchor" href="#vue中的ajax" aria-hidden="true">#</a> Vue中的ajax</h2><h2 id="vue脚手架配置代理" tabindex="-1"><a class="header-anchor" href="#vue脚手架配置代理" aria-hidden="true">#</a> vue脚手架配置代理</h2><ul><li><strong>方法一</strong></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token comment">// 在vue.config.js中添加如下配置</span>
	<span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">proxy</span><span class="token operator">:</span><span class="token string">&quot;http://localhost:8080&quot;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>说明:</p><ol><li>优点：配置简单，请求资源时直接发给前端（8080）即可</li><li>缺点：不能配置多个代理，不能灵活的控制请求是否走代理（如果public文件夹里面有的话，优先提供public里面的数据，这样就走不了代理）</li><li>工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）</li></ol></li><li><p><strong>方法二</strong></p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 匹配所有以 &#39;/api1&#39;开头的请求路径</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000&#39;</span><span class="token punctuation">,</span><span class="token comment">// 代理目标的基础路径</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//用于支持websocket</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;^/api1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span><span class="token comment">//将路径带api1的都变成&#39;&#39;，再加后面字符串</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/api2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">// 匹配所有以 &#39;/api2&#39;开头的请求路径</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5001&#39;</span><span class="token punctuation">,</span><span class="token comment">// 代理目标的基础路径</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;^/api2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>说明 <ol><li>优点：可以配置多个代理，且可以灵活的控制请求是否走代理</li><li>缺点：配置略微繁琐，请求资源时必须加前缀</li></ol></li></ul><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><ol><li><strong>作用</strong>：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ===&gt; 子组件</li><li><strong>分类</strong>：默认插槽、具名插槽、作用域插槽</li><li><strong>使用方式</strong>: <ol><li><strong>默认插槽</strong></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ol>`,66),L=n("div",null,"html结构1",-1),T=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code")]),n("div",{class:"line-numbers","aria-hidden":"true"})],-1),z=n("pre",null,[n("code",null,"2. **具名插槽**\n```js\n")],-1),K=n("template",{slot:"center"},[n("div",null,"html结构1")],-1),Q=n("div",null,"html结构2",-1),X=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	3. **作用域插槽**
		1. **理解**：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
		2. 具体实现
	
	\`\`\`js
	父组件中：
	        &lt;Category&gt;
	            &lt;template scope=&quot;scopeData&quot;&gt;//scopeData是一个对象
	                &lt;!-- 生成的是ul列表 --&gt;
	                &lt;ul&gt;
	                    &lt;li v-for=&quot;g in scopeData.games&quot; :key=&quot;g&quot;&gt;{{g}}&lt;/li&gt;
	                &lt;/ul&gt;
	            &lt;/template&gt;
	        &lt;/Category&gt;
	​
	        &lt;Category&gt;
	            &lt;template slot-scope=&quot;scopeData&quot;&gt;
	                &lt;!-- 生成的是h4标题 --&gt;
	                &lt;h4 v-for=&quot;g in scopeData.games&quot; :key=&quot;g&quot;&gt;{{g}}&lt;/h4&gt;
	            &lt;/template&gt;
	        &lt;/Category&gt;
	子组件中：
	        &lt;template&gt;
	            &lt;div&gt;
	                &lt;slot :games=&quot;games&quot;&gt;&lt;/slot&gt;
	            &lt;/div&gt;
	        &lt;/template&gt;
	        
	        &lt;script&gt;
	            export default {
	                name:&#39;Category&#39;,
	                props:[&#39;title&#39;],
	                //数据在子组件自身
	                data() {
	                    return {
	                        games:[&#39;红色警戒&#39;,&#39;穿越火线&#39;,&#39;劲舞团&#39;,&#39;超级玛丽&#39;]
	                    }
	                },
	            }
	        &lt;/script&gt;
	\`\`\`

## Vuex
### Vuex基本属性
1. **概念**
	在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信
2. **什么时候使用Vuex呢**
	当有多个组件需要共享数据时，就可以使用Vuex集中管理状态
3. **搭建Vuex环境**
	1. 注意事项：
		- Vue2匹配Vuex3版本，Vue3匹配Vuex4
	2. 创建文件：src/store/index.js
	
	\`\`\`js
	//引入Vue核心库
	import Vue from &#39;vue&#39;
	
	//引入Vuex
	import Vuex from &#39;vuex&#39;
	
	//应用Vuex插件
	Vue.use(Vuex)
	​
	//创建并暴露store
	export default new Vuex.Store({
	    //准备actions对象——响应组件中用户的动作
		 actions : {}
		//准备mutations对象——修改state中的数据
		 mutations : {}
		//准备state对象——保存具体的数据
		 state : {}
	})
	\`\`\`
	
	3. 在main.js中创建vm时传入store配置项
	
	\`\`\`js
		//引入store
		import store from &#39;./store&#39;
		......
		​
		//创建vm
		new Vue({
		    render: h =&gt; h(App),
		    store
		}).$mount(&#39;#app&#39;)
	\`\`\`

###  Vuex基本使用
1. $store在所有组件实例对象身上均可访问
2. $store中核心配置项主要由Actions、Mutations、State组成，其中Actions主要用于处理逻辑等，Mutations可以直接操作State，只有经过Mutations操作State中的数据，开发者工具才监视得到数据变化
3. 组件操作数据时，如果没有网络请求或其它业务逻辑，可以越过Actions(即不通过dispatch向Actions请求)，而直接通过commit向Mutations发起请求。

###  Vuex原理图
![](/images/vue2/vuex.png)

###  getters的使用
1. **概念**：当state中的数据需要经过加工后再使用时，可以使用getters加工。（类似vue中的computed）
2. 使用时在Store实例中配置getters属性
3. 读取数据时： \`\`\`$store.getters.属性名 \`\`\`
4. 注意：Vuex里的getters是没有划分仓库模块的，因此mapGetters的写法是数组

### 四个map方法的使用
#### mapState
1. **mapState方法：** 用于帮助我们映射state中的数据为计算属性
2. **注意**：**mapState映射方法**内部进行对象写法时，冒号右侧可以写为一个函数，当使用这个计算属性时，右侧的函数就回执行一次，执行时注入的这个state是**总仓库的state**！！！该函数的返回值就是计算属性的值。
	
	\`\`\`js
	computed: {
	    //借助mapState生成计算属性：sum、school、subject（对象写法）
	     ...mapState({sum:&#39;sum&#39;,school:&#39;school&#39;,subject:&#39;subject&#39;}),
		
	   // 对象写法时右侧可以写为一个函数,当使用这个计算属性时，右侧函数会立即执行一次，执行时会注入state --》仓库中的数据,右侧函数的返回值就是该计算属性的值
	    ...mapState({
		sum:  state =&gt; state.sum
		})
	         
	    //借助mapState生成计算属性：sum、school、subject（数组写法）
	    ...mapState([&#39;sum&#39;,&#39;school&#39;,&#39;subject&#39;]),
	},
	\`\`\`

#### mapGetters
1. **mapGetters方法：** 用于帮助我们映射getters中的数据为计算属性
2. 注意：**mapGetters映射方法**内部的对象写法只能为gitter属性取一个在当前组件内的别名

	\`\`\`js
		computed: {
	    //借助mapGetters生成计算属性：bigSum（对象写法）
	    ...mapGetters({bigSum:&#39;bigSum&#39;}),
	​
	    //借助mapGetters生成计算属性：bigSum（数组写法）
	    ...mapGetters([&#39;bigSum&#39;])
		},
	\`\`\`

####  mapActions方法：
- 用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数
	
	\`\`\`js
	methods:{
	//靠mapActions生成：incrementOdd、incrementWait（对象形式）
	...mapActions({incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;})
	​
	//靠mapActions生成：incrementOdd、incrementWait（数组形式）
	...mapActions([&#39;jiaOdd&#39;,&#39;jiaWait&#39;])
	}
	\`\`\`

#### mapMutations方法：
- 用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数

	\`\`\`js
		methods:{
	    //靠mapActions生成：increment、decrement（对象形式）
	    ...mapMutations({increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;}),
	    
	    //靠mapMutations生成：JIA、JIAN（对象形式）
	    ...mapMutations([&#39;JIA&#39;,&#39;JIAN&#39;]),
		}
	\`\`\`
	

####总结
- mapActions与mapMutations使用时，若有传递参数的需要，最好在模板中绑定事件时就传递好参数，否则参数是事件对象

### Vuex模块化+命名空间
1. **目的**：让代码更好维护，让多种数据分类更加明确
2. 修改store.js

	\`\`\`js
		const countAbout = {
		  namespaced:true,//开启命名空间
		  state:{x:1},
		  mutations: { ... },
		  actions: { ... },
		  getters: {
	    bigSum(state){
	       return state.sum * 10
	    }
		​
		const personAbout = {
		  namespaced:true,//开启命名空间
		  state:{ ... },
		  mutations: { ... },
		  actions: { ... }
		}
	​
		const store = new Vuex.Store({
		modules: {
	    countAbout,
	    personAbout
		})
	\`\`\`

3. 开启命名空间后，组件中读取state数据:

	\`\`\`js
	//方式一：自己直接读取
	this.$store.state.personAbout.list
	//方式二：借助mapState读取：
	...mapState(&#39;countAbout&#39;,[&#39;sum&#39;,&#39;school&#39;,&#39;subject&#39;]),
	\`\`\`

4. 开启命名空间后，组件中读取getters数据：

	\`\`\`js
	//方式一：自己直接读取
	this.$store.getters[&#39;personAbout/firstPersonName&#39;]
	//方式二：借助mapGetters读取：
	...mapGetters(&#39;countAbout&#39;,[&#39;bigSum&#39;])
	\`\`\`

5. 开启命名空间后，组件中调用dispatch

	\`\`\`js
	//方式一：自己直接dispatch
	this.$store.dispatch(&#39;personAbout/addPersonWang&#39;,person)
	//方式二：借助mapActions：
	...mapActions(&#39;countAbout&#39;,{incrementOdd:&#39;jiaOdd&#39;,incrementWait:&#39;jiaWait&#39;})
	\`\`\`

6. 开启命名空间后，组件中调用commit
	\`\`\`js
	//方式一：自己直接commit
	this.$store.commit(&#39;personAbout/ADD_PERSON&#39;,person)
	//方式二：借助mapMutations：
	...mapMutations(&#39;countAbout&#39;,{increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;}),
	
	\`\`\`


## 路由(Route)
### 基本理解
- 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理
- 前端路由：key是路径，value是组件

### 基本使用
1. 安装vue-router，命令：npm i vue-router@3（Vue2匹配vue-router3）
2. 应用插件：Vue.use(VueRouter)
3. 编写router配置项:
\`\`\`js
//引入VueRouter
import VueRouter from &#39;vue-router&#39;
//引入Luyou 组件
import About from &#39;../components/About&#39;
import Home from &#39;../components/Home&#39;
​
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    routes:[
        {
            path:&#39;/about&#39;,
            component:About
        },
        {
            path:&#39;/home&#39;,
            component:Home
        }
    ]
})
​
//暴露router
export default router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>实现切换（active-class可配置高亮样式）</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;active&quot;</span> to<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>About<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>指定展示位置</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ol><li>路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹。</li><li>通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。</li><li>每个组件都有自己的$route属性，里面存储着自己的路由信息。</li><li>整个应用只有一个router，可以通过组件的$router属性获取到。</li></ol><h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3><ol><li>配置路由规则，使用children配置项：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>About<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span> <span class="token comment">//通过children配置子级路由</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span> <span class="token comment">//此处一定不要写：/news</span>
                <span class="token literal-property property">component</span><span class="token operator">:</span>News
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span><span class="token comment">//此处一定不要写：/message</span>
                <span class="token literal-property property">component</span><span class="token operator">:</span>Message
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>跳转（要写完整路径）：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/home/news&quot;</span><span class="token operator">&gt;</span>News<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="路由的query参数" tabindex="-1"><a class="header-anchor" href="#路由的query参数" aria-hidden="true">#</a> 路由的query参数</h3><ol><li><p>传递参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转并携带query参数，to的字符串写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;/home/message/detail?id=666&amp;title=你好&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>用模板字符串解析<span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;\`/home/Message/detail?id=\${m.id}&amp;title=\${m.title}\`&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>m<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span><span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span><span class="token operator">&amp;</span>nbsp<span class="token punctuation">;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>    
​
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转并携带query参数，to的对象写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link 
    <span class="token operator">:</span>to<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home/message/detail&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
           <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;你好&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>&quot;
<span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接收参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id
$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="路由的params参数" tabindex="-1"><a class="header-anchor" href="#路由的params参数" aria-hidden="true">#</a> 路由的params参数</h3><ol><li>配置路由，声明接收params参数(占位符)，<strong>可以在配置路由时在占位后加一个?来表示该params参数可传可不传</strong>。</li><li>但是配置可传可不传后，如果params参数传递进来的时空串也会出现路径丢失的问题，此时可以在空串后添加一个或运算 <code>&#39; &#39; || undefined</code>就可以解决路径丢失。<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>News
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>Message<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span> <span class="token comment">//使用占位符声明接收params参数</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>Detail
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>传递参数<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转并携带params参数，to的字符串写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;/home/message/detail/666/你好&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;\`/home/Message/detail/\${m.id}/\${m.title}\`&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> m<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>             
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 跳转并携带params参数，to的对象写法 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link 
<span class="token operator">:</span>to<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
       <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;你好&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
3. 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

4. 接收参数：

	\`\`\`js
	$route.params.id
	$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名路由" tabindex="-1"><a class="header-anchor" href="#命名路由" aria-hidden="true">#</a> 命名路由</h3><ol><li>作用：可以简化路由的跳转</li><li>使用实例：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> 给路由命名：

<span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/demo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>Demo<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span>Test<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span> <span class="token comment">//给路由命名</span>
                    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;welcome&#39;</span><span class="token punctuation">,</span>
                    <span class="token literal-property property">component</span><span class="token operator">:</span>Hello<span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token number">2.</span> 简化跳转：

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>简化前，需要写完整的路径 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/demo/test/welcome&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
​
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>简化后，直接通过名字跳转 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;{name:&#39;hello&#39;}&quot;</span><span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
​
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>简化写法配合传递参数 <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link 
    <span class="token operator">:</span>to<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span><span class="token punctuation">{</span>
           <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;你好&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>&quot;
<span class="token operator">&gt;</span>跳转<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="路由的props配置" tabindex="-1"><a class="header-anchor" href="#路由的props配置" aria-hidden="true">#</a> 路由的props配置</h3><ol><li>作用：让路由组件能更方便的接收到参数。</li><li>路由的props配置有三种写法：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token punctuation">{</span>
	    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
	    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
	    <span class="token literal-property property">component</span><span class="token operator">:</span>Detail<span class="token punctuation">,</span>
	​
	    <span class="token comment">//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件</span>
	    <span class="token comment">// props:{a:900}</span>
	​
	    <span class="token comment">//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件</span>
	    <span class="token comment">// props:true</span>
	    
	    <span class="token comment">//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件</span>
	    <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	        <span class="token keyword">return</span> <span class="token punctuation">{</span>
	            <span class="token literal-property property">id</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
	            <span class="token literal-property property">title</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
	        <span class="token punctuation">}</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router-link标签的replace属性" tabindex="-1"><a class="header-anchor" href="#router-link标签的replace属性" aria-hidden="true">#</a> router-link标签的replace属性</h3><ol><li>作用：控制路由跳转时操作浏览器历史记录的模式。</li><li>浏览器的历史记录有两种写入方式：分别为<code>push</code>和<code>replace</code>，<code>push</code>是追加历史记录，<code>replace</code>是替换当前记录。路由跳转时的默认模式为<code>push</code>。</li><li>开启replace模式：<code>&lt;router-link replace .......&gt;News&lt;/router-link&gt;</code>。</li></ol><h3 id="编程式路由导航" tabindex="-1"><a class="header-anchor" href="#编程式路由导航" aria-hidden="true">#</a> 编程式路由导航</h3><ol><li>作用：不借助<code>&lt;router-link&gt;</code>,通过拿到$router对象，借助该对象的方法实现路由跳转，让路由跳转更加灵活。</li><li>具体编码：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//$router的两个API</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span>xxx
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span>xxx<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span>xxx
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//前进</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//后退</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//可前进也可后退，里面的参数是正的时候就是前进的步数，负就是后退的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="缓存路由组件" tabindex="-1"><a class="header-anchor" href="#缓存路由组件" aria-hidden="true">#</a> 缓存路由组件</h3><ol><li>作用：让不展示的路由组件保持挂载，不被销毁。</li><li>具体编码：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//通过include指定被缓存的组件， News是组件名，不写include属性默认缓存keep-alive标签内所有组件</span>
<span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive  include<span class="token operator">=</span><span class="token string">&quot;News&quot;</span><span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>指定多个组件被缓存则动态绑定include，里面内容写成数组即可<code>:include=&quot;[&#39;组件名1&#39;,&#39;组件名2&#39;]&quot;</code>。</li></ol><h3 id="路由组件独有的两个生命周期钩子" tabindex="-1"><a class="header-anchor" href="#路由组件独有的两个生命周期钩子" aria-hidden="true">#</a> 路由组件独有的两个生命周期钩子</h3><ol><li>作用：用于捕获路由组件的激活状态。</li><li>具体名字： <ol><li><code>activated</code>路由组件被激活时触发。</li><li><code>deactivated</code>路由组件失活时触发。</li></ol></li></ol><h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3><ol><li>作用： 对路由进行权限控制</li><li>分类：全局守卫、独享守卫、组件内守卫</li></ol><h4 id="全局路由守卫" tabindex="-1"><a class="header-anchor" href="#全局路由守卫" aria-hidden="true">#</a> 全局路由守卫</h4><ol><li>全局前置路由守卫--初始化时执行、每次路由切换前执行<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;前置路由守卫&#39;</span><span class="token punctuation">,</span>to<span class="token punctuation">,</span> from<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>isAuth<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//判断是否需要鉴权</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;school&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;atguigu&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;学校名不对，无权限查看！&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>全局后置路由守卫--初始化时执行、每次路由切换后执行<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;后置路由守卫&#39;</span><span class="token punctuation">,</span> to<span class="token punctuation">,</span> from<span class="token punctuation">)</span>
  <span class="token comment">// 可在全局后置路由守卫中进行切换网页标题等操作</span>
document<span class="token punctuation">.</span>title <span class="token operator">=</span> “切换网页标题”
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="独享路由守卫" tabindex="-1"><a class="header-anchor" href="#独享路由守卫" aria-hidden="true">#</a> 独享路由守卫</h4><ol><li><p>作用：单独为某一个路由配置守卫</p></li><li><p><strong>注意</strong>：<code>beforeEnter</code> 守卫 <strong>只在进入路由时触发</strong>，不会在 <code>params</code>、<code>query</code> 或 <code>hash</code> 改变时触发。例如，从 <code>/users/2</code> 进入到 <code>/users/3</code> 或者从 <code>/users/2#info</code> 进入到 <code>/users/2#projects</code>。它们只有在 <strong>从一个不同的</strong> 路由导航时，才会被触发</p></li><li><p>使用：</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span>
  <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// reject the navigation</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组件内路由守卫" tabindex="-1"><a class="header-anchor" href="#组件内路由守卫" aria-hidden="true">#</a> 组件内路由守卫</h4><ol><li><p>进入守卫 <code>beforeRouteEnter</code> -- 通过路由规则，进入该组件时被调用</p></li><li><p>离开守卫 <code>beforeRouteLeave</code> -- 通过路由规则，离开组件时被调用</p></li><li><p><code>beforeRouteEnter</code> 守卫 <strong>不能</strong> 访问 <code>this</code>，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。</p></li></ol><p>不过，你可以通过传一个回调给 <code>next</code> 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。</p><ol start="4"><li>对于 <code>beforeRouteUpdate</code> 和 <code>beforeRouteLeave</code> 来说，<code>this</code> 已经可用了，所以<em>不支持</em> 传递回调，因为没有必要了。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> UserDetails <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在渲染该组件的对应路由被验证前调用</span>
  <span class="token comment">// 不能获取组件实例 \`this\` ！</span>
  <span class="token comment">// 因为当守卫执行时，组件实例还没被创建！</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
  <span class="token comment">// 举例来说，对于一个带有动态参数的路径 \`/users/:id\`，在 \`/users/1\` 和 \`/users/2\` 之间跳转的时候，</span>
  <span class="token comment">// 由于会渲染同样的 \`UserDetails\` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
  <span class="token comment">// 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 \`this\`</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在导航离开渲染该组件的对应路由时调用</span>
  <span class="token comment">// 与 \`beforeRouteUpdate\` 一样，它可以访问组件实例 \`this\`</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h4><ol><li><strong>只有全局路由守卫才有前置后置之分</strong>，通常在前置路由中进行<strong>权限校验</strong>，在后置路由中进行一些例如同步网页的标题与所进入路由组件的title一致之类的操作。</li><li>进行权限校验时通常在需要进行权限校验的<strong>路由内的meta属性的配置对象中，配置一个isAuth属性，通过该属性来判断该路由是否需要进行权限校验</strong>。</li><li>独享路由守卫顾名思义，可以单独给一个路由配置路由守卫。</li><li>组件内路由守卫需要注意的是<strong>只有经过路由规则才会触发路由守卫的回调</strong>，通过直接书写<strong>组件标签引入的组件不会触发路由守卫</strong>，但<strong>独享路由守卫和全局路由守卫能触发</strong>。</li><li><code>beforeRouteEnter</code> 守卫 <strong>不能</strong> 访问 <code>this</code></li></ol><h3 id="路由的两种工作模式" tabindex="-1"><a class="header-anchor" href="#路由的两种工作模式" aria-hidden="true">#</a> 路由的两种工作模式</h3><ol><li><p>工作模式：<strong>history</strong>模式和<strong>hash</strong>模式</p></li><li><p>对于一个 url 来说，什么是 hash 值？—— # 及其后面的内容就是 hash 值。</p></li><li><p>hash 值不会包含在 HTTP 请求中，即：hash 值不会带给服务器。</p></li><li><p>hash 模式：</p><ol><li><strong>地址中永远带着 # 号</strong>，不美观 。</li><li>若以后将地址通过第三方手机 app 分享，若 app 校验严格，则地址会被标记为不合法。</li><li>兼容性较好。</li></ol></li><li><p>history 模式：</p><ol><li>地址干净，美观 。</li><li>兼容性和 hash 模式相比略差。</li><li>应用部署上线时需要后端人员支持，<strong>解决刷新页面服务端 404 的问题</strong>。</li></ol></li></ol><h3 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h3><p>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后<strong>当路由被访问的时候才加载对应组件</strong>，这样就会更加高效。(因此后续路由都用<strong>路由懒加载</strong>)</p>`,50),F={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports",target:"_blank",rel:"noopener noreferrer"},Y=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将</span>
<span class="token comment">// import UserDetails from &#39;./views/UserDetails.vue&#39;</span>
<span class="token comment">// 替换成</span>
<span class="token keyword">const</span> <span class="token function-variable function">UserDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/UserDetails.vue&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>component</code> (和 <code>components</code>) 配置接收一个返回 Promise 组件的函数，Vue Router <strong>只会在第一次进入页面时才会获取这个函数</strong>，然后使用缓存数据。这意味着你也可以使用更复杂的函数，只要它们返回一个 Promise ：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">UserDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">/* 组件定义 */</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Z=n("strong",null,"都使用动态导入",-1),nn=n("strong",null,"不要",-1),sn={href:"https://v3.vuejs.org/guide/component-dynamic-async.html#async-components",target:"_blank",rel:"noopener noreferrer"},an={href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"},en={href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/",target:"_blank",rel:"noopener noreferrer"},tn=a(`<h2 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h2><h3 id="图片懒插件插件" tabindex="-1"><a class="header-anchor" href="#图片懒插件插件" aria-hidden="true">#</a> 图片懒插件插件</h3><p>库：vue-lazyload</p><h2 id="表单验证" tabindex="-1"><a class="header-anchor" href="#表单验证" aria-hidden="true">#</a> 表单验证</h2><h3 id="表单验证插件配置" tabindex="-1"><a class="header-anchor" href="#表单验证插件配置" aria-hidden="true">#</a> 表单验证插件配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// VeeValidate插件表单验证区域</span>

<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> VeeValidate <span class="token keyword">from</span> <span class="token string">&#39;vee-validate&#39;</span>

<span class="token comment">// 引入中文</span>

<span class="token keyword">import</span> zh_CN <span class="token keyword">from</span> <span class="token string">&#39;vee-validate/dist/locale/zh_CN&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VeeValidate<span class="token punctuation">)</span>


<span class="token comment">// 表单验证</span>
VeeValidate<span class="token punctuation">.</span>Validator<span class="token punctuation">.</span><span class="token function">localize</span><span class="token punctuation">(</span><span class="token string">&#39;zh_CN&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>

  <span class="token literal-property property">messages</span><span class="token operator">:</span><span class="token punctuation">{</span>

    <span class="token operator">...</span>zh_CN<span class="token punctuation">.</span>messages<span class="token punctuation">,</span>

    <span class="token function-variable function">is</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">failed</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>failed<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">必须与密码相同</span><span class="token template-punctuation string">\`</span></span> <span class="token comment">// 修改内置规则的message</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributes</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token comment">// 将每个提示字段转换成中文</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;手机号&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;验证码&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;确认密码&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">agree</span><span class="token operator">:</span> <span class="token string">&#39;协议&#39;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 自定义校验规则</span>
VeeValidate<span class="token punctuation">.</span>Validator<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token string">&#39;agree&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function-variable function">validate</span><span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getMessage</span><span class="token operator">:</span> <span class="token parameter">failed</span> <span class="token operator">=&gt;</span> failed <span class="token operator">+</span> <span class="token string">&#39;必须同意&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表单验证插件的使用" tabindex="-1"><a class="header-anchor" href="#表单验证插件的使用" aria-hidden="true">#</a> 表单验证插件的使用</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span>手机号:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span>

  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入你的手机号<span class="token punctuation">&quot;</span></span>

  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>phone<span class="token punctuation">&quot;</span></span>

  <span class="token attr-name">v-validate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{required:true , regex: /^1\\d{10}$/}<span class="token punctuation">&quot;</span></span>

  <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{invalid: errors.has(&#39;phone&#39;)}<span class="token punctuation">&quot;</span></span>

   <span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error-msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{errors.first(&#39;phone&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>



  <span class="token comment">&lt;!-- 确认密码的校验有点区别 --&gt;</span>

  v-validate=&quot;{required:true, is:password}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在所有的表单验证都通过后再允许注册" tabindex="-1"><a class="header-anchor" href="#在所有的表单验证都通过后再允许注册" aria-hidden="true">#</a> 在所有的表单验证都通过后再允许注册</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 等待所有的表单验证成功，返回布尔值</span>
  <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$validator<span class="token punctuation">.</span><span class="token function">validateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,11);function ln(t,on){const c=o("school"),u=o("Category"),l=o("ExternalLinkIcon");return k(),m("div",null,[f,n("h3",j,[V,s(" mastach语法 "+i()+" --> 插值语法",1)]),w,n("ul",null,[_,n("li",null,[q,n("ol",null,[D,n("li",null,[$,s("：v-text 会替换掉节点中的内容，"+i(t.xx)+" 则不会",1)])])]),n("li",null,[M,n("ol",null,[A,n("li",null,[S,n("ol",null,[n("li",null,"v-html 会替换掉节点中所有的内容，"+i(t.xx)+" 则不会",1),O])]),C])]),N]),R,n("ul",null,[I,n("li",null,[E,n("ol",null,[P,n("li",null,[U,s("："+i(t.xxx|t.过滤器名)+' 或 v-bind：属性 = "xxx | 过滤器名"',1)])])]),W]),G,n("ul",null,[n("li",null,[s("关于VueComponent "),n("ol",null,[J,n("li",null,[n("p",null,[s("我们只需要写"),e(c),s("或"),e(c),s("，Vue解析时会帮我们创建school组件的实例对象， 即Vue帮我们执行的：new VueComponent(options)")])]),B])])]),H,n("p",null,[s("父组件中： "),e(u,null,{default:p(()=>[L]),_:1}),s(" 子组件中： "),n("template",null,[n("div",null,[d(" 定义插槽 "),r(t.$slots,"default",{},()=>[s("插槽默认内容...")])])])]),T,z,n("p",null,[s("父组件中： "),e(u,null,{footer:p(()=>[s("//相当于slot='footer'并且必须配合template标签 "),Q]),default:p(()=>[K,s(" ​ ")]),_:1}),s(" 子组件中： "),n("template",null,[n("div",null,[d(" 定义插槽 "),r(t.$slots,"center",{},()=>[s("插槽默认内容...")]),r(t.$slots,"footer",{},()=>[s("插槽默认内容...")])])])]),X,n("p",null,[s("Vue Router 支持开箱即用的"),n("a",F,[s("动态导入"),e(l)]),s("，这意味着你可以用动态导入代替静态导入：")]),Y,n("p",null,[s("一般来说，对所有的路由"),Z,s("是个好主意。("),nn,s("在路由中使用"),n("a",sn,[s("异步组件"),e(l)]),s("。异步组件仍然可以在路由组件中使用，但路由组件本身就是动态导入的。)")]),n("p",null,[s("如果你使用的是 webpack 之类的打包器，它将自动从"),n("a",an,[s("代码分割"),e(l)]),s("中受益。")]),n("p",null,[s("如果你使用的是 Babel，你将需要添加 "),n("a",en,[s("syntax-dynamic-import"),e(l)]),s(" 插件，才能使 Babel 正确地解析语法。")]),tn])}const rn=v(x,[["render",ln],["__file","Vue2.html.vue"]]);export{rn as default};
