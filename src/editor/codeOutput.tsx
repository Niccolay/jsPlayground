interface codeType {
    code: Array<ArrObj>
}
interface ArrObj {
    line: number
    code: string
}

export const Output = ({ code }: codeType) => {

    return (
        <>
            <div id="output" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'CustomFont', color: 'white' }}>
                {code.map((char) => 
                    <div
                        key = {char.line}
                    >{char.code}

                    </div>
                )}
            </div>
        </>
    )
}
