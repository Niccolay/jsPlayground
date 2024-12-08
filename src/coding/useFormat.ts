import { useEffect } from "react"

export const useFormat = (code: string) => {
    useEffect(() => {

        const outProcess = (code: string) => {
            try {
                const res = eval(code)
                
                if (Array.isArray(res)) {
                    return `[${res.join(', ')}]`
                }

                if (typeof res === 'object' && res !== null) {
                    return JSON.stringify(res, null, 4)
                }
    
                if (typeof res === 'string') {
                    return `'${res}'`
                }
    
                return res
            } catch (error) {
                return `Error: ${error instanceof Error ? error.message : 'Código inválido'}`
            }

        }

        const salida = document.getElementById('output')
        if (salida) salida.textContent = outProcess(code)
    }, [code])
}