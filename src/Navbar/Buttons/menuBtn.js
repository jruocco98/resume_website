import React from 'react';
import './menuBtn.css'
import { AiOutlineMenu } from 'react-icons/ai';
const MenuBtn = (props) => {
    return(
        <div className='menu_btn_component'
        onClick={()=>{
            console.log("PRESSED")
            props.setMenuPressed(true)
            props.setCancelPressed(false)}}
        style={{ }}>
            <AiOutlineMenu style={{position:'relative', top:'7px'}}/>
        </div>
    )
}

export default MenuBtn;