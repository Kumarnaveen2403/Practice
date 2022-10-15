Function.prototype.myApply = function(arguments){
    let myFunc = this;
    let arr = Array.from(arguments);
    let obj = arr.shift();
}

let obj = {
    fun : function(person1, person2){
        console.log("Hi, this is ", this.name, this.age);
        console.log("The arguments are : " , person1, person2);
        console.log(arguments);
    },
    name  : 'Naveen',
    age : '21'
}

obj2 = {
    name : 'Harry',
    age : '14'
}

obj.fun.myApply(obj2, ['Mayank', 'Prince']);