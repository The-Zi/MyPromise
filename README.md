# MyPromise
`v1.0.0`<br>
ES6中构造函数 Promise 的ES5实现。<br>
<br>
<br>

# Install/安装
克隆这个项目的源码或者下载压缩文件文件后，引入build文件夹内的 `MyPromise.mini.js` 即安装完成。<br>
<pre>
<script src="you path/MyPromise.mini.js"></script>
</pre>
<br>

# Using/使用
MyPromise是使用ES5版本的原生JS语言编写的，并不需要其它依赖只需要在使用前引入它就可以了。<br>
引入MyPromise.mini.js之后，就可以通过`new`关键字使用构造。<br>
具体用法与ES6中的Promise一致，具体使用方法参见ES6文档，这里不再叙述。<br>
[ECMAScript6 Promise对象](http://es6.ruanyifeng.com/#docs/promise)<br>
<br>
<br>

# Develop/开发
本插件开发过程中，使用了Gulp作为构建工具，并使用以下的Gulp插件:
* gulp-uglifyjs  // 压缩并丑化JS代码
* gulp-rename  // 文件重命名，为压缩后的文件添加.mini后缀

下载本插件源码之后，执行：
<pre>npm install</pre>
如果你使用的是 cnpm 则是：
<pre>cnpm install</pre>
安装完所有依赖之后，即可运行开发模式。<br>
<br>
源码中自带的`gulpfile.j`s文件定义了一个`Gulp的默认任务`，只需在命令行中执行:
<pre>gulp</pre>
就会监视`./working/MyPromise.js`文件的变动，一单发生变动就会自动执行代码压缩丑化和重命名，导出文件到`./build/`文件夹内。
<br>
<br>
[My blogs/我的博客](http://www.the-zi.com/)<br>