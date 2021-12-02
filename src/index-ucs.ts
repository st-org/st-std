import {gen} from './index'
export const index=gen({inline:true,noCapitalize:true})
export const figure=gen({reverse:true})
export const equation=gen({reverse:true,noCapitalize:true})
export const heading=gen({noTag:true})

export const theorem=gen({theorem:true})
export const conjecture=theorem
export const corollary=theorem
export const lemma=theorem
export const proposition=theorem

export const definition=gen({theorem:true,style:'definition'})
export const notation=definition

export const remark=gen({theorem:true,style:'remark'})
export const example=remark
export const exercise=remark