import patients from "../../data/patients";
import { Patient, NonSensitivePatient, NewPatientEntry } from "../types";
import { v4 as uuidv4 } from "uuid";

export const getPatientEntry = (): Patient[] => {
  return patients;
};

export const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    id: uuidv4() as string,
    ...entry,
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export const getNonSensitivePatientEntry = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
