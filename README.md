# Yaadein-Api
<p>Yaadein is a REST API. This API is all about old Hindi. songs and their details. Anybody can use this API to build their website related to old Hindi songs. And this is also my first public API using NodeJS.</p>
<br/>
<p><b>Main link:</b>&nbsphttps://yaadein.onrender.com/</p>
<h2>How to use</h2>
<br/>
You can fetch data using get request in postman or any other npm package like axios in your software.
<h3>Routes</h3>
<p><b>i)For fetching data:</b> https://yaadein.onrender.com/api/v1/songs</p>
<p><b>ii)For fetching data by id:</b> https://yaadein.onrender.com/api/v1/songs/:id</p>

<h3>Features</h3>
<p><b>i)Filter:</b> https://yaadein.onrender.com/api/v1/songs?singer=Lata Mangeshkar</p>
<p><b>ii)Sort:</b> https://yaadein.onrender.com/api/v1/songs?sort=-releaseDate</p>
<p><b>iii)Limiting Field:</b> https://yaadein.onrender.com/api/v1/songs?fields=name, singer</p>
<p><b>iv)Paginate:</b> https://yaadein.onrender.com/api/v1/songs?page=2&limit=3</p>

<h3>Special Routes</h3>
<p><b>i)</b> https://yaadein.onrender.com/api/v1/songs/lata-mangeshkar-special</p>



