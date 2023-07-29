'use strict';

const request = require('supertest');
const app = require('./app');
const fs = require('fs');

describe('Testing all Products', ()=>{
    describe('Checking if the data requests return json files',() =>{
        test('Checking on shoes data requests',()=>{
            return request(app)
            .get('/shoesData')
            .expect('Content-type', /json/)
        })

        test('Checking on shoes hoodies data requests',()=>{
            return request(app)
            .get('/hoodiesData')
            .expect('Content-type', /json/)
        })

        test('Checking on shoes shirts data requests',()=>{
            return request(app)
            .get('/shirtsData')
            .expect('Content-type', /json/)
        })
    })
})

describe('Testing the POST methods', () => {

  test('This method should add to shoes.json', async () => {
    const res = await request(app)
      .post('/sell_shoes_form')
      .send({
        Title: 'Nike Air Max',
      })
    expect(res.status).toBe(302) 
    expect(res.header.location).toBe('/Sell') 
    const shoes_data = fs.readFileSync('Shoes.json');
    const data = JSON.parse(shoes_data)
    const lastShoes = data.shoes[data.shoes.length - 1]
    expect(lastShoes.Title).toBe('Nike Air Max')
  })

  test('This method should add to shirts_t-shirts.json', async () => {
    const res = await request(app)
      .post('/sell_shirts_form')
      .send({
        Title: 'Zara T-Shirt',
      })
    expect(res.status).toBe(302) 
    expect(res.header.location).toBe('/Sell')
    const shirts_data = fs.readFileSync('Shirts_T-Shirts.json');
    const data = JSON.parse(shirts_data)
    const lastShirt = data.shirt[data.shirt.length - 1] // get the last shoes data in the array
    expect(lastShirt.Title).toBe('Zara T-Shirt')
  })

  test('This method should add to hoodies_jackets.json', async () => {
    const res = await request(app)
      .post('/sell_hoodies_form')
      .send({
        Title: 'Off White Hoodie',
      })
    expect(res.status).toBe(302) 
    expect(res.header.location).toBe('/Sell')
    const shirts_data = fs.readFileSync('Hoodies_Jackets.json');
    const data = JSON.parse(shirts_data)
    const lastHoodie = data.hoodies_jackets[data.hoodies_jackets.length - 1] // get the last shoes data in the array
    expect(lastHoodie.Title).toBe('Off White Hoodie')
  })
})


describe('GET /hoodies/title/:title', () => {
  const mockHoodies = {
    "hoodies_jackets": [
      { "Title": "Hoodie 1" },
      { "Title": "Hoodie 2" },
    ]
  };
  beforeAll(() => {
    jest.spyOn(fs, 'readFileSync').mockReturnValue(JSON.stringify(mockHoodies));
  });

  afterAll(() => {
    fs.readFileSync.mockRestore();
  });

  it('should return 200 and the hoodie object when the title exists', async () => {
    const response = await request(app).get('/hoodies/title/Hoodie 1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ "Title": "Hoodie 1" });
  });
});
