(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{346:function(t,e,i){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=[],s={js:{fm:"js-assets",title:"*.js",icon:"filetype-js.svg",is_pagers:!1},css:{fm:"css-top",title:"*.css",icon:"filetype-css.svg",is_pagers:!1},image:{fm:"image",title:"Images",icon:"images.svg",is_pagers:!0},media:{fm:"media",title:"Media",icon:"film.svg",is_pagers:!0}};Asp.dynamicListfetch=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(n){if(t.hasAttribute("data-sender")){var s="",c="json",r="GET",d=t.getAttribute("data-sender"),o=d.split("|");d=Asp.getNameFunction(o.shift()),-1!==AspBase.reqestFunctions.indexOf(d)&&0!==o.lenght&&"function"==typeof AspBase[d]&&(s=o.shift(),null!==e&&(i?i+="&action="+e:i="action="+e,"delete"===e&&(c=""),r="POST"),AspBase[d](s,c,r,i).then((function(i){!1!==i&&(null===e?l.add(t,i,!0):"insert"===e?l.add(t,i,!1):null!==a&&("delete"===e?Asp.remove(a):l.update(a,i))),n()})).catch((function(){n()})))}n()}))},AspBase.dynamicListAdd=function(t,e,i){(i=i.closest("[data-dynamic-list]"))&&t&&""!==t&&Asp.dynamicListfetch(i,"insert","src="+t+"&alt="+e)},AspBase.dynamicListEdit=function(t,e,i){var a=(i=i.closest("li")).closest("[data-dynamic-list]"),n=e;i&&a&&i.hasAttribute("data-id")&&i.hasAttribute("data-src")&&t!==i.getAttribute("data-src")&&("image"===a.getAttribute("data-dynamic-list")&&(n=i.querySelector(".name").textContent),Asp.dynamicListfetch(a,"update","id="+Number(i.getAttribute("data-id"))+"&src="+t+"&alt="+n,i))},AspBase.dynamicListDelete=function(){event.preventDefault();var t=event.target.closest("li"),e=t.closest("[data-dynamic-list]");t&&e&&t.hasAttribute("data-id")&&Asp.confirmQuestion({title:"",content:AspLang.isDelete},AspLang.delete).then((function(){var i=t.getAttribute("data-src")||"";""!==i&&(i=i.slice(i.lastIndexOf(".")+1).toLowerCase()),Asp.dynamicListfetch(e,"delete","id="+Number(t.getAttribute("data-id"))+"&ext="+i,t)})).catch((function(){noop()}))};var l={type:null,tmplLi:function(t){if(void 0!==t&&void 0!==t.id&&void 0!==t.src){var e,i=t.name||t.alt||t.title||t.src,a="";return void 0!==t.class&&(a=' class="'+t.class+'"'),e=""===l.type.icon?t.src:"/images/icons-main/icons/"+l.type.icon,'<li data-type="item" data-id="'.concat(t.id,'" data-src="').concat(t.src,'" title="').concat(i,'" ').concat(a,'><img src="').concat(e,'" alt="').concat(i,'">\n                <span class="name">').concat(i,'</span>\n                <span class="tools">\n                    <button class="btn" data-type="').concat(l.type.fm,'" onclick="AspFM.open()" callback="dynamic-list-edit">\n                        <i style="background-image:url(\'/images/icons-main/icons/pencil-square.svg\')"></i>\n                    </button>\n                    <button class="btn" onclick="AspBase.dynamicListDelete()" title="').concat(AspLang.delete,'"><i style="background-image:url(\'/images/icons-main/icons/trash.svg\')"></i></button>\n                </span>\n            </li>')}return""},tmplBox:function(t){var e=null,i="",a=AspLang.add+" "+AspLang.file+" ("+l.type.title+")";if(t&&void 0!==t){if(!0===l.type.is_pagers&&(i='<div class="data-length"></div>'),!1===t.classList.contains("data-lists-wrapper")){var n=t.querySelector(".data-lists-wrapper");null===n&&(t.insertAdjacentHTML("beforeend",'<div class="data-lists-wrapper"></div>'),n=t.querySelector(".data-lists-wrapper")),t=n,n=null}t.insertAdjacentHTML("afterbegin",'<div class="box">\n               <button class="btn btn-outline-secondary" data-type="'.concat(l.type.fm,'" onclick="AspFM.open()" callback="dynamic-list-add">\n                  <img src="/images/icons-main/icons/plus-square.svg"> ').concat(a,"\n               </button>").concat(i,'\n               <div class="data-filter">\n                  <label>').concat(AspLang.filter,': <input type="search" placeholder="').concat(AspLang.filter,'"></label>\n               </div>\n            </div>')),(e=document.createElement("UL")).className="todo-list data-list",e.setAttribute("data-filter","name"),t.insertAdjacentElement("beforeend",e)}return e},setHash:function(t){if(t){if(void 0!==t.id)return t.id;if(void 0!==t.src)return void 0!==Asp.Sha1&&void 0!==Asp.Sha1.hash?Asp.Sha1.hash(t.src):t.src.hashCode()}return 0},getType:function(t){l.type=null;var e="",i=t.indexOf("-");-1!==i&&(e=t,t=t.slice(0,i)),t&&void 0!==s[t]&&s[t]&&(l.type=Object.assign({},s[t]),""!==e&&(l.type.fm=e))},update:function(t,e){if(t&&"object"===a(e)){var i=t.closest("[data-dynamic-list]");if(i){if(l.getType(i.getAttribute("data-dynamic-list")),!l.type||void 0===l.type)return;t.outerHTML=l.tmplLi(e)}}l.type=null},addItem:function(t,e){return e.id=l.setHash(e),t.push(e),l.tmplLi(e)},add:function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t){var a=0,s="",c=null;if(t.hasAttribute("data-dynamic-list")||(t=t.closest("[data-dynamic-list]")),!t)return;if(l.getType(t.getAttribute("data-dynamic-list")),!l.type||void 0===l.type)return;if(null!==(c=t.querySelector("ul"))&&(a=t.hasAttribute("asp-dynamic-list")?Number(t.getAttribute("asp-dynamic-list").toString().trim()):0),0===a&&(n.lenght&&(a=n.lenght),n.lenght=a+1,n[a]=[],t.setAttribute("asp-dynamic-list",a),!0===i&&(null!==c&&(t.removeChild(c),c=null),c=l.tmplBox(t))),null!==c&&void 0!==e){var r=n[a];if(Asp.isArray(e))for(var d,o=0,u=e.length;o<u;)d=e[o],s+=l.addItem(r,d),o++;else s=l.addItem(r,e);""!==s&&(c.insertAdjacentHTML("beforeend",s),Asp.dataSortingAndFilter(t,"ul","li"))}}l.type=null},build:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t&&!t.hasAttribute("asp-dynamic-list")){if(null!==e&&Asp.isArray(e))return void l.add(t,e);if(t.hasAttribute("data-loader")){var i=t.getAttribute("data-loader").toString().trim();t.removeAttribute("data-loader"),""!==i&&(t.setAttribute("data-sender",i),Asp.dynamicListfetch(t))}}}};AspBase.buildDynamicList=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=t.querySelectorAll("[data-dynamic-list]"),i=0,a=e.length;i<a;)l.build(e[i]),i++}}},[[346,0]]]);