// src/routes/Pizza.routes.ts
import { Router }          from "express";
import { PizzaController } from "../controllers/Pizza.controller";

const router = Router();

router.post("/:type",  PizzaController.createPredefinedPizza);
router.post("/custom", PizzaController.createCustomPizza);

export default router;
