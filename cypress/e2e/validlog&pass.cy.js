import * as data from "../helpers/default_data.json"


describe('проверка авторизации', function () {
    beforeEach('Начало теста', function () {
        cy.visit('/');
                  });

    it('1 верный логин ипароль', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type(data.password); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('2 Логика восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('foka0205@yandex.mw');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('3 верный логин и не верныйпароль', function () {
        cy.get('#mail').type(data.login);
        cy.get('#pass').type('passvordFalse'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('4 Неверный логин и верный пароль', function () {
        cy.get('#mail').type('german@dolniko.ru');
        cy.get('#pass').type(data.password); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('5 Нет знака @', function () {
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type(data.password); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('6 Строчные буквы в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type(data.password); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})
})