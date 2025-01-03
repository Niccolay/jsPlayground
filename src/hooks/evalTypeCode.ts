import ts from 'typescript';

function evalTypeScript(tsCode: string) {
    const result = ts.transpile(tsCode)
    return eval(result)
}

export const evalTypeCode = (lang: string, code: string) => {
    if (lang === 'typescript') return evalTypeScript(code)
    if (lang === 'javascript') return eval(code)
}