import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useViewportHeight(){
    useIsomorphicLayoutEffect(() => {
        function updateHeight(){
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        updateHeight();
    }, []);
}