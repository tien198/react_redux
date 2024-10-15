import { useState } from "react";

export default function useTwoWayBinding(initialVal) {
    const [val, setVal] = useState(initialVal)
    function onChangeVal(e) {
        setVal(e.target.value)
    }
    return {
        val,
        setVal,
        onChangeVal
    }
}