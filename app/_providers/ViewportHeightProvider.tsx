'use client'

import { useViewportHeight } from "../_hooks/useViewportHeight"

export default function ViewportHeightProvider() {
    useViewportHeight()
    return null
}
