describe('Test Login Process', () => {
  it('should be able to log in the Test Site and show correct information', () => {
    cy.visit('http://the-internet.herokuapp.com/login');

    const username = Cypress.env('username');
    const password = Cypress.env('password');
    cy.get('input#username').clear().type(username);
    cy.get('input#password').clear().type(password).type('{enter}');

    cy.url().should('include', 'secure');

    cy.get('#flash').should('have.class', 'success');
    cy.get('h2').should('include.text', 'Secure Area');
  });
});
