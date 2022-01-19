let myBlock;     //Global variable
let myFunctionList;
let funList = [];
const movementArray = ["Right", "Left", "Up", "Down"];
document.addEventListener("DOMContentLoaded", function () {
    console.log("Ready");
})
myBlock = document.createElement("div");
myBlock.textContent = "Hello World";
myBlock.style.width = "100px";
myBlock.style.height = "100px";
myBlock.style.backgroundColor = "red";
myBlock.style.color = "white";
myBlock.style.lineHeight = "100px";
myBlock.style.textAlign = "center";
myBlock.style.position = "absolute";
myBlock.style.top = "100px";
myBlock.style.left = "150px";
document.body.appendChild(myBlock);
myFunctionList = document.createElement("div");
document.body.appendChild(myFunctionList);

document.addEventListener("keydown", function (e) {
    e.preventDefault();
    let keyC = e.keyCode;
    if (keyC === 37) {
        addFun("Right");
    }
    else if (keyC === 38) {
        addFun("Left");
    }
    else if (keyC === 39) {
        addFun("Up");
    }
    else if (keyC === 40) {
        addFun("Down");
    }
    else if (keyC === 67) {
        myBlock.style.backgroundColor = randomColor();
    }
    else if (keyC === 82) {
        let temp = movementArray[Math.floor(Math.random() * movementArray.length)];
        addFun(temp);
    }
    else if (keyC === 13 || keyC === 32) {
        mover();
    }
    // console.log(e.keyCode);
})
function mover() {
    if (funList.length > 0) {
        let curr = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+", " ");
        myFunctionList.removeChild(el);
        myBlock.innerHTML = "Move" + item;
        // console.log(item);
        // console.log(curr);
        //console.log(el);
        if (item == " Left") {
            myBlock.style.left = curr.left - curr.width + "px";
        }
        if (item == " Right") {
            myBlock.style.left = curr.left + curr.width + "px";
        }
        if (item == " Up") {
            myBlock.style.top = curr.top - curr.height + "px";
        }
        if (item == " Down") {
            myBlock.style.top = curr.top + curr.height + "px";
        }
        setTimeout(mover, 300);
    }
    else {
        myBlock.innerHTML = "Set Path";
    }
}
function addFun(val) {
    //funList.push(val);
    let span = document.createElement("span");
    span.textContent = "+" + val;
    span.style.padding = "10px";
    span.style.border = "1px solid #ddd";
    span.addEventListener("mouseover", function () {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    })
    span.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";
    })
    span.addEventListener("click",function(){
        let curIndex = funList.indexOf(this);
        // console.log(curIndex);
        let tempRemove = funList.splice(curIndex,1);
        // console.log(tempRemove);
        myFunctionList.removeChild(this);
    })
    myFunctionList.appendChild(span);
    funList.push(span);
    console.log(funList);
}


function randomColor() {
    return "#" + Math.random().toString(16).substr(-6);  //to generate an random hexadecimal code for color
}



function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
}


function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
}


function goUp() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
}


function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
}


