

//Assigning a value to the variable browser
let browser = "Chrome"
//Function to callback the settimeout function
function checkBrowserVersion()
{
console.log("Browser Version");
setTimeout(callBackFunction, 2000);////After 2 secs calling the call back function
}

//to print the browser value after 2 seconds

function callBackFunction() {
       console.log(callback)
}


//callBackFunction(checkBrowserVersion)
checkBrowserVersion()
