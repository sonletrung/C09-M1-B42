
function ss(){
    let a1 = parseFloat(document.getElementById('input1').value);
    let b1 = parseFloat(document.getElementById('input2').value);
    document.getElementById("input1").addEventListener("keydown",function(event){
        if (event.keyCode === 13){
            document.getElementById("input2").focus();
        }
    })
if((a1%b1)==0){
    Text="a chia hết cho b";
}
else{
    Text="a không chia hết cho b";
}
document.getElementById('result').innerHTML=Text;
}
    function enter(){
        let tuoi = parseFloat(document.getElementById('tuoi').value);
        if(tuoi>=16){
            Text = "đủ tuổi";
        }
        else{
            Text = "chưa đủ tuổi";
        }
    document.getElementById('old').innerHTML= Text;
    }
