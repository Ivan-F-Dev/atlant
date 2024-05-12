import {useEffect, useRef, useState} from "react";

/**
 * У элемента не должно быть вертикальных margin!
 * => {
 *    ref: HTMLDivElement,
 *    heightStyle: {height: string}
 * }
 */
export const useGetHeight = () => {
    const [height, setHeight] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect( () => {
        if (ref.current) {
            const prev = ref.current.previousSibling as HTMLDivElement
            // const next = ref.current.nextSibling as HTMLDivElement
            setHeight(prev.offsetHeight)//next.offsetHeight +
        }
    }, [])

    return {ref, heightStyle: {height: `calc(100vh - ${height+'px'}`}}
}