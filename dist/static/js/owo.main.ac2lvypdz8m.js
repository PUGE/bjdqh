// build by owo frame!
// Wed May 15 2019 14:17:02 GMT+0800 (GMT+08:00)

"use strict";

window.owo = {
  // 页面数据和方法
  script: {
    "home": {
      "data": {},
      "template": {
        "swiper": {
          "created": function created() {
            setTimeout(function () {
              new Swiper('.swiper-container', {
                autoplay: 3000,
                pagination: '.pagination-pPX8XxuUyIehAAEu',
                paginationClickable: true
              });
              setTimeout(function () {
                var dom = document.getElementsByClassName('pagination-pPX8XxuUyIehAAEu')[0];
                dom.style.width = dom.children.length * 22 + 'px';
              }, 100);
            }, 0);
          },
          "prop": {
            "name": "swiper",
            "src": "./src/module/swiper.owo"
          }
        },
        "imageBar": {
          "created": function created(params) {
            this.$el.style.backgroundImage = "url('".concat(this.prop.imgsrc, "')");
          },
          "prop": {
            "name": "imageBar",
            "text": "党旗边疆红",
            "imgsrc": "data:image/png;base64,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",
            "src": "./src/module/imageBar.owo"
          }
        },
        "imageBar2": {
          "created": function created(params) {
            this.$el.style.backgroundImage = "url('".concat(this.prop.imgsrc, "')");
          },
          "prop": {
            "name": "imageBar2",
            "text": "视频报道",
            "imgsrc": "data:image/png;base64,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",
            "src": "./src/module/imageBar.owo"
          }
        },
        "imageBar3": {
          "created": function created(params) {
            this.$el.style.backgroundImage = "url('".concat(this.prop.imgsrc, "')");
          },
          "prop": {
            "name": "imageBar3",
            "text": "直击现场",
            "imgsrc": "data:image/png;base64,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",
            "src": "./src/module/imageBar.owo"
          }
        },
        "imageBar4": {
          "created": function created(params) {
            this.$el.style.backgroundImage = "url('".concat(this.prop.imgsrc, "')");
          },
          "prop": {
            "name": "imageBar4",
            "text": "高清全记录",
            "imgsrc": "data:image/png;base64,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",
            "src": "./src/module/imageBar.owo"
          }
        },
        "swiper2": {
          "created": function created() {
            setTimeout(function () {
              $('.p6_content ul').roundabout({
                easing: 'easeOutInCirc',
                duration: 600,
                btnNext: ".next",
                btnPrev: ".prev"
              });
            }, 0);
          },
          "prop": {
            "name": "swiper2",
            "src": "./src/module/swiper2.owo"
          }
        }
      }
    },
    "topBar": {
      "prop": {
        "name": "topBar",
        "src": "https://owo.ink/public/7d7233398a2d8e3dbfe0c51db7158223.page"
      }
    },
    "titleBar": {
      "prop": {
        "name": "titleBar",
        "src": "./src/module/titleBar.owo"
      }
    },
    "newsList": {
      "prop": {
        "name": "newsList",
        "src": "./src/module/newsList.owo"
      }
    },
    "newsCard": {
      "prop": {
        "name": "newsCard",
        "src": "./src/module/newsCard.owo"
      }
    },
    "copyright": {
      "prop": {
        "name": "copyright",
        "src": "https://owo.ink/public/1a09200bec9534a889b83834094ecb3e.page"
      }
    }
  },
  // 页面默认入口
  entry: "home"
};

