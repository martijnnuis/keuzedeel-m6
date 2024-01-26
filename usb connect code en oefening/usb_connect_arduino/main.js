var port = null, reader = null, str = "";

document.addEventListener('click', ()=>{
    console.log('clicked');
    RequestSerialIO();
});

async function RequestSerialIO(){
    port = await navigator.serial.requestPort();
    await port.open ({baudRate: 115200, dataBits: 8,
    stopBits: 1, parity: "none"});

    ReadUntilClosed();
    writer = port.writable.getWriter();
    console.log(port);
}

async function ReadUntilClosed() {
    while(port.readable){
        reader = port.readable.getReader();
        try{
            while(true){
                const{value, done} = await reader.read();
                let newStr = "";
                for(let i = 0; i < value.length; ++i){
                    newStr += String.fromCharCode(value[i]);
                }
                newStr = newStr.trim();
                str += newStr;
                if(str.lastIndexOf)
            }
        } catch(error){
            console.log(error);
        }
    }
}

