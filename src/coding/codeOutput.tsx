//import { useEffect } from "react"
import { useEffect, useRef } from "react"
import { handleCode } from "./codeVal"
import { Timer } from "../type"
//import { useFormat } from "./useFormat"

interface codeType {
    code: string
}
declare global {
    interface Window {
        electronAPI: {
            executeCode: (code: string) => Promise<string>
        }
    }
}


export const Output = ({code}: codeType) => {
    //useFormat(code)

    //const debounceTimeout = useRef<Timer>(null)
    

    
    /* const runNode = async (code: string) => {
        try {
            const result = await window.electronAPI.executeCode(code)
            return result
        } catch (error) {
            return `Error: ${error}`
        }
    }
    useEffect(() => {
        const salida = document.getElementById('output')
        if (salida) {
            salida.textContent = code
            const run = async () => {
                const result = await runNode(code)
                salida.textContent = result ?? null
            }
            run()
        }
    }, [code]) */
    
    //handleCode(code, debounceTimeout)
    /* useEffect(() => {
    }, [code]) */

    return (
        <>
            <div id="output" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'CustomFont', color: 'white' }}>{console.log('render')}
            </div>
        </>
    )
}