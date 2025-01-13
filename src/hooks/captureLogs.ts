const code = `function hell() {
    return 'hell'
}
const lista = [1,2,3,4,5]
function hola() {
    console.log(hell())
    console.log('ho')
    return 'hola'
}
hola()
const newLista = lista.map(char => char + 2)
console.log(newLista)`

function captureIndexLogs(code: string) {
  const lines = code.split('\n')
  const logLines: Array<number> = []

  lines.forEach((lines, index) => {
    if (lines.includes('console.log')) {
      logLines.push(index + 1)
    }
  })

  return logLines
}

function captureLogs() {
  const logStore: Array<string> = []
  const originalLog = console.log

  console.log = (...args) => {

    logStore.push(args.join(' '))
  }

  return () => {
    console.log = originalLog
    return logStore
  }
}

export function executeCode(code: string) {
  const restoreLogs = captureLogs()
  const logLines = captureIndexLogs(code)

  try {
    eval(code)
  } catch (err) {
    console.log(err)
  }

  const capturedLogs = restoreLogs()
  const logs = [...capturedLogs].map((char, index) => ({
    line: logLines[index],
    code: char
  }))
  return logs
  //console.error(logs)
}

const ele = executeCode(code)
console.log(ele)