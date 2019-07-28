import React from 'react';
import { Input, Button, List } from 'antd';
import store from "../store"
import { DELETE_ITEM, CHANGE_VALUE, ADD_ITEM } from "../store/actionTypes"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        // 改变函数中的this指向
        this.addItem = this.addItem.bind(this)
        this.inputValueChange = this.inputValueChange.bind(this)
        this.upDateInputValue = this.upDateInputValue.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        console.log(store.getState())

        //页面加载获取redux中的数据保存在当前组件的state状态中
        this.state = store.getState()

        /**
         * 监听函数（订阅），一旦state发生变化，就会自动执行里面的函数
         * 订阅的是stor.dispatch(action)（发布函数）
         */
        store.subscribe(this.upDateInputValue)
    }
    upDateInputValue() {//必须使用setState来更新视图层
        this.setState({
            inputValue: store.getState().inputValue,
            list: store.getState().list
        })
    }
    addItem() {//添加项（判断值存在再添加，否则不添加）
        this.refs.inputValue.state.value &&
            store.dispatch({ type: ADD_ITEM })
    }
    deleteItem(index) {//删除选项 
        var action = {
            type: DELETE_ITEM,
            index: index
        }
        store.dispatch(action)
    }
    inputValueChange(e) {//随着值的变化更新store里的状态
        var action = {
            type: CHANGE_VALUE,
            value: e.target.value
        }
        store.dispatch(action)//根据input框值的变化分发一个action，并将最新的值传到reducer中
    }
    render() {
        const outerBoxStyle = {
            border: "1px solid #eee",
            width: "80%",
            margin: "30px auto 0",
            padding: "25px",
            boxSizing: "border-box",
            boxShadow: "0 0 15px #ccc"
        }
        return (
            <div style={outerBoxStyle}>
                <div style={{
                    display: "flex",
                    justifyContent: "center", marginBottom: "15px"
                }}>
                    <Input ref="inputValue" onChange={this.inputValueChange} style={{ marginRight: "10px" }} value={this.state.inputValue} placeholder="write something hear ···" />
                    <Button onClick={this.addItem} type="primary" size="default">增加</Button>
                </div>
                <div>
                    <List
                        size="small"
                        /* header={<div>Header</div>} */
                        /* footer={<div>Footer</div>} */
                        bordered
                        dataSource={this.state.list}
                        // renderItem={(item,index) => <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>}
                        renderItem={(item, index) => <List.Item onClick={() => { this.deleteItem(index) }}>{item}</List.Item>}
                    />
                </div>
            </div>
        );
    }
}

export default Home;