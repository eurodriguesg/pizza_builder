// src/builders/PepperoniPizzaBuilder.ts
import { Pizza }        from "../models/Pizza.model";
import { PizzaBuilder } from "./PizzaBuilder";

export class PepperoniPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  reset(): this {
    this.pizza = new Pizza();
    return this;
  }

  setSize(size: string): this {
    this.pizza.size = size;
    return this;
  }

  setDough(dough: string): this {
    this.pizza.dough = dough;
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
