/// <reference types="cypress" />

describe("log in flow", () => {
    beforeEach(() => {
        localStorage.clear();

        cy.visit("/users/login");
    });

    it("logs a user into the application, and redirects to About Us page", () => {
        cy.get("form").within(() => {
            cy.get("input[type=email]")
                .type(Cypress.env("testUserEmail"));

            cy.get("input[type=password]")
                .type(Cypress.env("testUserPassword"));

            cy.get("button[type=submit]")
                .click();

            cy.url().should("eq", "http://localhost:3000/");
        });
    });

    // error paths
    it("gives an error message if the user email does not exist in db", () => {
        cy.get("form").within(() => {
            cy.get("input[type=email]")
                .type("not_there@gmail.com");

            cy.get("input[type=password]")
                .type(Cypress.env("testUserPassword"));

            cy.get("button[type=submit]")
                .click();

            cy.contains("p", "Email is not found")
                .should("exist");
        });
    });

    it("gives an error message if the user password is incorrect", () => {
        cy.get("form").within(() => {
            cy.get("input[type=email]")
                .type(Cypress.env("testUserEmail"));

            cy.get("input[type=password]")
                .type("fakepassword");

            cy.get("button[type=submit]")
                .click();

            cy.contains("p", "Invalid password")
                .should("exist");
        });
    });

    it("gives an error message if the user password is fewer than 6 characters long", () => {
        cy.get("form").within(() => {
            cy.get("input[type=email]")
                .type(Cypress.env("testUserEmail"));

            cy.get("input[type=password]")
                .type("short");

            cy.get("button[type=submit]")
                .click();

            cy.contains("p", /"password" length must be at least 6 characters long/i)
                .should("exist");
        });
    });
});