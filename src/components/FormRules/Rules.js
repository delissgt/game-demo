import { message } from "antd";

export const usernameRule = [
    {
        required: true,
        message: "Ingresa tu nombre de usuario",
        whitespace: true,
    },
];

export const enrollmentRule = [
    {
        require: true,
        message: "Ingresa tu matricula",
    },
    {
        pattern: /^[0-9]+$/,
        message: "No es una matricula valida",
    },
    () => ({
        validator(rule, value) {
            if (value != null && value.toString().length === 9) {
                return Promise.resolve();
            }
            return Promise.reject("La matricula debe de ser de 9 digitos");
        },
    }),
];

export const passwordRule = [
    {
        required: true,
        message: "Ingresa tu contraseña!",
    },
    () => ({
        validator(rule, value) {
            if (typeof value !== "undefined" && value.length >= 8) {
                return Promise.resolve();
            }
            return Promise.reject("La contreseña debe ser de minimo 8 caracteres");
        },
    }),
];

export const passwordAgainRule = [
    {
        required: true,
        message: "Repite tu contraseña!",
    },
    ({ getFieldValue }) => ({
        validator(rule, value) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
            }
            return Promise.reject("Las contraseñas que ingresaste no coinciden");
        },
    }),
];
