import { parseScript } from 'esprima'
import { generate } from 'escodegen'
import { ArrObj } from '../App'

export function getLineIndex(line: number[]) {
	const lines: Array<number> = []
	line.forEach((char, index) => {
		lines.push(char - 1 - (line[index - 1] ?? 0))
	})
	return lines
}

export function getLastLine(code: string) {
	const lines = code.trim().split('\n')
	let lastLine = ''

	for (let i = lines.length - 1; i >= 0; i--) {
		if (lines[i].trim() !== '') {
			lastLine = lines[i].trim()
			break
		}
	}

	return lastLine
}

export const splitCode = (code: string) => {
	const parsed = parseScript(code, { loc: true, range: true })
	const codeFragments: string[] = []
	const lines = []
	const result: Array<ArrObj> = []
	let lastCode = ""
	//let lastLine = 0
	let acc = 0
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
				expr.type === 'Literal' ||
				expr.type === 'NewExpression'
			)

			if (evaluable) {
				lastCode += generate(node) + '\n'
				codeFragments.push(lastCode.trim());
				lines.push(node.loc?.end.line)
				result.push({ scape: (node.loc?.end?.line || 0) - acc - 1, code: lastCode.trim(), line: node.loc?.end.line || 0 })
				acc = node.loc?.end.line ?? 0
			} else {
				lastCode += generate(node) + '\n'
			}
		} else {
			lastCode += generate(node) + '\n'
		}
		//lastLine = node.loc?.end.line || 0
	})
	
	/* if (!codeFragments.includes(lastCode.trim())) {
		codeFragments.push(lastCode.trim())
		lines.push(lastLine)
		try {
			const res = eval(getLastLine(lastCode))
		}
		result.push({ scape: lastLine - acc - 1, code: lastCode.trim(), line: lastLine })
		acc = lastLine
	} */

	//const indexCode = getLineIndex(lines)

	return result
}
