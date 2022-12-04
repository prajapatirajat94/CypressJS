describe('Reload Page stimulate',()=>{

    it('Reload test',()=>{
    
      //  cy.visit('https://www.google.com/')
      cy.visit('https://naveenautomationlabs.com/opencart/')
    
      cy.reload()
//force reload 
// cy.reload(true) 
//for time out {timeout:5000}
    
    })
    
    
    
    
    
    
    })