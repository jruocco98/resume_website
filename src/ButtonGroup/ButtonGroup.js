import React, {useState} from "react";
import {Icon2, Icon3, Icon4} from './ButtonElements'



const ButtonGroup = () => {

    const [isShownMail, setIsShownMail] = useState(false)
    const [isShownPhone, setIsShownPhone] = useState(false)

    return(
        <>
            <a target="_blank" href="https://www.linkedin.com/in/garrett-ruocco-84b6181ab"><Icon3/></a>
            <Icon2 
                onMouseEnter={() => setIsShownMail(true)}
                onMouseLeave={() => setIsShownMail(false)}>
            </Icon2>
            <Icon4
                onMouseEnter={() => setIsShownPhone(true)}
                onMouseLeave={() => setIsShownPhone(false)}>
            </Icon4>
            {isShownMail && (
                <div className='banner_text' id='email'>
                    garrettruocco@gmail.com
                </div>
            )}
            {isShownPhone && (
                <div className='banner_text' id='phone'>
                    (850)686-7597
                </div>
            )}
            
        </>    
        
    );
   


}


export default ButtonGroup;