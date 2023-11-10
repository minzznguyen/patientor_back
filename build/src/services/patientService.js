"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNonSensitivePatientEntry = exports.addPatient = exports.getPatientEntry = void 0;
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const getPatientEntry = () => {
    return patients_1.default;
};
exports.getPatientEntry = getPatientEntry;
const addPatient = (entry) => {
    const newPatientEntry = Object.assign({ 
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        id: (0, uuid_1.v4)() }, entry);
    patients_1.default.push(newPatientEntry);
    return newPatientEntry;
};
exports.addPatient = addPatient;
const getNonSensitivePatientEntry = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
exports.getNonSensitivePatientEntry = getNonSensitivePatientEntry;
