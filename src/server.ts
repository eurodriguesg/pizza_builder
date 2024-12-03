// src/server.ts
import os          from 'os';
import chalk       from 'chalk';
import express     from 'express';
import pizzaRoutes from './routes/Pizza.routes';

// Váriaveis para definições de rede
const startPort = 31063;  // Porta inicial
const host      = '0.0.0.0';

// Criando o app do Express
const app = express();

// Função para obter IPs locais
const getLocalIPs = (): string[] => {

    const interfaces = os.networkInterfaces();
    const ips: string[] = [];

    for (const iface of Object.values(interfaces)) {

        if (!iface) continue;
        for (const config of iface) {
            if (config.family === 'IPv4' && !config.internal) {
                ips.push(config.address);
            }
        }
    }
    return ips;
};

// _________________________________________________________________________________________________________________________________________________________

// Configurando middleware
app.use(express.json()); // Para requisições com `Content-Type: application/json`3

// _________________________________________________________________________________________________________________________________________________________

app.use('/api/pizzas', pizzaRoutes);

// _________________________________________________________________________________________________________________________________________________________

// Função para encontrar uma porta disponível
const findAvailablePort = async (port: number): Promise<number> => {

  return new Promise((resolve) => {

      const server = app.listen(port, host, () => {
          server.close(() => resolve(port));
      });
      server.on('error', () => {
          resolve(findAvailablePort(port + 1));
      });

  });
};

// _________________________________________________________________________________________________________________________________________________________

// Iniciar o servidor local
const startServer = async () => {

  const port = await findAvailablePort(startPort);

  app.listen(port, host, () => {
      console.log(chalk.greenBright('\n[SRV ✅] Servidor iniciado com sucesso!'));
      console.log(chalk.cyanBright('\nEndereços disponíveis:'));

      console.log(chalk.yellowBright(`- Local:    http://127.0.0.1:${port}`));
      const localIPs = getLocalIPs();

      for (const ip of localIPs) {
          console.log(chalk.yellowBright(`- Rede:     http://${ip}:${port}`));
      }

      console.log(chalk.blueBright('\nPressione CTRL+C para parar o servidor.\n'));
  });
};

// _________________________________________________________________________________________________________________________________________________________

// Verifique se está em ambiente de desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  //console.log(process.env.NODE_ENV)
  startServer();
}

// _________________________________________________________________________________________________________________________________________________________

// Exporta o app como handler para o Vercel
export default app;