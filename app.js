



// ==============vote==================
let g = document.querySelector(".votedcontainer");
let h =0;
let counting = 0

g.addEventListener('click', function(e){
// =========for only one time login=======================
let checkloginlastpersonid = JSON.parse(localStorage.getItem("loginlastpersonid"));
let lastpersonloginnaem = checkloginlastpersonid.slice(checkloginlastpersonid.length-1)[0].lastpersonloginid;
let votecountedeveryperson = 0

checkloginlastpersonid.forEach((data)=>{
    if(lastpersonloginnaem === data.lastpersonloginid ){
        votecountedeveryperson++
    }
   
  })
  if (e.target.classList.contains('button')) {
    counting++;
}
console.log(`count ${counting} person ${votecountedeveryperson}`);

if(votecountedeveryperson <=1 && counting <=1){
    let selectedd= e.target.parentElement.lastElementChild
  h = +e.target.parentElement.lastElementChild.innerText+1;
  selectedd.innerText =h
console.log(h);
}
else{
    alert("you have vouted succesfully")
}
// console.log(votecountedeveryperson);

})



// ==============Registration=========================
function Register(event){
    event.preventDefault();
let fullName = document.querySelector("#fullName").value
let idCard = document.querySelector("#idCard").value
if(fullName === "" || idCard === ""){
    alert("please fill out registration form")
    }
    else{
  let pushing = JSON.parse(localStorage.getItem("registeredpersons")) || [];
        let object ={
       name:fullName,
       id:idCard
}  
pushing.push(object)
localStorage.setItem('registeredpersons',JSON.stringify(pushing))
    window.location.href = "login.html";
}
}
// var mainpage;


// ==================login======================
function Login(event){
    event.preventDefault()  


let loginname = document.querySelector(".loginname").value;
    let loginidcard = document.querySelector(".loginidcard").value;
    let pushing = JSON.parse(localStorage.getItem("registeredpersons"));

    let isUserAuthenticated = false;

    for (let data of pushing) {
        if (data.id === loginidcard && data.name === loginname) {
            let push = JSON.parse(localStorage.getItem("loginlastpersonid")) || [];
            let ob ={
               lastpersonloginid:loginidcard
         }  
         push.push(ob)
         localStorage.setItem('loginlastpersonid',JSON.stringify(push))
            isUserAuthenticated = true;
            break;
        }
    }

    // yeh part mai hamesha function sai bahir likhta tha is waja sai nhi chalta tha
    if (isUserAuthenticated) {
        window.location.href = "vote.html";
    } else {
        alert("Enter correct name and id");
    }
};



