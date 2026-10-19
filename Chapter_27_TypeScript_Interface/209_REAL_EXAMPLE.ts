interface BasePage {
    url: string;
    title: string;

}

interface LoginPage extends BasePage {
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;

}

interface FreeTrailPage extends BasePage {
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginpage: LoginPage = {
    url: "/login",
    title: "Login Page",
    usernameSelector: "#username",
    passwordSelector: "password",
    loginButtonSelector: "#login-btn"
}

let freeTrailPage: FreeTrailPage = {
    url: "/free-trail",
    title: "Free Page",
    usernameSelector: "#username",
    submitButtonSelector: "#submit"
}

console.log("URL:", loginpage.url);
console.log("Title:", loginpage.title);
console.log("Username field:", loginpage.usernameSelector);


console.log("------------");

console.log("URL:", freeTrailPage.url);
console.log("Title:", freeTrailPage.title);
console.log("Username field:", freeTrailPage.usernameSelector);




