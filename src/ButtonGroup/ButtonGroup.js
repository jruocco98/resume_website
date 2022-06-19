import React, {useState} from "react";
import {Icon2, Icon3, Icon4} from './ButtonElements'
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import ReactTooltip from 'react-tooltip';

const ButtonGroup = () => {

    const [isShownMail, setIsShownMail] = useState(false)
    const [isShownPhone, setIsShownPhone] = useState(false)
    const email = 'garrettruocco@gmail.com'
    const phoneNum = '(850)686-7597'

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };
    return(
        <>
            
            <a target="_blank" href="https://www.linkedin.com/in/garrett-ruocco-84b6181ab"><Icon3/></a>
            
            <a data-tip data-for='clickme1' data-event='click focus'> 
                <Icon2 
                    onMouseEnter={() => setIsShownMail(true)}
                    onMouseLeave={() => setIsShownMail(false)}>
                </Icon2>
            </a>

            <ReactTooltip id='clickme1' place='right' effect='solid' clickable={true} globalEventOff='click'>
                        Copied
            </ReactTooltip>

            <a data-tip data-for='clickme2' data-event='click focus'> 
                <Icon4 
                    onMouseEnter={() => setIsShownPhone(true)}
                    onMouseLeave={() => setIsShownPhone(false)}>
                </Icon4>
            </a>

            <ReactTooltip id='clickme2' place='right' effect='solid' clickable={true} globalEventOff='click'>
                        Copied
            </ReactTooltip>
            {isShownMail && (
                <div className='banner_text' id='email' onClick={navigator.clipboard.writeText(email)}>
                    {email}
                </div>
            )}
            {isShownPhone && (
                <div className='banner_text' id='phone' onClick={navigator.clipboard.writeText(phoneNum)}> 
                    {phoneNum}
                </div>
            )} 
        </>  
    );
}
export default ButtonGroup;