const app = new Vue ({
	el:"#app",
	data:{
		url : "https://api.propublica.org/congress/v1/113/senate/members.json",
		init : {
			method: "GET",
			headers: {
				"X-API-Key":"lAYHuz6x5HvFOcstkUgze4ni1I8CquLNzB5vDijU",
				}
			},
		members:[],
	},
	created (){		
		fetch(this.url, this.init)
		.then(function(res){
			if(res.ok){
				return res.json()
			} else{
				throw new Error(res.status)
			}
		})
		.then(function(json){
			app.members = json.results[0].members
			main()
		})
		.catch(function(error){
			console.log(error)
		})

		console.log("hola")
		

	}, 
 	
})
