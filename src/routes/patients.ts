import express from "express";
import {
  addPatient,
  getNonSensitivePatientEntry,
} from "../services/patientService";
import toNewPatientEntry from "../util";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getNonSensitivePatientEntry());
});

router.post("/", (req, res) => {
  console.log('sup');
  const newPatientEntry = toNewPatientEntry(req.body);
  const addedEntry = addPatient(newPatientEntry);

  res.send(addedEntry);
});

export default router;
