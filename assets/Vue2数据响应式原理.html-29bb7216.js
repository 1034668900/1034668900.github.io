import{_ as n,p as s,q as a,a1 as t}from"./framework-6700cb35.js";const e="/images/vue2/vue2响应式原理/递归侦测数据.jpg",p="/images/vue2/vue2响应式原理/数组侦测.jpg",o={},c=t(`<h1 id="vue2数据响应式原理" tabindex="-1"><a class="header-anchor" href="#vue2数据响应式原理" aria-hidden="true">#</a> Vue2数据响应式原理</h1><h2 id="object-defineproperty-方法介绍" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-方法介绍" aria-hidden="true">#</a> Object.defineProperty（ ）方法介绍</h2><ul><li><p><code>Object.defineProperty(obj, prop, descriptor)</code>方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象</p></li><li><p>参数：</p><ol><li>obj：要定义的对象</li><li>prop： 定义的属性</li><li>descriptor： 要定义或修改的属性的描述符</li></ol></li><li><p><strong>存在问题</strong> : <code>getter、setter</code>想实现<strong>数据修改必须设置一个中转变量</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可枚举</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;get被访问&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;set被访问&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    temp <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1  9</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2  10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>**解决办法：**自定义<code>defineReactive（ ）</code>方法，利用闭包实现</p></li></ul><h2 id="自定义-definereactive-方法" tabindex="-1"><a class="header-anchor" href="#自定义-definereactive-方法" aria-hidden="true">#</a> 自定义 defineReactive( ) 方法</h2><ul><li>外部函数变量<code>val</code>在内部函数中使用，从而实现一个<strong>闭包</strong>环境</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>key<span class="token punctuation">,</span>val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token comment">// 可枚举</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">configurable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> val
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">!==</span> newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
                val <span class="token operator">=</span> newValue
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1 200</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2 10</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象属性侦测实现" tabindex="-1"><a class="header-anchor" href="#对象属性侦测实现" aria-hidden="true">#</a> 对象属性侦测实现</h2><ul><li><p><strong>本质</strong>：利用递归侦测对象的全部属性</p></li><li><p>图示</p><p><img src="`+e+`" alt="递归侦测数据"></p></li><li><p><strong>函数解释：</strong></p><ol><li><strong>observe( )函数</strong>：工具函数，用于检测一个对象是否为<strong>Observe类</strong>的<strong>实例</strong>（是否含有__ob__属性）</li><li><strong>Observer( )类</strong>：用于将一个普通的<strong>object</strong>对象的每个属性都转换为<strong>响应式属性</strong>，同时为每个属性都添加一个<code>__ob__</code>属性，其值为<code>Observer( )类的实例</code>(<strong>注意：<strong>构造函数中的</strong>this</strong>是<strong>Observer</strong>的<strong>实例</strong>)</li><li><strong>defineReactive( )函数</strong>：将一个对象的某个属性（旧属性或新属性）设置为响应式数据</li></ol></li><li><p><strong>注意事项：</strong></p><ol><li><strong>defineReactive( )<strong>函数中要对设置的属性值value要调用</strong>observe</strong>进行检测是否含有<code>__ob__</code>,而且当属性被修改时，也要对setter的中的<strong>newValue</strong>用<strong>observe</strong>进行检测(因为赋的新值<strong>newValue</strong>也可能会是一个<strong>对象</strong>)</li><li><strong>defineReactive( )<strong>中的</strong>childOb</strong>在当前阶段没什么用，但是后续会使用到</li><li>此时的<strong>数据侦测</strong>还不能处理<strong>数组</strong></li></ol></li><li><p><strong>具体实现：</strong></p><ol><li><p><strong>defineReactive( )函数</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> observe <span class="token keyword">from</span> <span class="token string">&quot;./observe&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>key<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        value <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是defineReactive&quot;</span><span class="token punctuation">,</span>key<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 为属性定义属性值时也要对其检测是否含有__ob__属性</span>
    <span class="token keyword">let</span> childOb <span class="token operator">=</span> <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;get属性被访问了&quot;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> value
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;set属性被访问,有人修改数据了,值为&quot;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            value <span class="token operator">=</span> newValue
            <span class="token comment">// 修改值时也要对修改的新值进行检测</span>
            childOb <span class="token operator">=</span> <span class="token function">observe</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>observe( )函数</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Observer <span class="token keyword">from</span> <span class="token string">&quot;./Observer&quot;</span>

<span class="token comment">// 用于检测一个对象是否含有__ob__属性</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 检测是否为object对象</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token keyword">return</span>
    <span class="token comment">// 定义ob存储__ob__属性值(是Observer类的实例)</span>
    <span class="token keyword">let</span> ob
    <span class="token comment">// 检测是否含有__ob__属性</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">.</span>__ob__ <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 有__ob__属性</span>
        ob <span class="token operator">=</span> obj<span class="token punctuation">.</span>__ob__
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">// 没有__ob__属性</span>
        ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ob
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Observer( )类</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//目的： 用于将一个普通的object对象的全部属性转换为响应式数据</span>
<span class="token keyword">import</span> defineReactive <span class="token keyword">from</span> <span class="token string">&quot;./defineReactive&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./utils&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是Observer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 为obj添加__ob__属性，值为Observer类的实例（this）,并不可枚举</span>
        <span class="token function">def</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&quot;__ob__&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 遍历</span>
    <span class="token function">walk</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 将属性转换为响应式</span>
            <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ul><h2 id="数组属性侦测的完善" tabindex="-1"><a class="header-anchor" href="#数组属性侦测的完善" aria-hidden="true">#</a> 数组属性侦测的完善</h2><ul><li><p><strong>存在问题</strong>：上述侦测没有对数组类型进行处理，因此数组类型的数据还不能完成侦测</p></li><li><p><strong>实现思路：</strong></p><ul><li><p>将数组的七个方法进行重写，使其能够被侦测，<strong>特别注意</strong>需要修改数组对象的原型链，使其优先使用重写后的方法</p></li><li><p>图示</p><p><img src="`+p+`" alt=""></p></li></ul></li><li><p><strong>注意事项：</strong></p><ol><li><strong>arrayMethods</strong>是以<strong>Array.prototype</strong>为<strong>原型</strong>创建的对象，因此要使用API<code>const arrayMethods = Object.create(Array.prototype)</code>,同时该方法要<strong>暴露</strong>（在<strong>Observer</strong>中会引入使用）</li><li><strong>重写</strong>数组方法时，需要<strong>备份原生的方法</strong>来<strong>对数据进行修改</strong>，<strong>重写的目的</strong>只是为了使该操作能被<strong>侦测</strong>到</li><li><strong>Observer</strong>需要对<strong>obj的类型</strong>进行<strong>判断</strong>，如果是一个数组（<code>Array.isArray(obj)</code>）,则需要调用<strong>针对数组类型</strong>进行<strong>响应式转换</strong>的<strong>自定义</strong>函数<strong>observeArray(obj)</strong></li><li>一定要注意<strong>push、unshift、splice</strong>可以添加<strong>新项</strong>，因此也要对它们添加的新项进行<strong>observe</strong>检测</li><li>处理<strong>push、unshift、splice</strong>时需要拿到数组对象的**<code>__ob__</code>对应的实例对象**，因为在该实例对象身上有<strong>Observer</strong>中定义的<code>observeArray( )</code>方法</li><li>需要创建一个数组对象<strong>insertItems</strong> 用于存储<strong>数组方法</strong>导致的<strong>添加的新项</strong>，后续根据该对象<strong>是否为空</strong>来选择性的<strong>调用ob</strong>身上的<strong>observeArray</strong>方法进行<strong>检测</strong></li><li>处理<strong>splice添加新项</strong>的参数时，<strong>splice</strong>的<strong>使用语法</strong>为：<code>splice(下标，个数，添加的新项)</code>,因此这种情况我们要拿到添加的新项时需要将<strong>arguments</strong>进行数组分割，而<strong>arguments</strong>是一个<strong>伪数组</strong>，不具有<strong>slice</strong>方法，因此在使用前先用<strong>扩展运算符</strong>将其<strong>转换为一个数组</strong>存储<code>args = [...arguments]</code>，再利用slice分割数组拿到<strong>添加的新项</strong><code>insertItems = Arguments.slice(2)</code></li></ol></li><li><p><strong>具体实现</strong></p><ul><li>array.js</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./utils&quot;</span>

<span class="token comment">// 备份数组原型对象的方法</span>
<span class="token keyword">const</span> arrayPrototype <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype

<span class="token keyword">const</span> methodNames <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;reverse&#39;</span>
<span class="token punctuation">]</span>
<span class="token comment">// 以Array.prototype为原型创建arrMethods对象,并将其暴露</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> arrMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayPrototype<span class="token punctuation">)</span>

methodNames<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">methodName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 备份原来的方法</span>
    <span class="token keyword">const</span> originMethod <span class="token operator">=</span> arrayPrototype<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span>
    <span class="token comment">// 定义新的方法</span>
    <span class="token function">def</span><span class="token punctuation">(</span>arrMethods<span class="token punctuation">,</span>methodName<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 重写数组操作方法使其能被监测</span>
        <span class="token comment">// 调用原生方法操作数据</span>
        <span class="token function">originMethod</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arguments<span class="token punctuation">)</span>
        <span class="token comment">/* 
            因为push/splice/unshift可以向数组中插入数据，因此也需要对这些新添加的数据进行observe监测
            ，因此需要拿到__ob__属性对应的实例，在该实例身上有observeArray方法

            数组对象肯定不是最高层，最高层不能是数组，
            例如main中obj.g是数组，因此第一次遍历的时候g已经被添加了__ob__属性
        */</span>
       <span class="token comment">// 取出数组身上的ob</span>
    
       <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__
       <span class="token comment">// arguments是一个类数组，没有数组的方法，将其转换一下</span>
       <span class="token keyword">let</span> Arguments <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>
       <span class="token comment">// 存储不同方法插入的新项</span>
       <span class="token keyword">let</span> insertItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        <span class="token keyword">switch</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>
            <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>
                insertItems <span class="token operator">=</span> arguments
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>
                <span class="token comment">// splice语法： splice(下标，个数，插入新项)</span>
                insertItems <span class="token operator">=</span> Arguments<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 判断有没有需要插入的新项</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>insertItems<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 有，则对其进行检测</span>
            ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>insertItems<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Observer类</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//目的： 用于将一个普通的object对象的全部属性转换为响应式数据</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> arrMethods <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./array&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> defineReactive <span class="token keyword">from</span> <span class="token string">&quot;./defineReactive&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./utils&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我是Observer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 为obj添加__ob__属性，值为Observer类的实例（this）,并不可枚举</span>
    <span class="token function">def</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;__ob__&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 是数组对象的话就要修改其原型指向，使其优先调用修改后的方法</span>
      Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arrMethods<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 再对数组内部进行遍历，转换响应式</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// object的遍历</span>
  <span class="token function">walk</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将属性转换为响应式</span>
      <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 数组的遍历</span>
  <span class="token function">observeArray</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 逐项observe</span>
        <span class="token function">observe</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="依赖收集" tabindex="-1"><a class="header-anchor" href="#依赖收集" aria-hidden="true">#</a> 依赖收集</h2><ul><li><strong>定义</strong>：需要用到数据的地方，称为<strong>依赖</strong></li><li><strong>发展历程：</strong><ul><li>Vue1.x, <strong>细粒度</strong>依赖，即用到数据的<strong>DOM</strong>都是依赖</li><li>Vue2.x，<strong>中等粒度</strong>依赖，即用到数据的<strong>组件</strong>是依赖</li></ul></li><li><strong>发生位置：</strong><ul><li>在<strong>getter</strong>中<strong>收集</strong>依赖</li><li>在<strong>setter</strong>中<strong>触发</strong>依赖</li></ul></li></ul>`,12),i=[c];function l(u,r){return s(),a("div",null,i)}const d=n(o,[["render",l],["__file","Vue2数据响应式原理.html.vue"]]);export{d as default};
