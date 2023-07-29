Shopping Website(GiveNTake)
============================
Introduction: Theme
-------------------
The website I have created is called GiveNTake. The idea is that people can go on the website and sell clothes that they no longer need.
On top of that, the user has the opportunity to add a percentage of the price which can go to charity. 
This website has 3 sections which are as follows. 
Buy:
This section is where the user will be able to see what items are available and will be able to add items to the cart using the '+' button.
The Buy page sorts items into 3 sections which are Shirts/T-Shirts, Hoodies/Jackets and Shoes.
Sell:
This section is split into 5 parts - Intro, Preview, Shirts/T-Shirts form, Hoodies/Jackets form and Shoes form.
Preview is where the user can add an image file name and then preview if that is the right image. 
They can then be assured that they are uploading the correct image.
For this to be possible, however, the image must be in the public folder, in the img folder. 
The next 3 parts are where the user can add in information for the item that they want to upload to sell
Cart:
This section displays all the items that a user has planned to purchase, the total price, and how much money is going to charity. 

Files Included
---------------
HTML and CSS
*Buy_Page.html
*Sell_Page.html
*Cart_Page.html
*style.css

Server Side
*server.js
*app.js
*app.test.js

Client Side
*client_side.js(in js folder)

JSON Files
*Carts.json
*Shoes.json
*Shirts_T-Shirts.json
*Hoodies_Jackets.json
*package.json

Other
*Image files(in img folder)
*.eslintrc.js


How to execute Code
--------------------
Once the folder has been unzipped, make sure all the files are in the same directory. Then, using the terminal, 
go to the correct directory and type "npm install" to install the correct node modules. You can then start the
server by running "npm start". You can open the link 'http://127.0.0.1:3000/Buy' to access the website. 


Entities:
There are 4 entities: Shoes, Hoodies/Jackets, Shirts/T-Shirts, and Cart.
Shoes, Hoodies/Jackets, Shirts/T-Shirts is connected to Cart(Many-To-One)
*Entitity diagram is shown in video*


Errors
-------------------------
For some reason when I run npm test, the command pretest is run however if the command is called something else instead of test for test and that is run it works just fine. The 7 tests are tested.
