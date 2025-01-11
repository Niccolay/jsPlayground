// import { MutableRefObject } from 'react';
// import { Timer } from '../type'
// import { evalTypeCode } from '../hooks/evalTypeCode';
import { format } from '../hooks/useFormat';


/* function captureLogs(setCode) {
    const originalLog = console.log
    console.log = (...args) => {
        const message = args.join(' ')
        setCode(prev => prev +'\n'+ message)

    }
} */

export function handleCode(value: string) {
    try {
        const result = eval(value)
        const formatted = format(result)

        return formatted
    } catch (error) {
        return `Error: ${error instanceof Error ? error.toString() : 'Código inválido'}`
    }
    

    /* return new Promise(resolve => {
        try {
            const result = evalTypeCode(lang, value) || ''
            const formatted = format(eval(result))

            resolve(formatted)
        } catch (error) {
            debounceTimeout.current = setTimeout(() => {
                resolve(`Error: ${error instanceof Error ? error.toString() : 'Código inválido'}`)
            }, 1000)
        }
    }) */
}
