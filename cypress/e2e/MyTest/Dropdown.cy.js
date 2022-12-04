///<reference types="Cypress" />



describe('Dropdown practice stimulate',()=>{

    it('With Select tag test',()=>{
    
      
      cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
//must use CSS selector with Select tag 
//use with click({force:true})
cy.get('select#Form_getForm_Country',{timeout:5000}).select('India',{force: true})
                               .should('have.value','India')

    
    
    
    
    })

    it('Google search test',()=>{
    
      
        cy.visit('https://www.google.com/')
  //must use CSS selector with Select tag 
  cy.get('[name="q"]',{timeout:5000}).type('Cypress')

  cy.get('.erkvQe').find('ul li span').contains('cypress tree').click({force: true})
  
      
      
      
      
      })
    
    
    
    
    
    
    })