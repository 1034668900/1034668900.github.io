import{_ as n,p as s,q as a,a1 as t}from"./framework-6700cb35.js";const p={},e=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token function">import</span> <span class="token punctuation">{</span>useCountStore<span class="token punctuation">}</span> from <span class="token string">&#39;../store/countStore&#39;</span>
// 获得store实例
/* 
    - store实例本身就是一个reactive对象，可以通过它直接访问state中的数据，
    - 但是如果将store实例中的数据直接解构出来，那这个数据就会丧失响应性
    - 但是可以通过 storeToRefs<span class="token punctuation">(</span>store实例<span class="token punctuation">)</span> 的方式将解构出来的数据转换为响应式数据, 
      但是该方法只能解构state和getters,不能解构 actions

    - state 的修改
        - <span class="token number">1</span>. 直接修改<span class="token punctuation">(</span>不建议<span class="token punctuation">)</span>
        - <span class="token number">2</span>. 建议通过actions中提供的方法进行修改
        - <span class="token number">3</span>. 通过 <span class="token variable">$patch</span><span class="token punctuation">(</span>补丁<span class="token punctuation">)</span> 的方法进行修改，而且可以同时修改多个,但是修改数组类多个数据时就是覆盖，不够灵活
        - <span class="token number">4</span>. 通过 <span class="token variable">$patch</span> 传函数的形式进行修改，传函数时会往函数里传入state对象
        - <span class="token number">5</span>. 通过 <span class="token variable">$state</span> 直接替换state达到修改的目的
        - <span class="token number">6</span>. <span class="token variable">$reset</span>重置state
    
    - store 的订阅 -- 当state中的数据发生一些变化时需要对齐进行监听
        - 可以通过 store.<span class="token variable">$subscribe</span><span class="token punctuation">(</span>函数，配置对象<span class="token punctuation">)</span> 的方式对state中的数据进行一个订阅
        - 订阅会随着它所在的组件被卸载时一并卸载，
          可以通过设置配置对象 store.<span class="token variable">$subscribe</span><span class="token variable"><span class="token punctuation">((</span>mutation<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> {
            <span class="token operator">/</span><span class="token operator">/</span> mutation 是修改的信息
            <span class="token operator">/</span><span class="token operator">/</span>  state 当前state对象
          }<span class="token punctuation">,</span> {detached<span class="token operator">:</span>true}<span class="token punctuation">)</span> 使其一直生效
        <span class="token operator">-</span> 注意： 使用订阅时，不要在回调函数中直接修改state，会导致递归
    
    <span class="token operator">-</span> actions 的订阅  <span class="token operator">--</span> 监听 actions 中的方法被调用
          <span class="token operator">-</span> store.$onAction<span class="token punctuation">((</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">&gt;</span>{}<span class="token punctuation">)</span>
          
<span class="token operator">*</span><span class="token operator">/</span>



function changeName<span class="token punctuation">(</span><span class="token punctuation">)</span>{
    store.$patch<span class="token punctuation">(</span>{
        name<span class="token operator">:</span>&quot;我是patch修改的名字哟<span class="token operator">~</span>&quot;
    }<span class="token punctuation">)</span>
}

function changeSkills<span class="token punctuation">(</span><span class="token punctuation">)</span>{
    store.$patch<span class="token punctuation">(</span>state <span class="token operator">=</span><span class="token operator">&gt;</span> {
        const skills <span class="token operator">=</span> new Set<span class="token punctuation">(</span>state.skills<span class="token punctuation">)</span>.add<span class="token punctuation">(</span>&quot;筋斗云&quot;<span class="token punctuation">)</span>
        state.skills <span class="token operator">=</span> <span class="token punctuation">(</span>Array.from<span class="token punctuation">(</span>skills<span class="token punctuation">))</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
const store <span class="token operator">=</span> useCountStore<span class="token punctuation">(</span><span class="token punctuation">)</span>

// 监听state
// mutation 修改的信息  state 当前state对象
store.<span class="token variable">$subscribe</span><span class="token punctuation">((</span>mutation,state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    console.log<span class="token punctuation">(</span><span class="token string">&quot;state发生变化了&quot;</span>,state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console.log<span class="token punctuation">(</span>mutation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

// 监听actions
store.<span class="token variable">$onAction</span><span class="token punctuation">((</span><span class="token punctuation">{</span>name, args, store, after, onError<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    /* 
        name        --<span class="token operator">&gt;</span> 被调用的 action 的名字
        store       --<span class="token operator">&gt;</span> store 实例
        args        --<span class="token operator">&gt;</span> action接收到的参数
        after<span class="token punctuation">(</span><span class="token punctuation">)</span>     --<span class="token operator">&gt;</span> 可以设置一个回调函数，函数会在action调用成功后触发
        onError<span class="token punctuation">(</span><span class="token punctuation">)</span>   --<span class="token operator">&gt;</span> 可以设置一个回调函数，函数会在action调用失败后触发
     */
    console.log<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    after<span class="token punctuation">((</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        console.log<span class="token punctuation">(</span><span class="token string">&quot;action函数调用成功了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    onError<span class="token punctuation">((</span>err<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        console.log<span class="token punctuation">(</span><span class="token string">&quot;action函数调用失败了&quot;</span>,err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store.count <span class="token punctuation">}</span><span class="token punctuation">}</span> -- <span class="token punctuation">{</span><span class="token punctuation">{</span> store.name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store.increment <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store.skills <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>--<span class="token punctuation">{</span><span class="token punctuation">{</span> store.double <span class="token punctuation">}</span><span class="token punctuation">}</span>--<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;store.addCount&quot;</span><span class="token operator">&gt;</span>自增<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;store.name = &#39;fc&#39;&quot;</span><span class="token operator">&gt;</span>改名<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName&quot;</span><span class="token operator">&gt;</span>patch改名<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeSkills&quot;</span><span class="token operator">&gt;</span>修改技能<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","pinia-store简介.html.vue"]]);export{u as default};
