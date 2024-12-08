import { useFormat } from "./useFormat"

interface codeType {
    code: string
}

export const Output = ({code}: codeType) => {
    useFormat(code)
    
    return (
        <>
            <div id="output" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'CustomFont', padding: '10px', color: 'white' }}>
            </div>
        </>
    )
}