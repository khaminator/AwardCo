describe('Sitemap accurate and loads correctly', () => {
    it('check all links on page', () => {

    cy.visit('https://award.co/')
    cy.get('a').each(page => {
      cy.request(page.prop('href'))
      .expect(resp.status).to.eq(200)
    })
  });
})