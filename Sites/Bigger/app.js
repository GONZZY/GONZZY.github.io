function ShowBiggest(){
    var x = parseInt(document.getElementById("nb1").value);
    var y = parseInt(document.getElementById("nb2").value);
    var biggest = y;
    if(x > y){
        biggest = x;
    }
    
    window.alert("The biggest number is " + biggest);
}

