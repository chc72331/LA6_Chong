
swtControl1.onchange = function(){
    lblSwitch.value = 'You switched it on!'
}


cbxControl2.onchange = function(){
  var choices = "Checked: "
    for (i = 0; i <= Checkbox1.length - 1; i++) {
        if (Checkbox1.getValue(i)) {
            choices = choices + i + " "
        }
    }
    lblCheckbox.value = choices;
}

selControl3.onchange = function(){
  NSB.MsgBox("You\'ve selected " + selControl3.value)
}


btnSubmit.onclick=function(){
  NSB.MsgBox(txtaControl4.value + "... Wow! That is so cool!")
}


btnClear2.onclick=function(){
  txtaControl4.value = ''
}
