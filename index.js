console.log("HELLO");

const dateElement = document.getElementById('date')
console.log(dateElement)

let currentDate = new Date();

console.log(currentDate);

// dateElement.innerHTML = currentDate;

let dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '4ec1c5132dmsh6c658aa7dd2cb1dp17b748jsn3dbadcfb0941',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'})
};

	let graphData = [];

	fetch(url, options)
	.then(res => res.json())
	.then(data => {


//dummy data

// let myPost = {
// 		name: "Lee Sung Kyung",
// 		queryUrl: "search?q=%22Lee+Sung+Kyung%22",
// 		volume: 31799
// 	}

// 	console.log(myPost);
// 	console.log(myPost.name)

// 	let graphData = [
// 		{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
// 		{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
// 	];

// 	console.log(graphData);
// 	console.log(graphData[1]);

// 	graphData.push(myPost);
// 	console.log(graphData);
// 	console.log(graphData[1].name);
// 	console.log(graphData[1].volume);

	//end of dummy data

	for (let i = 0; i < 25; i++) {
		graphData.push(
			{
				"name" : data.trends[i].name,
				"volume" : data.trends[i].volumes
			}
		)
	}

	let topics = graphData.map(object => {
		console.log(object);
		console.log(object.name);
		return object.name
	})

	console.log(topics);

	let volumes = graphData.map(object => {
			return object.volumes
		})

	console.log(volumes);


	const myChart = document.getElementById('myChart');

	  new Chart(myChart, {
	    type: 'bar',
	    data: {
	      labels: topics,
	      datasets: [{
	        label: '# of tweets today in PH',
	        data: volumes,
	        borderWidth: 1,
	        backgroundColor: [
	    		'rgba(255, 99, 132, 0.2)',
	    		'rgba(255, 159, 64, 0.2)',
	    		'rgba(255, 205, 86, 0.2)',
	    		'rgba(75, 192, 192, 0.2)',
	    		'rgba(54, 162, 235, 0.2)',
	    		'rgba(153, 102, 255, 0.2)',
	    		'rgba(201, 203, 207, 0.2)'
	        ],
	        borderColor: [
	    		'rgb(255, 99, 132)',
	    		'rgb(255, 159, 64)',
	    		'rgb(255, 205, 86)',
	    		'rgb(75, 192, 192)',
	    		'rgb(54, 162, 235)',
	    		'rgb(153, 102, 255)',
	    		'rgb(201, 203, 207)'
	        ],
	        hoverBackgroundColor: [
	        	'rgb(255, 99, 132)',
	        	'rgb(255, 159, 64)',
	        	'rgb(255, 205, 86)',
	        	'rgb(75, 192, 192)',
	        	'rgb(54, 162, 235)',
	        	'rgb(153, 102, 255)',
	        	'rgb(201, 203, 207)'
	        ]

	      }]
	    },
	    options: {
	    	indexAxis: 'y',
	      scales: {
	        y: {
	          beginAtZero: true
	        }
	      }
	    }
	  });

})

