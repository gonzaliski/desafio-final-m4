function addPortfolio(params = {}){
  const cardTemplate = document.querySelector("#services__card-template")
  const cardElement = document.querySelector(".services__card")
  cardTemplate.content.querySelector(".portfservices__card-img").setAttribute("src",params.image);
  cardTemplate.content.querySelector(".services__card-title").textContent = params.title;
  cardTemplate.content.querySelector(".services__card-text").textContent = params.description;
  cardTemplate.content.querySelector(".portfservices__card-link").textContent = params.link;
  cardTemplate.content.querySelector(".portfservices__card-link").setAttribute("href",params.link);
  
  const clone =  document.importNode(cardTemplate.content,true);
  cardElement.appendChild(clone);
  
  }


function getPortfolio(){
  return fetch("https://preview.contentful.com/spaces/x1j2peljha18/environments/master/entries?access_token=8HkLEdrPGMe3gdgJ-RZb60sFyXKtvOWaYCG23w8pNkU&&content_type=portfolio")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    const media =  data.includes.Asset[0].fields.file.url
    const fieldCollection = data.items.map((item)=>{
      
      return{
        image:media,
        title:item.fields.portfolioTitle,
        description:item.fields.portfolioText,
        link:item.fields.portfolioUrl
      }
    });
    return fieldCollection
  });
}

(function main(){
  getPortfolio().then( (portfolio)=>{
    for (const p of portfolio){
      addPortfolio(p)
    }
  });

})()