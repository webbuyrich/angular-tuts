

var myApp = angular

	//create the module
	.module('myModule', [])

	//create custom filter
	.filter('gender', function(){
		return function(gender){
			switch(gender){
				case 1:
					return "Male";
				case 2:
					return "Female"
			}
		}
	})
	

	//create the controller and register with the module
	.controller('myController', function($scope, $http, $log){

	


	var player = {
		firstName: 'DeAndre',
		lastName: 'Hopkins',
		image: './images/dhopkins.jpg'
	}

	var employee = {
		firstName: 'Ben',
		lastName: 'Hastings',
		gender: "Male"

	}

	var employees = [
	{
		"firstName": "Jacob",
		"lastName": "Nicole",
		"gender": "Female",
		"date": new Date(),
		"salary": 109802
	},
	{
		"firstName": "Yardley",
		"lastName": "Anika",
		"gender": "Male",
		"date": new Date(),
		"salary": 45531
	},
	{
		"firstName": "Jerome",
		"lastName": "Ivy",
		"gender": "Female",
		"date": new Date(),
		"salary": 17248
	},
	{
		"firstName": "Vernon",
		"lastName": "Jenette",
		"gender": "Male",
		"date": new Date(),
		"salary": 116557
	},
	{
		"firstName": "Aristotle",
		"lastName": "Mia",
		"gender": "Female",
		"date": new Date(),
		"salary": 85552
	}
]

	var visitors = [
	  {
        "name": "Nola",
        "gender": "male",
        "salary": "$81,285",
        "city": "New York"
      },
      {
      	"name": "Katie",
  	     "gender": "male",
  	     "salary": "$84,458",
  	     "city": "Los Angeles"
      },
      {
      	"name": "Hartman",
      	"gender": "female",
      	"salary": "$87,887",
      	"city": "Los Angeles"
      },
      {
      	"name": "Lisa",
      	"gender": "female",
      	"salary": "$95,592",
      	"city": "New York"
      },
      {
      	"name": "Manning",
      	     "gender": "female",
      	     "salary": "$98,304",
      	     "city": "Houston"
      }

	]

		var applicants = [
		  {
	        "name": "Nola",
	        "gender": 1,
	        "salary": "$81,285",
	        "city": "New York"
	      },
	      {
	      	"name": "Katie",
	  	     "gender": 2,
	  	     "salary": "$84,458",
	  	     "city": "Los Angeles"
	      },
	      {
	      	"name": "Hartman",
	      	"gender": 1,
	      	"salary": "$87,887",
	      	"city": "Los Angeles"
	      },
	      {
	      	"name": "Lisa",
	      	"gender": 2,
	      	"salary": "$95,592",
	      	"city": "New York"
	      },
	      {
	      	"name": "Manning",
	      	     "gender": 1,
	      	     "salary": "$98,304",
	      	     "city": "Houston"
	      }

		]

	var states =[

		{
			name: 'Texas',
			cities: [

				{ name: 'Houston' },
				{ name: 'Galveston' },
				{ name: 'Pearland' }
			]
		},
		{
			name: 'Callifornia',
			cities: [
			
				{ name: 'Los Angeles' },
				{ name: 'San Diego' },
				{ name: 'Oakland' }
			]
		},
		{
			name: 'Florida',
			cities: [
			
				{ name: 'Miami' },
				{ name: 'Orlando' },
				{ name: 'Tampa Bay' }
			]
		}
	]

	var technologies =[
		
		{ name: 'C#', likes: 0, dislikes: 0},
		{ name: 'PHP', likes: 0, dislikes: 0},
		{ name: 'SQL', likes: 0, dislikes: 0},
		{ name: 'JQUERY', likes: 0, dislikes: 0},
		{ name: 'JAVA', likes: 0, dislikes: 0}
	]

	$scope.clearGreeting = function(){
		$scope.greeting = '';
	}

	// Message Property
	$scope.message = 'AngularJS Tutorial';

	// Player Property
	$scope.player = player;

	// Employee Property
	$scope.employees = employees;

	// State Property
	$scope.states = states;

	// Technologies Property
	$scope.technologies = technologies;

	/***********LIKES AND DISLIKES***************/
	// Increment Likes Function
	$scope.incrementLikes = function(technology){
		technology.likes++;
	}
	// Increment Dislikes Function
	$scope.incrementDislikes = function(technology){
		technology.dislikes++;
	}
	// Reset Likes Function
	$scope.resetAllLikes = function(technology){
		technology.likes = 0;
		technology.dislikes = 0;
	}
	

	/***********ROWS AND SORTING***************/
	// Setting Row Limit
	$scope.rowLimit = 3;
	// Setting Column Sort Default by Dropdown
	$scope.sortColumn = 'lastName';
	// Setting Column Sort by Column Heading
	$scope.reverseSort = false;
	// Sort by Column and Reverse Sorting
	$scope.sortData = function(column){
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
		// Console Log 
		console.log($scope.reverseSort);
	}
	//Add Arrows to Sort
	$scope.getSortClass = function(column){
		if($scope.sortColumn == column){
			if(column == 'salary'){
				return $scope.reverseSort ? 'fa fa-sort-numeric-desc addPointer' : 'fa fa-sort-numeric-asc addPointer';
			}
			return $scope.reverseSort ? 'fa fa-sort-alpha-desc addPointer' : 'fa fa-sort-alpha-asc addPointer';
		}
		return '';
	}

	/***********SEARCHING ROWS***************/
	// Set Data
	$scope.visitors = visitors;

	/***********CUSTOM FILTER***************/
	// Set Data
	$scope.applicants = applicants;

	//using NG include
	$scope.employeeView = "employeeList.html";


	//get data from database
	$http.post('includes/connection-users.php')
		.then(function(response){			
			$scope.dbEmployees = response.data;
		});

	//Using a Service to get Data
	var successCallBack = function(response){
		$scope.dbEmployeesService = response.data;
	}

	var errorCallBack = function(response){
		$scope.error = "What is the error ? "+ response.statusText;
	}

	$scope.getData = function(){
		$http({
				method: 'GET',
				url: 'includes/connection-users.php'
			})
				.then(successCallBack, errorCallBack);
	}
	
		
});


