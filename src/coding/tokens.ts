import { BeforeMount } from "@monaco-editor/react"

const colore: BeforeMount = (monaco) => {
    monaco.editor.defineTheme('one-dark-pro', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'keyword', foreground: '#c678dd' },
            { token: 'typeKeyword', foreground: '#e5c07b' },
            { token: 'string', foreground: '#98c379' },
            { token: 'function-name', foreground: '#61afef' },
            { token: 'string.escape', foreground: '#56b6c2', fontStyle: 'italic' },
            { token: 'number', foreground: '#d19a66'},
            { token: "variable", foreground: "#e5c07b" },
            { token: "operator", foreground: '#56b6c2'},
            { token: "arrow-function", foreground: '#c678dd'},
            { token: "ternary-operator", foreground: '#c678dd'},
            { token: "parameters", foreground: "#e06c75"},
            { token: "object-property", foreground: "#e06c75"},
            { token: "comment", foreground: "#7f848e", fontStyle: "italic" },
            
        ],
        colors: {
            'editor.foreground': '#e06c75',
            'editor.background': '#191a2a',
            'editor.lineHighlightBorder': '#00000000',
            'editor.lineHighlightBackground': '#00000000',
            'editorCursor.foreground': '#2869c9',
        }
    })
}

export const monarch: BeforeMount = (monaco) => {
    monaco.languages.setMonarchTokensProvider('javascript', {
    tokenizer: {
        root: [

            [/(\/\/.*$)/, 'comment'],
            [/(\/\*[\s\S]*?\*\/)/, 'comment'],
            [/[a-zA-Z_$][\w$]*(?=\s*\()/, 'function-name'],
            [/[a-zA-Z_$][\w$]*(?=\s*=\s*\(\s*[^)]*\)\s*=>)/, 'function-name'],
            [/\(\s*([^)"'\d]*)\)/, 'parameters'],
            [/([a-zA-Z_$][\w$]*)(?=\s*[:]\s*)/, 'object-property'],
            [/\b(break|case|catch|class|continue|const|constructor|debugger|default|delete|do|else|export|extends|false|finally|for|from|function|get|if|import|in|instanceof|let|new|null|return|set|super|switch|symbol|this|throw|true|try|typeof|undefined|var|void|while|with|yield|async|await|of)\b/, 'keyword'],
            [/\b(any|boolean|number|object|string|undefined)\b/, 'typeKeyword'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string_double' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@string_single' }],
            [/`/, { token: 'string.quote', bracket: '@open', next: '@string_backtick' }],
            [/\b\d+(\.\d+)?([eE][+-]?\d+)?\b/, 'number'],
            [/[a-zA-Z_$][\w$]*(?!\s*\()/, 'variable'],
            [/=>/, 'arrow-function'],
            [/\?/, 'ternary-operator'],
            [/<=|>=|==|!=|===|!==|\+|-|\*\*|\*|\/|%|\+\+|--|<<|<|>>|>>>|&|\||\^|!|~|&&|\|\||:|=|\+=|-=|\*=|\*\*=|\/=|%=|<<=|>>=|>>>=|&=|\|=|\^=|@/, 'operator'],

        ],
        comment: [
            [/[^*]+/, 'comment'], // Contenido del comentario
            [/\*\//, { token: 'comment', next: '@pop' }], // Fin del comentario
            [/./, 'comment'], // Cualquier otro carácter dentro del comentario
        ],
        // Reglas para las cadenas
        string_double: [
            [/[^\\"]+/, 'string'], // Contenido dentro de comillas dobles
            [/\\./, 'string.escape'], // Secuencias de escape
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }], // Cierre de la cadena
        ],
      
        string_single: [
            [/[^\\']+/, 'string'], // Contenido dentro de comillas simples
            [/\\./, 'string.escape'], // Secuencias de escape
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }], // Cierre de la cadena
        ],
      
        string_backtick: [
            [/[^\\`$]+/, 'string'], // Contenido dentro de template strings
            [/\\./, 'string.escape'], // Secuencias de escape
            [/\${/, { token: 'delimiter.brace', bracket: '@open', next: '@braced_expression' }], // Interpolación en template strings
            [/`/, { token: 'string.quote', bracket: '@close', next: '@pop' }], // Cierre de la cadena
        ],
      
        braced_expression: [
            [/\{/, 'delimiter.brace', '@push'], // Abrir bloque
            [/\}/, 'delimiter.brace', '@pop'], // Cerrar bloque
            { include: 'root' }, // Evaluar contenido dentro de interpolaciones
        ],
    }});
    colore(monaco)
}