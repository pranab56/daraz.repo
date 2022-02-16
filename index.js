document.getElementById('login-button').addEventListener('click',function(){
    const userGmail=document.getElementById('user-gmail');
    const userGmailTotal=userGmail.value
    
    
    const userPassword=document.getElementById('user-password');
    const userPasswordTotal=userPassword.value;
   
    if(userGmailTotal=='admin' && userPasswordTotal=='1234567'){
 window.location.href='index2.html'
    }
    else{
        alert('password invaild!! please try again')
    }
})