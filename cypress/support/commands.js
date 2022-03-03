/// <reference types="cypress" />

Cypress.Commands.add("userLogin", () => {
    cy.request({
        method: "POST",
        url: "http://localhost:3000/api/users/login",
        body: {
            email: Cypress.env("testUserEmail"),
            password: Cypress.env("testUserPassword")
        }
    })
    .then((response) => {
        const { accessToken } = response.body;

        window.localStorage.setItem("token", accessToken);
    });
});
