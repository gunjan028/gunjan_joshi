function validate()
{
    var un=document.getElementById('username').value;
    var pd=document.getElementById('password').value;
    
    var usernameArray=["joshigunjan010@gmail.com","avijit.1995@gmail.com"];
    var passwordArray=["12345","6789"];
    for(var i=0; i<=usernameArray.length; i++)
    {
        if((un==usernameArray[i])&&(pd==passwordArray[i]))
        {
            alert("login successful");
            window.open("https://www.google.com");
        }

    }
    
}
function reject(){
    document.getElementsByClassName('container')[0].reset();
}



