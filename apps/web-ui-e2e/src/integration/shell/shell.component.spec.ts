describe('web-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shellcomponent--primary'));

  it('should render the component', () => {
    cy.get('elevate-nx-shell').should('exist');
  });
});
