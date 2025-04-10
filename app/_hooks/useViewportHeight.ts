import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useViewportHeight(){
    useIsomorphicLayoutEffect(() => {
        function updateHeight(){
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        updateHeight();
        
        window.addEventListener('resize', updateHeight);
        window.addEventListener('orientationchange', updateHeight);
        
        if(window.visualViewport){
            window.visualViewport.addEventListener('resize', updateHeight);
            window.visualViewport.addEventListener('scroll', updateHeight); 
        }
        
        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('orientationchange', updateHeight);
            
            if(window.visualViewport){
                window.visualViewport.removeEventListener('resize', updateHeight);
                window.visualViewport.removeEventListener('scroll', updateHeight);
            }
        };
    }, []);
}