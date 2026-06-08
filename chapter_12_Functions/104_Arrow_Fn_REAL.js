//if (ourStatusCode >= 200 && ourStatusCode <300)
//Perfectly normal function
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine");
    }
}

//Function as expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Request is fine");
    }
}

//Arrow Function
const validateStatusCode_arrow = (status) => {
    if (status >= 200 && status < 300) {
        console.log("Request is fine");
    }
}


