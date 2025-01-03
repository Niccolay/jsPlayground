import Editor, { BeforeMount} from '@monaco-editor/react'
import {  useRef, memo } from 'react'
import { monarch } from './editorOptions/tokens'
import { handleCode } from './codeVal'
import { setVal, Timer } from '../type'
import { params } from './editorOptions/editorOptions'
//import { useGlobal } from '../hooks/useGlobal'//import the global state


export const Codi = memo(({ setCode, lang }: setVal) => {
    const debounceTimeout = useRef<Timer>(null)
    //const { setCodex } = useGlobal()//set the global state

    const handleBeforeMount: BeforeMount = (monaco) => {
        monarch(monaco)
    }

    function handleEditor(value: string) {
        //setCodex(value)//to change the global state
        handleCode(value, debounceTimeout, lang).then(result => setCode(result))
    }

    return (
        <>
            <Editor
                height = "90vh"
                defaultLanguage={lang}
                theme='one-dark-pro'
                beforeMount={handleBeforeMount}
                onChange={(value: string | undefined) => handleEditor(value || '')}
                options= {params}
             />
        </>
    )
})
