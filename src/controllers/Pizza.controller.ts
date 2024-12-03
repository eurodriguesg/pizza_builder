// src/controllers/Pizza.controller.ts
import { Request, Response }      from "express";
import { MargheritaPizzaBuilder } from "../builders/MargheritaPizzaBuilder";
import { PepperoniPizzaBuilder }  from "../builders/PepperoniPizzaBuilder";
import { PizzaDirector }          from "../directors/PizzaDirector";

export class PizzaController {

  static async createCustomPizza(req: Request, res: Response): Promise<void> {

    // console.log("[SRV-PIZZA 🟡] Recebido pedido de criação de pizza customizada:", req.body);
    const { size, dough, toppings } = req.body;

    const builder = new MargheritaPizzaBuilder();
    builder.reset()
      .setSize(size)
      .setDough(dough);

    toppings.forEach((topping: string) => builder.addTopping(topping));

    const pizza = builder.getResult();
    res.status(200).json({ pizza: pizza.display() });
  }
  

  static async createPredefinedPizza(req: Request, res: Response): Promise<void> {

    const { type } = req.params;
    const director = new PizzaDirector();
    let builder: MargheritaPizzaBuilder | PepperoniPizzaBuilder | undefined;

    if (type === "margherita") {

      builder = new MargheritaPizzaBuilder();
      director.setBuilder(builder);
      director.makeMargheritaPizza();

    } else if (type === "pepperoni") {

      builder = new PepperoniPizzaBuilder();
      director.setBuilder(builder);
      director.makePepperoniPizza();

    } else {
      // Força o retorno explícito como void, se necessário
      res.status(400).json({ message: "Tipo de pizza inválido." });
      return; // Adicione um return explícito para evitar execução posterior
    }

    if (!builder) {
      throw new Error("O builder não foi inicializado.");
    }

    const pizza = builder.getResult();
    res.status(200).json({ pizza: pizza.display() });
  }

}
