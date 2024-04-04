import { faker } from '@faker-js/faker'


describe('excluirUsuario', () =>{

    it('excluirComSucesso', () => {

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

                cy.api_excluirUsuario(responseCadastrar.body._id)
                    .then(respExcluirUsuario => {
                        expect(respExcluirUsuario.status).to.equal(200)
                        expect(respExcluirUsuario.body.message).to.equal('Registro excluído com sucesso')
                        expect(responseCadastrar.body).is.not.null

                    })
            })

    })



})

