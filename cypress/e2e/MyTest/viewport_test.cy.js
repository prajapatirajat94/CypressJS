/// <reference types="Cypress" />
//under describe we are going to write test cases
describe('testing diff view ports',()=>{

//to execute test case from cmd line run below line
// 1.   ./node_modules/.bin/cypress run --spec **/viewport_test.cy.js  --browser chrome --headed
//2.    ./node_modules/.bin/cypress run --spec cypress/e2e/MyTest/viewport_test.cy.js --browser chrome --headed
   // {failOnStatusCode:false} - if browser throwing 501 response because of wait


//1.
    before(()=>{
console.log('Running my tests')
    })
   //3.

    beforeEach(()=>{
        cy.visit('https://www.google.com/')
    })
   //3.
   it('open in macbook -13',()=>{
      cy.viewport('macbook-13')
     //take screenshot
     cy.screenshot()
     cy.wait(200) 

   })

   it('open in macbook -15',()=>{
    cy.viewport('macbook-15')
   //take screenshot
   cy.screenshot()
   cy.wait(2000) 

 })
   it('open in iphone-X',()=>{
    cy.viewport('iphone-x')
   //take screenshot
   cy.screenshot()
   cy.wait(200) 

 })


}) 