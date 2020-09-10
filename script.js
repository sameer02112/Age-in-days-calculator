// console.log('hello');
// prompt('hello');
var flag=0;

function ageInDays(){
    if(flag==0){
        var birthyear = prompt('what is your age?');
        var age = (2020 - birthyear)*365;
        var h1 = document.createElement('h1');
        var ans = document.createTextNode('your age is'+ age); 
        h1.setAttribute('id','ageInDays');
        h1.appendChild(ans);
        document.getElementById('flex-box-result').appendChild(h1);
        flag=1;


    }
    
}
function resetFun(){
    
    document.getElementById('ageInDays').remove();
    flag=0;
}
