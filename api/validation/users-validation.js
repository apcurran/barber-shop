"use strict";

const Joi = require("joi");

function signupValidation(data) {
    const schema = Joi.object({
        first_name: Joi
                .string()
                .trim()
                .required(),
        last_name: Joi
                .string()
                .trim()
                .required(),
        phone_number: Joi
                .string()
                .trim()
                .required(),
        email: Joi
                .string()
                .trim()
                .min(4)
                .email()
                .required(),
        password: Joi
                .string()
                .trim()
                .min(6)
                .required(),
        repeat_password: Joi
                .ref("password")
    })
        .with("password", "repeat_password");

    return schema.validateAsync(data);
}

function adminSignupValidation(data) {
    const schema = Joi.object({
        email: Joi
                .string()
                .trim()
                .min(4)
                .email()
                .required(),
        password: Joi
                .string()
                .trim()
                .min(6)
                .required(),
        repeat_password: Joi
                .ref("password"),
        admin_secret: Joi
                .string()
                .required()
    })
        .with("password", "repeat_password");

    return schema.validateAsync(data);
}

function loginValidation(data) {
    const schema = Joi.object({
        email: Joi
                .string()
                .trim()
                .min(4)
                .email()
                .required(),
        password: Joi
                .string()
                .trim()
                .min(6)
                .required()
    });

    return schema.validateAsync(data);
}

module.exports = {
    signupValidation,
    adminSignupValidation,
    loginValidation
};