import{_ as n,p as s,q as a,a1 as t}from"./framework-6700cb35.js";const p={},o=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useCountStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../store/countStore&#39;</span>
<span class="token comment">// 获得store实例</span>
<span class="token comment">/* 
    - store实例本身就是一个reactive对象，可以通过它直接访问state中的数据，
    - 但是如果将store实例中的数据直接解构出来，那这个数据就会丧失响应性
    - 但是可以通过 storeToRefs(store实例) 的方式将解构出来的数据转换为响应式数据, 
      但是该方法只能解构state和getters,不能解构 actions

    - state 的修改
        - 1. 直接修改(不建议)
        - 2. 建议通过actions中提供的方法进行修改
        - 3. 通过 $patch(补丁) 的方法进行修改，而且可以同时修改多个,但是修改数组类多个数据时就是覆盖，不够灵活
        - 4. 通过 $patch 传函数的形式进行修改，传函数时会往函数里传入state对象
        - 5. 通过 $state 直接替换state达到修改的目的
        - 6. $reset重置state
    
    - store 的订阅 -- 当state中的数据发生一些变化时需要对齐进行监听
        - 可以通过 store.$subscribe(函数，配置对象) 的方式对state中的数据进行一个订阅
        - 订阅会随着它所在的组件被卸载时一并卸载，
          可以通过设置配置对象 store.$subscribe((mutation, state) =&gt; {
            // mutation 是修改的信息
            //  state 当前state对象
          }, {detached:true}) 使其一直生效
        - 注意： 使用订阅时，不要在回调函数中直接修改state，会导致递归
    
    - actions 的订阅  -- 监听 actions 中的方法被调用
          - store.$onAction(()=&gt;{})
          
*/</span>



<span class="token keyword">function</span> <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;我是patch修改的名字哟~&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeSkills</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> skills <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>skills<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;筋斗云&quot;</span><span class="token punctuation">)</span>
        state<span class="token punctuation">.</span>skills <span class="token operator">=</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>skills<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useCountStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 监听state</span>
<span class="token comment">// mutation 修改的信息  state 当前state对象</span>
store<span class="token punctuation">.</span><span class="token function">$subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span>state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;state发生变化了&quot;</span><span class="token punctuation">,</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 监听actions</span>
store<span class="token punctuation">.</span><span class="token function">$onAction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> args<span class="token punctuation">,</span> store<span class="token punctuation">,</span> after<span class="token punctuation">,</span> onError<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 
        name        --&gt; 被调用的 action 的名字
        store       --&gt; store 实例
        args        --&gt; action接收到的参数
        after()     --&gt; 可以设置一个回调函数，函数会在action调用成功后触发
        onError()   --&gt; 可以设置一个回调函数，函数会在action调用失败后触发
     */</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;action函数调用成功了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;action函数调用失败了&quot;</span><span class="token punctuation">,</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">--</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> store<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store<span class="token punctuation">.</span>increment <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store<span class="token punctuation">.</span>skills <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token operator">--</span><span class="token punctuation">{</span><span class="token punctuation">{</span> store<span class="token punctuation">.</span>double <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">--</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;store.addCount&quot;</span><span class="token operator">&gt;</span>自增<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>br<span class="token operator">&gt;</span><span class="token operator">&lt;</span>hr<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;store.name = &#39;fc&#39;&quot;</span><span class="token operator">&gt;</span>改名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeName&quot;</span><span class="token operator">&gt;</span>patch改名<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;changeSkills&quot;</span><span class="token operator">&gt;</span>修改技能<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function c(l,i){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","pinia-store简介.html.vue"]]);export{r as default};
