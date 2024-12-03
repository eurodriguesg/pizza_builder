export class Pizza {
  size: string = "";  // Inicialização padrão
  dough: string = ""; // Inicialização padrão
  toppings: string[] = [];

  display(): { size: string; dough: string; toppings: string[] } {
    return {
      size: this.size,
      dough: this.dough,
      toppings: this.toppings,
    };
  }
}