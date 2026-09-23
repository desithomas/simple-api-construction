//** Step One: What would be useful to a construction company?
//based on the Open Data I found, they could find new customers (mb the DOB based on which projects were halted or stopped; complaints based. they can also view the status and complaints for their current projects)
// **/ 
 

//NYC Open Data: Active Projects - Public Buildings Historical https://data.cityofnewyork.us/resource/g9ub-hrve.json
//NYC Open Data: Capital Project Schedules and Budgets https://data.cityofnewyork.us/resource/2xh6-psuq.json

url="https://data.cityofnewyork.us/resource/i296-73x5.json"

//test that the API works and returns data 

fetch(url) 
.then(res => res.json())
.then(data => {
    console.log(data)
})