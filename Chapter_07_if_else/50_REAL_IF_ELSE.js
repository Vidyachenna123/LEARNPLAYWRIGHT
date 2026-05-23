let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor") {
        console.log("Welcome editor - Edit access granted");
    }
    else if (userRole === "Viewer") {
        console.log("Welcome Viewer - Read-only access");
    }
    else {
        console.log("No idea which role yo are!");
    }
}
else {
    console.log("You are not logged in!!");
}