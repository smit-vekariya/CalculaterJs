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


































// var total=0;
// function buttonPressed(key){
//     var base =document.getElementById('textdisplay').value +=key;
// }

// function buttonPressedOpreter(key){
//     document.getElementById('textdisplay').value +=key;
//     var base=document.getElementById('textdisplay').value; 
//     var val1=base.split(key)
//     var val2=0;
//     var valx=1;
//     var vals=0;

//     debugger
//     if (key == '+') {
//         for (var i of val1) {
//             if (i!=''){ 
//             val2 +=parseFloat(i)
//             console.log(val2)
//             }
//         }
//     document.getElementById('outputdisplay').value=val2.toString();
//     }  
//     else if(key == '*') {
//         for (var i of val1) {
//             if (i!=''){ 
//             valx *=parseFloat(i)
//             console.log(valx)
//         }
//        } 
//     document.getElementById('outputdisplay').value=valx.toString();
//    } 
//     else if(key == '-') {
//         for (var i of val1) {
//             if (i!=''){ 
//             vals -=parseFloat(i)
//             console.log(vals)
//             }
//         } 
//     document.getElementById('outputdisplay').value=vals.toString();
//     }  
// }


// function buttonPressedC(){
//      document.getElementById('textdisplay').value ='';
//      document.getElementById('outputdisplay').value ='';

// }

// function buttonPressedCE(){
//     console.log('ce');
//    var base = document.getElementById('textdisplay').value
//    var correctionVal =base.slice(0, -1);
//    document.getElementById('textdisplay').value = correctionVal;
   
// }