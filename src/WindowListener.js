import {useEffect } from 'react';
function WindowListener(resize, setResize, setMenuPressed){

    //Shows Menu icon at this width
    const minWidth = 865

    useEffect(() => { 
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => 
        window.removeEventListener("resize", updateDimensions);
        })
        const updateDimensions = () => {
            const width = window.innerWidth
            setResize(width < minWidth)
            if(width > minWidth){
                setMenuPressed(false)
                setResize(false)
            }
        }
}

export default WindowListener