
import { faker } from '@faker-js/faker'

describe ('editarUsuario', () =>{



    it('editarNomeUsuario', ()=>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: `${faker.datatype.boolean()}`
        }

        const novoNome = {
            nome: faker.name.firstName()
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(respCadastrar => {


             cy.api_editarUsuario(respCadastrar.body._id, 'nome', novoNome)
                .then(respEditar => {
                    expect(respEditar.status).to.equal(200)
                    expect(respEditar.body.message).to.equal('Registro alterado com sucesso')
                })


            })
        

    })


    it('editarEmailUsuario', ()=>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: `${faker.datatype.boolean()}`
        }

        const novoEmail = {
            email: faker.internet.email()
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(respCadastrar => {


             cy.api_editarUsuario(respCadastrar.body._id, 'email', novoEmail)
                .then(respEditar => {
                    expect(respEditar.status).to.equal(200)
                    expect(respEditar.body.message).to.equal('Registro alterado com sucesso')
                })


            })
        

    })



    it('editarPasswordUsuario', ()=>{

        const dadosUsuario = {
            nome: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: `${faker.datatype.boolean()}`
        }

        const novoPassword = {
            password: faker.internet.password()
        }

        cy.api_cadastrarUsuario(dadosUsuario)
            .then(respCadastrar => {


             cy.api_editarUsuario(respCadastrar.body._id, 'password', novoPassword)
                .then(respEditar => {
                    expect(respEditar.status).to.equal(200)
                    expect(respEditar.body.message).to.equal('Registro alterado com sucesso')
                })


            })
        

    })



    // it('editarAdministradorUsuario', ()=>{

    //     const dadosUsuario = {
    //         nome: faker.name.firstName(),
    //         email: faker.internet.email(),
    //         password: faker.internet.password(),
    //         administrador: `${faker.datatype.boolean()}`
    //     }

        

    //     cy.api_cadastrarUsuario(dadosUsuario)
    //         .then(respCadastrar => {

    //             // const novoAdministrador = dadosUsuario.administrador

    //         // if (dadosUsuario.administrador == false){
    //         //     novoAdministrador = true
    //         // }else{
    //         //     novoAdministrador = false
    //         // }


    //             cy.api_editarUsuario(respCadastrar.body._id, 'administrador', novoAdministrador)
    //                 .then(respEditar => {
    //                     expect(respEditar.status).to.equal(200)
    //                     expect(respEditar.body.message).to.equal('Registro alterado com sucesso')
    //                 })


    //         })
        

    // })



})