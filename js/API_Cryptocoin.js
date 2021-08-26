            //My api key
            var apikey = {
                key: '90b35aa9-e7d7-44e9-a608-08c3fb1a7545'
            }

        //GET Fetch Requisition
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
                apikey.key)
                .then((response) => {
                    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
                    return response.json();
            })
            .then((api) => {
                api.data.sort((a,b) => (a.rank > b.rank) ? 1 : ((b.rank > a.rank) ? -1 : 0))
                console.log(api.data)
                var texto = "";
                for(let i = 0; i < 12; i++){
                   let date = new Date(api.data[i].first_historical_data)
                   date = date.toLocaleDateString("pt-BR")
                   let symbol = api.data[i].symbol
                   let stats = `https://coinmarketcap.com/pt-br/currencies/${api.data[i].slug}/`
                  console.log(symbol)
                   texto = texto + `
                    
                   <div class="card" style="width: 18rem; height: 26rem;">
                   <img src="../img/${api.data[i].name}.jpg" class="card-img-top" alt="${api.data[i].name} style="height= 100%;">
                   <div class="card-body">    
                     <h5 class="card-title">${api.data[i].name} <span>${api.data[i].symbol}</span></h5>
                     <p class="card-text"><strong>Primeira data de aparecimento:</strong>
                        <li>${date}</li>
                     </p>
                     <div class="card__footer">
                     <a href="${stats}" class="btn btn-primary">Preço e estatísticas</a> 
                     </div>                  
                   </div>
                 </div>
                     `
                }
                document.getElementById("card_collection").innerHTML = texto 
            })
            .catch((error) => {
                console.error(error.message);
            });

// <img class="icon" src="../cryptocurrency-icons-master/128/black/${symbol}.png">  