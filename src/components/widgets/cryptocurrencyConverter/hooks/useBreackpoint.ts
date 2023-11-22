import React, { useEffect, useState } from "react"

const getBreakPoint = (value:number):number => {
    if(780 <= value)
        return 3
    if(320 >= value && value < 780)
        return 2
    if(value < 320)
        return 1
    return 0
 }

export const useBreakpoint = () => {

    const [screenType, setScreenType] = useState(getBreakPoint(window.innerWidth))

    const handleResize = () => {
        setScreenType(getBreakPoint(window.innerWidth));
      }

    useEffect(() => {
        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); // Empty dependency array ensures the effect runs once after the initial render
    return screenType
}