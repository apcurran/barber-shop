/// <reference types="cypress" />

describe("user book appointment flow", () => {
    beforeEach(() => {
        // stub API req
        cy.intercept("GET", "/api/users/admin/appointments", {
            statusCode: 200,
            body: [
                {
                    appointment_id: 63,
                    first_name: "Bob",
                    last_name: "Doe",
                    phone_number: "555-555-5555",
                    created_at: "2022-03-01T22:39:21.000Z",
                    user_id: 7,
                },
                {
                    appointment_id: 64,
                    first_name: "Emily",
                    last_name: "Smith",
                    phone_number: "777-777-7777",
                    created_at: "2022-03-01T22:39:21.000Z",
                    user_id: 8,
                },
            ],
        });
        // custom log in func
        cy.adminLogin();

        cy.visit("/admin/dashboard/appointments");
    });

    it("displays a list of 2 user appointments", () => {
        cy.url().should(
            "eq",
            "http://localhost:3000/admin/dashboard/appointments",
        );

        cy.get(".appointments-list").children().should("have.length", 2);
    });

    it("removes an appointment from the list when the 'Done' btn is clicked", () => {
        // stub API req
        cy.intercept("DELETE", "/api/users/admin/appointments/64", {
            statusCode: 200,
            body: {
                message: "Appointment deleted.",
            },
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        });

        // delete appointment
        cy.get(".appointments-list")
            .children()
            .last()
            .contains("button", /Done/i)
            .click();

        // assert new state
        cy.get(".appointments-list").children().should("have.length", 1);

        cy.contains("p", "Emily Smith").should("not.exist");

        cy.contains("p", "Bob Doe").should("exist");
    });
});
