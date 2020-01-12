//factory pattern
function testFactory(param1,param2,param3){
	let temp = {};
	temp.property1 = param1;
	temp.property2 = param2;
	temp.property3 = param3;
	temp.method1=function(){
		return property1+ " , "+property2+ " , "+property3;
	}
	return temp;
}

var obj1 = testFactory('param1',"param2","param3");
console.log(obj1);

//prototype pattern

function testPrototype(){
}
testPrototype.prototype.property1 = "";
testPrototype.prototype.property2 = "";
testPrototype.prototype.property3 = "";
testPrototype.prototype.method1=function(){
	return property1 + " , "+ property2 + " , "+property3;
}
var obj2 = new testPrototype();
//obj2.property1 = "testproperty1";
obj2.property2 = "testproperty2";
obj2.property3 = "testproperty3";
console.log(obj2);
console.log('property1' in obj1);
console.log(testPrototype.hasOwnProperty("property1"));
//constructor pattern

function testConstructor(param1,param2,param3){
	this.property1 = param1;
	this.property2 = param2;
	this.property3 = param3;
	this.method1=function(){
		return property1+ " , "+property2+ " , "+property3;
	}
}

var obj3 = new testConstructor('param1',"param2","param3");
console.log(obj1);

//dynamic prototype pattern
function testDynamicConstructor(param1,param2,param3){
	this.property1 = param1;
	this.property2 = param2;
	this.property3 = param3;
}
testDynamicConstructor.prototype.method1=function(){
	return property1+ " , "+property2+ " , "+property3;
}
//testDynamicConstructor.constructor = testDynamicConstructor.prototype.constructor;
var obj4 = new testDynamicConstructor('param1',"param2","param3");
console.dir(obj1);
console.dir(testDynamicConstructor);      
console.dir(testDynamicConstructor.__proto__);      
console.dir(testDynamicConstructor.constructor());
console.log(testDynamicConstructor.constructor().hasOwnProperty("property1"));
console.dir(testDynamicConstructor.__proto__.__proto__.__proto__);      