import React, { useState } from "react";
import '../css/comp.css'

function Comp({ inputs , fn}) {
    // console.log(inputs);

    function handleSubmit(e)
    {
        e.preventDefault()
    }

    return <>
        <div className="comp_box1">
            <form onSubmit={(e)=>handleSubmit(e)}>
                {inputs.map((data,key) =>
                    (data.inputType=='checkbox')?
                    <div>
                        <input type={data.inputType} key={key} style={{position:'relative',top:'15px',marginRight:'10px'}}/>
                        <label htmlFor='1' key={key}>{data.title}</label>
                        <i class="bi bi-x-circle" onClick={()=>fn(key)}></i>
                    </div>
                    :
                    <div>
                        <label htmlFor='1' key={key}>{data.title}</label>
                        <input type={data.inputType} key={key}/>
                        <i class="bi bi-x-circle" onClick={()=>fn(key)}></i>
                    </div>
                )}
                {inputs.length > 0 && <button type="Submit" class="btn btn-primary">Submit</button>}
            </form>
        </div>
    </>
}

export default Comp