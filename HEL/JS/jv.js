const txtAnim = document.querySelector(" div div h6") 

new Typewriter(txtAnim, {
deleteSpeed: 10,
loop: true
})
.changeDelay(40)
.typeString('Une cohésion en fer ')
.pauseFor(1000)
.deleteChars(50)
.typeString('Exceptionnel')
.pauseFor(1000)
.deleteChars(50)
.typeString('Deux équipes')
.pauseFor(1000)
.deleteChars(50)
.typeString('Des joueurs authentiques ')
.pauseFor(1000)
.deleteChars(50)
.typeString('Une nouvelle structure !')
.pauseFor(1000)
.deleteChars(50)
.start()
