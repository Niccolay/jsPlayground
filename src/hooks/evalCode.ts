import { parseScript } from 'esprima'
import { generate } from 'escodegen'

export const splitCode = (code: string) => {
	const parsed = parseScript(code, { loc: true, range: true })
	const codeFragments: string[] = []
	const lines = []
	const result = []
	let lastCode = ""
	let lastLine
	if (!eval(code)) return

	parsed.body.forEach((node) => {
		if (node.type === 'ExpressionStatement') {
			const expr = node.expression

			const evaluable = (
				expr.type === 'CallExpression' ||
				expr.type === 'BinaryExpression' ||
				expr.type === 'MemberExpression' ||
				expr.type === 'Identifier' ||
				expr.type === 'ArrayExpression' ||
				expr.type === 'LogicalExpression' ||
				expr.type === 'UnaryExpression' ||
				expr.type === 'Literal'
			)

			if (evaluable) {
				lastCode += generate(node) + '\n'
				lines.push(node.loc?.end.line)
				codeFragments.push(lastCode.trim());
				result.push({ line: node.loc?.end.line, code: lastCode.trim() })
			} else {
				lastCode += generate(node) + '\n'
			}
		} else {
			lastCode += generate(node) + '\n'
		}
		lastLine = node.loc?.end.line
	})
	
	if (!codeFragments.includes(lastCode.trim())) {
		codeFragments.push(lastCode.trim())
		lines.push(lastLine)
		result.push({ line: lastLine, code: lastCode.trim() })
	}

	return result
}
