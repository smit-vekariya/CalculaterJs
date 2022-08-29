var result;
function buttonPressed(key){
        result=document.getElementById('textdisplay').value+=key;
}
function buttonPressedResult(){
    try{
        result=eval(result)
        document.getElementById('textdisplay').value=result;
    }
    catch(err){
        document.getElementById('textdisplay').value='invalid value';    
    }
}
function buttonPressedC(){
     document.getElementById('textdisplay').value ='';

}
function buttonPressedCE(){
   var base = document.getElementById('textdisplay').value
   var correctionVal =base.slice(0, -1);
   document.getElementById('textdisplay').value = correctionVal;

}
document.addEventListener("keydown", function(event) {
    let list1=['+','-','*','/']
    list1.forEach(function (item) {
        if(event.key == item){
            result=document.getElementById('textdisplay').value+=event.key;
        }
    });
    if(event.key >=0 && event.key <=9 || event.key == '.'){
        result=document.getElementById('textdisplay').value+=event.key;
    }
    if (event.key=='Enter'){
        try{
            result=eval(result)
            document.getElementById('textdisplay').value=result;
        }
        catch(err){
            document.getElementById('textdisplay').value='invalid value';    
        }
    }
    if (event.key=='Delete'){
        document.getElementById('textdisplay').value='';    
        }
    if (event.key=='Backspace'){
        var base = document.getElementById('textdisplay').value
        var correctionVal =base.slice(0, -1);
        document.getElementById('textdisplay').value = correctionVal;
    }
})
