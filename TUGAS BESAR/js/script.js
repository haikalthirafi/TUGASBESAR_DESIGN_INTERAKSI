function login(){

const username =
document.getElementById("username").value;

localStorage.setItem(
"username",
username
);

window.location =
"dashboard.html";
}

if(document.getElementById("welcome")){

const username =
localStorage.getItem("username");

document.getElementById(
"welcome"
).innerHTML =
"Halo, " + username + " 👋";

updateProgress();
}

function selesaiMateri(){

localStorage.setItem(
"progress",
50
);

alert(
"Materi selesai dipelajari!"
);

window.location =
"dashboard.html";
}

function cekJawaban(status){

if(status){

localStorage.setItem(
"score",
100
);

localStorage.setItem(
"progress",
100
);

window.location =
"hasil.html";

}else{

alert(
"Jawaban salah, coba lagi."
);
}
}

function updateProgress(){

let progress =
localStorage.getItem(
"progress"
) || 0;

document.getElementById(
"progressBar"
).style.width =
progress + "%";

document.getElementById(
"progressText"
).innerHTML =
progress + "%";
}