import {useEffect, useRef, useState} from "react";

/**
 * У элемента не должно быть вертикальных margin!
 */
export const useGetHeight = () => {
    const [height, setHeight] = useState<number>(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect( () => {
        console.log('REF', {ref, next: ref?.current?.nextSibling, prev: ref?.current?.previousSibling})
        if (ref.current) {
            const prev = ref.current.previousSibling as HTMLDivElement
            const next = ref.current.nextSibling as HTMLDivElement
            setHeight(next.offsetHeight + prev.offsetHeight)
        }
    }, [])

    return {ref, heightStyle: {height: `calc(100vh - ${height+'px'}`}}
}