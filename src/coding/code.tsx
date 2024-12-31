import Editor, { BeforeMount} from '@monaco-editor/react'
import {  useRef, memo } from 'react'
import { monarch } from './editorOptions/tokens'
import { handleCode } from './codeVal'
import { setVal, Timer } from '../type'
//import { useGlobal } from '../hooks/useGlobal'//import the global state


export const Codi = memo(({ setCode }: setVal) => {
    const debounceTimeout = useRef<Timer>(null)
    //const { setCodex } = useGlobal()//set the global state

    const handleBeforeMount: BeforeMount = (monaco) => {
        monarch(monaco)
    }
    /* const handleEditorMount: OnMount = (editor) => {
        
    } */
    function handleEditor(value: string) {
        //setCodex(value)//to change the global state
        handleCode(value, debounceTimeout).then(result => setCode(result))
    }

    return (
        <>
            <Editor
                height = "90vh"
                defaultLanguage='javascript'
                theme='one-dark-pro'
                beforeMount={handleBeforeMount}
                onChange={(value: string | undefined) => handleEditor(value || '')}
                options= {{
                    minimap: {
                        enabled: false
                    },
                    suggestOnTriggerCharacters: false,
                    parameterHints: {
                        enabled: false
                    },
                    suggest: {
                        showWords: false,
                        showFunctions: false,
                        showKeywords: false
                    },
                    quickSuggestions: false,
                    wordBasedSuggestions: 'off',
                    cursorBlinking: 'expand',
                    scrollBeyondLastLine: false,
                    smoothScrolling: true,
                    scrollbar: {
                        vertical: 'auto',
                        horizontal: 'auto',
                        verticalScrollbarSize: 7,
                        horizontalScrollbarSize: 4,
                        useShadows: false
                    },
                    wordWrap: 'on',
                    lineNumbersMinChars: 20,
                    overviewRulerBorder: false,
                    overviewRulerLanes: 0,
                    hover: {
                        enabled: false
                    },
                    fontFamily: 'CustomFont',
                    fontSize: 16,
                    fontLigatures: true,
                    lineNumbers: 'off'
                }}
             />
        </>
    )
})
