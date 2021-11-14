function funShowHidePassword(){
    var inputRef = document.getElementById('i1');
    var btnRef = document.getElementById('i2')
    if(inputRef.type==="password"){
        inputRef.type='text';
        btnRef.innerText="Hide Password"
    }
    else{
        inputRef.type="password";
        btnRef.innerText="Show Password"
    }
}