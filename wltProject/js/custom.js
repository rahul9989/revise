var myApp = angular.module('myModule', [])
				   .controller('myCtrl', function($scope) {
				   		var studentName = [
				   			{name: "Rahul Singh", gender: "Male", dateOfBirth: new Date("Novemeber 10, 1980"), Salary: 20000,},
				   			{name: "Rohit Singh", gender: "Male", dateOfBirth: new Date("October 17, 1992"), Salary: 24000,},
				   			{name: "Ratan Singh", gender: "Male", dateOfBirth: new Date("January 01, 1999"), Salary: 32000,}
				   		];

				   		$scope.studentName = studentName;
				   });

var myApp = angular.module('myModule', [])
				   .controller('myCtrl', function($scope) {
				   		var technologies = [
				   			{
				   				name: "C#", likes: 0, Dislikes: 0
				   			},
				   			{
				   				name: "HTML", likes: 0, Dislikes: 0
				   			},
				   			{
				   				name: ".NET", likes: 0, Dislikes: 0
				   			},
				   			{
				   				name: "Angular", likes: 0, Dislikes: 0
				   			}
				   		];

				   		$scope.technologies = technologies;

				   		$scope.IncrementLikes = function(likeup) {
				   			likeup.likes++;
				   		}

				   		$scope.IncrementDislikes = function(likeDown) {
				   			likeDown.Dislikes++;
				   		}
				   });

var myApp = angular.module('myModule', []);

myApp.controller('myCtrl', function($scope) {

	// $scope.name = "Rahul Singh";

	var student = {
		firstName: "Roma",
		lastName: "Sinha",
		gender: "Female"
	};

	$scope.studentDetail = student

});

var myApp = angular.module('myModule', [])
				   .controller('myCtrl', function($scope) {
				   		var country = {
				   			name: "India",
				   			capital: "Delhi",
				   			flag: "images/flag.png"
				   		}

				   		$scope.CountryDetail = country;
				   });

var myApp = angular.module('myModule', [])
				   .controller('myCtrl', function($scope) {
				   		var teacher = {
				   			name: "Rekha",
				   			Position: "Professor",
				   			Gender: "Female"
				   		}

				   		$scope.teacher = teacher;
				   });

var myApp = angular.module('myModule', [])
				   .controller('myCtrl', function($scope) {
				   		var employees = [
				   			{
				   				firstName: "Rahul",
				   				lastName: "Singh",
				   				age: 25
				   			},
				   			{
				   				firstName: "Ratan",
				   				lastName: "Joshi",
				   				age: 20
				   			},
				   			{
				   				firstName: "Rekha",
				   				lastName: "Yadav",
				   				age: 35
				   			}
				   		];

				   		$scope.employees = employees;
				   });


var myApp = angular.module('myModule', [])
				   .controller('myCtrl', function($scope) {
				   		var countries = [
				   			{
				   				name: "UK",
				   				states: [
				   					{ name: "London" },
				   					{ name: "Menchester" },
				   					{ name: "Birmingham" }
				   				]
				   			},
				   			{
				   				name: "USA",
				   				states: [
				   					{ name: "Los Anglies" },
				   					{ name: "Chicago" },
				   					{ name: "Houston" }
				   				]
				   			},
				   			{
				   				name: "India",
				   				states: [
				   					{ name: "Hyderabad" },
				   					{ name: "Chennai" },
				   					{ name: "Mumbai" }
				   				]
				   			}
				   		];

				   		$scope.countries = countries;
				   });
