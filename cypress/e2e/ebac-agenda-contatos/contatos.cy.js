describe('Testes para Agenda de Contatos EBAC', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um contato à lista de contatos', () => {
        cy.get('[type="text"]').type('João da Silva')
        cy.get('[type="email"]').type('testes.cypress.exemplo@gmail.com')
        cy.get('[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()
        cy.screenshot('adicionando-contato')
    })

    it('Deve editar um contato da lista de contatos', () => {
        cy.get('.edit').last().click()
        cy.get('[type="text"]').clear().type('João Mineiro da Silva')
        cy.get('[type="email"]').clear().type('cypress.exemplo@gmail.com')
        cy.get('[type="tel"]').clear().type('159900000000')
        cy.get('.alterar').click()
        cy.screenshot('editando-contato')
        cy.wait(3000)
    })
    
    it('Deve remover um contato da lista de contatos', () => {
        cy.get('.delete').last().click()
        cy.screenshot('deletando-contato')
    })
})