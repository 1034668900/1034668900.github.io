import{_ as n,p as s,q as a,a1 as e}from"./framework-6700cb35.js";const t={},p=e(`<h1 id="ajax使用" tabindex="-1"><a class="header-anchor" href="#ajax使用" aria-hidden="true">#</a> Ajax使用</h1><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤" aria-hidden="true">#</a> <strong>使用步骤</strong></h2><ul><li><strong>创建一个xhr对象</strong><ul><li>const xhr = new XMLHttpRequest()</li></ul></li><li><strong>设置请求信息</strong>(参数一请求方式, 参数二请求路径) <ul><li>xhr.open(&quot;GET&quot;, &quot;http://localhost:3000/students&quot;)</li></ul></li><li><strong>发送请求</strong><ul><li>xhr.send()</li></ul></li></ul><h2 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>AJAX测试<span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span>
    <span class="token operator">&lt;</span>br/<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;btn&quot;</span><span class="token operator">&gt;</span>点我加载数据<span class="token operator">&lt;</span>/button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>/div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        const btn <span class="token operator">=</span> document.getElementById<span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span>
        /* 
        实现将访问得到的数据在html中显示出来，利用DOM操作
        */
        const root <span class="token operator">=</span> document.getElementById<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
        btn.onclick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
            // 创建一个xhr对象
            const xhr <span class="token operator">=</span> new XMLHttpRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>

            // 法二：指定xhr.response返回数据类型   json只能小写
            xhr.responseType <span class="token operator">=</span> <span class="token string">&quot;json&quot;</span>

            // 为xhr绑定一个load事件，即当xhr加载完毕后执行对应回调
            xhr.onload <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
                /*当xhr加载完毕后再打印，
                但是此时也有问题，若是访问路径出错的话，直接打印的数据没有意义而且会报错，因此应该先判断
                console.log<span class="token punctuation">(</span>xhr.response<span class="token punctuation">)</span><span class="token punctuation">;</span> */

                // 判断响应状态码<span class="token punctuation">(</span>此时的响应状态码和我们在服务器定义的不是一个东西<span class="token punctuation">)</span>
                if<span class="token punctuation">(</span>xhr.status <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    // xhr.response返回的数据是字符串形式的
                    // 法一 ：手动将返回的数据转换为JSON
                    //const result <span class="token operator">=</span> JSON.parse<span class="token punctuation">(</span>xhr.response<span class="token punctuation">)</span>
                    //console.log<span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    // 法二
                    //console.log<span class="token punctuation">(</span>xhr.response<span class="token punctuation">)</span><span class="token punctuation">;</span>

                    // 渲染页面
                    // 储存数据
                    const result <span class="token operator">=</span> xhr.response
                    // 创建一个ul
                    const ul <span class="token operator">=</span> document.createElement<span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span>
                    // 将ul插入到root这个div中
                    root.appendChild<span class="token punctuation">(</span>ul<span class="token punctuation">)</span>
                    // 遍历result
                    for<span class="token punctuation">(</span>let <span class="token function">v</span> of result.data<span class="token punctuation">)</span><span class="token punctuation">{</span>
                        /* 
                        insertAdjacentHTML方法的四个参数
                        <span class="token parameter variable">-beforebegin</span> ：元素自身的前面。
                        <span class="token parameter variable">-afterbegin</span>  ：插入元素内部的第一个子节点之前。
                        <span class="token parameter variable">-beforeend</span>   ：插入元素内部的最后一个子节点之后。
                        <span class="token parameter variable">-afterend</span>    ：元素自身的后面。
                        
                        */
                        ul.insertAdjacentHTML<span class="token punctuation">(</span>
                            <span class="token string">&quot;beforeend&quot;</span>,
                            <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>$<span class="token punctuation">{</span>v.id<span class="token punctuation">}</span> - $<span class="token punctuation">{</span>v.name<span class="token punctuation">}</span> - $<span class="token punctuation">{</span>v.age<span class="token punctuation">}</span> - $<span class="token punctuation">{</span>v.address<span class="token punctuation">}</span><span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span><span class="token variable">\`</span></span>
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>


                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            // 设置请求信息<span class="token punctuation">(</span>参数一请求方式, 参数二请求路径<span class="token punctuation">)</span>
            xhr.open<span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span>, <span class="token string">&quot;http://localhost:3000/students&quot;</span><span class="token punctuation">)</span>

            // 发送请求
            xhr.send<span class="token punctuation">(</span><span class="token punctuation">)</span>

            // 读取响应信息   xhr.response表示响应信息
            // 但是此时读取不到，因为AJAX请求是异步的，此时直接打印是没有结果的
            //console.log<span class="token punctuation">(</span>xhr.response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>/script<span class="token operator">&gt;</span>        
<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","Ajax使用.html.vue"]]);export{u as default};
