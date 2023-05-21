import{_ as n,p as s,q as a,a1 as t}from"./framework-6700cb35.js";const e={},o=t(`<h1 id="ajax使用" tabindex="-1"><a class="header-anchor" href="#ajax使用" aria-hidden="true">#</a> Ajax使用</h1><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> <strong>使用步骤</strong></h2><ul><li><strong>创建一个xhr对象</strong><ul><li>const xhr = new XMLHttpRequest()</li></ul></li><li><strong>设置请求信息</strong>(参数一请求方式, 参数二请求路径) <ul><li>xhr.open(&quot;GET&quot;, &quot;http://localhost:3000/students&quot;)</li></ul></li><li><strong>发送请求</strong><ul><li>xhr.send()</li></ul></li></ul><h2 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token constant">AJAX</span>测试<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>点我加载数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">/* 
        实现将访问得到的数据在html中显示出来，利用DOM操作
        */</span>
        <span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
        btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 创建一个xhr对象</span>
            <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment">// 法二：指定xhr.response返回数据类型   json只能小写</span>
            xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">&quot;json&quot;</span>

            <span class="token comment">// 为xhr绑定一个load事件，即当xhr加载完毕后执行对应回调</span>
            xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">/*当xhr加载完毕后再打印，
                但是此时也有问题，若是访问路径出错的话，直接打印的数据没有意义而且会报错，因此应该先判断
                console.log(xhr.response); */</span>

                <span class="token comment">// 判断响应状态码(此时的响应状态码和我们在服务器定义的不是一个东西)</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">// xhr.response返回的数据是字符串形式的</span>
                    <span class="token comment">// 法一 ：手动将返回的数据转换为JSON</span>
                    <span class="token comment">//const result = JSON.parse(xhr.response)</span>
                    <span class="token comment">//console.log(result);</span>

                    <span class="token comment">// 法二</span>
                    <span class="token comment">//console.log(xhr.response);</span>

                    <span class="token comment">// 渲染页面</span>
                    <span class="token comment">// 储存数据</span>
                    <span class="token keyword">const</span> result <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response
                    <span class="token comment">// 创建一个ul</span>
                    <span class="token keyword">const</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span>
                    <span class="token comment">// 将ul插入到root这个div中</span>
                    root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>ul<span class="token punctuation">)</span>
                    <span class="token comment">// 遍历result</span>
                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> result<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token comment">/* 
                        insertAdjacentHTML方法的四个参数
                        -beforebegin ：元素自身的前面。
                        -afterbegin  ：插入元素内部的第一个子节点之前。
                        -beforeend   ：插入元素内部的最后一个子节点之后。
                        -afterend    ：元素自身的后面。
                        
                        */</span>
                        ul<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span>
                            <span class="token string">&quot;beforeend&quot;</span><span class="token punctuation">,</span>
                            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;li&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token punctuation">.</span>address<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;</span><span class="token template-punctuation string">\`</span></span>
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>


                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 设置请求信息(参数一请求方式, 参数二请求路径)</span>
            xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:3000/students&quot;</span><span class="token punctuation">)</span>

            <span class="token comment">// 发送请求</span>
            xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token comment">// 读取响应信息   xhr.response表示响应信息</span>
            <span class="token comment">// 但是此时读取不到，因为AJAX请求是异步的，此时直接打印是没有结果的</span>
            <span class="token comment">//console.log(xhr.response);</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>        
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function l(i,c){return s(),a("div",null,p)}const u=n(e,[["render",l],["__file","Ajax使用.html.vue"]]);export{u as default};