"use strict";function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}if(!owo){console.error('没有找到owo核心!');}// 注册owo默认变量
// 框架状态变量
owo.state={};// 框架全局变量
owo.global={};// 全局方法变量
owo.tool={};// 便捷的获取工具方法
var $tool=owo.tool;var $data={};// 框架核心函数
var _owo={};// 对象合并方法
_owo.assign=function(a,b){var newObj={};for(var key in a){newObj[key]=a[key];}for(var key in b){newObj[key]=b[key];}return newObj;};// 运行页面所属的方法
_owo.handlePage=function(pageName,entryDom){_owo.handleEvent(entryDom);// 判断页面是否有自己的方法
var newPageFunction=window.owo.script[pageName];if(!newPageFunction)return;// console.log(newPageFunction)
// 如果有created方法则执行
if(newPageFunction.created){// 注入运行环境
newPageFunction.created.apply(_owo.assign(newPageFunction,{$el:entryDom,data:newPageFunction.data,activePage:window.owo.activePage}));}// 判断页面是否有下属模板,如果有运行所有模板的初始化方法
for(var key in newPageFunction.template){var templateScript=newPageFunction.template[key];if(templateScript.created){// 获取到当前配置页的DOM
// 待修复,临时获取方式,这种方式获取到的dom不准确
var domList=entryDom.getElementsByClassName('o-'+key);if(domList.length!==1){console.error('我就说会有问题吧!');console.log(domList);}// 为模板注入运行环境
templateScript.created.apply(_owo.assign(newPageFunction.template[key],{$el:domList[0],data:templateScript.data,activePage:window.owo.activePage}));}}};// owo-name处理
_owo.handleEvent=function(tempDom,templateName){// console.log(templateName)
var activePage=window.owo.script[owo.activePage];for(var ind=0;ind<tempDom.attributes.length;ind++){var attribute=tempDom.attributes[ind];// 判断是否为owo的事件
// ie不支持startsWith
if(attribute.name[0]=='@'){var eventName=attribute.name.slice(1);var eventFor=attribute.textContent;switch(eventName){case'show':{// 初步先简单处理吧
var temp=eventFor.replace(/ /g,'');// 取出条件
var condition=temp.split("==");if(activePage.data[condition[0]]!=condition[1]){tempDom.style.display='none';}break;}default:{tempDom["on"+eventName]=function(event){// 因为后面会对eventFor进行修改所以使用拷贝的
var eventForCopy=eventFor;// 判断页面是否有自己的方法
var newPageFunction=window.owo.script[window.owo.activePage];// console.log(this.attributes)
if(templateName){// 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
if(newPageFunction.template){newPageFunction=newPageFunction.template[templateName];}else{eval(eventForCopy);return;}}// 待优化可以单独提出来
// 取出参数
var parameterArr=[];var parameterList=eventForCopy.match(/[^\(\)]+(?=\))/g);if(parameterList&&parameterList.length>0){// 参数列表
parameterArr=parameterList[0].split(',');// 进一步处理参数
for(var i=0;i<parameterArr.length;i++){var parameterValue=parameterArr[i].replace(/(^\s*)|(\s*$)/g,"");// console.log(parameterValue)
// 判断参数是否为一个字符串
if(parameterValue.charAt(0)==='"'&&parameterValue.charAt(parameterValue.length-1)==='"'){parameterArr[i]=parameterValue.substring(1,parameterValue.length-1);}if(parameterValue.charAt(0)==="'"&&parameterValue.charAt(parameterValue.length-1)==="'"){parameterArr[i]=parameterValue.substring(1,parameterValue.length-1);}// console.log(parameterArr[i])
}eventForCopy=eventForCopy.replace('('+parameterList+')','');}else{// 解决 @click="xxx()"会造成的问题
eventForCopy=eventForCopy.replace('()','');}// console.log(newPageFunction)
// 如果有方法,则运行它
if(newPageFunction[eventForCopy]){// 绑定window.owo对象
// console.log(tempDom)
// 待测试不知道这样合并会不会对其它地方造成影响
newPageFunction.$el=this;newPageFunction.$event=event;newPageFunction[eventForCopy].apply(newPageFunction,parameterArr);}else{// 如果没有此方法则交给浏览器引擎尝试运行
eval(eventForCopy);}};}}}}// 递归处理所有子Dom结点
for(var i=0;i<tempDom.children.length;i++){var childrenDom=tempDom.children[i];// console.log(childrenDom)
var newTemplateName=templateName;if(tempDom.attributes['template']&&tempDom.attributes['template'].textContent){newTemplateName=tempDom.attributes['template'].textContent;}// console.log(newTemplateName)
_owo.handleEvent(childrenDom,newTemplateName);}};// 便捷选择器
if(window.jQuery==undefined){window.$=function(query){var type=_typeof(query);switch(type){// 如果是一个函数,那么代表这个函数需要在页面加载完毕后运行
case'function':{setTimeout(function(){// 将需要运行的函数添加到待运行队列中
if(window.owo.state.created==undefined)window.owo.state.created=[];window.owo.state.created.push(query);// 如果页面已经处于准备就绪状态,那么直接运行代码
if(window.owo.state.isRrady){query();}},1000);break;}case'string':{var domList=document.querySelectorAll(query);return domList?domList:[];}}};}else{// 因为jquery没有foreach方法 所以需要给他加上
jQuery.fn.forEach=function(objec){for(var index=0;index<this.length;index++){var element=this[index];objec(element);}};}// 跳转到指定页面
function $go(pageName,inAnimation,outAnimation,param){owo.state.animation={"in":inAnimation,"out":outAnimation};var paramString='';if(param&&_typeof(param)=='object'){paramString+='?';// 生成URL参数
for(var paramKey in param){paramString+=paramKey+'='+param[paramKey]+'&';}// 去掉尾端的&
paramString=paramString.slice(0,-1);}window.location.href=paramString+"#"+pageName;}function $change(key,value){// 更改对应的data
owo.script[owo.activePage].data[key]=value;// 当前页面下@show元素列表
var showList=document.getElementById('o-'+owo.activePage).querySelectorAll('[\\@show]');showList.forEach(function(element){// console.log(element)
var order=element.attributes['@show'].textContent;// console.log(order)
// 去掉空格
order=order.replace(/ /g,'');if(order==key+'=='+value){element.style.display='';}else{element.style.display='none';}});}// 页面资源加载完毕事件
_owo.ready=function(){var page=owo.entry;window.owo.activePage=page;// 更改$data链接
$data=owo.script[page].data;var entryDom=document.getElementById('o-'+page);if(entryDom){_owo.handlePage(page,entryDom);}else{console.error('找不到页面入口! 设置的入口为: '+page);}// 设置状态为dom准备完毕
window.owo.state.isRrady=true;// 判断是否有需要运行的其他方法
if(window.owo.state.created!=undefined){window.owo.state.created.forEach(function(element){// 运行对应的方法
element();});}};/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */_owo.whenReady=function(){//这个函数返回whenReady()函数
var funcs=[];//当获得事件时，要运行的函数
var ready=false;//当触发事件处理程序时,切换为true
//当文档就绪时,调用事件处理程序
function handler(e){if(ready)return;//确保事件处理程序只完整运行一次
//如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
if(e.type==='onreadystatechange'&&document.readyState!=='complete'){return;}//运行所有注册函数
//注意每次都要计算funcs.length
//以防这些函数的调用可能会导致注册更多的函数
for(var i=0;i<funcs.length;i++){funcs[i].call(document);}//事件处理函数完整执行,切换ready状态, 并移除所有函数
ready=true;funcs=null;}//为接收到的任何事件注册处理程序
if(document.addEventListener){document.addEventListener('DOMContentLoaded',handler,false);document.addEventListener('readystatechange',handler,false);//IE9+
window.addEventListener('load',handler,false);}else if(document.attachEvent){document.attachEvent('onreadystatechange',handler);window.attachEvent('onload',handler);}//返回whenReady()函数
return function whenReady(fn){if(ready){fn.call(document);}else{funcs.push(fn);}};}();_owo.whenReady(_owo.ready);function switchPage(oldUrlParam,newUrlParam){var oldPage=oldUrlParam.split('&')[0];var newPage=newUrlParam.split('&')[0];// 查找页面跳转前的page页(dom节点)
// console.log(oldUrlParam)
// 如果源地址获取不到 那么一般是因为源页面为首页
if(oldPage===undefined){oldPage=owo.entry;}var oldDom=document.getElementById('o-'+oldPage);if(oldDom){// 隐藏掉旧的节点
oldDom.style.display='none';}// 查找页面跳转后的page
var newDom=document.getElementById('o-'+newPage);// console.log(newDom)
if(newDom){// 隐藏掉旧的节点
newDom.style.display='block';}else{console.error('页面不存在!');return;}window.owo.activePage=newPage;// 更改$data链接
$data=owo.script[newPage].data;_owo.handlePage(newPage,newDom);}