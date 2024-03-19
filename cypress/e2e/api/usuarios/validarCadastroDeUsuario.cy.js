import { faker } from '@faker-js/faker'


describe('validarCadastroDeUsuarios', () => {


    it('cadastrarUsuarioComSucesso', () => {


        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(201)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.message).to.equal('Cadastro realizado com sucesso')
                expect(responseCadastrar.body._id).is.not.null
            })
    })


    it('cadastrarUsuarioComEmailJaCadastrado', () => {


        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(201)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.message).to.equal('Cadastro realizado com sucesso')
                expect(responseCadastrar.body._id).is.not.null

            cy.api_cadastrarUsuario(dadosUsuario)
                .then(responseCadastrar => {
                    expect(responseCadastrar.status).to.equal(400)
                    expect(responseCadastrar.body).is.not.null
                    expect(responseCadastrar.body.message).to.equal('Este email já está sendo usado')
                })
            })

        
    })



    it('cadastrarUsuarioSemNome', () => {


        const dadosUsuario = {
            nome: '',
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(400)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.nome).to.equal('nome não pode ficar em branco')
            })
    })


    it('cadastrarUsuarioSemEmail', () => {


        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: '',
            password: faker.internet.password(),
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(400)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.email).to.equal('email não pode ficar em branco')
            })
    })


    it('cadastrarUsuarioSemSenha', () => {


        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: '',
            administrador: 'true'
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(400)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.password).to.equal('password não pode ficar em branco')
            })
    })


    it('cadastrarUsuarioSemPreencherAdministrador', () => {


        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: ''
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(400)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.administrador).to.equal("administrador deve ser 'true' ou 'false'")
            })
    })


    it('cadastrarUsuarioComCamposEmBranco', () => {


        const dadosUsuario = {
            nome: '',
            email:'',
            password: '',
            administrador: ''
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(400)
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.nome).to.equal('nome não pode ficar em branco')
                expect(responseCadastrar.body.email).to.equal('email não pode ficar em branco')
                expect(responseCadastrar.body.password).to.equal('password não pode ficar em branco')
                expect(responseCadastrar.body.administrador).to.equal("administrador deve ser 'true' ou 'false'")
            })
    })


    it('cadastrarUsuarioSemPassarBody', () => {

        cy.api_cadastrarUsuarioSemBody()
            .then(responseCadastrar => {
                expect(responseCadastrar.status).to.equal(400)
                expect(responseCadastrar.duration).is.not.null
                expect(responseCadastrar.body).is.not.null
                expect(responseCadastrar.body.nome).to.equal('nome é obrigatório')
                expect(responseCadastrar.body.email).to.equal('email é obrigatório')
                expect(responseCadastrar.body.password).to.equal('password é obrigatório')
                expect(responseCadastrar.body.administrador).to.equal('administrador é obrigatório')
            })
    })

    
})