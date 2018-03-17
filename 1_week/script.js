document.addEventListener('DOMContentLoaded', function () {
    let btnCheck = document.querySelector(".blockOne--button");
    let blockTwo = document.querySelector(".blockTwo");

    btnCheck.addEventListener('click', function () {
        blockTwo.style.display = "block";

    })
    
    let btnReset = document.querySelector(".btnReset");

    btnReset.addEventListener('click', function () {
        blockTwo.style.display = "none";
    })

    let btnReplay = document.querySelector(".btnReplay");

    btnReplay.addEventListener('click', function () {
        blockTwo.style.display = "none";

        let textArea = document.createElement("TEXTAREA");
        let t = document.createTextNode("Please, write your message here...");
        const block = document.querySelector(".new");

        textArea.appendChild(t);
        textArea.classList.add("textarea");
        block.appendChild(textArea);

    })
})