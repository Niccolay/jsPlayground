import { BeforeMount, type Monaco } from "@monaco-editor/react"
import OneDarkPro from './one-dark-pro.json'

interface Token {
    monaco: Monaco
    lang: string
}

const colore: BeforeMount = (monaco) => {

    monaco.editor.defineTheme('one-dark-pro', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'keyword', foreground: '#c678dd' },
            { token: "parameters", foreground: "#e06c75"},
            { token: "comment", foreground: "#7f848e", fontStyle: "italic" },
            { token: 'keyword.false', foreground: '#d19a66' },
            //...OneDarkPro.rules,
            // { token: 'limiters', foreground: '#d19a66' },

            // { token: 'keyword.true', foreground: '#d19a66' },
            // { token: 'keyword.null', foreground: '#d19a66' },
            // { token: 'keyword.undefined', foreground: '#d19a66' }, 
            

            { token: 'keyword.number', foreground: '#e5c07b' },
            // { token: 'keyword.string', foreground: '#98c379' }, 
            // { token: 'keyword.boolean', foreground: '#e06c75' }, 
            // { token: 'keyword.object', foreground: '#e5c07b' }, 
            // { token: 'keyword.array', foreground: '#61afef' }, 
            
            // { token: 'typeKeyword', foreground: '#e5c07b' },
            { token: 'string', foreground: '#98c379' },
            // { token: "key-access", foreground: "#e06c75" },
            { token: 'function-name', foreground: '#61afef' },
            // { token: 'string.escape', foreground: '#56b6c2', fontStyle: 'italic' },
            { token: 'number', foreground: '#d19a66'},
            { token: "variable", foreground: "#e5c07b" },
            { token: "operator", foreground: '#56b6c2'},
            // { token: "arrow-function", foreground: '#c678dd'},
            // { token: "ternary-operator", foreground: '#c678dd'},
            { token: "class-name", foreground: "#e5c07b"},
            { token: "object-property", foreground: "#e06c75"},

            { token: "braces", foreground: "#e06c75" },
            // { token: "delimiter.bracket", foreground: "#d19a66" }, 
            // { token: "brackets", foreground: "#d19a66" }, 
            // { token: "parentheses", foreground: "#d19a66" }, 
            
        ],
        colors: {
            ...OneDarkPro.colors
            /* 'editor.foreground': '#abb2bf',
            'editor.background': '#191a2a',
            'editor.lineHighlightBorder': '#00000000',
            'editor.lineHighlightBackground': '#00000000',
            'editorCursor.foreground': '#2869c9', */
        }
    })
}

export const monarch = ({monaco, lang}: Token) => {

    monaco.languages.setMonarchTokensProvider(lang, {
    tokenizer: {
        root: [
            //limitadores
            /* [/\{|\}/, 'limiters'],
            [/[{}]/, 'delimiter.bracket'],
            [/\{|\}/, "braces"],
            [/\[|\]/, "brackets"],
            [/\(|\)/, "parentheses"], */

            
            [/\b(false|true|null|undefined)\b/, 'keyword.false'],
            //[/\(\s*([^)"'\d]*)\)/, 'parameters'],
            [/\b(number|string|boolean|object|array)\b/, 'keyword.number'],
            [/<=|>=|==|!=|===|!==|\+|-|\*\*|\*|\|%|\+\+|--|<<|<|>|>>|>>>|&|\||\^|!|~|&&|\|\||:|=|\+=|-=|\*=|\*\*=|\/=|%=|<<=|>>=|>>>=|&=|\|=|\^=|@|\?\?/, 'operator'],
            [/(\/\/.*$)/, 'comment'],
            [/(\/\*[\s\S]*?\*\/)/, 'comment'],
            [/(?<![a-zA-Z])([a-z_$][\w$]*)(?=\s*\()/, 'function-name'],
            [/[a-z_$][\w$]*(?=\s*\()/, 'function-name'],
            [/[A-Z_$][\w$]*(?=\s*\()/, 'class-name'],
            
            [/[a-zA-Z_$][\w$]*(?=\s*=\s*\(\s*[^)]*\)\s*=>)/, 'function-name'],
            [/([a-zA-Z_$][\w$]*)(?=\s*[:]\s*)/, 'object-property'],
            [/\b(break|case|catch|class|continue|const|constructor|debugger|default|delete|do|else|export|extends|finally|for|from|function|get|if|import|in|instanceof|let|new|null|return|set|super|switch|symbol|this|throw|try|typeof|undefined|var|void|while|with|yield|async|await|of|as|interface|type)\b/, 'keyword'],
            [/([a-zA-Z_$][\w$]*)\s*(?=\s*=\s*[^=])/, 'variable'],
            //[/\b(any|boolean|number|object|string|undefined)\b/, 'typeKeyword'],
            [/"/, { token: 'string.quote', bracket: '@open', next: '@string_double' }],
            [/'/, { token: 'string.quote', bracket: '@open', next: '@string_single' }],
            [/`/, { token: 'string.quote', bracket: '@open', next: '@string_backtick' }],
            [/\b\d+(\.\d+)?([eE][+-]?\d+)?\b/, 'number'],
            //[/\.(\b[a-zA-Z_]\w*\b)(?!\()/, 'key-access'],
   
            //[/=>/, 'arrow-function'],
            //[/\?/, 'ternary-operator'],

        ],
        
        string_double: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape'],
            [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],
      
        string_single: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string.escape'],
            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],
      
        string_backtick: [
            [/[^\\`$]+/, 'string'],
            [/\\./, 'string.escape'],
            [/\${/, { token: 'delimiter.brace', bracket: '@open', next: '@braced_expression' }],
            [/`/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],
      
        braced_expression: [
            [/\{/, 'delimiter.brace', '@push'], 
            [/\}/, 'delimiter.brace', '@pop'], 
            { include: 'root' },
        ],
    }});
    colore(monaco)
}
