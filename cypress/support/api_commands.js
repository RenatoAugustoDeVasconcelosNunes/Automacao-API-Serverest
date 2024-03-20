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


Cypress.Commands.add('api_listarUsuariosCadastrados', (variavelParaPesquisar, dadoParaPesquisar) => {

    if (variavelParaPesquisar == 'id' && dadoParaPesquisar != '') {

        cy.api({

            method: 'GET',
            url: `/usuarios?_id=${dadoParaPesquisar}`
            
        })
        
    } else if (variavelParaPesquisar == 'nome' && dadoParaPesquisar != '') {

        cy.api({

            method: 'GET',
            url: `/usuarios?nome=${dadoParaPesquisar}`
    
        })
        
    } else if (variavelParaPesquisar == 'email' && dadoParaPesquisar != '') {

        cy.api({

            method: 'GET',
            url: `/usuarios?email=${dadoParaPesquisar}`,
            failOnStatusCode: false

    
        })
        
    } else if (variavelParaPesquisar == 'password' && dadoParaPesquisar != '') {

        cy.api({

            method: 'GET',
            url: `/usuarios?password=${dadoParaPesquisar}`
    
        })
        
    } else if (variavelParaPesquisar == 'administrador' && dadoParaPesquisar != '') {

        cy.api({

            method: 'GET',
            url: `/usuarios?administrador=${dadoParaPesquisar}`,
            failOnStatusCode: false

    
        })
        
    } else if (variavelParaPesquisar == 'administrador' && dadoParaPesquisar == '') {

        cy.api({

            method: 'GET',
            url: `/usuarios?administrador=${dadoParaPesquisar}`,
            failOnStatusCode: false

    
        })

    }else {

        cy.api({

            method: 'GET',
            url: `/usuarios`
    
        })
        
    }   
   

})


Cypress.Commands.add('api_deletarUsuarios', (id) => {

    cy.api({

        method: 'DELETE',
        url: `/usuarios/${id}`

    })

})