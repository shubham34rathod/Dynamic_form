import React, { useEffect, useState } from "react";
import Comp from '../component/Comp.js'
import '../css/form.css'

function Form() {
    let [userName, setUserName] = useState('')
    let [inputData, setInputData] = useState({
        title: '',
        inputType: ''
    })
    let [inputGroups,setInputGroup]=useState([])

    useEffect(()=>{
        
    },[inputGroups])

    function handleDelete(x)
    {
        let list=[...inputGroups]
        list.splice(x,1)
        setInputGroup(list)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setInputGroup((data)=>([
            ...data,
            inputData
        ]))
    }

    return <>
        <div className="form_box">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="user">Enter your name</label>
                    <input type="text" id="user" onChange={(e) => setUserName(e.target.value)} required/>
                </div>
                <div className="form_box_2">
                    <label htmlFor="label">Write heading</label>
                    <input type="text" id="label" onChange={(e) => {
                        setInputData((data) => ({
                            ...data,
                            title: e.target.value
                        }))
                    }} required /><br />
                    <select name="input_type" id="input_type"
                        onChange={(e) => {
                            setInputData((data) => ({
                                ...data,
                                inputType: e.target.value
                            }))
                        }}
                        required
                    >
                        <option value="">Select type of input</option>
                        <option value="text">Text</option>
                        <option value="number">Number</option>
                        <option value="email">Email</option>
                        <option value="password">Password</option>
                        <option value="color">Color</option>
                        <option value="file">File</option>
                        <option value="textarea">Textarea</option>
                        <option value="checkbox">Checkbox</option>
                    </select>
                </div>
                <button type="Submit" class="btn btn-primary">Add</button>
            </form>
        </div>
        <div className="form_box3">
            <Comp inputs={inputGroups} fn={handleDelete}></Comp>
        </div>

        {/* <div className="comp_box1">
            <form onSubmit={(e)=>handleSubmit(e)}>
                {inputGroups.map((data,key) => <>
                    <div>
                        <label htmlFor='1' key={key}>{key}</label>
                        <input type={data.inputType} key={key}/>
                        <i class="bi bi-x-circle" onClick={()=>handleDelete(key)}></i>
                    </div>
                </>)}
                {inputGroups.length > 0 && <button type="Submit" class="btn btn-primary">Submit</button>}
            </form>
        </div> */}
    </>
}

export default Form