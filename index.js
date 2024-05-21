function find() {
    alert("Some times spaces may include")
    let originalText = document.getElementById("orginal").value.split(/\s+/);
    let changedText = document.getElementById("changed").value.split(/\s+/);
    let differenceDiv = document.getElementById("difference");
    differenceDiv.innerHTML = "";

    for (let i = 0; i < changedText.length; i++) {
        let spanelement = document.createElement("span");
        if (originalText[i].toLowerCase() !== changedText[i].toLowerCase()) {
            spanelement.classList.add("changed");
        }
        spanelement.textContent = changedText[i] + " ";
        differenceDiv.appendChild(spanelement);
    }
}
