
function changeBg() {

    if(matchMedia('(min-width: 768px)').matches) {

        document.getElementById('intro-bg-js').style.backgroundImage = "url('images/bg-curvy-desktop.svg')";

    } else {

        document.getElementById('intro-bg-js').style.backgroundImage = "url('images/bg-curvy-mobile.svg')";
    }
}

function ChangeContent() {
    changeBg();

    matchMedia('(min-width: 768px)').addEventListener('change', () => {
        changeBg();
    });
}

ChangeContent();

function ValidateEmail() {
    
    var form = document.getElementById('form');
    var email = document.getElementById('email');
    var text = document.getElementById('text');

    
}
