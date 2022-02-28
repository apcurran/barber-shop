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

    it("displays all 3 barber employees", () => {
        cy.get(".shop-staff__employees-container")
            .children()
            .should("have.length", 3);
    });
});