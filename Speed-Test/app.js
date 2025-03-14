let sentence = document.getElementById("sentence")
let textarea = document.getElementById("textarea")
let button = document.getElementById("button")
let result = document.getElementById("result")

let start, end, total;

const sentences = ['The quick brown fox jumps over the lazy dog 1',
    'The quick brown fox jumps over the lazy dog 2',
    'The quick brown fox jumps over the lazy dog 3 '] 

const calculateSpeed = () => {
    let totalWords = textarea.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typingSpeed = (actualWords / total) * 60;
        typingSpeed = Math.round(typingSpeed);
        result.innerHTML = `Your typing speed is ${typingSpeed} words per minutes & you wrote ${actualWords} words & time taken ${total} sec`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}

const startTyping = () => {
    let randomNum = Math.floor(Math.random() * sentences.length);
    sentence.innerHTML = sentences[randomNum]
    start = new Date().getTime();
    button.innerText = "Done";
}

const stopTyping = () => {
    end = new Date().getTime();
    button.innerText = "Start";
    total = (end - start)/1000;
    console.log(total)

    calculateSpeed(total);
    sentence.innerHTML = '';
    textarea.value = '';
}

button.addEventListener('click', () => {
    switch (button.innerText.toLowerCase()) {
        case "start":
            textarea.removeAttribute('disabled');
            startTyping();
            break;
        case "done":
            textarea.setAttribute('disabled', true);
            stopTyping();
            break;
        default:
            break;
    }
})