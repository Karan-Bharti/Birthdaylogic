const dateOfBirth= document.querySelector("#date-of-birth")
const luckyNumber= document.querySelector("#lucky-number")
const checkButton= document.querySelector("#chk-btn")
const outputB=document.querySelector("#output-B")

function compareValues(sum,luckyNumber){
if(sum%luckyNumber===0){
    outputB.innerText="Your birth date is lucky";
}else{
    outputB.innerText= "You birth date is not that lucky";
}

}


function checkBirthdayLuck(){
    const dob= dateOfBirth.value;
   const sum= calculateSum(dob)
   compareValues(sum,luckyNumber.value)
}

function calculateSum(dob){
dob=dob.replaceAll("-","");
let sum =0;
for(let i=0;i<dob.length;i++){
sum=sum+Number(dob.charAt(i));

}

return sum
}


checkButton.addEventListener("click", checkBirthdayLuck)

