describe("My first test", function () {

    // Arrange - setup initial app state
    // - visit a web page
    it ("Visit the kitchen sink", function () {
        cy.visit("https://example.cypress.io");
    });

    // - query for an element
    it ("Query for the type element", function () {
        cy.contains("type");
    });

    // Act - take an action
    // - interact with that element
    it ("Click the type element", function () {
        cy.contains("type").click();
    });

    // Assert - make an assertion
    // - make an assertion about page content
    it ("Assert that the page url contains /commands/actions", function () {
        cy.url().should('include', "/commands/actions");
    });

    // - Gets, types and asserts
    it ("Gets, types and asserts", function () {
        cy.get(".action-email")
            .type("fakeemail@gmail.com")
            .should('have.value', 'fakeemail@gmail.com');
    });


})