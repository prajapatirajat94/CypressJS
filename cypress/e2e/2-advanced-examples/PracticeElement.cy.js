describe('This program is used for checking title',()=>{

it('checking for title',()=>{
    cy.visit('https://www.google.com/')
    cy.contains('Terms').click()
    cy.url().should('include','/terms')
})



});