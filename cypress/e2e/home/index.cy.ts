describe('home page', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('login', () => {
        cy.login('npatel00@clevelandschools.org', '123456')
        cy.wait(1500)
        cy.logout()
    });
})