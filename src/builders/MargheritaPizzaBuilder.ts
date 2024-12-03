import { Pizza }        from "../models/Pizza.model";
import { PizzaBuilder } from "./PizzaBuilder";

export class MargheritaPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  reset(): this {
    this.pizza = new Pizza();
    return this;
  }

  setSize(size: string): this {
    const validSizes = ["pequena", "média", "grande"]; // Lista em minúsculas

    if (!validSizes.includes(size.toLowerCase())) {
      throw new Error(`Tamanho inválido: ${size}`);
    }

    this.pizza.size = size.charAt(0).toUpperCase() + size.slice(1).toLowerCase(); // Formata a string
    return this;
  }

  setDough(dough: string): this {
    const validDoughs = ["tradicional", "fina", "recheada"]; // Lista em minúsculas

    if (!validDoughs.includes(dough.toLowerCase())) {
      throw new Error(`Tipo de massa inválido: ${dough}`);
    }

    this.pizza.dough = dough.charAt(0).toUpperCase() + dough.slice(1).toLowerCase(); // Formata a string
    return this;
  }

  addTopping(topping: string): this {
    this.pizza.toppings.push(topping);
    return this;
  }

  getResult(): Pizza {
    return this.pizza;
  }
}
