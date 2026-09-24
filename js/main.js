//** Step One: What would be useful to a construction company?
//based on the Open Data I found, they could find new customers (mb the DOB based on which projects were halted or stopped; complaints based. they can also view the status and complaints for their current projects)
// **/ 
 

//NYC Open Data: Active Projects - Public Buildings Historical https://data.cityofnewyork.us/resource/g9ub-hrve.json
//NYC Open Data: Capital Project Schedules and Budgets https://data.cityofnewyork.us/resource/2xh6-psuq.json

//you need a button to click in the global scope. do you have a button in your html? how is the user interacting with this? 
//document.querySelector('button').addEventListener('click', getComplaints)

//this function's role is to get the complaints for the user when the button is clicked. 

//getComplaints = () => {
//these are the instructions that run when the button is clicked 


//test with Postman: it returns data 
url="https://data.cityofnewyork.us/resource/i296-73x5.json"



//successful fetch; now allow user to select by borough: borough_name
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('.userDisplayBorough').innerText = data[0].borough_name
})

.catch(err => {
    console.log(`error: ${err}`)
})





//test that the API works and returns data - API confirmed to work 
const userBoroughInput = document.getElementById("userBoroughInput")

fetch(url) 
.then(res => res.json())
.then(data => {
    console.log(data.borough_name)
})
.catch(err => console.log(`Error: ${err}`))