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
		total:0,
		members:[],
		democrats:[],
		republicans:[],
		independents:[],
		d_votes_wp:0,
		r_votes_wp:0,
		i_votes_wp:0,
		t_votes_wp:0,
		least:[],
		most:[],
		least_loyal:[],
		most_loyal:[],
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
			app.members = json.results[0].members.filter(e => e.total_votes != 0)
			app.democrats = app.calcular("D")
			app.republicans = app.calcular("R")
			app.independents = app.calcular("I")
			app.d_votes_wp = app.votosWithP(app.democrats)
			app.r_votes_wp = app.votosWithP(app.republicans)
			app.i_votes_wp = app.votosWithP(app.independents)
			app.t_votes_wp = app.votosWithP(app.members)
			})
		.catch(function(error){
			console.log(error)
		})

		console.log("hola")


	}, 
	methods: {
		ordenar (array,prop){
			return array = this.members.slice().sort(function(a,b)
			{	
				return a.prop - b.prop
			})
		},
		calcular (part){
			return this.members.filter(member => member.party==part)
		},
		votosWithP (array){
			let aux=0
			for (let i=0;i<array.length;i++)
			{
			 aux+=array[i].votes_with_party_pct
			}

			return (array.length==0 ? 0 : (aux/array.length)).toFixed(2)
		}
	}
})
