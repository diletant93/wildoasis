"use client"
import { useWindowWidth } from "../_hooks/useWindowWidth";
import { mediaQueriesSizes } from "../_constants/mediaQueriesSizes";
import { Position } from "../_types/position";
function getScreenSizeLabel(currentScreenSize: number) {
    for (let i = 0; i < mediaQueriesSizes.length; i++) {
        if (currentScreenSize > mediaQueriesSizes[i].sizePixels && currentScreenSize < mediaQueriesSizes[i + 1].sizePixels) {
            return mediaQueriesSizes[i].sizeLabel
        }
        if (currentScreenSize > mediaQueriesSizes[mediaQueriesSizes.length - 1].sizePixels) return '4xl'
        if (currentScreenSize < mediaQueriesSizes[0].sizePixels) return 'sm'
    }
}
type ScreenSizeWidgetProps = {
    position: Position
}
export default function ScreenSizeWidget({ position = 'top left' }: ScreenSizeWidgetProps) {
    const width = useWindowWidth()
    const [pos1, pos2] = position.split(' ')
    return (
        <div className={`fixed ${pos1}-0 ${pos2}-0 text-xl bg-black z-10 px-2 py-3 uppercase`}>
            Screen Size: {getScreenSizeLabel(width)}
        </div>
    );
}
