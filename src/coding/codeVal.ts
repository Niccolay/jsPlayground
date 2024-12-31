import { MutableRefObject } from 'react';
import { Timer } from '../type'


/* function captureLogs(setCode) {
    const originalLog = console.log
    console.log = (...args) => {
        const message = args.join(' ')
        setCode(prev => prev +'\n'+ message)

    }
} */

export function handleCode(value: string, debounceTimeout: MutableRefObject<Timer>): Promise<string> {
    if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
    }
    

    return new Promise(resolve => {
        try {
            const result = eval(value)
            resolve(result)
        } catch (error) {
            debounceTimeout.current = setTimeout(() => {
                resolve(`Error: ${error instanceof Error ? error.message : 'Código inválido'}`)
            }, 1000)
        }
    })
}
