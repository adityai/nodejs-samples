describe("My first test", function () {

    // Arrange - setup initial app state
    // - visit a web page
    it ("Visit google.com", function () {
        cy.visit("https://www.google.com");
    });

    // - query for an element
    it ("Query for the search text box", function () {
        cy.get("input.gLFyf.gsfi");
    });

    // Act - take an action
    // - interact with that element
    it ("Type a search string", function () {
        cy.get("input.gLFyf.gsfi").type("Aditya Inapurapu");
    });

    it ("Click the search button", function () {
        cy.get("#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.UUbT9 > div.aajZCb > div.VlcLAe > center > input.gNO89b").click();
    });

    // Assert - make an assertion
    // - make an assertion about page content
    it ("Assert that the page url contains /search?source", function () {
        cy.url().should('include', "/search?source");
    });

    it("Assert that the first search result has the name Aditya Inapurapu", function () {
        cy.get("#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a > h3").contains("Aditya Inapurapu")

    })

    // // - Gets, types and asserts
    // it ("Gets, types and asserts", function () {
    //     cy.get(".action-email")
    //         .type("fakeemail@gmail.com")
    //         .should('have.value', 'fakeemail@gmail.com');
    // });


})