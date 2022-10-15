(function(){
    let time = prompt("How long do you want this counter to run (in seconds)?");
    let counter = time;
    let id = setInterval(function(){
        console.log(counter);
        counter--;
        if(counter <= 0){
            clearInterval(id);
            alert("Done! The timer ran for " + time + " seconds");
        }
    }, 1000)
})();