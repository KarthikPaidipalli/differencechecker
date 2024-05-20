function find() {
    alert("Some times spaces may include")
    let originalText = document.getElementById("orginal").value.toLowerCase().split(/\s+/);
    let changedText = document.getElementById("changed").value.toLowerCase().split(/\s+/);
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
