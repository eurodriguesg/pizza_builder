// src/builders/MargheritaPizzaBuilder.ts
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

    const validSizes = ["pequena", "média", "grande"];
    if (!validSizes.includes(size)) {
      throw new Error(`Tamanho inválido: ${size}`);
    }

    this.pizza.size = size;
    return this;
  }  

  setDough(dough: string): this {

    const validDoughs = ["tradicional", "fina", "recheada"];
    if (!validDoughs.includes(dough)) {
      throw new Error(`Tipo de massa inválido: ${dough}`);
    }
    
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
