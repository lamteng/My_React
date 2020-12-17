import React from 'react';

const Cheer=(props)=>{
    return (
        <div>
            <h1>美心加油器</h1>
            <div>目前分數{props.value}<br/>還有沒有! 再來{88-props.value}分!</div>
            <button value={Number(props.value)+1} onClick={props.onClick}>加1分</button>
            <button value={Number(props.value)+7} onClick={props.onClick}>加7分</button>
            <button value={Number(props.value)+10} onClick={props.onClick}>加10分</button>
            <button value={0} onClick={props.onClick}>0分</button>
        </div>
    )
}

export default Cheer;