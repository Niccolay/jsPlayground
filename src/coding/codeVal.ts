import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { Timer } from '../type'


/* function captureLogs(setCode) {
    const originalLog = console.log
    console.log = (...args) => {
        const message = args.join(' ')
        setCode(prev => prev +'\n'+ message)

    }
} */

export function handleCode(value: string, debounceTimeout: MutableRefObject<Timer>, setCode: Dispatch<SetStateAction<string>>) {
    if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
    }

    try {
        /* const logs = captureLogs(setCode)
        if (logs !== undefined) {
            setCode(logs)

            return
        } */
        eval(value)
        //console.log(eval(value))
        setCode(value)

    } catch (error) {
        debounceTimeout.current = setTimeout(() => {  
            setCode(`Error: ${error instanceof Error ? error.message : 'Código inválido'} */`)
        }, 1000);
    }
}