import { MutableRefObject } from 'react';
import { Timer } from '../type'
import { format } from '../hooks/useFormat';
import { evalTypeCode } from '../hooks/evalTypeCode';


/* function captureLogs(setCode) {
    const originalLog = console.log
    console.log = (...args) => {
        const message = args.join(' ')
        setCode(prev => prev +'\n'+ message)

    }
} */

export function handleCode(value: string, debounceTimeout: MutableRefObject<Timer>, lang: string): Promise<string> {
    if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
    }
    

    return new Promise(resolve => {
        try {
            const result = evalTypeCode(lang, value)
            const formatted = format(result)

            resolve(formatted)
        } catch (error) {
            debounceTimeout.current = setTimeout(() => {
                resolve(`Error: ${error instanceof Error ? error.toString() : 'Código inválido'}`)
            }, 1000)
        }
    })
}
