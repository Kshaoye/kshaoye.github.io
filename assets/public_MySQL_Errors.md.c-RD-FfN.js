import{_ as s,o as a,c as n,R as p}from"./chunks/framework.lRpTLXAH.js";const y=JSON.parse('{"title":"MySQL常见错误","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"public/MySQL/Errors.md","filePath":"public/MySQL/Errors.md"}'),e={name:"public/MySQL/Errors.md"},l=p(`<h1 id="mysql常见错误" tabindex="-1">MySQL常见错误 <a class="header-anchor" href="#mysql常见错误" aria-label="Permalink to &quot;MySQL常见错误&quot;">​</a></h1><h2 id="_1045" tabindex="-1">1045 <a class="header-anchor" href="#_1045" aria-label="Permalink to &quot;1045&quot;">​</a></h2><p>产生MySQL1045错误的原因有很多，这里主要针对MySQL8命令行客户端可以正常登录，但是Navicat连接时报1045的情况提供解决方法。</p><p>报错信息：</p><p><code>1045 - Access denied for user ‘root’@‘localhost’ (using password: YES)</code></p><p>产生原因：</p><p>MySQL8关闭了root用户的登录</p><p>解决方案：</p><p>通过命令行登录后重设密码，具体步骤如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 进入MySQL数据库</span></span>
<span class="line"><span>use mysql;</span></span>
<span class="line"><span># 重置密码</span></span>
<span class="line"><span>update user</span></span>
<span class="line"><span>set authentication_string=password(&#39;新密码&#39;)</span></span>
<span class="line"><span>where user=(&#39;root&#39;)</span></span>
<span class="line"><span># 刷新数据块</span></span>
<span class="line"><span>flush mysql;</span></span>
<span class="line"><span># 退出</span></span>
<span class="line"><span>quit</span></span></code></pre></div><p>重设密码后再次尝试连接即可</p><h2 id="_2059" tabindex="-1">2059 <a class="header-anchor" href="#_2059" aria-label="Permalink to &quot;2059&quot;">​</a></h2><p>产生原因： mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password</p><p>解决方案： 通过命令行进入登录后根据以下步骤操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 进入MySQL数据库</span></span>
<span class="line"><span>use mysql;</span></span>
<span class="line"><span># 修改加密规则</span></span>
<span class="line"><span>alter user &#39;root&#39;@&#39;localhost&#39;</span></span>
<span class="line"><span>identified with mysql_native_password</span></span>
<span class="line"><span>by &#39;你的密码&#39;;</span></span>
<span class="line"><span># 刷新权限</span></span>
<span class="line"><span>flush privileges;</span></span></code></pre></div>`,15),t=[l];function i(o,c,r,d,h,_){return a(),n("div",null,t)}const m=s(e,[["render",i]]);export{y as __pageData,m as default};
