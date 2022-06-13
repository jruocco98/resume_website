import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useState, useEffect} from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export function setDialog(){
    
}
export default function AlertDialog(props) {
    const [gameResult, setGameResult] = useState('')
    const [open, setOpen] = useState(false);
    useEffect(() => {
        
        if(props.result !== ''){
            setOpen(true);
            props.setResult('');
            setGameResult(props.result)
        }
       //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.result]);

    const handleClose = () => {
    setOpen(false);

    };

    
    return (
    <div>

        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{
            width:'100vw',

            }}
        >
        
        <DialogTitle style={{
            width:'20vw',
            backgroundColor:'black',
            color:'#FBB8B9',
            borderTop:'2px solid #FBB8B9',
            borderLeft:'2px solid #FBB8B9',
            borderRight:'2px solid #FBB8B9'
        }}>{"Game Over"}</DialogTitle>
        <DialogContent
        style={{
            
            backgroundColor:'black',
            borderLeft:'2px solid #FBB8B9',
            borderRight:'2px solid #FBB8B9'
        }}>
            <DialogContentText style={{textAlign:'center', color:'#FBB8B9'}}>
                
            <p>{gameResult}</p>
            </DialogContentText>
        </DialogContent>
        <DialogActions style={{
            backgroundColor:'black',
            borderLeft:'2px solid #FBB8B9',
            borderRight:'2px solid #FBB8B9',
            borderBottom:'2px solid #FBB8B9',

        }}>
            <Button style={{color:'#FBB8B9'}}onClick={handleClose}>OK</Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}
