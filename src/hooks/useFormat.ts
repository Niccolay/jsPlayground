type Code = string | number | boolean | object | Array<string | number | object > | (() => string)
export const format = (code: Code) => {
    try {
        if (Array.isArray(code)) return `[${code.join(', ')}]`

        if (typeof code === 'object' && code !== null) return `${JSON.stringify(code, null, 4)}`

        if (typeof code === 'string' && code !== '') return `'${code}'`

        if (typeof code === 'function') return `Function ${code.name}`

        if (typeof code === 'boolean') return code ? 'True' : 'False'

        if (typeof code === 'undefined') return ''

        return `${code}`
    } catch (error) {
        return `Error: ${error instanceof Error ? error.message : 'Código inválido'}`
    }

}