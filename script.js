/**
 * Script para o conversor de temperatura bidirecional
 * Implementa a conversão de Celsius para Fahrenheit e vice-versa
 */

// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Obtenção de referências aos elementos do DOM
    // Elementos de conversão de Celsius para Fahrenheit
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
    const convertToFahBtn = document.getElementById('convert-to-fah-btn');
    
    // Elementos de conversão de Fahrenheit para Celsius
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const celsiusOutput = document.getElementById('celsius-output');
    const convertToCelBtn = document.getElementById('convert-to-cel-btn');
    
    // Elementos de alternância entre os modos de conversão
    const celToFahBtn = document.getElementById('cel-to-fah');
    const fahToCelBtn = document.getElementById('fah-to-cel');
    const celToFahSection = document.getElementById('cel-to-fah-section');
    const fahToCelSection = document.getElementById('fah-to-cel-section');
    const formulaCelToFah = document.getElementById('formula-cel-to-fah');
    const formulaFahToCel = document.getElementById('formula-fah-to-cel');

    /**
     * Função para converter Celsius para Fahrenheit
     * Usa a fórmula: (°C × 9/5) + 32 = °F
     */
    function convertToFahrenheit() {
        // Verifica se o campo de entrada está vazio
        if (celsiusInput.value === '') {
            alert('Por favor, digite uma temperatura em Celsius');
            return;
        }

        // Converte o valor de entrada para número
        const celsius = parseFloat(celsiusInput.value);
        
        // Aplica a fórmula de conversão
        const fahrenheit = (celsius * 9/5) + 32;
        
        // Formata e exibe o resultado com 2 casas decimais
        fahrenheitOutput.value = fahrenheit.toFixed(2) + ' °F';
        
        // Adiciona uma animação sutil ao resultado
        fahrenheitOutput.style.transition = 'background-color 0.5s';
        fahrenheitOutput.style.backgroundColor = '#ffead6';
        setTimeout(() => {
            fahrenheitOutput.style.backgroundColor = '#fff1e6';
        }, 500);
    }

    /**
     * Função para converter Fahrenheit para Celsius
     * Usa a fórmula: (°F - 32) × 5/9 = °C
     */
    function convertToCelsius() {
        // Verifica se o campo de entrada está vazio
        if (fahrenheitInput.value === '') {
            alert('Por favor, digite uma temperatura em Fahrenheit');
            return;
        }

        // Converte o valor de entrada para número
        const fahrenheit = parseFloat(fahrenheitInput.value);
        
        // Aplica a fórmula de conversão
        const celsius = (fahrenheit - 32) * 5/9;
        
        // Formata e exibe o resultado com 2 casas decimais
        celsiusOutput.value = celsius.toFixed(2) + ' °C';
        
        // Adiciona uma animação sutil ao resultado
        celsiusOutput.style.transition = 'background-color 0.5s';
        celsiusOutput.style.backgroundColor = '#ffead6';
        setTimeout(() => {
            celsiusOutput.style.backgroundColor = '#fff1e6';
        }, 500);
    }

    /**
     * Função para alternar para o modo de conversão Celsius para Fahrenheit
     */
    function switchToCelToFah() {
        celToFahBtn.classList.add('active');
        fahToCelBtn.classList.remove('active');
        celToFahSection.classList.remove('hidden');
        fahToCelSection.classList.add('hidden');
        formulaCelToFah.classList.remove('hidden');
        formulaFahToCel.classList.add('hidden');
        celsiusInput.focus();
    }

    /**
     * Função para alternar para o modo de conversão Fahrenheit para Celsius
     */
    function switchToFahToCel() {
        fahToCelBtn.classList.add('active');
        celToFahBtn.classList.remove('active');
        fahToCelSection.classList.remove('hidden');
        celToFahSection.classList.add('hidden');
        formulaFahToCel.classList.remove('hidden');
        formulaCelToFah.classList.add('hidden');
        fahrenheitInput.focus();
    }

    // Adiciona evento de clique ao botão de conversão para Fahrenheit
    convertToFahBtn.addEventListener('click', convertToFahrenheit);

    // Permite conversão ao pressionar Enter no campo de entrada Celsius
    celsiusInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            convertToFahrenheit();
        }
    });

    // Limpa o campo de resultado quando o usuário começa a editar o valor de entrada Celsius
    celsiusInput.addEventListener('input', function() {
        fahrenheitOutput.value = '';
    });
    
    // Adiciona evento de clique ao botão de conversão para Celsius
    convertToCelBtn.addEventListener('click', convertToCelsius);

    // Permite conversão ao pressionar Enter no campo de entrada Fahrenheit
    fahrenheitInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            convertToCelsius();
        }
    });

    // Limpa o campo de resultado quando o usuário começa a editar o valor de entrada Fahrenheit
    fahrenheitInput.addEventListener('input', function() {
        celsiusOutput.value = '';
    });
    
    // Adiciona eventos para os botões de alternância
    celToFahBtn.addEventListener('click', switchToCelToFah);
    fahToCelBtn.addEventListener('click', switchToFahToCel);
    
    // Foca no campo de entrada quando a página carrega
    celsiusInput.focus();
});
