// reducer相当于图书馆管理员来管理所有状态state
/**
 * 注意：
 * 1.reducer必须为纯函数（它内部的代码只接受外部传入的变量，不允许写：例如 new Date()、定义变量、发送ajax请求等，这些操作应该在外部使用）
 * 2.reducer不允许改变state，只有state能改变自己（所以只能将state拷贝一份进行修改，再返回给state））
 */
import { DELETE_ITEM, CHANGE_VALUE, ADD_ITEM } from "../store/actionTypes"

const defaultState = {
    inputValue: "",
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.'
    ]
}
export default (state = defaultState, action) => {
    if (action.type === CHANGE_VALUE) {
        /**
         * 拿到input框最新值，重新组装最新数据
         * 注意：reducer中不允许修改state状态。所以使用对象深拷贝重新得到一份最新值。
         */
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        //将最新值返回（存入store）
        return newState
    }
    if (action.type === ADD_ITEM) {
        //添加项处理函数
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        //将最新值返回（存入store）
        return newState
    }
    if (action.type === DELETE_ITEM) {
        //删除项处理函数
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        //将最新值返回（存入store）
        return newState
    }
    return state//将值返回（返回状态）
}