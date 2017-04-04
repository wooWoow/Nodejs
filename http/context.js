//讲解js上下文
// var pet = {
// 	words:'...',
// 	speak:function () {
// 		console.log(this.words)
// 		console.log(this === pet)
// 	}
// }
// pet.speak()

// function pet(words){
// 	this.words = words
// 	console.log(this.words)
// 	console.log(this === global)
// }
// pet('...')


function pet(words){
	this.words = words
	this.speak = function () {
		console.log(this.words)
		//this 指向新构建的对象，如 下面的pet
		console.log(this)
	}
}

var cat = new pet('Miao')

cat.speak()