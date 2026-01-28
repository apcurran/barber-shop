/// <reference types="cypress" />

describe("log out flow", () => {
    it("logs a user out of the application", () => {
        // custom log in func
        cy.userLogin();

        cy.visit("/");

        cy.contains(/Log Out/i).click();

        cy.contains("Log In").should("exist");
    });
});
