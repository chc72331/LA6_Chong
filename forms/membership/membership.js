
let members = ["Mary", "Sam", "Joey", "Paul", "Mike",
                "Char", "Jenny", "Kennedy", "Kaden", 
                "Kurt", "Anne"]


btnMember.onclick=function(){
  if (members.includes(inptName.value))
    lblMember.value = 'You\'re already a member.'
  else {
    members.push(inptName.value)
    lblMember.value = 'Congrats! Now you\'re a member.'
  }
}

