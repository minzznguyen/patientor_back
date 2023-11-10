import diagnoseEntry from "../../data/diagnoses";
import { Diagnose } from "../types";

export const getDiagnoseEntry = (): Diagnose[] => {
  return diagnoseEntry;
};

