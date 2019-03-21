# learn-zhihu

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 学习笔记
### vuex

核心是 store（仓库），包含着你的应用中大部分的**状态 (state)**

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新
- **改变 store 中的状态**的**唯一途径**就是显式地**提交 (commit) mutation**

Vuex 使用**单一状态树**——是的，用一个对象就包含了全部的应用层级状态



mapState——解决的问题：当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余



### import时如何正确使用花括号'{ }'

假如有一个`B.js`，想要通过`import`语法引用模块`A.js：

**B如何使用取决于当A.js如何导出**

情形一：A使用默认导出

1. `// A.js`
2. export default 

B 引用：

1. //  B.js
2. import A **from** './A'
3. import  [MyA](https://www.baidu.com/s?wd=MyA&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd) **from** './A'
4. import Something **from** './A'

情形二：A使用**命名**导出

**export** **const** A = 42

B引用：

// B.js
import { A } from './A'                 // 正确，因为A.js中有命名为A的export

import { myA } from './A'               // 错误！因为A.js中没有命名为myA的export
import { Something } from './A'         // 错误！因为A.js中没有命名为Something的export



### npm install、npm install --save的区别

相同点：会把X包安装到node_modules目录中

不同点：

- npm install XXX，不会修改package.json，而 -- save 会在package.json的dependencies属性下添加X

### computed 计算属性

computed 计算属性：computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，[大小写转换](https://www.baidu.com/s?wd=%E5%A4%A7%E5%B0%8F%E5%86%99%E8%BD%AC%E6%8D%A2&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)，顺序重排，添加符号……。这样可以不污染数据源。



计算属性会依赖于使用它的`data`属性，只要是依赖的`data`属性值有变动，则自定义重新调用计算属性执行一次



计算属性的值是直接从缓存中获取，而不是重新编译执行一次，因而其性能要高一些



计算属性默认只有`getter`，不过在需要时你也可以提供一个`setter`


