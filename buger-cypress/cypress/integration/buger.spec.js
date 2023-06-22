    /// <reference types='cypress' />

    describe ('Buger', () => {
    it ('cadastro com sucesso de um entregador', () => {
        cy.visit('https://buger-eats.vercel.app/');
        cy.get('[href="/deliver"]').click()
        cy.get('[name="name"]').type("Tamires")
        cy.get('[name="cpf"]').type("93355677834")
        cy.get('[name="email"]').type("tamires.testa@email.com")
        cy.get('[name="whatsapp"]').type("11992283637")
        cy.get('[name="postalcode"]').type("02675071")
        cy.get('[name="address-number"]').type("565")
        cy.get('[name="address-details"]').type("Ao lado da igreja")
        cy.contains('Moto').click() 
        
        cy.get('input[type="file"]')
        .as('fileInput')
        .attachFile('cnh_file.jpg')

        cy.get('button[type="submit"]').click() 


    });

    it ('cadastro sem sucesso de um entregador (CPF invalido)', () => {

        cy.visit('https://buger-eats.vercel.app/');
        cy.get('[href="/deliver"]').click()
        cy.get('[name="name"]').type("Tamires")
        cy.get('[name="cpf"]').type("933556778")
        cy.get('[name="email"]').type("tamires.testa@email.com")
        cy.get('[name="whatsapp"]').type("11992283637")
        cy.get('[name="postalcode"]').type("02675071")
        cy.get('[name="address-number"]').type("565")
        cy.get('[name="address-details"]').type("Ao lado da igreja")
        cy.contains('Moto').click() 

        cy.get('input[type="file"]')
        .as('fileInput')
        .attachFile('cnh_file.jpg')

        cy.get('button[type="submit"]').click() 

        cy.wait(3000)

        cy.log("vai logar")
        
        cy.get(".field").find('.alert-error').invoke('text').then((text) => {
            if (expect(text.trim()).equal('Oops! CPF inválido')){
                cy.log(text)
                throw new Error("Teste de validação do campo de CPF falhou!")
            }
        });

    });

});