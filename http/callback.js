function learn(something){
	console.log(something)
}
function we(learn,something){
	something += ' is cool'
	learn(something)
}
we(learn,'Nodejs')

we(function(something){
	console.log(something)
},'jade')