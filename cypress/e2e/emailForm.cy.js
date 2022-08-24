describe('Email Validation For Demo', () => {
  it('finds email input box and tests it to see if recognizes an invalid email"', () => {
    cy.visit('https://award.co/demo')

    cy.get('input[id=\'email-f64fb9d6-c61a-4f1e-be12-0b51b44aa5d1\']')
      .type('fake@email.com').should('have.value', 'fake@email.com')
      .should('have.value', 'fake@email.com') //Should come back with response that says invalid email
  })
})
//Test1