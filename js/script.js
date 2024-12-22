let num1= document.getElementById("text");
let num2= document.getElementById("email");
let num3= document.getElementById("subject");
let num4= document.getElementById("area");
let num5= document.getElementById("button");
num5.addEventListener("click",
    ()=>{
        if(num1.value==""){
            console.log("error in text")
        }
        if( num2.value.indexOf(".")==-1|| num2.value.indexOf("@")==-1|| num2.value=="")
        {
            console.log("error in email")
        }
        if (num3.value=="")
        {
            console.log(" error in subject")
        }
        if(num4.value==""){
            console.log(" error in area")
        }
    }
)