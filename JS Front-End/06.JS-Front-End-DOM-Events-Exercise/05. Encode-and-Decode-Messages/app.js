function encodeAndDecodeMessages() {
    const senderTextArea=document.querySelectorAll('textarea')[0];
    const recieverTextArea=document.querySelectorAll('textarea')[1];
    const encodeButton=document.querySelectorAll('button')[0];
    const decodeButton=document.querySelectorAll('button')[1];
    encodeButton.addEventListener('click',()=>{
        let textToEncode=senderTextArea.value;
        let encodedText='';
        for(let i=0; i<textToEncode.length; i++) {
          encodedText+=String.fromCharCode(textToEncode[i].charCodeAt(0)+1);
        }
        senderTextArea.value=senderTextArea.defaultValue;
        recieverTextArea.value=encodedText;
    })
    decodeButton.addEventListener('click',()=>{
        let textToDecode=recieverTextArea.value;
        let decodedText='';
        for(let i=0; i<textToDecode.length; i++) {
            decodedText+=String.fromCharCode(textToDecode[i].charCodeAt(0)-1);
        }
        recieverTextArea.value=decodedText;
    })
}