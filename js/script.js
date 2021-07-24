ArraySize.addEventListener("input", changeArray);
generateArray.addEventListener("click",generate_array);

window.onload = generate_array;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generate_array(){    
    
    removeAllChildNodes(array);

    for(var i =0;i<size;i++){    
        var div = document.createElement("div");
        var num = Math.random() * 500;
        div.style.height = num + "px";
        div.style.width = 1000/size + "px";
        div.style.backgroundColor = "purple";
        div.style.margin = "2px"; 
        document.getElementById("array").appendChild(div);
    }
    elements = array.getElementsByTagName("div");
}

function changeArray(){
    size = ArraySize.value;
    generate_array()
}