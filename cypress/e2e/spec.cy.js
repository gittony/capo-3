describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', 'Welcommme tttto').should('be.visible')
  })
})