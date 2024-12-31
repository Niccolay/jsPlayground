
interface codeType {
    code: string
}

export const Output = ({ code }: codeType) => {

    return (
        <>
            <div id="output" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'CustomFont', color: 'white' }}>{code}
            </div>
        </>
    )
}
