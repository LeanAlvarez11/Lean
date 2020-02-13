
let members =data.results[0].members.filter(e => e.total_votes != 0)
let auxd = 0
let auxr = 0
let auxi = 0
let total = 0
const tbody = document.querySelector ("tbody")
let stats = {
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
}
let most_sorted = members.slice().sort(function(a,b)
{	
	return a.missed_votes_pct - b.missed_votes_pct
})
let least_sorted = members.slice().sort(function(a,b)
{	
	return b.missed_votes_pct - a.missed_votes_pct
})
let most_loyal_sorted = members.slice().sort(function(a,b)
{	
	return a.votes_with_party_pct - b.votes_with_party_pct
})
let least_loyal_sorted = members.slice().sort(function(a,b)
{	
	return b.votes_with_party_pct - a.votes_with_party_pct
})

stats.democrats = members.filter(member => member.party=="D")
stats.republicans = members.filter(member => member.party=="R")
stats.independents = members.filter(member => member.party=="I")
for (let i=0;i<stats.democrats.length;i++)
{
	auxd+=stats.democrats[i].votes_with_party_pct
}
for (let i=0;i<stats.republicans.length;i++)
{
	auxr+=stats.republicans[i].votes_with_party_pct
}
for (let i=0;i<stats.independents.length;i++)
{
	auxi+=stats.independents[i].votes_with_party_pct
}
for (let i=0;i<most_sorted.length;i++)
{
	total+=(most_sorted[i].votes_with_party_pct)
	if (most_sorted[i].missed_votes_pct<=most_sorted[(Math.round(members.length/10)) - 1].missed_votes_pct)
		{stats.most.push(most_sorted[i])}
}
for (let i=0;i<most_loyal_sorted.length;i++)
{
	total+=(most_loyal_sorted[i].votes_with_party_pct)
	if (most_loyal_sorted[i].votes_with_party_pct<=most_loyal_sorted[(Math.round(members.length/10)) - 1].votes_with_party_pct)
		{stats.most_loyal.push(most_loyal_sorted[i])}
}
for (let i=0;i<least_sorted.length;i++)
{
	if (least_sorted[i].missed_votes_pct>=least_sorted[(Math.round(members.length/10)) - 1].missed_votes_pct)
		{stats.least.push(least_sorted[i])}
}
for (let i=0;i<least_loyal_sorted.length;i++)
{
	if (least_loyal_sorted[i].votes_with_party_pct>=least_loyal_sorted[(Math.round(members.length/10)) - 1].votes_with_party_pct)
		{stats.least_loyal.push(least_loyal_sorted[i])}
}
stats.d_votes_wp = (auxd/stats.democrats.length)
stats.r_votes_wp= (auxr/stats.republicans.length)
stats.i_votes_wp= stats.independents.length==0 ? 0 : (auxi/stats.independents.length) 
stats.t_votes_wp= stats.i_votes_wp==0 ? ((stats.d_votes_wp+stats.r_votes_wp)/2).toFixed(2) + "%" :  ((stats.d_votes_wp+stats.r_votes_wp+stats.i_votes_wp)/3).toFixed(2) + "%"
// for (let i=0;i<stats.most.length;i++)
// {
// 		document.querySelector("#tab2").innerHTML += `<tr><td>${stats.most[i].first_name} ${stats.most[i].middle_name ||""}</td><td>${stats.most[i].missed_votes}</td><td>${stats.most[i].missed_votes_pct}%</td>`
// }
// for (let i=0;i<stats.least.length;i++)
// {
// 		document.querySelector("#tab3").innerHTML += `<tr><td>${stats.least[i].first_name} ${stats.least[i].middle_name ||""}</td><td>${stats.least[i].missed_votes}</td><td>${stats.least[i].missed_votes_pct}%</td>`
// }
// for (let i=0;i<stats.most_loyal.length;i++)
// {
// 		document.querySelector("#tab4").innerHTML += `<tr><td>${stats.most_loyal[i].first_name} ${stats.most_loyal[i].middle_name ||""}</td><td>${stats.most_loyal[i].total_votes}</td><td>${stats.most_loyal[i].votes_with_party_pct}%</td>`
// }

function dibujarTabla(array,criterio,tabla,orden)
	{
		if (tabla=="#total"){
			for (let i=0;i<4;i++)
			{
				if (i==0)
				{
					document.querySelector(tabla).innerHTML += `<tr><td>Democrats</td><td> ${array.democrats.length} </td><td> ${array.d_votes_wp.toFixed(2)}% </td></tr>`
				}
				if (i==1)
				{
					document.querySelector(tabla).innerHTML += `<tr><td>Republicans</td><td> ${array.republicans.length} </td><td> ${array.r_votes_wp.toFixed(2)}% </td></tr>`
				}
				if (i==2)
				{
					document.querySelector(tabla).innerHTML += `<tr><td>Independents</td><td> ${array.independents.length} </td><td> ${array.i_votes_wp.toFixed(2)}% </td></tr>`
				}
				if (i==3)
				{
					document.querySelector(tabla).innerHTML += `<tr><td>Total</td><td> ${members.length} </td><td> ${array.t_votes_wp} </td></tr>`
				}
			}
		}
		else 
		{
			let tablaSeleccionada=document.querySelector(tabla)

			if (tablaSeleccionada!=null && (tabla=="#most" || tabla=="#least")){
				for (let i=0;i<stats[orden].length;i++)
					{
							document.querySelector(tabla).innerHTML += `<tr><td>${array[orden][i].first_name} ${array[orden][i].middle_name ||"" } ${array[orden][i].last_name}</td><td>${array[orden][i][criterio]}</td><td>${array[orden][i][criterio]}%</td>`
					}
			}
			else if (tablaSeleccionada!=null && (tabla=="#most_loyal" || tabla=="#least_loyal")) {
				for (let i=0;i<stats[orden].length;i++)
					{
						let porcentaje =array[orden][i].total_votes * array[orden][i][criterio] / 100;
							document.querySelector(tabla).innerHTML += `<tr><td>${array[orden][i].first_name} ${array[orden][i].middle_name ||""} ${array[orden][i].last_name}</td><td>${porcentaje.toFixed(2) }</td><td>${array[orden][i][criterio]}%</td>`
					}	
			}
		}

	}
dibujarTabla(stats,null,"#total",null)
dibujarTabla(stats,"missed_votes_pct","#most","most")
dibujarTabla(stats,"missed_votes_pct","#least","least")
dibujarTabla(stats,"votes_with_party_pct","#most_loyal","most_loyal")
dibujarTabla(stats,"votes_with_party_pct","#least_loyal","least_loyal")