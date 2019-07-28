//引入actionTypes文件里的常量
import { DELETE_ITEM,CHANGE_VALUE,ADD_ITEM } from "./actionTypes";

export const deleteItemAction = (index)=>({//删除
    type:DELETE_ITEM,
    index
})
export const changeItemAction = (value)=>({//同步input框值到sorte中
    type:CHANGE_VALUE,
    value
})
export const addItemAction = ()=>({//添加
    type:ADD_ITEM
})