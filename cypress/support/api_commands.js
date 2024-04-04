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



Cypress.Commands.add('api_buscarUsuarioPorId', (id) =>{

    cy.api({

        method: 'GET',
        url: `/usuarios/${id}`,
        failOnStatusCode: false

        
    })

})


Cypress.Commands.add('api_excluirUsuario', (id) =>{

    cy.api({

        method: 'DELETE',
        url: `/usuarios/${id}`,
        failOnStatusCode: false

        
    })

})


Cypress.Commands.add('api_listarTodosOsUsuarios', () => {

    cy.api({

        method: 'GET',
        url: `/usuarios`

    })


})


Cypress.Commands.add('api_deletarTodosOsUsuarios', () => {

    cy.api_listarTodosOsUsuarios()
        .then(resp => resp.body.usuarios.forEach(respFor => 
            
            cy.api({
                method:'DELETE', 
                url: `/usuarios/${respFor._id}`,
                failOnStatusCode: false
        })))
})


Cypress.Commands.add('api_editarUsuario', (id, variavelParaAlterar, valorDaVariavel) => {


    cy.api_buscarUsuarioPorId(id)
        .then(respBusca => {

            if (variavelParaAlterar == 'nome') {

                cy.api({
        
                    method: 'PUT',
                    url: `/usuarios/${id}`,
                    body: {
                        nome: valorDaVariavel.nome,
                        email: respBusca.body.email,
                        password: respBusca.body.password,
                        administrador: respBusca.body.administrador
                    }
            
                })
                
            } else if (variavelParaAlterar == 'email') {
        
                cy.api({
        
                    method: 'PUT',
                    url: `/usuarios/${id}`,
                    body: {
                        nome: respBusca.body.nome,
                        email: valorDaVariavel.email,
                        password: respBusca.body.password,
                        administrador: respBusca.body.administrador
                    }
            
                })
                
            } else if (variavelParaAlterar == 'password') {
        
                cy.api({
        
                    method: 'PUT',
                    url: `/usuarios/${id}`,
                    body: {
                        nome: respBusca.body.nome,
                        email: respBusca.body.email,
                        password: valorDaVariavel.password,
                        administrador: respBusca.body.administrador
                    }
            
                })
                
            } else if (variavelParaAlterar == 'administrador') {
        
                cy.api({
        
                    method: 'PUT',
                    url: `/usuarios/${id}`,
                    body: {
                        nome: respBusca.body.nome,
                        email: respBusca.body.email,
                        password: respBusca.body.password,
                        administrador: valorDaVariavel.administrador
                    }
            
                })
                
            } 

        })




    
})