/// <reference types="cypress" />

describe("user book appointment flow", () => {
    beforeEach(() => {
        cy.visit("/users/login");

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

    it("displays a friendly message after the user books an appointment", () => {
        // stub API req
        cy.intercept("POST", "/api/users/appointments", {
            statusCode: 201,
            body: {
                message: "New appointment created."
            }
        });
        
        // user logged in
        cy.contains("button", /Book Appointment/i)
            .click();

        cy.contains("button", /Create Appointment/i)
            .click();

        cy.contains("Great, you have been checked-in! The wait estimation is 15 minutes.")
            .should("exist");
    });
});