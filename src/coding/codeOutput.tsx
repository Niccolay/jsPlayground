import { useEffect } from "react"
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

    const runNode = async (code: string) => {
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
    }, [code])
    return (
        <>
            <div id="output" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'CustomFont', padding: '10px', color: 'white' }}>
            </div>
        </>
    )
}