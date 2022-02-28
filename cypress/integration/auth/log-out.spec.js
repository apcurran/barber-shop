/// <reference types="cypress" />

describe("log out flow", () => {
    beforeEach(() => {
        localStorage.clear();

        cy.visit("/users/login");
    });

    it("logs a user out of the application", () => {
        cy.get("form").within(() => {
            cy.get("input[type=email]")
                .type(Cypress.env("testUserEmail"));

            cy.get("input[type=password]")
                .type(Cypress.env("testUserPassword"));

            cy.get("button[type=submit]")
                .click();
        });

        cy.contains(/Log Out/i)
            .click();

        cy.contains("Log In")
            .should("exist");
    });
});