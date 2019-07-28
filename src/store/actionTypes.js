// 把页面中dispatch的所有action的type单独写成一个文件（actionTypes.js）
/**
 * 好处是：
 * 1.如果页面调用type写错了会有报错提示，好找问题。
 * 2.复用性好，哪个页面要用到直接引入。
 */ 

export const DELETE_ITEM = "deleteItem"
export const CHANGE_VALUE = "changeValue"
export const ADD_ITEM = "addItem"