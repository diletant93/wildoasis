import { useLayoutEffect } from "react";

export function useViewportHeight(){
    useLayoutEffect(()=>{
        const {abort, signal} = new AbortController()
        function updateHeight(){
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh',`${vh}px`)
        }
        updateHeight()
        window.addEventListener('resize',updateHeight, {signal})
        window.addEventListener('orientationchange',updateHeight,{signal})
        if(window.visualViewport){
            window.visualViewport.addEventListener('resize',updateHeight,{signal})
            window.visualViewport.addEventListener('orientationchange',updateHeight,{signal})
        }
        return () => abort()
    },[])
}