export const getTitle = () => cy.get('[data-cy=title]');

describe('Home Page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    getTitle().should(t => expect(t.text().trim()).equal('Dashboard'));
  });
});
