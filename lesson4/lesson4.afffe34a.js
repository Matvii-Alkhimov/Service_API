function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequirec06f;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){o[t]=e},e.parcelRequirec06f=a);var l=t(a("amrNH")).template({1:function(t,e,n,o,a){var l=t.lambda,r=t.escapeExpression,c=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div class="post" data-id="'+r(l(null!=e?c(e,"id"):e,e))+'">\n<h2>'+r(l(null!=e?c(e,"title"):e,e))+"</h2>\n<p>"+r(l(null!=e?c(e,"description"):e,e))+'</p>\n<div class="post-param-btns">\n    <button class="editPostButton" data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-edit">\n    <svg class="svg-btn" data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-edit">\n        <path data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-edit" d="M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z"></path>\n    </svg>\n    </button>\n    <button class="commentsPostButton" data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-comment">Comments</button>\n    <button class="deletePostButton" data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-delete">\n        <svg class="svg-btn" data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-delete">\n            <path data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-delete" d="M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"></path>\n            <path data-id="'+r(l(null!=e?c(e,"id"):e,e))+'" data-type="btn-delete" d="M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"></path>\n        </svg>\n    </button>\n</div>\n</div>\n'},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,a){var l;return null!=(l=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a,loc:{start:{line:1,column:0},end:{line:20,column:9}}}))?l:""},useData:!0});var r=t(a("amrNH")).template({1:function(t,e,n,o,a){var l,r=null!=e?e:t.nullContext||{},c=t.hooks.helperMissing,s="function",i=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'        <form id="createPostForm" data-type="form-edit">\n        <input type="text" id="titleInput" placeholder="Заголовок" required value="'+i(typeof(l=null!=(l=u(n,"title")||(null!=e?u(e,"title"):e))?l:c)===s?l.call(r,{name:"title",hash:{},data:a,loc:{start:{line:3,column:83},end:{line:3,column:92}}}):l)+'">\n        <textarea id="contentInput" placeholder="Зміст" required>'+i(typeof(l=null!=(l=u(n,"description")||(null!=e?u(e,"description"):e))?l:c)===s?l.call(r,{name:"description",hash:{},data:a,loc:{start:{line:4,column:65},end:{line:4,column:80}}}):l)+'</textarea>\n        <button type="submit" data-type="btn-edit-fin">Змінити пост</button>\n    </form>\n'},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,a){var l;return null!=(l=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?l:""},useData:!0});var c=t(a("amrNH")).template({1:function(t,e,n,o,a){var l,r=t.lambda,c=t.escapeExpression,s=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'    <div class="commentsContainer">\n        <button data-type="close-comments-btn" class="exit-comments-btn">\n            <svg data-type="close-comments-btn" class="exit-btn__svg" viewBox="-100 -100 700 700">\n                <path data-type="close-comments-btn" d="M507.331 411.33c-0.002-0.002-0.004-0.004-0.006-0.005l-155.322-155.325 155.322-155.325c0.002-0.002 0.004-0.003 0.006-0.005 1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688 0.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.080 0.775-4.035 1.984-5.709 3.655 0 0.002-0.002 0.003-0.004 0.005l-155.324 155.326-155.324-155.325c-0.002-0.002-0.003-0.003-0.005-0.005-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-0.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914 0.776 2.080 1.985 4.036 3.656 5.708 0.002 0.001 0.003 0.003 0.005 0.005l155.325 155.324-155.325 155.326c-0.001 0.002-0.003 0.003-0.004 0.005-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-0.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.080-0.776 4.035-1.985 5.708-3.656 0.001-0.002 0.003-0.003 0.005-0.005l155.324-155.325 155.324 155.325c0.002 0.001 0.004 0.003 0.006 0.004 1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342 0.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-0.776-2.080-1.985-4.034-3.657-5.707z"></path>\n            </svg>\n        </button>\n        <h2>'+c(r(null!=e?s(e,"commentsTitle"):e,e))+'</h2>\n        <ul class="comments-list">\n'+(null!=(l=s(n,"each").call(null!=e?e:t.nullContext||{},null!=e?s(e,"comments"):e,{name:"each",hash:{},fn:t.program(2,a,0),inverse:t.noop,data:a,loc:{start:{line:10,column:12},end:{line:12,column:21}}}))?l:"")+'        </ul>\n        <form class="createCommentForm" data-id="'+c(r(null!=e?s(e,"id"):e,e))+'">\n            <input type="text" class="commentInput" id="comment" placeholder="Новий коментар" required>\n            <button data-type="create-comment-form" type="submit">\n                <svg class="send-comment__svg" viewBox="-4 5 40 20">\n                    <path class="send-comment__path" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n                </svg>\n            </button>\n        </form>\n    </div>\n'},2:function(t,e,n,o,a){var l=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'            <li class="comment-item">'+t.escapeExpression(t.lambda(null!=e?l(e,"comment"):e,e))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,o,a){var l;return null!=(l=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?l:""},useData:!0});let s=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");const i={createPostFormEl:document.querySelector("#createPostForm"),createFormContEl:document.querySelector(".form-cont"),postContainerEl:document.querySelector("#postsContainer")};async function u(t){t.preventDefault();try{const e=t.target.dataset.id,n=await fetch(`http://localhost:3000/posts/${e}`),o=(await n.json()).comments,a={comment:document.querySelector(".createCommentForm > input").value},l=[{id:e,comments:[...o,a],commentsTitle:"Коментарі:"}];await d(l,"PATCH",e);const r=Array.from(document.querySelectorAll(".post")).reverse();r.find((t=>t.dataset.id===e)).innerHTML=c(l);document.querySelector(".createCommentForm").addEventListener("submit",u)}catch(t){console.log(t)}}async function d(t,e,n){const o={method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t[0])},a=await fetch(`http://localhost:3000/posts/${n}`,o);return await a.json()}i.createPostFormEl.addEventListener("submit",(async function(t){t.preventDefault();try{const e=[{title:t.currentTarget.elements.titleInput.value,description:t.currentTarget.elements.contentInput.value,id:s(),comments:[]}];await d(e,"POST","");const n=l(e);i.createFormContEl.insertAdjacentHTML("afterend",n),t.target.reset()}catch(t){console.log(t)}})),document.addEventListener("click",(function(t){console.log(t.target.nodeName),"btn-edit"===t.target.dataset.type?async function(t){try{const e=t.target.dataset.id,n=Array.from(document.querySelectorAll(".post")).reverse().find((t=>t.dataset.id===e)),o=await fetch(`http://localhost:3000/posts/${e}`),a=await o.json();n.innerHTML=r([a]),document.querySelector("[data-type='form-edit']").addEventListener("submit",(async t=>{t.preventDefault();try{const o=[{title:t.currentTarget.elements.titleInput.value,description:t.currentTarget.elements.contentInput.value,id:e}],a=l(o);n.insertAdjacentHTML("beforebegin",a),n.remove(),await d(o,"PATCH",e)}catch(t){console.log(t)}}))}catch(t){console.log(t)}}(t):"btn-delete"===t.target.dataset.type?async function(t){const e={method:"DELETE",headers:{"Content-Type":"application/json"}};try{const n=t.target.dataset.id,o=Array.from(document.querySelectorAll(".post")).reverse().find((t=>t.dataset.id===n)),a=await fetch(`http://localhost:3000/posts/${n}`,e),l=await a.json();o.remove()}catch(t){console.log(t)}}(t):"btn-comment"===t.target.dataset.type&&async function(t){t.preventDefault();const e=t.target.dataset.id,n=Array.from(document.querySelectorAll(".post")).reverse().find((t=>t.dataset.id===e)),o=await fetch(`http://localhost:3000/posts/${e}`),a=await o.json(),r=document.querySelector(".commentsContainer");if(null!==r){const t=r.parentNode,e=t.dataset.id,n=await fetch(`http://localhost:3000/posts/${e}`),o=await n.json();t.insertAdjacentHTML("beforebegin",l([o])),t.remove()}0===a.comments.length?a.commentsTitle="Тут немає коментарів...":a.commentsTitle="Коментарі:",n.innerHTML=c([a]),document.querySelector(".createCommentForm").addEventListener("submit",u)}(t)})),async function(){!function(t){const e=l(t);i.postContainerEl.insertAdjacentHTML("beforeend",e)}(await async function(){try{const t=await fetch("http://localhost:3000/posts");return(await t.json()).reverse()}catch(t){console.log(t)}}())}();
//# sourceMappingURL=lesson4.afffe34a.js.map