

function login(){
    const btn=document.getElementById("btn");
    const startbtn=btn.value;
    console.log(btn);
    localStorage.setItem("start",startbtn)
    window.location="index.html"
    
}