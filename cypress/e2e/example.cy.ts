describe('Vue App Test', () => {
  it('should visit the app', () => {
    cy.visit('/')
    cy.contains('You did it!')
  })
})
