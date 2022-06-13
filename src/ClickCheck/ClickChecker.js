import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, setMenuPressed, resize, menuPressed) {

    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            if(resize && menuPressed){
                setMenuPressed(false)
            }
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {

        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setMenuPressed, resize, menuPressed]);
  }

  /**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    
    useOutsideAlerter(wrapperRef, props.setMenuPressed, props.resize, props.menuPressed);
    
    return <div className='click_check' ref={wrapperRef}>{props.children}</div>;
  }