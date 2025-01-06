import { EditorProps } from '@monaco-editor/react';


export const params: EditorProps['options'] = {
    minimap: {
        enabled: false
    },
    // suggestOnTriggerCharacters: false,
    // parameterHints: {
    //     enabled: false
    // },
    // suggest: {
    //     showWords: false,
    //     showFunctions: false,
    //     showKeywords: false
    // },
    // quickSuggestions: false,
    // wordBasedSuggestions: 'off',
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
    fontSize: 14,
    fontLigatures: true,
    lineNumbers: 'off'
}