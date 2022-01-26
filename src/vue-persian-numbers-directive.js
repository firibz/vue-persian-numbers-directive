import { toEnglishNumbers, toOnlyEnglishNumbers } from 'src/converts/ConvertToEnglish'

export const toEnglishNumbersDirective = {
  updated (el) {
    const sourceValue = el.getElementsByTagName('input')[0].value
    const newValue = toEnglishNumbers(sourceValue)

    if (sourceValue !== newValue) {
      el.getElementsByTagName('input')[0].value = newValue
      el = el.getElementsByTagName('input')[0]
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }
}

export const toOnlyEnglishNumbersDirective = {
  updated (el) {
    const sourceValue = el.getElementsByTagName('input')[0].value
    const newValue = toOnlyEnglishNumbers(sourceValue)
    console.log(sourceValue)
    console.log(newValue)
    if (sourceValue !== newValue) {
      el.getElementsByTagName('input')[0].value = newValue
      el = el.getElementsByTagName('input')[0]
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }
}
