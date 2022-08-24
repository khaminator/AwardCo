describe('Menu Navigation Responsive to Window/Screen Size', function() {
  beforeEach(function() {
    //no code
  });

  it('has a visible desktop menu toggle', function() {
    cy.visit('https://award.co/')
    cy.viewport(1060, 660);
    cy.get('div').get('.button-navigation').should('be.visible')
    cy.get('div').get('.menu-button').should('not.be.visible')
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    
   ///.button-navigation demo w-button'
  });

  it('has a visible mobile menu toggle', function() {
    cy.visit('https://award.co/')
    cy.viewport(756, 660);
    cy.get('div').get('.button-navigation').should('not.be.visible')
    cy.get('div').get('.menu-button').should('be.visible')
   ///.button-navigation demo w-button'
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('iphone-5')
    cy.wait(200)
    cy.viewport('iphone-4')
    cy.wait(200)
    cy.viewport('iphone-3')
    cy.wait(200)
  });
})