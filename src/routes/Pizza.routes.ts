// src/routes/Pizza.routes.ts
import { Router }          from "express";
import { PizzaController } from "../controllers/Pizza.controller";

const router = Router();

router.post("/custom", PizzaController.createCustomPizza);
router.post("/:type",  PizzaController.createPredefinedPizza);

export default router;
