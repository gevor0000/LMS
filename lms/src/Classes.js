

class User{

    constructor(Username, Password, Roll) {
        if(Usernames.includes(Username)){
            alert("The username is taken");
        }
        else {
            this.username = Username;
            this.password = Password;
            this.roll = Roll;
            Usernames.push(Username);
            Passwords.push(Password);
            Rolless.push(Roll.roll.toString());
        }
    }
}
let Rolless=[];
let Usernames=[];
let Passwords=[];
let Rolles=["User", "Admin", "Librarian"];

class Roll{
    constructor(Roll){
        if (Rolles.includes(Roll)){
            this.roll=Roll;
        }
        else {
            return "Invalid Roll";
        }
    }
}
