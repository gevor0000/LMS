//let u = new User("Admin", "Admin", new Roll("Admin"));
function login() {
    let Username=document.getElementById('Username').value;
    let Password=document.getElementById('Password').value;
    Usernames=JSON.parse(localStorage.getItem("Usernames"));
    Passwords=JSON.parse(localStorage.getItem("Passwords"));
    Rolless=JSON.parse(localStorage.getItem("Rolls"));
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
let BookNames = [];
let BookAuthors=[];
// BookNames.push("Samvel");
// BookAuthors.push("Raffi");
//
// localStorage.setItem("BookNames", JSON.stringify(BookNames));
// localStorage.setItem("BookAuthors", JSON.stringify(BookAuthors));

BookNames=JSON.parse(localStorage.getItem("BookNames"));
BookAuthors=JSON.parse(localStorage.getItem("BookAuthors"));
function addBook() {
    let name=document.getElementById("bookName").value;
    let author=document.getElementById("bookAuthor").value;
    BookNames.push(name);
    BookAuthors.push(author);
    localStorage.setItem("BookNames", JSON.stringify(BookNames));
    localStorage.setItem("BookAuthors", JSON.stringify(BookAuthors));
    alert("The book has successfully been added");
    location.reload();
}
function viewBooks() {
    
}