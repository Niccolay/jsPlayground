import {Editor, type Monaco }from '@monaco-editor/react'
import {  useRef, memo } from 'react'
import { monarch } from './editorOptions/tokens'
import { handleCode } from './codeVal'
import { setVal, Timer } from '../type'
import { params } from './editorOptions/editorOptions'
import { splitCode } from '../hooks/evalCode'
import { evalTypeCode } from '../hooks/evalTypeCode'
//import { useGlobal } from '../hooks/useGlobal'//import the global state

export const Codi = memo(({ setCode, lang }: setVal) => {
    const debounceTimeout = useRef<Timer>(null)

    const handleBeforeMount = ( monaco: Monaco) => {
        monarch({monaco, lang})
    }

    

    const handleEditor = (value: string) => {
        //setCodex(value)//to change the global state
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)
        }

        try {
            const code = evalTypeCode(lang, value) || ''
            const charArray = splitCode(code)

            if (!charArray) return setCode([{scape: 0, code: '', line: 1}])
            console.log(charArray)
            const newList = charArray.map(char => ({
                scape: char.scape,
                code: handleCode(char.code),
                line: char.line
            }))
            console.log(newList)
            setCode(newList)
            

        } catch (error) {
            debounceTimeout.current = setTimeout(() => {
                setCode([{scape: 0, code: `${error instanceof Error ? error.toString() : 'Código inválido'}`, line: 1}])
            }, 1000)
        }
    }

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
