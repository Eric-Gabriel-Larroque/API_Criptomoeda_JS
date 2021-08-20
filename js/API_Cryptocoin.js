const api_key = {
    key: '90b35aa9-e7d7-44e9-a608-08c3fb1a7545'
}

//GET Fetch request:
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + api_key.key)

.then((response)=> {
    if(!response) throw new Error(`Erro ao executar a requisição, status ${response.status}`)
    return response.json()
})

.then((api) => {

    let texto = ""
           texto = texto + `<div class="media" >
                            <img src="../img/coin.jpg" alt="coin" width="100" height="60">
                            <div class="media-body">
                            <h5 class="mt-2">${api.data[i].name}</h5>
                            <p>${api.data[i].symbol}</p>
                            </div>
                            </div>`;
            document.getElementById("coins").innerHTML = texto;
})        
.catch(e=> console.error(e.message)) 