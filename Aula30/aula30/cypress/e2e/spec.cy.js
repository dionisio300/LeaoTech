describe('Teste da tela de login', () => {

  it('deve mostrar erro quando o login estiver errado', () => {
    cy.visit('http://localhost:5173/login')

    //Arrage
    cy.get('#login').should('be.visible')
    cy.get('#senha').should('be.visible')

    //Act
    cy.get('#login').type('usuario_erro')
    cy.get('#senha').type('senha_errada')
    cy.get('button').click()

    //Assert
    cy.get('.mensagem').should('contain','Usuario Não Encontrado')
  })
  it('deve mostrar usuário encontrado com login e senha correta', () => {
    cy.visit('http://localhost:5173/login')

    //Arrage
    cy.get('#login').should('be.visible')
    cy.get('#senha').should('be.visible')

    //Act
    cy.get('#login').type('admin')
    cy.get('#senha').type('admin')
    cy.get('button').click()

    //Assert
    cy.get('.mensagem').should('contain','Usuario Encontrado')
    
  })
})