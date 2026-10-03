
let browser

function launchBrowser(browser)
{
if (browser==="chrome")
    console.log("Given browser is chrome" )
else if (browser==="Firefox")
    console.log("Given browser is Firefox")

else console.log("Not supported browser")
//console.log("Not a chrome")

}

launchBrowser('Bing')

let test
function runTests(test)
{
switch(test)
{
case 'Sanity' : 
console.log ("Sanity Testing")
break
case 'Smoke':
console.log ("Smoke Testing")
break
case "Regression" :
console.log("Regression Testing")
break
default : console.log ("No test was running")
}
}
runTests('Smoke')