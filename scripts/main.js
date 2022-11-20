// Change Background image at 768 viewport
function changeBg() {

    // if the viewport matches or is greater than 768px
    if(matchMedia('(min-width: 768px)').matches) {
        // use the desktop version of the background
        document.getElementById('intro-bg-js').style.backgroundImage = "url('images/bg-curvy-desktop.svg')";

    } else {
        // if the viewport is less than 768px, use the mobile backgound image instead
        document.getElementById('intro-bg-js').style.backgroundImage = "url('images/bg-curvy-mobile.svg')";
    }
}

// changeContent function called to instantiate changeBg()
function ChangeContent() {
    changeBg();

    // add an event listener so the function knows when to trigger - change the bg
    matchMedia('(min-width: 768px)').addEventListener('change', () => {
        changeBg();
    });
}
// call the function
ChangeContent();


// Email Vlidation
function ValidateEmail(inputText) {

    let chars = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(inputText.value.match(chars)) {
        console.log('true');
        document.getElementById('error').classList.add = 'hidden';
    }
    else {
        console.log('false');
        document.getElementById('error').classList.remove = 'hidden';
    }
}
