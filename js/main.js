var newDiv = document.createElement('div')
var newImg = document.createElement('img')
newDiv.className ="addedClass"
var textHere =document.createTextNode('Today Is a New Day')
newDiv.appendChild(textHere)
newImg.setAttribute('src', 'http://www.bluestemprairie.com/.a/6a00d834516a0869e2016760f339c3970b-800wi')
var addHere = document.getElementById('addHere')
addHere.appendChild(newDiv)
addHere.appendChild(newImg)