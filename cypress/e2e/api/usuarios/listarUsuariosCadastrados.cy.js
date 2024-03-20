
import { faker } from '@faker-js/faker'


describe('listarUsuariosCadastrados', () => {

    const dadosUsuario = {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'true'
    }


    it('listarTodosUsuarios', () => {

        cy.api_listarUsuariosCadastrados('', '')
            .then(responseListar => responseListar.body.usuarios.forEach(respForEach =>{

                expect(responseListar.status).to.equal(200)
                expect(responseListar.body).is.not.null
                expect(responseListar.body.quantidade).is.not.null
                expect(respForEach.nome).is.not.null
                expect(respForEach.email).is.not.null
                expect(respForEach.password).is.not.null
                expect(respForEach.administrador).is.not.null
                expect(respForEach._id).is.not.null



            }))

    })


    it('listarUsuarioPorId', () =>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(respCadastro => {

            cy.api_listarUsuariosCadastrados('id', respCadastro.body._id)
                .then(respLista => respLista.body.usuarios.forEach(respListaForEach =>{

                    expect(respLista.status).to.equal(200)
                    expect(respLista.body).is.not.null
                    expect(respLista.body.quantidade).is.not.null
                    expect(respListaForEach.nome).is.not.null
                    expect(respListaForEach.email).is.not.null
                    expect(respListaForEach.password).is.not.null
                    expect(respListaForEach.administrador).is.not.null
                    expect(respListaForEach._id).is.not.null
                    expect(respListaForEach._id).to.equal(respCadastro.body._id)
                }))



            })
    })


    it('listarUsuarioPorNome', () =>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)

        cy.api_listarUsuariosCadastrados('nome', dadosUsuario.nome)
            .then(respLista => respLista.body.usuarios.forEach(respListaForEach =>{

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).is.not.null
                expect(respListaForEach.nome).is.not.null
                expect(respListaForEach.email).is.not.null
                expect(respListaForEach.password).is.not.null
                expect(respListaForEach.administrador).is.not.null
                expect(respListaForEach._id).is.not.null
                expect(respListaForEach.nome).to.equal(dadosUsuario.nome)
            }))
    })



    it('listarUsuarioPorEmail', () =>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
        
        cy.api_listarUsuariosCadastrados('email', dadosUsuario.email)
            .then(respLista => respLista.body.usuarios.forEach(respListaForEach =>{

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).is.not.null
                expect(respListaForEach.nome).is.not.null
                expect(respListaForEach.email).is.not.null
                expect(respListaForEach.password).is.not.null
                expect(respListaForEach.administrador).is.not.null
                expect(respListaForEach._id).is.not.null
                expect(respListaForEach.email).to.equal(dadosUsuario.email)
            }))

    })




    it('listarUsuarioPorPassword', () =>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
        
        cy.api_listarUsuariosCadastrados('password', dadosUsuario.password)
            .then(respLista => respLista.body.usuarios.forEach(respListaForEach =>{

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).is.not.null
                expect(respListaForEach.nome).is.not.null
                expect(respListaForEach.email).is.not.null
                expect(respListaForEach.password).is.not.null
                expect(respListaForEach.administrador).is.not.null
                expect(respListaForEach._id).is.not.null
                expect(respListaForEach.password).to.equal(dadosUsuario.password)
            }))

    })



    it('listarUsuarioPorAdministrador', () =>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
        
        cy.api_listarUsuariosCadastrados('administrador', dadosUsuario.administrador)
            .then(respLista => respLista.body.usuarios.forEach(respListaForEach =>{

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).is.not.null
                expect(respListaForEach.nome).is.not.null
                expect(respListaForEach.email).is.not.null
                expect(respListaForEach.password).is.not.null
                expect(respListaForEach.administrador).is.not.null
                expect(respListaForEach._id).is.not.null
                expect(respListaForEach.administrador).to.equal(dadosUsuario.administrador)
            }))

    })



    it('listarUsuarioPorIdInexistente', () =>{

        const idInexistente = faker.datatype.uuid()

               
        cy.api_listarUsuariosCadastrados('id', idInexistente)
        
            .then(respLista => {

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).to.equal(0)


            })

    })



    it('listarUsuarioPorNomeInexistente', () =>{

        const nomeInexistente = faker.name.firstName()

               
        cy.api_listarUsuariosCadastrados('nome', nomeInexistente)
        
            .then(respLista => {

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).to.equal(0)


            })

    })



    it('listarUsuarioPorEmailInexistente', () =>{

        const emailInexistente = faker.internet.email()

               
        cy.api_listarUsuariosCadastrados('email', emailInexistente)
        
            .then(respLista => {

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).to.equal(0)


            })

    })



    it('listarUsuarioPorEmailInvalido', () =>{

        const emailInvalido = faker.name.firstName()

               
        cy.api_listarUsuariosCadastrados('email', emailInvalido)
        
            .then(respLista => {

                expect(respLista.status).to.equal(400)
                expect(respLista.body).is.not.null
                expect(respLista.body.email).to.equal('email deve ser um email válido')

            })

    })


    it('listarUsuarioPorPasswordInexistente', () =>{

        const passwordInexistente = faker.internet.password()

               
        cy.api_listarUsuariosCadastrados('password', passwordInexistente)
        
            .then(respLista => {

                expect(respLista.status).to.equal(200)
                expect(respLista.body).is.not.null
                expect(respLista.body.quantidade).to.equal(0)


            })

    })
    

    it('listarUsuarioPorAdministradorNaoBoolean', () =>{

        const administrador = faker.datatype.number()

               
        cy.api_listarUsuariosCadastrados('administrador', administrador)
        
            .then(respLista => {

                expect(respLista.status).to.equal(400)
                expect(respLista.body).is.not.null
                expect(respLista.body.administrador).to.equal("administrador deve ser 'true' ou 'false'")


            })

    })


    it('listarUsuarioPorAdministradorVazio', () =>{

               
        cy.api_listarUsuariosCadastrados('administrador', '')
        
            .then(respLista => {

                expect(respLista.status).to.equal(400)
                expect(respLista.body).is.not.null
                expect(respLista.body.administrador).to.equal("administrador deve ser 'true' ou 'false'")


            })

    })











})