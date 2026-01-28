/// <reference types="cypress" />

describe("services page", () => {
    beforeEach(() => {
        cy.visit("/services");
    });

    it("displays 4 services", () => {
        cy.get(".services-list-container").children().should("have.length", 4);
    });
});
