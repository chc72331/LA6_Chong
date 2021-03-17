
btnAdd.onclick=function() {
  int1 = parseInt(inptNum1.value)
  int2 = parseInt(inptNum2.value)
  lblAnswer.value = int1 + int2
}

btnMultiply.onclick=function() {
  int1 = parseInt(inptNum1.value)
  int2 = parseInt(inptNum2.value)
  lblAnswer.value = int1 * int2
}

btnClear.onclick=function() {
  lblAnswer.value = ""
  inptNum1.value = ""
  inptNum2.value = ""
  inptNum1.focus()
}