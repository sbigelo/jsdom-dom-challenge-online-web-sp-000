
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const inputField = document.getElementById('counter');
    const likeList = document.getElementById('list')
    const userForm = document.getElementById('comment-form')
    
    
    // const submit = document.getElementById('submit')

    function nextNumber() {
    //   const currentValue = parseInt(inputField.innerText) || 0;
    //   inputField.innerText = currentValue - 1;
        inputField.innerText++;
    };
    function previousNumber() { 
        // const currentValue = parseInt(inputField.innerText) || 0;
        // inputField.innerText = currentValue + 1;
        inputField.innerText--;
    };
    
    function likeNumber() {
        const time = inputField.innerText
        let likedElement = document.getElementById(`like${time}`);
        if (likedElement === null) {
            likedElement = document.createElement('li');
            likedElement.id = `like${time}`
            likedElement.dataset.likes = 1;
            likeList.appendChild(likedElement);
        }
        else {
            likedElement.dataset.likes++;
        }
        likedElement.innerText = `${time} was liked ${likedElement.dataset.likes} times`
    }


    function pauseAll() {
        if (pauseButton.innerText == "resume"){
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            pauseButton.innerText = "pause";
            increment = window.setInterval(nextNumber, 1 * 1000)
        }
        else {
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            pauseButton.innerText = "resume";
            window.clearInterval(increment);
        }
    };

    function comment(event) {
        event.preventDefault();
        let newElement = document.createElement('li');
        newElement.innerText = userForm[0].value;
        likeList.appendChild(newElement);
    }

let increment = window.setInterval(nextNumber, 1*1000);
minus.addEventListener('click', previousNumber);
plus.addEventListener('click', nextNumber);
heart.addEventListener(`click`, likeNumber);
pause.addEventListener('click', pauseAll);

userForm.addEventListener('submit', comment)