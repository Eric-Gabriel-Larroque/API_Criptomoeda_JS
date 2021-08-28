import api from "./key.js";

/*  YOUR KEY HERE
        const api = {
            key: _____________
        }
*/
//GET Fetch Requisition
fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    api.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    return response.json();
  })
  .then((api) => {
    api.data.sort((a, b) => (a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0));
    let texto = "";
    for (let i = 0; i < 20; i++) {
      let date = new Date(api.data[i].first_historical_data).toLocaleDateString(
        "pt-BR"
      );
      let symbol = api.data[i].symbol;
      let iconSymbol = symbol.toLowerCase();
      let urlIcon = `../cryptocurrency-icons-master/128/color/${iconSymbol}.png`;
      let stats = `https://coinmarketcap.com/pt-br/currencies/${api.data[i].slug}/`;
      texto =
        texto +
        `
                    
            <div class="card" style="width: 18rem; height: 26rem; box-shadow: 0.4em 0.5em 0.7em rgba(0,0,0,0.19) ">
                   <img src="../img/${api.data[i].symbol}.jpg" class="card-img-top" alt="${api.data[i].name} style="height= 260rem;">
                   <div class="card-body" style="padding:.1em .2em;">    
                     <h5 class="card-title">${api.data[i].name} <span>${api.data[i].symbol}</span></h5>
                     <ol class="card-text"><strong>Primeira data de aparecimento:</strong>
                        <li style="list-style: none;">
                        <img src=${urlIcon} style="height:1.5rem; display: inline; margin-right: 3rem;">
                        ${date}</li>
                     </ol>
                     <div class="card__footer">
                     <a href="${stats}" class="btn btn-primary">Preço e estatísticas</a> 
                     </div>                  
                   </div>
                 </div>
                     `;
    }
    document.getElementById("card_collection").innerHTML = texto;
  })
  .catch((error) => {
    console.error(error.message);
  });
