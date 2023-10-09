function hai(){ 
    var dauvao = parseFloat(document.getElementById("dauvao").value);
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var x = 0;
    if(select1==select2){
        x = (dauvao);
    }
    else if(select1 == "a" && select2 =="b") {
        x = (dauvao*24000);
    }
    else if( select1=="b" && select2=="a"){
        x = (dauvao/24000);
    }
    document.getElementById('result').innerHTML=x;
    
}
