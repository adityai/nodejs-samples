describe("Testing blueshieldca site", function () {

    it ("Visit blueshieldca.com", function () {
        cy.visit("https://blueshieldca.com");
    });

    it ("Query for the login button", function () {
        cy.get("body > header > div.navigation-mobile.non-authenticated > header > nav > a");
    });

    it ("Click the login button", function () {
        cy.get("body > header > div.navigation-mobile.non-authenticated > header > nav > a").click()
    });

    it ("Enter user name", function () {
        cy.get("username").click()
    });
    //
    // it ("Assert that the page url contains /search?source", function () {
    //     cy.url().should('include', "/search?source");
    // });
    //
    // it("Assert that the first search result has the name Aditya Inapurapu", function () {
    //     cy.get("#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a > h3").contains("Aditya Inapurapu")
    //
    // })

    // // - Gets, types and asserts
    // it ("Gets, types and asserts", function () {
    //     cy.get(".action-email")
    //         .type("fakeemail@gmail.com")
    //         .should('have.value', 'fakeemail@gmail.com');
    // });


})