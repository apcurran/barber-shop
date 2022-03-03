/// <reference types="cypress" />

describe("user book appointment flow", () => {
    beforeEach(() => {
        // custom log in function
        cy.userLogin();

        cy.visit("/");
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