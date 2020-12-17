import React,{useState} from "react";
const LoginForm=()=>{
    const [nowSelect,setNowSelect]=useState("789");
    return (
        <div>
            <select onChange={(e)=>{setNowSelect(e.target.value)}}>
                <option value="123">123</option>
                <option selected={true} value="456">456</option>
            </select>
            <div>
                目前select:{nowSelect}
            </div>
            <button onClick={(e)=>{setNowSelect("789")}}>改變為789</button>
        </div>
    )
}
export default LoginForm;