
const isNumber = (n: string) => /[0-9]/.test(n);


const onlyNumbers = (string: string) => Number(string.split('').filter(isNumber).join(''));

export default onlyNumbers;
