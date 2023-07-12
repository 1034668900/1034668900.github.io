import{_ as e,p as i,q as l,a1 as a}from"./framework-6700cb35.js";const r={},h=a('<h1 id="网页的渲染" tabindex="-1"><a class="header-anchor" href="#网页的渲染" aria-hidden="true">#</a> 网页的渲染</h1><h2 id="浏览器在渲染页面时做了哪些事" tabindex="-1"><a class="header-anchor" href="#浏览器在渲染页面时做了哪些事" aria-hidden="true">#</a> 浏览器在渲染页面时做了哪些事?</h2><ol><li>加载页面的html和css源码</li><li>html转换为DOM，css转换为CSSOM</li><li>将DOM和CSSOM构建成一棵渲染树</li><li>对渲染树进行reflow(回流、重排)(即<strong>计算元素位置</strong>)</li><li>对网页进行绘制repaint(重绘)</li></ol><h2 id="渲染树-render-tree" tabindex="-1"><a class="header-anchor" href="#渲染树-render-tree" aria-hidden="true">#</a> 渲染树(Render Tree)</h2><ol><li>从根元素开始检查可见元素，以及他们的样式</li><li>忽略不可见元素(display: none) 注意：visibility:hidden的元素会被加入到渲染数，因为它只是隐藏，并非不展示，它在网页中还是要占位的</li><li>对所有的可见元素进行样式匹配</li></ol><h2 id="重排、回流-reflow" tabindex="-1"><a class="header-anchor" href="#重排、回流-reflow" aria-hidden="true">#</a> 重排、回流(reflow)</h2><ol><li>计算渲染树中元素的大小和位置</li><li>当页面中的元素大小或位置发生变化时，浏览器就会对页面进行重排(回流）</li><li>重排一定会引起重绘</li><li>重排也不可避免，但是重排应尽量减少，重排是对系统资源耗费很大的操作，重排次数过多后会导致网页显示性能下降</li></ol><h2 id="如何减少重排" tabindex="-1"><a class="header-anchor" href="#如何减少重排" aria-hidden="true">#</a> 如何减少重排？</h2><ul><li><p>可以通过修改class来间接修改样式，从而减少重排次数</p></li><li><p>在现代前端的框架中，这些东西都已经被优化过了(虚拟DOM)! 因此使用Vue、React这些框架进行开发时，几乎不用考虑这些问题，唯独需要注意的是尽量减少在框架中直接操作原生DOM</p></li></ul><h2 id="重绘-repaint" tabindex="-1"><a class="header-anchor" href="#重绘-repaint" aria-hidden="true">#</a> 重绘(repaint)</h2><ol><li>绘制页面</li><li>当页面发生变化时，浏览器就会对页面进行重绘</li><li>重绘不可避免</li></ol>',11),t=[h];function d(n,o){return i(),l("div",null,t)}const c=e(r,[["render",d],["__file","网页渲染.html.vue"]]);export{c as default};
