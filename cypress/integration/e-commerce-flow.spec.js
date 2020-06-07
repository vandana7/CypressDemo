/// <reference types="Cypress" />

describe('MyFirstTestSuite', () => {


    it('TC-1| verify that we are able to add an item into our cart', () => {
        cy.visit('https://www.amazon.in/') //url of our e-commerce site.
        cy.get('#twotabsearchtextbox').type("milton thermosteel 1000ml hot and cold")  // search any particular item.
        cy.get('.nav-search-submit > .nav-input').click() //click on search button.
        cy.get('[data-asin="B00JDACH3Q"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image').click() //select a particular item to add in our cart
        cy.visit('https://www.amazon.in/Milton-Thermosteel-Flask-Litre-EC-TMS-FIS-0043_Silver/dp/B00JDACH3Q/ref=sr_1_4?crid=2KYVK3Y2BNCSS&dchild=1&keywords=milton+thermosteel+1000ml+hot+and+cold&qid=1590943453&sprefix=milton+%2Caps%2C383&sr=8-4')  //As this will open in new tab so to handle this scenario we need to visit that new tab.
        cy.get('#add-to-cart-button').click() // clicking on add to cart button to add this particular item in our cart.
        cy.get('#nav-cart').click() // go to cart by clicking on cart icon
        cy.get('.a-link-normal > .a-size-medium')
            .should('be.visible')
            .and('contain', 'Milton')  //include the title we added in our cart.
    })
})
