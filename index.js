function find() {
    let originalText = document.getElementById("orginal").value.split(" ");
    let changedText = document.getElementById("changed").value.split(" ");
    let differenceDiv = document.getElementById("difference");
    differenceDiv.innerHTML = "";

    for (let i = 0; i < changedText.length; i++) {
        let spanelement = document.createElement("span");
        if (originalText[i] !== changedText[i]) {
            spanelement.classList.add("changed");
        }
        spanelement.textContent = changedText[i] + " ";
        differenceDiv.appendChild(spanelement);
    }
}
