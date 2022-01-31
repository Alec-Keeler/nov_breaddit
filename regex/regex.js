const exp = /^\(?([0-9]{3,3})[\-\)]([0-9]{3,3})-([0-9]{4,4})$/

function phoneNumCheck(phoneNum, exp) {
    // console.log(exp.test(phoneNum))
    if (exp.test(phoneNum)) {
        return true
    } else {
        return false
    }
}

// phoneNumCheck('123-456-7890', exp)

function replacePhoneNum(phoneNum) {
    const remove = /[\(\)\-]/g
    const replace = ''
    console.log(phoneNum.replace(remove, replace))
    const newNum = phoneNum.replace(remove, replace)
    console.log(parseInt(newNum, 10))

}
replacePhoneNum('123-456-7890')