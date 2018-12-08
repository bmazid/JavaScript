// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
function populateTable(newdata) {
	tbody.html("")
	newdata.forEach((rowdata) => {
	var row = tbody.append("tr")
	Object.values(rowdata).forEach((value) => {
	var celldata = row.append("td")
	celldata.text(value)
	})
	})
}

populateTable(tableData);

//filter function
function filter() {
	d3.event.preventDefault()
	var filtergrab = d3.select("#datetime").property("value")
	var filterData = tableData
	if (filtergrab) {
	filterData = filterData.filter(row => row.datetime == filtergrab)	
	}
	populateTable(filterData);
}

d3.select("#filter-btn").on("click", filter);
