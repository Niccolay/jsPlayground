import {Editor, type Monaco }from '@monaco-editor/react'
import {  useRef, memo, useCallback} from 'react'
import { monarch } from './editorOptions/tokens'
import { handleCode } from './codeVal'
import { setVal, Timer } from '../type'
import { params } from './editorOptions/editorOptions'
import { splitCode } from '../hooks/evalCode'
//import { useGlobal } from '../hooks/useGlobal'//import the global state

export const Codi = memo(({ setCode, lang }: setVal) => {
    const debounceTimeout = useRef<Timer>(null)

    const handleBeforeMount = ( monaco: Monaco) => {
        monarch({monaco, lang})
    }

    const handleEditor = useCallback((value: string) => {
        //setCodex(value)//to change the global state
        try {
            const charArray = splitCode(value)
            if (!charArray) return

            const promises = charArray.map(char => handleCode(char.code, debounceTimeout, lang).then(result => {
                char.code = result
                return char
            }))

            Promise.all(promises).then(result => {
                setCode(result)
            })

        } catch {
            //toDo handle error
        }
    }, [setCode, lang])

    return (
        <Editor
            height = "100vh"
            defaultLanguage={lang}
            theme='one-dark-pro'
            beforeMount={handleBeforeMount}
            onChange={(value: string | undefined) => handleEditor(value || '')}
            options= {params}
        />
    )
})
