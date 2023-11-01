let lastSelectedText = "";

function createSearchButton(selectedText, x, y) {
    let button = document.querySelector(".uniqueSearchButtonClass");

    if (!button) {
        button = document.createElement("button");
        button.className = "uniqueSearchButtonClass";
        button.innerHTML = "Search Google";
        button.style.position = "fixed";
        button.style.zIndex = "9999";

        button.onclick = function () {
            window.open(`https://www.google.com/search?q=${selectedText}`, "_blank");
            this.remove();
        };

        document.body.appendChild(button);
    }

    // Fix button at the position where the text was selected
    button.style.top = `${y - 30}px`;
    button.style.left = `${x + 6}px`;
}

function handleTextSelection(event) {
    let selection = window.getSelection();
    let selctionToString=selection.toString();
    let range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (range && !range.collapsed && selctionToString!='') {
        lastSelectedText = selection;
        createSearchButton(selection, event.clientX, event.clientY);
    }
}

document.addEventListener("mouseup", handleTextSelection);
document.addEventListener("mousedown", function (event) {
    const button = document.querySelector(".uniqueSearchButtonClass");

    if (button && !button.contains(event.target)) {
        button.remove();
    }
});
