import Editor, { BeforeMount} from '@monaco-editor/react'
//import monaco from '@monaco-editor/react'
import {  useRef } from 'react'
import { monarch } from './tokens'
import { handleCode } from './codeVal'
import { Timer, setVal } from '../type'





export const Codi = ({setCode}: setVal) => {

    const debounceTimeout = useRef<Timer>(null)

    const handleBeforeMount: BeforeMount = (monaco) => {
        monarch(monaco)
    }

    /* const handleEditorMount: OnMount = (editor) => {
        
    } */
    function handleEditor(value: string) {
        handleCode(value, debounceTimeout, setCode)
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
}