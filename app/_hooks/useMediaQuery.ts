import { useEffect, useState } from "react";

export function useMediaQuery(query:string){
    const [matches, setMatches] = useState<boolean>(false)
    useEffect(()=>{
        const mediaQuery = window.matchMedia(query)
        setMatches(mediaQuery.matches)
        function listener(e: MediaQueryListEvent){
            setMatches(e.matches)
        }
        mediaQuery.addEventListener('change',listener)
        return () => mediaQuery.removeEventListener('change',listener)
    })
}