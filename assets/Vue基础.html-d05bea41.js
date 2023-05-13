import{_ as n,p as s,q as a,a1 as t}from"./framework-6700cb35.js";const e={},p=t(`<p><strong>本文供自己复习使用，仅供参考</strong></p><h2 id="main-js文件" tabindex="-1"><a class="header-anchor" href="#main-js文件" aria-hidden="true">#</a> main.js文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> from <span class="token string">&#39;vue&#39;</span>
<span class="token function">import</span> App from <span class="token string">&#39;./App.vue&#39;</span>
/* 
    App.vue是根组件
        - createApp<span class="token punctuation">(</span>App<span class="token punctuation">)</span> 是将根组件关联到应用上<span class="token punctuation">(</span>应用上只能挂载一个根组件<span class="token punctuation">)</span>
                        子组件只需要在需要的地方使用即可
        - createApp<span class="token punctuation">(</span>App<span class="token punctuation">)</span>.mount<span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>  
                - 将应用挂载到页面上，
                - 会返回一个根组件的实例，通常命名为vm
                - 组件实例是一个proxy代理对象
*/

const app <span class="token operator">=</span> createApp<span class="token punctuation">(</span>App<span class="token punctuation">)</span>
// 返回根组件的实例对象
const vm <span class="token operator">=</span> app.mount<span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

/* 
    由于我们这里使用的是ES的模块化，然后通过在网页中利用script标签引入的这个模块，
    ES模块都是运行在一个单独的作用域的，因此在模块里写的代码都相当于在闭包里，不在全局作用域，
    因此在浏览器的控制台是无法直接访问到vm的，需要先将vm添加为window的属性才能在浏览器控制台访问
*/
window.vm <span class="token operator">=</span> vm
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-vue文件-选项式api风格" tabindex="-1"><a class="header-anchor" href="#app-vue文件-选项式api风格" aria-hidden="true">#</a> App.vue文件 - <strong>选项式API风格</strong></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 引入shallowReactive 创建浅层响应式对象
<span class="token function">import</span> <span class="token punctuation">{</span> shallowReactive <span class="token punctuation">}</span> from <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token builtin class-name">export</span> default<span class="token punctuation">{</span>
  /* 
      - data用来指定实例对象中的响应式属性
      - 使用vue时，应减少使用箭头函数的次数
      - 如果data通过箭头函数使用，则无法通过this来访问组件实例 
      - 在data中，this就是当前组件的实例vm
  */
  <span class="token function-name function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    /* this就是组件实例，相当于直接向组件实例中添加一个name属性,在浏览体控制台通过vm.name<span class="token punctuation">(</span>需要先将vm添加到window<span class="token punctuation">)</span>可以直接访问 
        - <span class="token number">1</span>.但是通过vm.name修改值后，页面上的值并不会改变，只有data中返回的对象被代理转换后的数据才是响应式数据
        - <span class="token number">2</span>.但是在页面中其它响应式数据改变时，该改变可以生效一次
        - <span class="token number">3</span>.vm.<span class="token variable">$data</span>是实际的代理对象,通过vm.<span class="token variable">$data</span>可以直接访问到<span class="token variable">$data</span>中的数据
        - <span class="token number">4</span>.我们可以通过vm.<span class="token variable">$data</span>动态的为代理对象中添加响应式数据,但是不建议这么做
        - <span class="token number">5</span>.我们可以将暂时没用到，后面可能会用的属性先添加到return返回的对象中，值设置为null，使vue对其代理
            后续就可以直接通过根组件的实例对象直接对该属性进行修改，不致于通过<span class="token variable">$data</span>动态添加导致结构混乱
                  
        总结: 直接向实例中添加的属性不会被vue所代理，不是响应式数据，修改后页面不会变化
    */
    // this.name <span class="token operator">=</span> <span class="token string">&#39;fc&#39;</span>

    /*  data会返回一个对象作为返回值，vue会对该对象进行一个代理，
        从而将其转换为响应式数据，响应式数据可以直接通过组件实例访问
    注意：- 尽量不要在外部创建一个对象obj，然后在data内直接return obj,
          这样每调用一次组件，虽然都会创建不同的代理对象，但是被代理对象一直都是那个obj，组件实例之间会相互影响
         - 而我们通过return<span class="token punctuation">{</span><span class="token punctuation">}</span> 这样的方式，每次调用组件都创建的是一个新的对象，组件实例之间相互独立，不会影响
         - vue在构建响应式对象时，会同时将对象中的属性也构建成响应式属性 ，即return<span class="token punctuation">{</span>内部的所有属性都是响应式属性<span class="token punctuation">}</span>
               

     */
    // <span class="token builtin class-name">return</span> obj   不可取
    // 深层响应式对象 即return<span class="token punctuation">{</span>内部的所有属性都是响应式属性<span class="token punctuation">}</span>
    <span class="token builtin class-name">return</span> <span class="token punctuation">{</span>
      msg: <span class="token string">&quot;ly超漂亮&quot;</span>,
      // stu 内部的属性也全都是响应式属性
      stu: <span class="token punctuation">{</span>
        name:<span class="token string">&quot;ly&quot;</span>,
        age: <span class="token number">21</span>,
        gender: <span class="token string">&quot;女&quot;</span>,
        boyFriend: <span class="token punctuation">{</span>
          name:<span class="token string">&quot;fc&quot;</span>,
          age:21
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,
      // 数组也是响应式的
      arr: <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span>,<span class="token string">&quot;2&quot;</span>,<span class="token string">&quot;3&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    // 有时不希望返回的是深层次响应式对象，会对性能有所影响，此时可以创建浅层响应式对象
    // 需要引入shallowReactive进行包装
 /*    <span class="token builtin class-name">return</span> shallowReactive<span class="token punctuation">(</span><span class="token punctuation">{</span>
      // 此时只有 msg 和 stu 属性为响应式属性，stu内部所有属性都不是响应式属性
      msg: <span class="token string">&quot;ly超漂亮&quot;</span>,
      stu: <span class="token punctuation">{</span>
        name:<span class="token string">&quot;ly&quot;</span>,
        age: <span class="token number">21</span>,
        gender: <span class="token string">&quot;女&quot;</span>,
        boyFriend: <span class="token punctuation">{</span>
          name:<span class="token string">&quot;fc&quot;</span>,
          age:21
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> */
  <span class="token punctuation">}</span>,
  
  // 在需要使用的地方注册子组件
  components: <span class="token punctuation">{</span>
  // 属性名:属性值  通过属性名调用，相同时可以简写只写MyButton        
  <span class="token punctuation">}</span>,
  
  // created函数会在组件创建完毕后调用
  <span class="token function-name function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    // 此时的name属性也是一个响应式数据,该方法在data方法内部调用没用，
    // 因为那时data方法刚调用，响应式对象还没有建立,<span class="token variable">$data</span>还木有
    this.<span class="token variable">$data</span>.name <span class="token operator">=</span> <span class="token string">&#39;fc&#39;</span>
  <span class="token punctuation">}</span>,

 /* 
    methods用来指定实例对象中的方法 
      - 直接使用时 --<span class="token operator">&gt;</span> 属性<span class="token punctuation">(</span><span class="token punctuation">)</span> ，在事件绑定中可以不写<span class="token punctuation">(</span><span class="token punctuation">)</span>
      - 它是一个对象<span class="token punctuation">{</span><span class="token punctuation">}</span>,可以在对象内部定义多个方法
      - 这些方法最终会被挂载到组件实例上
      - 后续可以直接通过组件实例调用这些方法
      - 所有组合实例中的属性，都可以直接在template模板中访问
      - methods中函数的this会被自动绑定为组件实例
 
 */
  methods:<span class="token punctuation">{</span>
      sum<span class="token punctuation">(</span>a, b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console.log<span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span> // 组件实例vm
        <span class="token builtin class-name">return</span> a + b
      <span class="token punctuation">}</span>,
      <span class="token function-name function">changeAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        if<span class="token punctuation">(</span>this.stu.age <span class="token operator">&gt;=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          this.stu.age <span class="token operator">=</span> <span class="token number">17</span>
        <span class="token punctuation">}</span>else<span class="token punctuation">{</span>
          this.stu.age <span class="token operator">=</span> <span class="token number">21</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>,

      <span class="token function-name function">methodsInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console.log<span class="token punctuation">(</span><span class="token string">&quot;~~  methodInfo调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token builtin class-name">return</span> this.stu.age<span class="token operator">&gt;=</span><span class="token number">18</span> ? <span class="token string">&quot;你是一个成年人~~&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;你是一个未成年人~~&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,

  /* computed 计算属性 使用时不需要加<span class="token punctuation">(</span><span class="token punctuation">)</span>
    - 结构<span class="token punctuation">{</span> 属性名: getter<span class="token punctuation">}</span> , 在只有getter的时候可以简写<span class="token punctuation">{</span> 属性名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>， getter的返回值就是该属性名的值
    - 计算属性也可以设置setter,使得计算属性可写，但是不建议这样做,尽量让计算属性只读
    注意： 计算属性的功能methods也能实现，为什么还会使用computed?
      原因：
          - 计算属性，只在其依赖的数据发生变化时才会重新执行，会对数据进行缓存,性能更好
          - 而methods中的方法每次组件重新渲染都会调用
  */
  computed: <span class="token punctuation">{</span>
    // 在计算属性的getter中，尽量只做读取相关的逻辑，不要执行会产生<span class="token punctuation">(</span>副<span class="token punctuation">)</span>作用的代码<span class="token punctuation">(</span>例如改<span class="token punctuation">)</span>
    <span class="token function-name function">computedInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console.log<span class="token punctuation">(</span><span class="token string">&quot;--&gt;  computedInfo调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token builtin class-name">return</span> this.stu.age<span class="token operator">&gt;=</span><span class="token number">18</span> ? <span class="token string">&quot;你是一个成年人--&gt;&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;你是一个未成年人--&gt;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
  <span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> stu.name <span class="token punctuation">}</span><span class="token punctuation">}</span> -- <span class="token punctuation">{</span><span class="token punctuation">{</span> stu.age <span class="token punctuation">}</span><span class="token punctuation">}</span> -- <span class="token punctuation">{</span><span class="token punctuation">{</span> stu.gender <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
  <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span> 评语:<span class="token punctuation">{</span><span class="token punctuation">{</span> computedInfo <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/span<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span> 评语:<span class="token punctuation">{</span><span class="token punctuation">{</span> methodsInfo<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/span<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeAge&quot;</span><span class="token operator">&gt;</span>年龄变化<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>

  
<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token function">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> from <span class="token string">&#39;vue&#39;</span>
const html <span class="token operator">=</span> <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>我是一段html语句<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token variable">\`</span></span>

const attrs <span class="token operator">=</span> <span class="token punctuation">{</span>
  id: <span class="token string">&#39;1&#39;</span>,
  class: <span class="token string">&#39;test&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">let</span> isDisabled <span class="token operator">=</span> ref<span class="token punctuation">(</span>true<span class="token punctuation">)</span>
// 组合式API不需要使用this，因此使用箭头函数没影响，选项式API尽量别使用箭头函数
const changeFlag <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    isDisabled.value ? isDisabled.value <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token builtin class-name">:</span> isDisabled.value <span class="token operator">=</span> <span class="token boolean">true</span>
 
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span>-- 
       模板语法：
        - 在模板中可以直接访问到组件中声明的变量
        - 除了组件中的变量外，vue还提供了一些全局对象可以访问： Date、Math、RegExp<span class="token punctuation">..</span><span class="token punctuation">..</span>
        - 还可以通过app对象来向全局中添加一些全局变量
   	      例如：app.config.globalProperties.属性名 <span class="token operator">=</span> XXX
        - 使用插值语法<span class="token punctuation">(</span>双大括号），只能使用表达式<span class="token punctuation">(</span>有返回值的语句<span class="token punctuation">)</span>
        - 插值语法实际上就是在修改元素的textContent，如果内容中含有标签，标签会被转义显示，不会作为标签生效
     指令：
   	    - 指令是模板中为标签设置的一些特殊属性，它可以设置标签如何显示内容
        - 指令使用 v- 开头 
          v-text 将表达式的值作为元素的textContent插入，相当于<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,对标签有转义
          v-html 将表达式的值作为元素的innerHTML插入，对标签没有转义，有XSS攻击的风险
          v-bind 为标签动态的绑定属性,可以简写为冒号 <span class="token builtin class-name">:</span>

   --<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span>-- <span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> alert<span class="token punctuation">(</span><span class="token string">&quot;嘿嘿&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> --<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v-text<span class="token operator">=</span><span class="token string">&quot;html&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v-html<span class="token operator">=</span><span class="token string">&quot;html&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span>-- 可以直接为该div绑定attrs对象中的所有属性   可以简写 :<span class="token operator">=</span><span class="token string">&quot;attrs&quot;</span> --<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v-bind<span class="token operator">=</span><span class="token string">&quot;attrs&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span>-- disabled是一个布尔属性<span class="token punctuation">(</span>属性值和属性名一样<span class="token punctuation">)</span>,为布尔值设置属性时，转换后为true也算true
        注意空串 <span class="token string">&quot;&quot;</span> 在这里会被当作真值  
  --<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">&quot;text&quot;</span> :disabled<span class="token operator">=</span><span class="token string">&quot;isDisabled&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeFlag&quot;</span><span class="token operator">&gt;</span>点击切换输入框状态<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
  /* 直接在style标签内书写的样式是全局样式，在全局生效，
  可以通过为style标签添加scoped属性，使样式成为局部样式，只对当前组件生效 
实现原理：
  - 当我们为style标签添加scoped属性后，vue会自动为组件中的所有元素生成一个随机的属性
    形如 data-v-7a7a37b1, 生成后，所有的选择器都会在最后添加一个<span class="token punctuation">[</span>data-v-7a7a37b1<span class="token punctuation">]</span>
    例如 h1<span class="token punctuation">{</span><span class="token punctuation">}</span> -<span class="token operator">&gt;</span> h1<span class="token punctuation">[</span>data-v-7a7a37b1<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   标签<span class="token punctuation">[</span>属性<span class="token punctuation">]</span>   属性选择器
  - 注意：- 随机生成的属性，除了会添加到当前组件内的所有元素上，
           也会添加到当前组件引入的其它组件的根元素上，其它组件若是多根组件就都不加
          - 这样设计是为了可以通过父组件来为子组件设计一些样式
  - :deep<span class="token punctuation">(</span><span class="token punctuation">)</span>   深度选择器 
        例如  .app h2 <span class="token punctuation">{</span><span class="token punctuation">}</span>   改造后-<span class="token operator">&gt;</span>  .app h2<span class="token punctuation">[</span>XXX<span class="token punctuation">]</span>   只有app组件内有<span class="token punctuation">[</span>xxx<span class="token punctuation">]</span>属性的 h2 生效
              .app .deep<span class="token punctuation">(</span>h2<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>   改造后-<span class="token operator">&gt;</span>  .app<span class="token punctuation">[</span>XXX<span class="token punctuation">]</span> h2  app<span class="token punctuation">[</span>xxx<span class="token punctuation">]</span>组件内所有的h2都生效，无论是不是当前组件的
  - :global<span class="token punctuation">(</span><span class="token punctuation">)</span> 全局选择器
 */
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style module<span class="token operator">&gt;</span>
/*
  css 模块
    - 会自动的对模块中的类名进行哈希<span class="token punctuation">(</span>hash<span class="token punctuation">)</span>化,来确保类名的唯一性
    - 在模板中需要使用的地方加上 :class <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">$style</span>.box1&quot;</span> 即可使用css模块中对应的样式
    - 如果不想使用<span class="token variable">$style</span>,可以通过modeule的属性值来指定变量名
 */
 .box1<span class="token punctuation">{</span>
  background-color: aqua<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function l(o,c){return s(),a("div",null,i)}const r=n(e,[["render",l],["__file","Vue基础.html.vue"]]);export{r as default};
