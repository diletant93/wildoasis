"use client"
import { ScreenSizeLabel } from "../_types/mediaQueries";
import { useWindowWidth } from "../_hooks/useWindowWidth";
import { mediaQueriesSizes } from "../_constants/mediaQueriesSizes";
function getScreenSizeLabel(currentScreenSize:number){
    let label: ScreenSizeLabel;
    for(let i = 0; i < mediaQueriesSizes.length; i++){
        if(i=== mediaQueriesSizes.length-1) return '4xl'
        if(currentScreenSize > mediaQueriesSizes[i].sizePixels && currentScreenSize < mediaQueriesSizes[i+1].sizePixels){
            return mediaQueriesSizes[i].sizeLabel
        }
    }
}
export default function ScreenSizeWidget() {
    const width = useWindowWidth()
  return (
    <div className="fixed top-0 left-0 text-2xl bg-black z-10 px-2 py-5 uppercase">
       Screen Size: {getScreenSizeLabel(width)}
    </div>
  );
}
