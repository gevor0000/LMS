let u = new User("Admin", "Admin", new Roll("Admin"));
function login() {
    let Username=document.getElementById('Username').value;
    let Password=document.getElementById('Password').value;
    if(Usernames.includes(Username)){
        if (Passwords[Usernames.indexOf(Username)]===Password){
            sessionStorage.setItem("Username", Username.toString());
            sessionStorage.setItem("Roll", Rolless[Usernames.indexOf(Username)]);
            location.replace("Home.html");
            location.reload();
        }
        else{
            alert("Incorrect Username or Password");
        }
    }
    else{
        alert("Incorrect Username or Password");
    }
}
function Register() {
    let Username=document.getElementById('Username').value;
    let Password=document.getElementById('Password').value;
    let Rolll=document.getElementById('Roll').value;

    let user = new User(Username, Password, new Roll(Rolll.toString()));
    login();
}
function logout() {
    sessionStorage.clear();
    location.reload();
}
