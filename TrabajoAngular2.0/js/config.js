app.config(function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'View/Inicio.php',
			
		})
		.when('/Ingreso',{
			templateUrl: 'View/Ingreso.php',
			
		})
		.when('/Editar/:id',{
			templateUrl: 'View/Editar.php',
			
		})
		.when('/Reporte',{
			templateUrl: 'View/Reporte.php',
			
		})
		.otherwise({
			redirectTo: '/'
		});


});