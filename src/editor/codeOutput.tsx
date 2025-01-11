import { ArrObj } from "../App"

interface codeType {
    code: Array<ArrObj>
}


export const Output = ({ code }: codeType) => {

    return (
        <>
            <div id="output" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'CustomFont', color: 'white', fontSize: 14 }}>
                {code.map((char) => 
                    <div
                        key={char.line}
                    >{'\n'.repeat(char.scape)+char.code}

                    </div>
                )}
            </div>
        </>
    )
}
