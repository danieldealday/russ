var str = "dog";
var num = 1234;
var arr = [1, "abc", ['some array'], {foo: 'foo', bar: 'bar'}];
var obj = {
	soccer: 'league',
	position: 'foward',
	awesome: true
}

function sayName (name) {
	console.log(name);
	return name;
}

sayName("Goku");

if (obj.awesome) {
	sayName("Vegeta");
} else {
	return false;
}