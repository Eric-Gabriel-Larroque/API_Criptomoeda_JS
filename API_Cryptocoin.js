const KEY = '90b35aa9-e7d7-44e9-a608-08c3fb1a7545'
const CORS_URL = 'https://cors.iamnd.eu.org/?url=';

await fetch(`${CORS_URL}https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${KEY}`)

.then(async (response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    return response.json();
  })  

  .then((api) => {
    api.data.sort((a, b) => a.rank - b.rank);
    let texto = "";
    for (let i = 0; i < 20; i++) {
      
      const coin = {
        symbol:api.data[i].symbol,
        stats: `https://coinmarketcap.com/pt-br/currencies/${api.data[i].slug}/`,
        date: new Date(api.data[i].first_historical_data).toLocaleDateString("pt-BR"),
        name: api.data[i].name
      }
      let iconSymbol = coin.symbol.toLowerCase();
      let imagemPadrao = `onerror="this.src='../img/image-unavailable-icon.webp'"`;
      let urlIcon = `../cryptocurrency-icons-master/128/color/${iconSymbol}.png`;
      
        texto +=`<div class="card">
                   <img src="../img/${coin.symbol}.jpg" ${imagemPadrao}
                   class="card-img-top" alt="${coin.name} style="height= 260rem;">
                   <div class="card-body" style="padding:.1em .2em;">    
                     <h5 class="card-title">${coin.name} <span>${coin.symbol}</span></h5>
                     <ul class="card-text"><strong>Primeira data de aparecimento:</strong>
                        <li style="list-style: none;">
                        <img src=${urlIcon} ${imagemPadrao} class="coin-icon">
                        ${coin.date}</li>
                     </ul>
                     <a href="${coin.stats}" class="btn btn-primary">Preço e estatísticas</a>               
                   </div>
                 </div>
                     `;
    }
    document.getElementById("card_collection").innerHTML = texto;
  })
  .catch((error) => {
    console.error(error.message);
  });