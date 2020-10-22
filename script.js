   /*FUNÇÃO BUSCA DO PERSONAGEM */
    async function getJsonPers(){
    var obj = document.querySelector("#nomeobj").value;
    console.log(obj);
    var url = 'https://rickandmortyapi.com/api/character/?name=' + obj;
    console.log(url);
    document.querySelector("#person").innerHTML = "";
    
    const response = await fetch(url);
    if (response.ok) { // Se o status for 200-299
      const json = await response.json();
      //console.log(json);
      for (let item of json.results){
        console.log(item);
        
        let div = document.createElement("div");
        div.style.width = "15%";
        div.style.display = "inline-block";
        div.style.padding = "4px"
        let imagem = document.createElement("img");
        imagem.src = item.image;
        imagem.style.width= "150px";
        imagem.style.border = "1px solid lightblue"

        let titulo = document.createElement("a");
        titulo.innerText = item.name;
        titulo.href = item.url;
        titulo.style.color = "orange"
        titulo.style.fontStyle = "italic"
        titulo.style.fontSize = "20px"       
        
        
        let novadiv  =document.querySelector("#person")
        novadiv.appendChild(div)
        div.appendChild(titulo);
        div.append(imagem);
      }
      return json;   
    } else {
      alert("Erro HTTP: " + response.status);
    }
  } 

  /* FUNÇÃO BUSCA STATUS */
  async function getJsonStats(){
    var obj = document.querySelector("#status").value;
    console.log(obj);
    var url = 'https://rickandmortyapi.com/api/character/?status=' + obj;
    console.log(url);
    document.querySelector("#person").innerHTML = "";
    
    const response = await fetch(url);
    if (response.ok) { // Se o status for 200-299
      const json = await response.json();
      //console.log(json);
      for (let item of json.results){
        console.log(item);
        
        let div = document.createElement("div");
        div.style.width = "15%";
        div.style.display = "inline-block";
        div.style.padding = "4px"
        let imagem = document.createElement("img");
        imagem.src = item.image;
        imagem.style.width= "150px";
        imagem.style.border = "1px solid lightblue";

        let titulo = document.createElement("a");
        titulo.innerText = item.name;
        titulo.href = item.url;
        titulo.style.color = "orange"
        titulo.style.fontStyle = "italic"
        titulo.style.fontSize = "20px"        
        
        
        let novadiv  =document.querySelector("#person")
        novadiv.appendChild(div)
        div.appendChild(titulo);
        div.append(imagem);
      }
      return json;   
    } else {
      alert("Erro HTTP: " + response.status);
    }
  }

  // FUNÇÃO BUSCA POR ESPÉCIE
  async function getJsonSpec(){
    var obj = document.querySelector("#specie").value;
    console.log(obj);
    var url = 'https://rickandmortyapi.com/api/character/?species=' + obj;
    console.log(url);
    document.querySelector("#person").innerHTML = "";
    
    const response = await fetch(url);
    if (response.ok) { // Se o status for 200-299
      const json = await response.json();
      //console.log(json);
      for (let item of json.results){
        console.log(item);
        
        let div = document.createElement("div");
        div.style.width = "15%";
        div.style.display = "inline-block";
        div.style.padding = "4px"
        let imagem = document.createElement("img");
        imagem.src = item.image;
        imagem.style.width= "150px";
        imagem.style.border = "1px solid lightblue"

        let titulo = document.createElement("a");
        titulo.innerText = item.name;
        titulo.href = item.url;
        titulo.style.color = "orange"
        titulo.style.fontStyle = "italic"
        titulo.style.fontSize = "20px"
        
        let novadiv  =document.querySelector("#person")
        novadiv.appendChild(div)
        div.appendChild(titulo);
        div.append(imagem);
      }
      return json;   
    } else {
      alert("Erro HTTP: " + response.status);
    }
  }

  // FUNÇÃO BUSCAR POR GÊNERO
  async function getJsonGender(){
    var obj = document.querySelector("#gender").value;
    console.log(obj);
    var url = 'https://rickandmortyapi.com/api/character/?gender=' + obj;
    console.log(url);
    document.querySelector("#person").innerHTML = "";
    
    const response = await fetch(url);
    if (response.ok) { // Se o status for 200-299
      const json = await response.json();
      //console.log(json);
      for (let item of json.results){
        console.log(item);
        
        let div = document.createElement("div");
        div.style.width = "15%";
        div.style.display = "inline-block";
        div.style.padding = "4px"
        let imagem = document.createElement("img");
        imagem.src = item.image;
        imagem.style.width= "150px";
        imagem.style.border = "1px solid lightblue"
      
        let titulo = document.createElement("a");
        titulo.innerText = item.name;
        titulo.href = item.url;
        titulo.style.color = "orange"
        titulo.style.fontStyle = "italic"
        titulo.style.fontSize = "20px"        
        
        
        let novadiv  =document.querySelector("#person")
        novadiv.appendChild(div)
        div.appendChild(titulo);
        div.append(imagem);
      }
      return json;   
    } else {
      alert("Erro HTTP: " + response.status);
    }
  }
  
  /*FUNÇÃO BUSCA DE EPISÓDIO*/

  async function getJsonEp(){
    var obj = document.querySelector("#ep").value;
    console.log(obj);
    var url = 'https://rickandmortyapi.com/api/episode/' + obj;
    console.log(url);
    document.querySelector("#person").innerHTML = "";
    const response = await fetch(url);
    document.querySelector("#person").innerHTML = "";
    if (response.ok) { // Se o status for 200-299
      const json = await response.json();
        console.log(json);
        //Nome do episódio
        console.log(json.name);
        let epnome = document.createElement("h3");
        epnome.innerText = json.name;
        let novadiv  =document.querySelector("#person")
        novadiv.appendChild(epnome);

        let pnome = document.createElement("p");
        pnome.innerText = "Personagens mostrados nesse episódio estão abaixo"
        novadiv.appendChild(pnome);

        pnome.style.color = "blanchedalmond"
        pnome.style.margin = "15px auto"
        pnome.style.fontSize = "25px"

      for (let item of json.characters){
        //console.log(item);
        
        let response2 = await fetch(item);
        if (response2.ok){
          let personagem = await response2.json();
          console.log(personagem);
        
        let div = document.createElement("div");
        div.style.width = "15%";
        div.style.display = "inline-block";
        div.style.padding = "4px"

        let imagem = document.createElement("img");
        imagem.src = personagem.image;
        imagem.style.width= "150px";
        imagem.style.border = "1px solid lightblue"
        


        let titulo = document.createElement("a");
        titulo.innerText = personagem.name;
        titulo.href = personagem.url;
        titulo.style.color = "orange"
        titulo.style.fontStyle = "italic"
        titulo.style.fontSize = "20px"
        
        
        // let novadiv  =document.querySelector("#person")
        novadiv.appendChild(div)
        div.appendChild(titulo);
        div.append(imagem);
        }
      }
      return json;   
    } else {
      alert("Erro HTTP: " + response.status);
    }
  }