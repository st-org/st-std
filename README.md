# ST STD
```js
import {css,tagToUnitCompiler} from 'st-std'
import {compile} from '@ddu6/stc'
import {Shell} from '@ddu6/stui'
const shell=new Shell('','',css)
;(async()=>{
    const result=await compile(`{'a_1=1'}
    {display,'a_2=2'}
    ['Let '{'a_3=3'}.]
    {label eq1,equation[{'a_4=4'}]}
    {label eq2,orbit alone,mark{[[{label eq1,class plain,ref[]}{'\\''}]]},equation[{'a_5=5'}]}
    {class display,aligned[
        ['a_6&=6\\ \\text{see '{label eq2,ref[]}'}\\\\\\\\']
        'a_{1000}&=1000'
    ]}
    {label th1,mark A,desc DDU,theorem[STDN is easy to use.]}
    {proof[We leave it to the reader.]}
    {label co1,corollary[{label eq3,orbit alone,mark{'\\square'},class plain,equation[STDN is a good language.]}]}`,'',{
        dftTagToUnitCompiler:tagToUnitCompiler
    })
    if(result===undefined){
        return
    }
    const {documentFragment,context}=result
    shell.styleEle.textContent+=context.css
    shell.append(documentFragment)
    console.log(context)
})()

// Of course, to run the above codes in browser, you need a bundler like webpack.
```