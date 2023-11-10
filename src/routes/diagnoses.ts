import express from "express";
import { getDiagnoseEntry } from "../services/diagnoseService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(getDiagnoseEntry());
});

export default router;
