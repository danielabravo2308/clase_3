describe("Mi primer Test Case en Cypress",()=>{
    it('Prueba visita a la pagina de ejemplo para validar el titulo',()=>{
        //visitar la pagina de ejemplo
        cy.visit("https://example.cypress.io/")
        //validar el titulo de la pagina
        //cy.title().should('eq','Kitchen Sink')
        cy.contains('Kitchen Sink')
        cy.get('h1').should('have.text','Kitchen Sink')

    })
});
