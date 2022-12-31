const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ea5bd1e4emsh4ae7d12382b9810p1d4919jsn353b4190a2f1',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

var search = document.getElementById('nation');
document.getElementById('get').addEventListener('click', ()=>{

fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${search.value}`, options)
	.then(response => response.json())
	.then(response => {
        from.innerHTML = "Location: "+response.data.location
        confirmed.innerHTML = "Cases: "+response.data.confirmed
        deaths.innerHTML = "Total Deaths: "+ response.data.deaths
        // recov.innerHTML = response.confirmed
        lR.innerHTML = "Last Reported:"+ response.data.lastReported
        lC.innerHTML = "Last Checked: "+response.data.lastChecked
        console.log(response)})
	.catch(err => console.error(err));

})