  // // document.getElementById("senate-data").innerHTML=JSON.stringify(data,null,2);
         const tbody = document.querySelector ("tbody")
             const members = data.results[0].members
  //           members.forEach( member => {
  //               let row = tbody.insertRow (-1);
  //               row.innerHTML =`
  //               <td> <a href="${member.url}">${member.first_name} ${member.middle_name || ""} ${member.last_name}<a> </td>
  //               <td> ${member.party}</td>
  //               <td> ${member.state}</td>
  //               <td> ${member.seniority}</td>
  //               <td> ${member.votes_with_party_pct}\%</td>`
  //           })
var aux=""
            function filtrar()
            {
            	tbody.innerHTML=""
            	let check = document.getElementsByClassName("congresse");
            	for (let i=0;i<check.length;i++)
            	{
            		if (check[i].checked)
            		{
            			if (select.value =="ALL"){
            				aux= members.filter (e => e.party == check [i].value)
            			}
            			else
            			{
            				aux=members.filter(e=>e.party == check[i].value && e.state == select.value)
            			}

            			//members.filter(e => e.party == check[i].value).forEach( member => 
            			aux.forEach(member => {
            				let row = tbody.insertRow (-1);
		              			 row.innerHTML =`
				                <td> <a href="${member.url}">${member.first_name} ${member.middle_name || ""} ${member.last_name}<a> </td>
				                <td> ${member.party}</td>
				                <td> ${member.state}</td>
				                <td> ${member.seniority}</td>
				                <td> ${member.votes_with_party_pct}\%</td>`
            			})
		                		
            			
            		}
            	}
            }
            document.getElementById("rep").addEventListener("click", filtrar)
            document.getElementById("dem").addEventListener("click", filtrar)
            document.getElementById("ind").addEventListener("click", filtrar)
            document.getElementById("select").addEventListener("change",filtrar)
var state=[]
members.forEach(member => {
	if (state.indexOf(member.state) == (-1))
		{state.push(member.state)}
})
select.innerHTML += `<option value ="ALL">ALL</opcion> `
for (let i=0;i < state.length;i++)
{
	select.innerHTML += `<option value="${state [i]}">${state[i]}</option>`
}
filtrar()