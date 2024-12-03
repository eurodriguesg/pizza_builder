
# Aplicação do Padrão Builder para Criação de Pizzas

## Objetivo

O objetivo deste projeto é implementar o padrão de projeto **Builder** para criar objetos do tipo **Pizza**. Ele permite a construção de diferentes tipos de pizzas, com características configuráveis como tamanho, tipo de massa e ingredientes. Além disso, utiliza um **Diretor** para definir receitas predefinidas.

---

## Descrição do Problema

Uma pizzaria precisa de um sistema que permita configurar diferentes tipos de pizzas com características específicas. Algumas pizzas seguem receitas padrão, enquanto outras podem ser personalizadas pelo cliente.

### Requisitos

1. Cada pizza pode ter:
   - **Tamanho**: pequena, média ou grande;
   - **Tipo de massa**: tradicional, fina ou recheada;
   - **Lista de ingredientes opcionais**.

2. Pizzas predefinidas:
   - **Pizza Margherita**
     - Tamanho: grande;
     - Massa: fina;
     - Ingredientes: Queijo, Tomate, Manjericão.
   - **Pizza Pepperoni**
     - Tamanho: média;
     - Massa: tradicional;
     - Ingredientes: Queijo, Pepperoni.

3. Personalização:
   - O cliente deve poder criar uma pizza personalizada, escolhendo:
     - Tamanho;
     - Tipo de massa;
     - Ingredientes adicionais.

---

## Estrutura do Projeto

```
src/
├── server.ts
├── controllers/
│   └── Pizza.controller.ts
├── directors/
│   └── PizzaDirector.ts
├── builders/
│   ├── MargheritaPizzaBuilder.ts
│   ├── PepperoniPizzaBuilder.ts
│   ├── PizzaBuilder.ts
├── models/
│   └── Pizza.model.ts
└── routes/
    └── Pizza.routes.ts
```

---

## Documentação da API

### Rotas

#### **POST /api/pizzas/:type**
Cria uma pizza predefinida (Margherita ou Pepperoni).

- **Parâmetros de URL:**
  - `type`: Tipo de pizza (`margherita` ou `pepperoni`).

- **Resposta de Sucesso:**
  ```json
  {
    "pizza": {
      "size": "Grande",
      "dough": "Fina",
      "toppings": ["Queijo", "Tomate", "Manjericão"]
    }
  }
  ```

- **Resposta de Erro:**
  ```json
  {
    "message": "Tipo de pizza inválido."
  }
  ```

#### **POST /api/pizzas/custom**
Cria uma pizza personalizada.

- **Corpo da Requisição:**
  ```json
  {
    "size": "Grande",
    "dough": "Recheada",
    "toppings": ["Queijo", "Tomate", "Manjericão", "Bacon"]
  }
  ```

- **Resposta de Sucesso:**
  ```json
    {
        "pizza": {
            "size": "Grande",
            "dough": "Fina",
            "toppings": [
            "Queijo",
            "Tomate",
            "Frango",
            "Catupiry",
            "Batata Palha"
            ]
        }
    }
  ```

---

## Como Executar

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/eurodriguesg/pizza_builder.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

4. O servidor estará disponível em `http://localhost:<PORTA>`.

---

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.