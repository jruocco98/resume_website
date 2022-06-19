import React from 'react';
import './menuBtn.css'
import {ImCancelCircle } from 'react-icons/im';

const cancelBtn = (props) => {
    return(
        <div className='cancel_btn_component'
        onClick={()=>{
            props.setMenuPressed(false)
            props.setCancelPressed(true)}}
        style={{border: '2px solid rgb(24, 23, 24, 0)',
                backgroundColor: 'rgba(24, 23, 24, 0)'}}>
            <ImCancelCircle style={{position:'relative', top:'8px'}}/>
        </div>
    )
}

export default cancelBtn;