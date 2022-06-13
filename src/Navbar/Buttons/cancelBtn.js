import React from 'react';
import './menuBtn.css'
import {ImCancelCircle } from 'react-icons/im';

const cancelBtn = (props) => {
    return(
        <div className='cancel_btn_component'
        onClick={()=>{props.setMenuPressed(false)}}
        style={{}}>
            <ImCancelCircle style={{position:'relative', top:'14px'}}/>
        </div>
    )
}

export default cancelBtn;