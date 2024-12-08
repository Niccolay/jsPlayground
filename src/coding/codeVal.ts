import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Timer } from '../type'


function captureLogs() {
    console.log = (args) => {
        return (args)
    } 
}

export function handleCode(value: string, debounceTimeout: MutableRefObject<Timer>, setCode: Dispatch<SetStateAction<string>>) {

    if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
    }

    try {
        const logs = captureLogs()
        if (logs !== undefined) {
            setCode(logs)
            return
        }
        eval(value)
        console.log(eval(value))
        setCode(value)

    } catch {
        debounceTimeout.current = setTimeout(() => {  
            setCode(value)
        }, 1000);
    }
}