import { faker } from '@faker-js/faker'



describe ('buscarUsuarioPorID', () =>{


    it.only('buscarComSucesso', ()=>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: `${faker.datatype.boolean()}`
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(201)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.message).to.equal('Cadastro realizado com sucesso')
                expect(responseCadastrar.body._id).is.not.null

                cy.api_buscarUsuarioPorId(responseCadastrar.body._id)
                    .then(respBusca => {
                        expect(respBusca.status).to.equal(200)
                        expect(respBusca.body).is.not.null
                        expect(respBusca.body._id).to.equal(responseCadastrar.body._id)
                        expect(respBusca.duration).is.not.null
                        expect(respBusca.size).is.not.null
                        expect(respBusca.headers).is.not.null
                    })

            })


    })


    it('buscarPorIdInexistente', () =>{

        const idFake = faker.datatype.uuid()

        cy.api_buscarUsuarioPorId(idFake)
            .then(respBusca =>{

                expect(respBusca.status).to.equal(400)
                expect(respBusca.body).is.not.null
                expect(respBusca.body.message).to.equal('Usuário não encontrado')
                expect(respBusca.duration).is.not.null
                expect(respBusca.size).is.not.null
                expect(respBusca.headers).is.not.null

            })
    })


    





})