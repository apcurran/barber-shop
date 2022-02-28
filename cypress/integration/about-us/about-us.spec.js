/// <reference types="cypress" />

describe("about us page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("displays the description text below 'Our Story' title", () => {
        cy.contains("h2", "Our Story")
            .next()
            .should("be.visible");
    });
});