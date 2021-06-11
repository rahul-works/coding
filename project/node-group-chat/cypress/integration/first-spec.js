it('show the message', () => {
  cy.visit('/', {
    onBeforeLoad(win) {
      cy.stub(win, 'prompt').returns('Cy');
    }
  });
  cy.get('#txt').type('Hello there{enter}');
  cy.contains('Hello there');
});