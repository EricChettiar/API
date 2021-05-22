/// <reference types="Cypress" />
describe('My Briq Test Suite', function()
{
    before(function () {
        cy.fixture('example').then(function (data) {
           this.data = data
        })
     })
    it('My First Test Case', function()
     {
        //DropDown
        cy.visit(this.data.mainpage)
        cy.get(':nth-child(11) > a').click()
        cy.get('#dropdown').select('Option 2').should('have.value','2')

        //CheckBoxes
        cy.visit(this.data.mainpage)
        cy.get(':nth-child(6) > a').click()
        cy.get('input[type="checkbox"]').check()

        //Add and Remove Elements
        cy.visit(this.data.mainpage)
        cy.get('ul > :nth-child(2) > a').click()
        cy.get('[onclick="addElement()"]').click()
        cy.get('[onclick="addElement()"]').click()
        cy.get('[onclick="addElement()"]').click()
        cy.get('#elements > :nth-child(1)').click()
        cy.get('#elements > :nth-child(1)').click()
        cy.get('#elements > :nth-child(1)').click()

        //Forgot Password
        cy.visit(this.data.mainpage)
        cy.get(':nth-child(20) > a').click()
        cy.get('#email').type(this.data.email).should('have.value', this.data.email)
        cy.wait(2000)
        cy.get('#form_submit').click()

        //HomePage
        cy.visit(this.data.mainpage)
        cy.get('.heading').then(function(element)
        {
           const actualText=element.text()
           expect(actualText.includes('Welcome to the-internet')).to.be.true
        })
    })
})