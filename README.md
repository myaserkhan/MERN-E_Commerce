# MERN-E_Commerce

# Lessions

1. Install Tools
2. Create React App
3. Create Git Repository
4. List Products
   1. create products array
   2. render products
   3. style products
5. Add routing
   1. route for home screen
   2. route for product screen
6. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create rouute for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm statrt
7. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state, effect & reducer hook
8. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from useReducer
9. Add bootsrap UI framework
   1. npm install react-bootstrap bootstrap
   2. update App.js
10. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
11. Create Product Details Screen
    1.fetch product from backend
    2.create 3 columns for image, info and action
12. Create Loading and Message Component
    1. create loading & message components
    2. use spinner component
    3. create utils.js to define getError function
13. Implement Add To Cart
    1. Create React context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
14. Complete Add to Cart
    1. check exist item in the cart
    2. check count in stock in backend
15. Create Cart Screen
    1. create 2 columns
    2. display item list
    3. create action column
16. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler remove item
    3. click handler for checkout
