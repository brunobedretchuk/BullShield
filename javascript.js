const subscribe = document.querySelector('#subscribe');
const forms = document.querySelectorAll('input');
subscribe.addEventListener('click', () => {
        if (forms[0].value == "" && forms[1].value == ""){
            
        }
        else if (forms[0].value == "" || forms[1].value == "") {
        }
        else {
            var confirm = window.confirm(`Confirm Submission, ${forms[0].value}?`);
            if (confirm == true){
                window.open('index2.html' , '_self');
                }
            }
            
});



