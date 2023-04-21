const    img = document.getElementById("img-url");
const    upload_file_btn = document.querySelector("#upload-file-btn");
const    copy_text = document.querySelector("#copy-text");
const    converted_text = document.querySelector("#converted-text");
const    img_result = document.querySelector("#img-result");

img.onclick = () => {
    img.select();
}

copy_text.onclick = () => {
    copy_text.setAttribute('title', "Copied.");
    setTimeout(() => {
        copy_text.setAttribute('title', "Copy Text.")
    }, 2000);

    if (converted_text.value != '') {
        navigator.clipboard.writeText(converted_text.value);
    }
}

img.addEventListener('change', createFile);
upload_file_btn.addEventListener('change', uploadimage);

async function createFile() {
    if (this.value != '') {
        img_result.src = this.value;

        await fetch(this.value).then(res => res.blob()).then(blob_file => {
            let file = new File([blob_file], blob_file.name, { type: blob_file.type });
            recognizeText(file);
            
        })
    }
}

function uploadimage() {
    const reader = new FileReader();
    reader.onload = () => {
        img_result.src = reader.result;
    }
    reader.readAsDataURL(this.files[0]);
    recognizeText(this.files[0]);
}



function recognizeText(file) {
    Tesseract.recognize(file).then(result =>{
    converted_text.value = result.text;
    })
}