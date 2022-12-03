describe('Amazon search APP',()=>{

    it('element get testing',()=>{
    cy.visit('https://www.amazon.ca/')
     //within method: when elements is under parents we need to find 
//1.Parents Elements
     cy.get('#nav-search-bar-form').within(()=>{

//2.Child elements
        cy.get('#twotabsearchtextbox').type("Apple Macbook Pro")

     })




    
    })
    
    
    })