const readline = require('readline');

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para solicitar entradas do usuário
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function calculateFuel() {
    try {
        // Solicita a distância em quilômetros
        const distance = parseFloat(await askQuestion("Informe a distância em km: "));
        if (isNaN(distance) || distance <= 0) {
            console.log("Por favor, insira um valor válido para a distância.");
            rl.close();
            return;
        }
        
        // Solicita a eficiência de combustível do veículo (km por litro)
        const efficiency = parseFloat(await askQuestion("Informe o consumo do veículo (km por litro): "));
        if (isNaN(efficiency) || efficiency <= 0) {
            console.log("Por favor, insira um valor válido para a eficiência do veículo.");
            rl.close();
            return;
        }
        
        // Solicita o valor do litro de combustível
        const fuelPrice = parseFloat(await askQuestion("Informe o valor do litro de combustível (R$): "));
        if (isNaN(fuelPrice) || fuelPrice <= 0) {
            console.log("Por favor, insira um valor válido para o preço do combustível.");
            rl.close();
            return;
        }
        
        // Calcular o consumo de combustível em litros
        const fuelConsumed = distance / efficiency;
        
        // Calcular o custo total
        const totalCost = fuelConsumed * fuelPrice;
        
        // Exibir o resultado no console
        console.log(`Para percorrer ${distance} km, você vai consumir aproximadamente ${fuelConsumed.toFixed(2)} litros de combustível. O custo total será de R$ ${totalCost.toFixed(2)}.`);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    } finally {
        rl.close();
    }
}

// Chama a função para iniciar o cálculo
calculateFuel();
