import {css,headCSS,tagToUnitCompiler} from '../mod.js'
import {compile} from 'https://cdn.jsdelivr.net/gh/st-org/stc@main/mod.js'
import {Shell} from 'https://cdn.jsdelivr.net/gh/st-org/stui@main/mod.js'
const shell=window.shell=new Shell('Test','',css)
const headStyle=document.createElement('style')
const customStyle=document.createElement('style')
headStyle.textContent=headCSS
document.head.append(headStyle)
document.head.append(shell.styleEle)
document.head.append(customStyle)
document.body.append(shell.element)
;(async()=>{
    const result=await compile(await (await window.fetch('./main.stdn')).text(),'',{
        builtInTagToUnitCompiler:tagToUnitCompiler,
        style:customStyle
    })
    if(result!==undefined){
        shell.append(result.documentFragment)
    }
})()