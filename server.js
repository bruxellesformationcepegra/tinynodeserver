
var http = require('http');
var express = require('express');
var cors = require("cors");
var app = express();
app.use(express.static(__dirname + '/client'));

app.use(cors());

app.get('/meals', function(req,res){
  var meals = [{
        name: "Cheesy-peasy",
        price: 10,
        sauce: "ketchup",
        description: "Un super burger de la mort qui est trop bon avec plein de sauce à stock c'est trop cool",
        picture: "http://i.perezhilton.com/wp-content/uploads/2013/08/burger-king-to-introduce-new-french-fry-burger.fpthumb.top-left.jpg",
        quantity: 0
    }, 
    {
        name: "Quick mitraillette",
        price: 15,
        sauce: "mayo only",
        description: "Miam de la sauce à stock",
        picture: "http://i.perezhilton.com/wp-content/uploads/2013/08/burger-king-to-introduce-new-french-fry-burger.fpthumb.top-left.jpg",
        quantity: 0
    },
    {
        name: "Mac dürum",
        price: 8,
        sauce: "aïl, andalouse",
        description: "dfsjdfnsklfd",
        picture: "http://i.perezhilton.com/wp-content/uploads/2013/08/burger-king-to-introduce-new-french-fry-burger.fpthumb.top-left.jpg",
        quantity: 0
    }
     ];

    
    res.send(meals);
});

app.get('/discover_brussels/data', function(req,res){
  
  var data = { 
			highlights: [
				{
					name: "Atomium",
					abstract: "Look at these balls !",
					picture: "img/atomium.jpg",
					pageUrl: "atomium.html",
					latitude: 50.894941,
					longitude: 4.341547		
				},
				{
					name: "Manneken Pis",
					abstract: "Look at these balls !",
					picture: "img/mannekenpis.jpg",
					pageUrl: "mannekenpis.html",
					latitude: 50.844993,
					longitude: 4.349978		
				},
				{
					name: "Grand Place",
					abstract: "Look at these balls !",
					picture: "img/grandplace.jpg",
					pageUrl: "grandplace.html",
					latitude: 50.8467253,
					longitude: 4.3525263		
				},
				{
					name: "Cathédrale Sainte Gudule",
					abstract: "Look at these birds and bells ! ",
					picture: "http://r-ec.bstatic.com/data/landmark/600x200/143/14337.jpg",
					pageUrl: "gudule.html",
					latitude: 50.847833,
					longitude: 4.360108		
				}
			],
			mapConfig: {
				defaultLatitude: 50.843596,
				defaultLongitude: 4.3599406,
				defaultZoom: 12
			}
		};
  
  res.json(data);
});

app.get('/discover_brussels/game', function(req,res){
  var quizz = {
	items: [
		{
			question: "Is Jean-Claude Van Damme from Brussels ?",
			picture: "img/game/jcvd.jpg",
			answer: true
		},
		{
			question: "Is the Waterzooi a speciality from Brussels ?",
			picture: "img/game/waterzooi.jpg",
			answer: false
		}
	],
	points: 0,
	currentQuestion: 0
};
  
  res.json(quizz);
});

app.get('/test', function(req,res){
  var age = 32;
  age = (age * 5)*2;
  res.send("<html><head></head><body><h1>Bienvenue sur mon premier site en Node.js !!! J'ai " + age+ "</h1></body></html>");
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
   console.log('Express started on port ' + app.get('port')); 
});