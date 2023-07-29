fetch('/shoesData')
.then(async (response) => {
    const data = await response.json()
    let tmpt = ''//tmpt for template
    data.forEach(shoe => {
        tmpt+= `
            <div class="col">
              <div class="card" style="width: 18rem;">
                <img src="/img/${shoe.Image_File}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="Title">${shoe.Title}</h5>
                  <p class="card-text" id="Description">${shoe.Description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" id="Size">Size:${shoe.Size}</li>
                  <li class="list-group-item" id="Cost">Price:$${shoe.Price}</li>
                  <li class="list-group-item" id="Charity%">${shoe.Percentage_For_Charity}% Going to Charity</li>
                  <li class="list-group-item" id="Seller">Seller: ${shoe.Seller}</li>
                </ul>
                <button class="normalButton" id="${shoe.Title}" type="button">+</button>
              </div>
            </div>`
    });
    document.getElementById('shoes').innerHTML = tmpt
    data.forEach(shoe =>{
      document.getElementById(shoe.Title)?.addEventListener("click",(e) =>{
        alert('You have added the ' + shoe.Title + ' item to your cart')
        console.log(e.target.id,shoe)
        fetch('/addToCart',{
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shoe)

        })
        .then((response)=>{
          // window.location.href = '/Cart'
        }).catch((error)=>{
          //Add a bootstrap alert message
          console.error(error)
        })
      })
    })
})

fetch('/hoodiesData')
.then(async (response) => {
  const data2 = await response.json()
  console.log(data2)
  let tmpt2 = ''//tmpt for template
  data2.forEach(hoodie => {
      tmpt2+= `
      <div class="col">
            <div class="card" style="width: 18rem;">
              <img src="/img/${hoodie.Image_File}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title" id="Title">${hoodie.Title}</h5>
                <p class="card-text" id="Description">${hoodie.Description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="Size">Size:${hoodie.Size}</li>
                <li class="list-group-item" id="Cost">Price:$${hoodie.Price}</li>
                <li class="list-group-item" id="Charity%">${hoodie.Percentage_For_Charity}% Going to Charity</li>
                <li class="list-group-item" id="Seller">Seller: ${hoodie.Seller}</li>
              </ul>
              <button class="normalButton" id="${hoodie.Title}">+</button>
            </div>
          </div>`
  });
  document.getElementById('hoodies_jackets').innerHTML = tmpt2
  data2.forEach(hoodie =>{
    document.getElementById(hoodie.Title)?.addEventListener("click",(e) =>{
      alert('You have added the ' + hoodie.Title + ' item to your cart')
      console.log(e.target.id,hoodie)
      fetch('/addToCart',{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hoodie)

      })
      .then((response)=>{
        // window.location.href = '/Cart'
      }).catch((error)=>{
        console.error(error)
      })
    })
  })
})

fetch('/shirtsData')
.then(async (response) => {
  const data3 = await response.json()
  console.log(data3)
  let tmpt3 = ''//tmpt for template
  data3.forEach(shirt => {
      tmpt3+= `
      <div class="col">
            <div class="card" style="width: 18rem;">
              <img src="/img/${shirt.Image_File}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title" id="Title">${shirt.Title}</h5>
                <p class="card-text" id="Description">${shirt.Description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="Size">Size:${shirt.Size}</li>
                <li class="list-group-item" id="Cost">Price:$${shirt.Price}</li>
                <li class="list-group-item" id="Charity%">${shirt.Percentage_For_Charity}% Going to Charity</li>
                <li class="list-group-item" id="Seller">Seller: ${shirt.Seller}</li>
              </ul>
              <button class="normalButton" id="${shirt.Title}" >+</button>
            </div>
          </div>`
  });
  document.getElementById('shirt').innerHTML = tmpt3
  data3.forEach(shirt =>{
    document.getElementById(shirt.Title)?.addEventListener("click",(e) =>{
      alert('You have added the ' + shirt.Title + ' item to your cart')
      console.log(e.target.id,shirt)
      fetch('/addToCart',{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shirt)

      })
      .then((response)=>{
        // window.location.href = '/Cart'
      }).catch((error)=>{
        console.error(error)
      })
    })
  })
})

fetch('/carts.json')
.then(async (response) => {
  const data4 = await response.json()
  console.log(data4)
  let tmpt4 = ''//tmpt for template
  let totalPrice = 0
  let moneyToCharity = 0
  data4.forEach(carts => {
      tmpt4+= `
      <div class="col">
            <div class="card" style="width: 18rem;">
              <img src="/img/${carts.Image_File}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title" id="Title">${carts.Title}</h5>
                <p class="card-text" id="Description">${carts.Description}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" id="Size">Size:${carts.Size}</li>
                <li class="list-group-item" id="Cost">Price:$${carts.Price}</li>
                <li class="list-group-item" id="Charity%">${carts.Percentage_For_Charity}% Going to Charity</li>
                <li class="list-group-item" id="Seller">Seller: ${carts.Seller}</li>
              </ul>
            </div>
          </div>`
        
        totalPrice += parseInt(carts.Price)
        moneyToCharity += (carts.Price * parseInt(carts.Percentage_For_Charity)/100)
  });
  console.log(totalPrice)
  document.getElementById('cart_items').innerHTML = tmpt4
  document.getElementById('total_price').innerHTML = 'Total Price: ' + totalPrice
  document.getElementById('money_to_charity').innerHTML = 'Money Going To Chariry: ' + moneyToCharity
})

fetch('/carts.json')
.then(async (response) => {
  const data5 = await response.json()
  let tmpt5 = ''//tmpt for template
  data5.forEach(carts => {
      total_price_output = carts.Price + total_price_output
      tmpt5+= `
       <h4>
       Total = ${total_price_output}
       </h4>
       `
  });
  console.log(tmpt5)
  document.getElementById('total_output').innerHTML = tmpt5
})

document.getElementById('preview_btn').addEventListener('click', ()=>{
  const fileName = document.getElementById('image_name').value
  console.log(fileName)
  fetch('/img/' + fileName)
  .then( async (response) =>{
    const data = await response.json()
    console.log(data)
  })
  .catch((error)=>{
    console.error(error)
  })
})


window.addEventListener('online', () => console.log('Became online'));
window.addEventListener('offline', () => console.log('Became offline')); // Edit the message accordingly, checks the internet connection

// fetch('/shoes/title/:title').then