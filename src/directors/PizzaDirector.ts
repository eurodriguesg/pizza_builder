// src/directors/PizzaDirector.ts
import { PizzaBuilder } from "../builders/PizzaBuilder";

export class PizzaDirector {

  private builder: PizzaBuilder | null = null; // Inicializado como nulo

  setBuilder(builder: PizzaBuilder) {
    this.builder = builder;
  }

  private ensureBuilder(): PizzaBuilder {

    if (!this.builder) {
      throw new Error("Builder não foi configurado.");
    }

    return this.builder;
  }

  private buildPizza(size: string, dough: string, toppings: string[]): void {

    const builder = this.ensureBuilder();

    builder.reset().setSize(size).setDough(dough);

    toppings.forEach((topping) => builder.addTopping(topping));
  }
  
  makeMargheritaPizza(): void {

    this.buildPizza(
      "Grande", 
      "Fina", 
      ["Queijo", "Tomate", "Manjericão"]
    );
  }
  
  makePepperoniPizza(): void {
    this.buildPizza(
      "Média", 
      "Tradicional", 
      ["Queijo", "Pepperoni"]
    );
  }
  
}
