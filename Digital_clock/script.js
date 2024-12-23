const clock=document.getElementById('clock')
setInterval(function(){
let date=new Date()
//console.log(date.toLocaleTimeString());

clock.innerHTML=date.toLocaleTimeString();
},1000)
//2000 mean 2 sec baad time dikhayega
//1000 means 1 sec baad wala time dikhayega
