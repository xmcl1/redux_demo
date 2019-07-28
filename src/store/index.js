// store相当于图书馆，用来存放数据的
/**
 * 注意：
 * store必须是唯一的（例如下面的const store = createStore() 必须唯一）
 */

import { createStore } from "redux"
import reducer from "./reducer"
/**
 * 1.cnpm install  redux-devtools-extension --save-dev
 * 2.然后引入（前提条件是从谷歌应用商店安装了redux开发工具！！！）
 */
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(
    reducer,
    composeWithDevTools()//2.这里调用就ok了
)
export default store