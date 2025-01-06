import {Editor, type Monaco }from '@monaco-editor/react'
import {  useRef, memo} from 'react'
import { monarch } from './editorOptions/tokens'
import { handleCode } from './codeVal'
import { setVal, Timer } from '../type'
import { params } from './editorOptions/editorOptions'
//import { useGlobal } from '../hooks/useGlobal'//import the global state


export const Codi = memo(({ setCode, lang }: setVal) => {
    const debounceTimeout = useRef<Timer>(null)

    const handleBeforeMount = ( monaco: Monaco) => {
        monarch({monaco, lang})
    }

    function handleEditor(value: string) {
        //setCodex(value)//to change the global state
        handleCode(value, debounceTimeout, lang).then(result => setCode(result))
    }
    const valor = `function hola() {
        return "hola"}\nconst hell = (name: string) => \`hola ${name}\`\n3216146\n//asdfasdfas\nconst hol = new Promise((res) => res('hola'))\n321321
    `

    return (
        <>
            <Editor
                height = "90vh"
                value={valor}
                defaultLanguage={lang}
                theme='one-dark-pro'
                beforeMount={handleBeforeMount}
                onChange={(value: string | undefined) => handleEditor(value || '')}
                options= {params}
             />
        </>
    )
})
