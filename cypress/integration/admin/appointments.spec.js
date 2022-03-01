/// <reference types="cypress" />

describe("user book appointment flow", () => {
    beforeEach(() => {
        localStorage.clear();

        cy.visit("/admin/login");

        cy.get("form").within(() => {
            cy.get("input[type=email]")
                .type(Cypress.env("adminEmail"));

            cy.get("input[type=password]")
                .type(Cypress.env("adminPassword"));

            cy.get("button[type=submit]")
                .click();

            // admin logged in
        });
    });

    it("displays a list of 2 user appointments", () => {
        // stub API req
        cy.intercept("GET", "/api/users/admin/appointments", {
            statusCode: 200,
            body: [
                {
                    "appointment_id": 63,
                    "first_name": "Bob",
                    "last_name": "Doe",
                    "phone_number": "555-555-5555",
                    "created_at": "2022-03-01T22:39:21.000Z",
                    "user_id": 7
                },
                {
                    "appointment_id": 64,
                    "first_name": "Emily",
                    "last_name": "Smith",
                    "phone_number": "777-777-7777",
                    "created_at": "2022-03-01T22:39:21.000Z",
                    "user_id": 8
                }
            ]
        });

        cy.get(".appointments-list")
            .children()
            .should("have.length", 2);
    });
});