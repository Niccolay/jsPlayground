import { useEffect } from "react"

export const useFormat = (code: string) => {
    useEffect(() => {

        const outProcess = (code: string) => {
            try {
                if (Array.isArray(code)) {
                    return `[${code.join(', ')}]`
                }

                if (typeof code === 'object' && code !== null) {
                    return JSON.stringify(code, null, 4)
                }

                if (typeof code === 'string' && code !== '') {
                    return `'${code}'`
                }

                return code
            } catch (error) {
                return `Error: ${error instanceof Error ? error.message : 'Código inválido'}`
            }

        }

        const salida = document.getElementById('output')
        if (salida) salida.textContent = outProcess(code)
    }, [code])
}