
describe('template spec', () => {
  


  it('passes', () => {
    cy.visit('/')


    cy.get('input[name="username"]').type("admin")
    cy.get('input[name="password"]').type("admin")
    cy.get('input[name="submit"]')

    cy.get('form').submit()

    cy.url().should('include', '/dashboard')

    // cy.get('#logout').click()
    // cy.url().should('include', '/')

  })

  
})