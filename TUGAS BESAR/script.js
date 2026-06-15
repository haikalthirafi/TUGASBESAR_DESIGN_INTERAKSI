let progress = 0;

const face = document.getElementById("face");
const message = document.getElementById("message");
const progressBar = document.getElementById("progress");

function updateProgress(value){
    progress += value;

    if(progress > 100){
        progress = 100;
    }

    progressBar.style.width = progress + "%";
}

function finishMaterial(){

    face.textContent = "🤩";

    message.textContent =
    "Keren! Kamu sudah menyelesaikan materi pertama.";

    updateProgress(50);
}

function checkAnswer(correct){

    if(correct){

        face.textContent = "🥳";

        message.textContent =
        "Hebat! Jawabanmu benar.";

        updateProgress(50);

    }else{

        face.textContent = "😢";

        message.textContent =
        "Yah, belum tepat. Coba lagi ya.";
    }
}