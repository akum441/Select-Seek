let lastSelectedText = "";

function generateUniqueClassName() {
    return 'uniqueSearchButtonClass' + Date.now();
}

function createSearchButton(selectedText, x, y) {
    let button = document.querySelector(".uniqueSearchButtonBase");
    let uniqueClassName = generateUniqueClassName();

    if (!button) {
        button = document.createElement("button");
        button.className = `uniqueSearchButtonBase ${uniqueClassName}`;
        button.innerHTML = "Search Google";

        button.onclick = function () {
            window.open(`https://www.google.com/search?q=${selectedText}`, "_blank");
            this.remove();
        };

        document.body.appendChild(button);
    }

    // Create and attach the style element
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .uniqueSearchButtonBase.${uniqueClassName} {
            position: absolute !important;
            font-family: Arial, sans-serif !important;  
            font-size: 16px !important;                
            font-weight: normal !important;             
            font-style: normal !important;            
            font-variant: normal !important;          
            text-transform: none !important;        
            text-decoration: none !important;          
            letter-spacing: normal !important;       
            word-spacing: normal !important;           
            line-height: 1.5 !important;             
            text-align: center !important;    
            
            
            color: #000 !important;
            // height:20px !important;
            zIndex: 9999 !important;
            backgroundColor: #ffffff !important;
            border: 1px solid #d4d4d4 !important;
            color: #000000 !important;
            padding: 5px !important;
            cursor: pointer !important;
            top: ${y - 30}px !important;
            left: ${x + 6}px !important;
        }
    `;
    document.head.appendChild(styleSheet);


}


function handleTextSelection(event) {
    let selection = window.getSelection();
    let selectionToString = selection.toString();
    let range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (range && !range.collapsed && selectionToString != '') {
        lastSelectedText = selection;
        createSearchButton(selection, event.pageX, event.pageY);
    }
}

document.addEventListener("mouseup", handleTextSelection);
document.addEventListener("mousedown", function (event) {
    const button = document.querySelector(".uniqueSearchButtonBase");
    if (button && !button.contains(event.target)) {
        button.remove();
    }
});
