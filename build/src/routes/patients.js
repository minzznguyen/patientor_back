"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = require("../services/patientService");
const util_1 = __importDefault(require("../util"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send((0, patientService_1.getNonSensitivePatientEntry)());
});
router.post("/", (req, res) => {
    console.log('sup');
    const newPatientEntry = (0, util_1.default)(req.body);
    const addedEntry = (0, patientService_1.addPatient)(newPatientEntry);
    res.send(addedEntry);
});
exports.default = router;
