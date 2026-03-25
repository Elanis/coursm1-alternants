describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  });

  it('displays two todo items by default', () => {
    const button = cy.get('.counter-button');
    button.should('have.text', 'count is 0');

    button.click();

    button.should('have.text', 'count is 1');

    button.click();
    button.click();

    button.should('have.text', 'count is 3');

    cy.visit('http://localhost:5173');

    const button2 = cy.get('.counter-button');
    button2.should('have.text', 'count is 3');
  });
});