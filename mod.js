var e={494:(e,t,o)=>{o.d(t,{D:()=>n,r:()=>a});const r=["download","href","hreflang","ping","referrerpolicy","rel","target","type"];function n(e){for(const t of e.querySelectorAll("a")){const e=document.createElement("span");for(const{name:o,value:n}of t.attributes)if(!r.includes(o))try{e.setAttribute(o,n)}catch(e){console.log(e)}for(const o of t.childNodes)e.append(o);t.replaceWith(e)}return e}function a(e){return"heading"===e?"section":"equation"===e?"eq":e}},590:(e,t,o)=>{o.r(t),o.d(t,{gen:()=>n});var r=o(494);function n(e={}){return async(t,o)=>{const n=o.context.unitToId.get(t);if(void 0===n)return o.createErrorElement("Error");const a=o.context.idToIndexInfo[n];if(void 0===a)return o.createErrorElement("Error");let s;const i=e.reverse?document.createElement("div"):document.createElement("span"),c=document.createElement("span"),p=document.createElement("span"),d=document.createElement("span"),l=document.createElement("span");i.classList.add("caption"),c.classList.add("content"),p.classList.add("tag"),d.classList.add("mark"),l.classList.add("desc");const g=o.extractor.extractLastGlobalOption("tag",t.tag,o.context.tagToGlobalOptions);p.textContent=(0,r.r)("string"==typeof g?g:t.tag);const u=!0===(t.options.block??o.extractor.extractLastGlobalOption("block",t.tag,o.context.tagToGlobalOptions));u||!e.inline?(s=document.createElement("div"),c.append(await o.compileSTDN(t.children))):(s=document.createElement("span"),c.append(await o.compileInlineSTDN(t.children))),!u&&e.noCapitalize||s.classList.add("capitalize-tag"),e.noTag&&s.classList.add("no-tag"),e.reverse?(s.append(c),s.append(i)):(s.append(i),s.append(c)),i.append(p),i.append(d),i.append(l);const{mark:m,desc:f}=t.options;return Array.isArray(m)?d.append(await o.compileInlineSTDN(m)):d.textContent="string"==typeof m?m:"number"==typeof m?m.toString():a.index.join("."),Array.isArray(f)?l.append(await o.compileInlineSTDN(f)):"string"==typeof f?l.textContent=f:"number"==typeof f&&(l.textContent=f.toString()),e.theorem&&(s.classList.add("theorem"),void 0!==e.style&&s.classList.add(e.style)),s}}},936:(e,t,o)=>{o.r(t),o.d(t,{gen:()=>s});const r=new EventTarget;let n;r.addEventListener("load",(async()=>{n=(await new Function("return import('https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.mjs')")()).default.renderToString,r.dispatchEvent(new Event("loaded"))}),{once:!0});const a=new Map;function s(e={}){return async(t,o)=>{const s=document.createElement("span"),i=[],c=[];for(const e of t.children){let t="";for(const r of e)"string"!=typeof r?(t+=`{\\htmlClass{tmpPlaceholder${c.length.toString()}}{}}`,c.push(await o.compileUnit(r))):t+=r;i.push(t)}let p=i.join("\n");if(!e.noEnv){let o=t.tag;e.addStar&&(o+="*"),p=`\\begin{${o}}${p}\\end{${o}}`}let d=a.get(o);void 0===d&&a.set(o,d=o.base.stdnToPlainString(o.extractor.extractGlobalChildren("katex",o.context.tagToGlobalOptions))),d.length>0&&(p=p.trimStart().startsWith("'")?`${d}\\\\\n${p}`:`${d}\n${p}`);const l=e.display||!0===t.options.display;l&&s.classList.add("display"),s.innerHTML=(await async function(){return void 0!==n?n:(r.dispatchEvent(new Event("load")),new Promise((e=>{r.addEventListener("loaded",(()=>{void 0!==n&&e(n)}))})))}())(p,{displayMode:l,errorColor:"var(--color-warn)",output:"html",strict:!1,throwOnError:!1,trust:!0});for(let e=0;e<c.length;e++){const t=s.querySelector(`.tmpPlaceholder${e}`);null!==t&&t.replaceWith(c[e])}return s}}},942:(e,t,o)=>{o.r(t),o.d(t,{Bmatrix:()=>V,CD:()=>X,Vmatrix:()=>_,align:()=>D,alignat:()=>O,aligned:()=>G,alignedat:()=>I,array:()=>$,arraystretch:()=>q,bmatrix:()=>W,cases:()=>N,code:()=>l,conjecture:()=>h,corollary:()=>b,darray:()=>P,dcases:()=>M,definition:()=>k,drcases:()=>U,equation:()=>f,example:()=>T,exercise:()=>L,figure:()=>m,gather:()=>A,heading:()=>y,index:()=>u,katex:()=>C,lemma:()=>x,matrix:()=>J,notation:()=>E,pmatrix:()=>K,proof:()=>Z,proposition:()=>w,qed:()=>Y,rcases:()=>F,ref:()=>ee,remark:()=>S,smallmatrix:()=>R,split:()=>z,subarray:()=>H,theorem:()=>v,vmatrix:()=>B});const r=["/","(",")","[","]","{","}"];function n(e){const t=new DocumentFragment;for(const o of e)r.includes(o)?(t.append(document.createElement("wbr")),t.append(o),t.append(document.createElement("wbr"))):t.append(o);return t}function a(e,t){const o=(e=function(e){return e.replace(/\t/g,"    ")}(e)).split("\n"),r=new DocumentFragment;if(!t&&o.length<2){const t=document.createElement("span");return t.append(n(e)),r.append(t),r}for(const e of o){const t=document.createElement("div");if(r.append(t),0===e.length){t.textContent="\n";continue}const o=e.match(/^ */)[0];t.style.marginLeft=`${o.length}ch`,t.append(n(e.slice(o.length)));const a=document.createElement("span");a.style.display="inline-block",a.style.width="0",a.style.lineHeight="0",a.textContent=o,t.prepend(a)}return r}const s={tokenColors:[{scope:["meta.embedded","source.groovy.embedded"],settings:{foreground:"inherit"}},{scope:"emphasis",settings:{fontStyle:"italic"}},{scope:"strong",settings:{fontStyle:"bold"}},{scope:"header",settings:{foreground:"var(--color-modifier)"}},{scope:"comment",settings:{foreground:"var(--color-comment)"}},{scope:"constant.language",settings:{foreground:"var(--color-modifier)"}},{scope:["constant.numeric","variable.other.enummember","keyword.operator.plus.exponent","keyword.operator.minus.exponent"],settings:{foreground:"var(--color-number)"}},{scope:"constant.regexp",settings:{foreground:"var(--color-string)"}},{scope:"entity.name.tag",settings:{foreground:"var(--color-modifier)"}},{scope:"entity.name.tag.css",settings:{foreground:"var(--color-function)"}},{scope:"entity.other.attribute-name",settings:{foreground:"var(--color-variable)"}},{scope:["entity.other.attribute-name.class.css","entity.other.attribute-name.class.mixin.css","entity.other.attribute-name.id.css","entity.other.attribute-name.parent-selector.css","entity.other.attribute-name.pseudo-class.css","entity.other.attribute-name.pseudo-element.css","source.css.less entity.other.attribute-name.id","entity.other.attribute-name.scss"],settings:{foreground:"var(--color-function)"}},{scope:"invalid",settings:{foreground:"var(--color-warn)"}},{scope:"markup.underline",settings:{fontStyle:"underline"}},{scope:"markup.bold",settings:{fontStyle:"bold",foreground:"var(--color-modifier)"}},{scope:"markup.heading",settings:{fontStyle:"bold",foreground:"var(--color-modifier)"}},{scope:"markup.italic",settings:{fontStyle:"italic"}},{scope:"markup.inserted",settings:{foreground:"var(--color-number)"}},{scope:"markup.deleted",settings:{foreground:"var(--color-string)"}},{scope:"markup.changed",settings:{foreground:"var(--color-modifier)"}},{scope:"punctuation.definition.quote.begin.markdown",settings:{foreground:"var(--color-comment)"}},{scope:"punctuation.definition.list.begin.markdown",settings:{foreground:"var(--color-modifier)"}},{scope:"markup.inline.raw",settings:{foreground:"var(--color-string)"}},{name:"brackets of XML/HTML tags",scope:"punctuation.definition.tag",settings:{foreground:"var(--color-light)"}},{scope:["meta.preprocessor","entity.name.function.preprocessor"],settings:{foreground:"var(--color-modifier)"}},{scope:"meta.preprocessor.string",settings:{foreground:"var(--color-string)"}},{scope:"meta.preprocessor.numeric",settings:{foreground:"var(--color-number)"}},{scope:"meta.structure.dictionary.key.python",settings:{foreground:"var(--color-variable)"}},{scope:"meta.diff.header",settings:{foreground:"var(--color-modifier)"}},{scope:"storage",settings:{foreground:"var(--color-modifier)"}},{scope:"storage.type",settings:{foreground:"var(--color-modifier)"}},{scope:["storage.modifier","keyword.operator.noexcept"],settings:{foreground:"var(--color-modifier)"}},{scope:["string","meta.embedded.assembly"],settings:{foreground:"var(--color-string)"}},{scope:"string.tag",settings:{foreground:"var(--color-string)"}},{scope:"string.value",settings:{foreground:"var(--color-string)"}},{scope:"string.regexp",settings:{foreground:"var(--color-string)"}},{name:"String interpolation",scope:["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],settings:{foreground:"var(--color-modifier)"}},{name:"Reset JavaScript string interpolation expression",scope:["meta.template.expression"],settings:{foreground:"inherit"}},{scope:["support.type.vendored.property-name","support.type.property-name","variable.css","variable.scss","variable.other.less","source.coffee.embedded"],settings:{foreground:"var(--color-variable)"}},{scope:"keyword",settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.control",settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.operator",settings:{foreground:"inherit"}},{scope:["keyword.operator.new","keyword.operator.expression","keyword.operator.cast","keyword.operator.sizeof","keyword.operator.alignof","keyword.operator.typeid","keyword.operator.alignas","keyword.operator.instanceof","keyword.operator.logical.python","keyword.operator.wordlike"],settings:{foreground:"var(--color-modifier)"}},{scope:"keyword.other.unit",settings:{foreground:"var(--color-number)"}},{scope:["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],settings:{foreground:"var(--color-modifier)"}},{scope:"support.function.git-rebase",settings:{foreground:"var(--color-variable)"}},{scope:"constant.sha.git-rebase",settings:{foreground:"var(--color-number)"}},{name:"coloring of the Java import and package identifiers",scope:["storage.modifier.import.java","variable.language.wildcard.java","storage.modifier.package.java"],settings:{foreground:"inherit"}},{name:"this.self",scope:"variable.language",settings:{foreground:"var(--color-modifier)"}},{name:"Function declarations",scope:["entity.name.function","support.function","support.constant.handlebars","source.powershell variable.other.member","entity.name.operator.custom-literal"],settings:{foreground:"var(--color-function)"}},{name:"Types declaration and references",scope:["meta.return-type","support.class","support.type","entity.name.type","entity.name.namespace","entity.other.attribute","entity.name.scope-resolution","entity.name.class","storage.type.numeric.go","storage.type.byte.go","storage.type.boolean.go","storage.type.string.go","storage.type.uintptr.go","storage.type.error.go","storage.type.rune.go","storage.type.cs","storage.type.generic.cs","storage.type.modifier.cs","storage.type.variable.cs","storage.type.annotation.java","storage.type.generic.java","storage.type.java","storage.type.object.array.java","storage.type.primitive.array.java","storage.type.primitive.java","storage.type.token.java","storage.type.groovy","storage.type.annotation.groovy","storage.type.parameters.groovy","storage.type.generic.groovy","storage.type.object.array.groovy","storage.type.primitive.array.groovy","storage.type.primitive.groovy"],settings:{foreground:"var(--color-class)"}},{name:"Types declaration and references, TS grammar specific",scope:["meta.type.cast.expr","meta.type.new.expr","support.constant.math","support.constant.dom","support.constant.json","entity.other.inherited-class"],settings:{foreground:"var(--color-class)"}},{name:"Control flow / Special keywords",scope:["keyword.control","source.cpp keyword.operator.new","keyword.operator.delete","keyword.other.using","keyword.other.operator","entity.name.operator"],settings:{foreground:"var(--color-keyword)"}},{name:"Variable and parameter name",scope:["variable","meta.definition.variable.name","support.variable","entity.name.variable","constant.other.placeholder"],settings:{foreground:"var(--color-variable)"}},{name:"Constants and enums",scope:["variable.other.constant","variable.other.enummember"],settings:{foreground:"var(--color-variable)"}},{name:"Object keys, TS grammar specific",scope:["meta.object-literal.key"],settings:{foreground:"var(--color-variable)"}},{name:"CSS property value",scope:["support.constant.property-value","support.constant.font-name","support.constant.media-type","support.constant.media","constant.other.color.rgb-value","constant.other.rgb-value","support.constant.color"],settings:{foreground:"var(--color-string)"}},{name:"Regular expression groups",scope:["punctuation.definition.group.regexp","punctuation.definition.group.assertion.regexp","punctuation.definition.character-class.regexp","punctuation.character.set.begin.regexp","punctuation.character.set.end.regexp","keyword.operator.negation.regexp","support.other.parenthesis.regexp"],settings:{foreground:"var(--color-function)"}},{scope:["constant.character.character-class.regexp","constant.other.character-class.set.regexp","constant.other.character-class.regexp","constant.character.set.regexp"],settings:{foreground:"var(--color-string)"}},{scope:["keyword.operator.or.regexp","keyword.control.anchor.regexp"],settings:{foreground:"var(--color-function)"}},{scope:"keyword.operator.quantifier.regexp",settings:{foreground:"var(--color-function)"}},{scope:"constant.character",settings:{foreground:"var(--color-modifier)"}},{scope:"constant.character.escape",settings:{foreground:"var(--color-function)"}},{scope:"entity.name.label",settings:{foreground:"var(--color-light)"}}]},i=new EventTarget;let c;async function p(){return void 0!==c?c:(i.dispatchEvent(new Event("load")),new Promise((e=>{i.addEventListener("loaded",(()=>{void 0!==c&&e(c)}))})))}i.addEventListener("load",(async()=>{c=await new Function("return import('https://cdn.jsdelivr.net/gh/st-org/sthl@0.13.0/mod.js')")(),i.dispatchEvent(new Event("loaded"))}),{once:!0});const d=new Map,l=async(e,t)=>{const o=!0===e.options.block;let r=t.base.unitToPlainString(e);const n=function(e,t){const o=t||e.includes("\n")?document.createElement("pre"):document.createElement("code");return o.append(a(e,t)),o}(r,o);let{lang:i}=e.options;return"string"!=typeof i&&(i=""),0===i.length||(async()=>{const{src:c}=e.options;if("string"==typeof c)try{const e=await fetch(new URL(c,t.context.dir).href);if(e.ok){const t=a(r=await e.text(),o);n.innerHTML="",n.append(t),n.dispatchEvent(new Event("adjust",{bubbles:!0}))}}catch(e){console.log(e)}const l=await(await async function(e){const{extractLangInfoArrayFromVSCEURLs:t,extractThemeFromVSCT:o,extractThemeFromVSCTURLs:r,Highlighter:n}=await p();let a=d.get(e);if(a instanceof n)return a;if(void 0!==a){const t=a;return new Promise((o=>{t.addEventListener("loaded",(()=>{o(d.get(e))}))}))}const i=new EventTarget;d.set(e,i);const c=await t(["css","html","json","markdown-basics"].concat(e.extractor.extractGlobalStrings("vsce","code",e.context.tagToGlobalOptions)).map((e=>`${e}/package.json`)),"https://cdn.jsdelivr.net/gh/microsoft/vscode/extensions/");c.push(...await t(["st-org/st-lang","microsoft/vscode-typescript-next"].concat(e.extractor.extractGlobalStrings("vsce-gh","code",e.context.tagToGlobalOptions)).map((e=>`${e}/package.json`)),"https://cdn.jsdelivr.net/gh/")),c.push(...await t(await e.extractor.extractGlobalURLs("vsce-src","code",e.context.tagToGlobalOptions,e.context.dir),"a:b")),c.push({name:"markdown",alias:["md"]},{name:"javascript",alias:["js"]},{name:"typescript",alias:["ts"]});const l=o(s);return l.push(...await r(await e.extractor.extractGlobalURLs("vsct-src","code",e.context.tagToGlobalOptions,e.context.dir),"a:b")),d.set(e,a=new n(c,l)),i.dispatchEvent(new Event("loaded")),a}(t)).highlightToDocumentFragment(r,i,o);n.innerHTML="",n.append(l)})().catch(console.log),n};var g=o(590);const u=(0,g.gen)({inline:!0,noCapitalize:!0}),m=(0,g.gen)({reverse:!0}),f=(0,g.gen)({reverse:!0,noCapitalize:!0}),y=(0,g.gen)({noTag:!0}),v=(0,g.gen)({theorem:!0}),h=v,b=v,x=v,w=v,k=(0,g.gen)({theorem:!0,style:"definition"}),E=k,S=(0,g.gen)({theorem:!0,style:"remark"}),T=S,L=S;var j=o(936);const C=(0,j.gen)({noEnv:!0}),D=(0,j.gen)({addStar:!0,display:!0}),O=D,A=D,G=(0,j.gen)(),I=G,$=G,q=G,N=G,P=G,M=G,U=G,F=G,R=G,z=G,H=G,V=(0,j.gen)({addStar:!0}),W=V,J=V,K=V,_=V,B=V,X=(0,j.gen)({display:!0});var Q=o(494);const Y=async(e,t)=>await t.compileUnit({tag:"katex",options:{class:"qed"},children:["\\square".split("")]}),Z=async(e,t)=>{const o=document.createElement("div"),r=document.createElement("span"),n=document.createElement("span"),a=document.createElement("span"),s=document.createElement("span"),i=document.createElement("span");o.classList.add("capitalize-tag"),r.classList.add("caption"),n.classList.add("content"),a.classList.add("tag"),s.classList.add("mark"),i.classList.add("desc");const c=t.extractor.extractLastGlobalOption("tag",e.tag,t.context.tagToGlobalOptions);a.textContent=(0,Q.r)("string"==typeof c?c:e.tag),o.append(r),o.append(n),r.append(a),r.append(s),r.append(i),n.append(await t.compileSTDN(e.children));const{mark:p,desc:d}=e.options;Array.isArray(p)?s.append(await t.compileInlineSTDN(p)):"string"==typeof p?s.textContent=p:"number"==typeof p&&(s.textContent=p.toString()),Array.isArray(d)?i.append(await t.compileInlineSTDN(d)):"string"==typeof d?i.textContent=d:"number"==typeof d&&(i.textContent=d.toString());const l=await Y(e,t);if(0===n.children.length){const e=document.createElement("div");e.classList.add("st-line"),n.append(e),e.append(l)}else n.children[n.children.length-1].append(l);return o},ee=async(e,t)=>{const o=e.options["ref-id"];if("string"!=typeof o||0===o.length)return t.createErrorElement("Ref id required");const r=t.context.idToIndexInfo[o];if(void 0===r)return t.createErrorElement("?");const n=document.createElement("span"),a=document.createElement("span"),s=document.createElement("span"),i=await t.compileUnit({tag:"a",options:{href:"#"+encodeURIComponent(o),class:"mark"},children:[]}),c=document.createElement("span");if(a.classList.add("caption"),s.classList.add("tag"),s.textContent=(0,Q.r)(r.unit.tag),c.classList.add("desc"),n.append(a),a.append(s),a.append(i),a.append(c),e.children.length>0)i.append((0,Q.D)(await t.compileInlineSTDN(e.children)));else{const{mark:e}=r.unit.options;Array.isArray(e)?i.append((0,Q.D)(await t.compileInlineSTDN(e))):i.textContent="string"==typeof e?e:"number"==typeof e?e.toString():r.index.join(".")}const{desc:p}=e.options;return Array.isArray(p)?c.append(await t.compileInlineSTDN(p)):"string"==typeof p?c.textContent=p:"number"==typeof p&&(c.textContent=p.toString()),n}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{o.d(r,{ru:()=>e.r,DT:()=>e.D,Kz:()=>t,j4:()=>n,x2:()=>a});var e=o(494),t=o(590),n=o(936),a=o(942)})();var n=r.Kz,a=r.j4,s=r.ru,i=r.DT,c=r.x2;export{n as index,a as katex,s as prettyTag,i as replaceAnchors,c as tagToUnitCompiler};