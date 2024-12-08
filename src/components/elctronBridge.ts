/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export function handleWindowAction() {
    const closeFunc = () => window.electronAPI.windowAction('close')
    const minimFunc = () => window.electronAPI.windowAction('minimize')
    const maximFunc = () => window.electronAPI.windowAction('maximize')
    return {
        closeFunc,
        minimFunc,
        maximFunc
    }
}