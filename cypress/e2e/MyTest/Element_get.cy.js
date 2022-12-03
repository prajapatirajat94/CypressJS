describe('check element get concept',()=>{

it('element get testing',()=>{
cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')

cy.get('a[class="btn btn-primary"]').click()

cy.url().should('include','/register')
cy.get('div[id="content"] h1').should('be.visible').and('contain.text','Register Account')
cy.get('div[id="content"] h1').contains('Register Account')
//cy.get('aside div li').find(a[href*='Wish List']).should('have.length',1) :-use when need to find child from parent
cy.get('aside div a').contains('Wish List').should('have.length',1).click()

//within method

})


})