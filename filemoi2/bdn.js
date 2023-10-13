function bam(){
    var x = parseFloat(document.getElementById("a").value);
    var c;
    if (x<=9){
        c = 1;
    }
    else if(x%9==0){
        c=x/9;
    }
    else{
        c=((x-x%9)/9+1);
    }
    document.getElementById('c').innerHTML=c;
}
