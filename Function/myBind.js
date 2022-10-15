Function.prototype.myBind = function(){
    let orgFunc = this;
    let args = Array.from(arguments);
    let obj = args[0];
    let restArgs = args.slice(1);

    let newFunction = function(){
        let moreArgs = Array.from(arguments);
        args = args.concat(moreArgs);
        orgFunc.apply(obj, args);
    }

    return newFunction;
}

let obj = {
    fun : function(person1, person2){
        console.log("Hi, this is", this.name, this.age);
        console.log("The arguments are :" , person1, person2);
        console.log(arguments);
    },
    name  : 'Naveen',
    age : '21'
}

obj2 = {
    name : 'Harry',
    age : '14'
}

let boundFunction = obj.fun.myBind(obj2, 'Mayank', 'Prince');
boundFunction("Ron", "Hermione");    