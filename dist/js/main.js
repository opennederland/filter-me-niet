!function e(t,n,a){function o(i,s){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(r)return r(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};t[i][0].call(d.exports,(function(e){return o(t[i][1][e]||e)}),d,d.exports,e,t,n,a)}return n[i].exports}for(var r="function"==typeof require&&require,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(e,t,n){"use strict";var a=e("toggle-selection"),o={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(e,t){var n,r,i,s,c,l,d=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),s=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),void 0===a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(a){n&&console.error("unable to copy using execCommand: ",a),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(a){n&&console.error("unable to copy using clipboardData: ",a),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),l&&document.body.removeChild(l),i()}return d}},{"toggle-selection":2}],2:[function(e,t,n){t.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},{}],3:[function(e,t,n){"use strict";var a;e("./polyfills/forEach");new(((a=e("./modules/Steps"))&&a.__esModule?a:{default:a}).default)},{"./modules/Steps":4,"./polyfills/forEach":5}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("../../../translations")),o=r(e("copy-to-clipboard"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isDone=[],this.contactName="",this.contactPseudonym="",this.contactContact="",this.contactVerifiedUrl="",this.timeout=null,this.init(),this.setEvents()}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.steps=document.querySelectorAll("[data-step]")}},{key:"setEvents",value:function(){var e=this;this.steps.forEach((function(t,n){n<e.steps.length-1&&(t.querySelectorAll(".c-form-option").forEach((function(t){var a=t.querySelector("label"),o=t.querySelector("input");a.addEventListener("click",(function(t){t.stopPropagation(),o&&(e.setDone(n),e.setActive(e.isDone.length))}))})),t.addEventListener("change",(function(a){e.setDone(n),e.setValue(t,a),e.setActive(e.isDone.length)}))),t.querySelector(".c-step__label").addEventListener("click",(function(a){t.classList.contains("is-done")&&e.setActive(n)}),!1);var a=t.querySelector(".c-step__info-toggle");a&&a.addEventListener("click",(function(){t.classList.toggle("show-info")}),!1),document.querySelector('select[name="language"]').addEventListener("change",(function(t){e.createDeclarationOfIntent()}))})),document.querySelector("[data-copy]").addEventListener("click",(function(t){t.preventDefault(),e.copyDeclarationOfIntent()})),document.querySelector("[data-contact-name]").addEventListener("input",(function(t){e.contactName=t.target.value,e.createDeclarationOfIntent()})),document.querySelector("[data-contact-pseudonym]").addEventListener("input",(function(t){e.contactPseudonym=t.target.value,e.createDeclarationOfIntent()})),document.querySelector("[data-contact-contact]").addEventListener("input",(function(t){e.contactContact=t.target.value,e.createDeclarationOfIntent()})),document.querySelector("[data-contact-verified]").addEventListener("input",(function(t){e.contactVerifiedUrl=t.target.value,e.createDeclarationOfIntent()}))}},{key:"setActive",value:function(e){var t=this,n=this.steps[e];n&&(this.steps.forEach((function(n,a){e!==a&&(n.classList.remove("is-active"),t.isDone.includes(a)&&n.classList.add("is-done"))})),n.classList.remove("is-done"),n.classList.add("is-active"))}},{key:"setDone",value:function(e){var t=this.steps[e];t&&(t.classList.remove("is-active"),t.classList.add("is-done"),this.isDone.includes(e)||this.isDone.push(e))}},{key:"setValue",value:function(e,t){var n=t.target.name,a=t.target.value,o={upload_type:"Ik upload <strong>[value]</strong>",personal_data:"Ik stuur <strong>[value]</strong> persoonsgegevens mee"};e.querySelector("[data-step-value]")&&n in o&&(e.querySelector("[data-step-value]").innerHTML="upload_type"===n?o[n].replace("[value]",{image_video:"Beeld",audio:"Geluid",text_code:"Tekst"}[a]):"personal_data"===n?o[n].replace("[value]",{anonymous:"Anoniem",basic:"Basis",verified:"Verified"}[a]):o[n].replace("[value]",a)),e.querySelector("[data-step-value]")&&"conditions"===n&&("share"===a?e.querySelector("[data-step-value]").innerHTML="Mijn werk mag worden <strong>gedeeld</strong>":"share_edit"===a?e.querySelector("[data-step-value]").innerHTML="Mijn werk mag worden <strong>gedeeld</strong> en <strong>bewerkt</strong>":"share_commercial"===a?e.querySelector("[data-step-value]").innerHTML="Mijn werk mag worden <strong>gedeeld</strong> en mag gebruikt worden voor <strong>commerciële</strong> doeleinden.":"share_edit_commercial"===a?e.querySelector("[data-step-value]").innerHTML="Mijn werk mag worden <strong>gedeeld</strong>, <strong>bewerkt</strong> en mag gebruikt worden voor <strong>commerciële</strong> doeleinden.":"none"===a&&(e.querySelector("[data-step-value]").innerHTML="Mijn werk mag <strong>niet</strong> worden gedeeld")),this.setContactFields(e,t),this.createDeclarationOfIntent()}},{key:"setContactFields",value:function(e,t){var n=t.target.name,a=t.target.value,o=document.querySelector("[data-contact-name]"),r=document.querySelector("[data-contact-pseudonym]"),i=document.querySelector("[data-contact-contact]"),s=document.querySelector("[data-contact-verified]");"personal_data"===n&&("anonymous"===a&&(o.classList.add("is-hidden"),r.classList.remove("is-hidden"),i.classList.remove("is-hidden"),s.classList.add("is-hidden")),"basic"===a&&(o.classList.remove("is-hidden"),r.classList.add("is-hidden"),i.classList.remove("is-hidden"),s.classList.add("is-hidden")),"verified"===a&&(o.classList.remove("is-hidden"),r.classList.add("is-hidden"),i.classList.remove("is-hidden"),s.classList.remove("is-hidden")))}},{key:"createDeclarationOfIntent",value:function(){this.declarationOfIntent="";var e=document.querySelector('select[name="language"]').value||"nl",t=document.querySelector('input[name="upload_type"]:checked'),n=document.querySelector('input[name="personal_data"]:checked'),o=document.querySelector('input[name="conditions"]:checked');t&&a.default.upload_type[t.value][e]&&(this.declarationOfIntent+=a.default.upload_type[t.value][e]),o&&a.default.conditions[o.value][e]&&(this.declarationOfIntent+=" ".concat(a.default.conditions[o.value][e])),n&&("basic"===n.value?this.declarationOfIntent+=" Contact: ".concat([this.contactName,this.contactContact].filter(Boolean).join(", ")):"verified"===n.value?this.declarationOfIntent+=" Contact: ".concat([this.contactName,this.contactContact,this.contactVerifiedUrl].filter(Boolean).join(", ")):"anonymous"===n.value&&(this.declarationOfIntent+=" Contact: ".concat([this.contactPseudonym,this.contactContact].filter(Boolean).join(", ")))),document.querySelector("[data-declaration-of-intent]").innerText=this.declarationOfIntent}},{key:"copyDeclarationOfIntent",value:function(){var e="Kopieer intentieverklaring",t="Gekopieerd naar klembord!",n=document.querySelector("[data-copy] strong");this.timeout&&clearTimeout(this.timeout),(0,o.default)(this.declarationOfIntent),n.innerText=t,this.timeout=setTimeout((function(){n.innerText=e}),1500)}}])&&i(t.prototype,n),r&&i(t,r),e}();n.default=s},{"../../../translations":6,"copy-to-clipboard":1}],5:[function(e,t,n){"use strict";"undefined"!=typeof NodeList&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)},{}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={upload_type:{image_video:{nl:"Op deze foto/video rusten auteurs- en andere rechten waar ik eigenaar van ben.",en:"This picture/video is copyright protected and I own all related rights."},audio:{nl:"Op dit geluidsfragment rusten auteurs- en andere rechten waar ik eigenaar van ben.",en:"This audio file is copyright protected and I own all related rights."},text_code:{nl:"Op deze tekst rusten auteurs- en andere rechten waar ik eigenaar van ben.",en:"This text document is copyright protected and I own all related rights."}},personal_data:{Anoniem:"Anoniem",Basis:"Basis",Verified:"Verified"},conditions:{share:{nl:"Je mag dit werk kosteloos met anderen delen behalve als jij of iemand anders er commercieel beter van wordt. Neem bij twijfel eerst contact met mij op. En als je het deelt, zet er dan mijn naam bij als de eigenaar van het werk.",en:"You can freely share this work for non-commercial purposes. When in doubt, please contact me first. And please credit me as the owner of this work."},share_edit:{nl:"Je mag dit werk kosteloos bewerken en met anderen delen behalve als jij of iemand anders er commercieel beter van wordt. Neem bij twijfel eerst contact met mij op. En als je het bewerkt en/of deelt, zet er dan mijn naam bij als de eigenaar van het werk.",en:"You can freely  adapt and/or share this work for non-commercial purposes. When in doubt, please contact me first. And please credit me as the owner of this work."},share_commercial:{nl:"Je mag dit werk kosteloos met anderen delen zelfs voor commerciële doeleinden Vermeld wel altijd mijn naam als de eigenaar van het werk.",en:"You can freely share this work even for commercial purposes. Make sure to credit me as the owner of this work."},share_edit_commercial:{nl:"Je mag dit werk kosteloos bewerken en met anderen delen zelfs voor commerciële doeleinden. Vermeld wel altijd mijn naam als de eigenaar van het werk.",en:"You can freely adapt, share and build upon this work even for commercial purposes. Make sure to credit me as the owner of this work."},none:{nl:"Wil je dit werk bewerken, delen of hergebruiken? Zonder mijn schriftelijke toestemming is dit niet toegestaan dus neem svp eerst contact met mij op.",en:"Without my written consent you are not allowed to adapt, share or build upon my work. So please contact me if you are interested in using or sharing my work."}}}},{}]},{},[3]);