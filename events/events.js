var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

// 官方推荐为一个对象设置事件监听不超过10个,超过会给警告，不过可以改
life.setMaxListeners(11)

//addEventListener

function water(who) {
	console.log('给 ' + who + ' 倒水')
}
life.on('求安慰',water)


life.on('求安慰',function (who) {
	console.log('给' + who + '唱歌')
})
life.on('求安慰',function (who) {
	console.log('给' + who + '做饭')
})
life.on('求安慰',function (who) {
	console.log('给' + who + '购物')
})
life.on('求安慰',function (who) {
	console.log('给' + who + '看电影')
})
life.on('test',function (who) {
	console.log('给  ' + who + '  dosomething')
})

//移除事件监听
life.removeListener('求安慰',water)
//批量移除
// life.removeAllListeners()
// life.removeAllListeners('test')


//查看事件是否被监听
var hasConfortListener = life.emit('求安慰','汉子')
var testConfortListener = life.emit('test','woman')


//查看有多少个监听
console.log(life.listeners('求安慰').length)
//查看有多少个监听
console.log(EventEmitter.listenerCount(life,'求安慰'))

// console.log(hasConfortListener)
// console.log(testConfortListener)


