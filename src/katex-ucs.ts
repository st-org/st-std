import {gen} from './katex'
export const katex=gen({noEnv:true})

export const align=gen({addStar:true,display:true})
export const alignat=align
export const gather=align

export const aligned=gen()
export const alignedat=aligned
export const array=aligned
export const arraystretch=aligned
export const cases=aligned
export const darray=aligned
export const dcases=aligned
export const drcases=aligned
export const rcases=aligned
export const smallmatrix=aligned
export const split=aligned
export const subarray=aligned

export const Bmatrix=gen({addStar:true})
export const bmatrix=Bmatrix
export const matrix=Bmatrix
export const pmatrix=Bmatrix
export const Vmatrix=Bmatrix
export const vmatrix=Bmatrix

export const CD=gen({display:true})