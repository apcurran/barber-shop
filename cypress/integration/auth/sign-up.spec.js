/// <reference types="cypress" />

describe("user sign up flow", () => {
    it("signs up a user as Bob Doe", () => {
        cy.visit("/users/signup");

        // stubbed API req for user sign up
        cy.intercept("POST", "/api/users/signup", {
            statusCode: 201,
            body: {
                message: "New user created."
            }
        });

        cy.get("form").within(() => {
            cy.get("input[id=first-name]")
                .type("Bob");

            cy.get("input[id=last-name]")
                .type("Doe");

            cy.get("input[id=phone-number]")
                .type("555-555-5555");

            cy.get("input[type=email]")
                .type(Cypress.env("testUserEmail"));

            cy.get("input[id=password]")
                .type(Cypress.env("testUserPassword"));

            cy.get("input[id=repeat-password]")
                .type(Cypress.env("testUserPassword"));

            cy.get("button[type=submit]")
                .click();

            cy.url().should("eq", "http://localhost:3000/users/login");
        });
    });
});