import React from 'react';
import './menuBtn.css'
import { AiOutlineMenu } from 'react-icons/ai';
const MenuBtn = (props) => {
    return(
        <div className='menu_btn_component'
        onClick={()=>{props.setMenuPressed(true)}}
        style={{ }}>
            <AiOutlineMenu style={{position:'relative', top:'13px'}}/>
        </div>
    )
}

export default MenuBtn;