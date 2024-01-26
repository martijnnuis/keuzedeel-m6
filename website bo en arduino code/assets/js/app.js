redButton = document.getElementById("redButton");
yellowButton = document.getElementById("yellowButton");
greenButton = document.getElementById("greenButton");

redb = true;
yellowb = true;
greenb = true;


redButton.onclick = function () {
    if(redb === true){
    console.log(redButton);
    WriteToSerial("rood");
    redb = false;
    yellowb = false;
    greenb = false;

    document.getElementsByClassName("buttonLabelRed")[0].classList.toggle("grey");
    document.getElementsByClassName("buttonLabelYellow")[0].classList.toggle("grey");
    document.getElementsByClassName("buttonLabelGreen")[0].classList.toggle("grey");
    }  
    setTimeout(() => {
        redb = true;
        yellowb = true;
        greenb = true;

        document.getElementsByClassName("buttonLabelRed")[0].classList.toggle("grey");
        document.getElementsByClassName("buttonLabelYellow")[0].classList.toggle("grey");
        document.getElementsByClassName("buttonLabelGreen")[0].classList.toggle("grey");
        console.log(redb);
    }, 2500);
}

yellowButton.onclick = function () {
    if(yellowb === true){
    console.log(yellowButton);
    WriteToSerial("geel");
    redb = false;
    yellowb = false;
    greenb = false;

    document.getElementsByClassName("buttonLabelRed")[0].classList.toggle("grey");
    document.getElementsByClassName("buttonLabelYellow")[0].classList.toggle("grey");
    document.getElementsByClassName("buttonLabelGreen")[0].classList.toggle("grey");
    }  
    setTimeout(() => {
        redb = true;
        yellowb = true;
        greenb = true;

        document.getElementsByClassName("buttonLabelRed")[0].classList.toggle("grey");
        document.getElementsByClassName("buttonLabelYellow")[0].classList.toggle("grey");
        document.getElementsByClassName("buttonLabelGreen")[0].classList.toggle("grey");
        console.log(yellowb);
    }, 2500);
}

greenButton.onclick = function () {
    if(greenb === true){
    console.log(greenButton);
    WriteToSerial("groen");
    redb = false;
    yellowb = false;
    greenb = false;

    document.getElementsByClassName("buttonLabelRed")[0].classList.toggle("grey");
    document.getElementsByClassName("buttonLabelYellow")[0].classList.toggle("grey");
    document.getElementsByClassName("buttonLabelGreen")[0].classList.toggle("grey");
    }  
    setTimeout(() => {
        redb = true;
        yellowb = true;
        greenb = true;
        
        document.getElementsByClassName("buttonLabelRed")[0].classList.toggle("grey");
        document.getElementsByClassName("buttonLabelYellow")[0].classList.toggle("grey");
        document.getElementsByClassName("buttonLabelGreen")[0].classList.toggle("grey");
        console.log(greenb);
    }, 2500);
}

var port = null, writer = null, reader = null, str = "";


document.addEventListener('click', () => {
    if (port == null) {
        RequestSerialIO();
    }

});

async function RequestSerialIO() {
    port = await navigator.serial.requestPort();
    await port.open({
        baudRate: 115200, dataBits: 8,
        stopBits: 1, parity: "none"
    });

    writer = port.writable.getWriter(); // <<<<<<<<<<
    console.log(port); // <<<<<<<<<<<<<<<<<<<<<<<<<<<
}

async function WriteToSerial(txt) {
    console.log(txt);
    let arr = new Uint8Array(txt.length);
    for (let i = 0; i < txt.length; ++i) {
        arr[i] = txt.charCodeAt(i);
    }
    await writer.write(arr);
}