export const isNumberValid = (number) => {
    const regexNumber = /^[0-9]*$/
    return regexNumber.test(number)
  }

export const isTwoNumberValid = (number) => {
    const regexNumber = /[0-9]{3}/
    return regexNumber.test(number)
  }



