//Comandos customizados:

Cypress.Commands.add('api_cadastrarUsuario', dadosUsuario => {

    cy.api({

        method: 'POST',
        url: '/usuarios',
        body: {
            nome: dadosUsuario.nome,
            email: dadosUsuario.email,
            password: dadosUsuario.password,
            administrador: dadosUsuario.administrador
        },
        failOnStatusCode: false

    })

})


Cypress.Commands.add('api_cadastrarUsuarioSemBody', () => {

    cy.api({

        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false

    })

})