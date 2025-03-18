"use client";

import { useState } from "react";

export default function Counter({name}:{name:string}) {
    const [count, setCount] = useState<number>(2)
    return (
        <button onClick={()=>setCount(curr => curr +1)}>{name} {count}</ button>
    );
}
