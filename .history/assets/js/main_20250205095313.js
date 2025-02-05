function start() {
    buttonResult.addEventListener('click', renderImc);
    
    // Formatar altura automaticamente
    inputHeight.addEventListener("input", function () {
        let value = this.value.replace(/[^0-9]/g, ""); // Remove caracteres inválidos
        if (value.length > 3) {
            value = value.slice(0, 3); // Limita a 3 dígitos
        }
        if (value.length >= 2) {
            this.value = value.slice(0, 1) + "." + value.slice(1); // Coloca o ponto depois do primeiro número
        } else {
            this.value = value;
        }
    });

    // Limita caracteres no peso
    inputWeight.addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "").slice(0, 3); // Apenas números, até 3 dígitos
    });
}

function renderImc() {
    let weight = Number(inputWeight.value);
    let height = Number(inputHeight.value);
    
    console.log(weight);
    console.log(height);

    let imc = calculateImc(weight, height);
    console.log('imc', imc);
    
    let imcStatsResult = imcStats(imc);
    console.log('imcStats', imcStatsResult);
}

function calculateImc(weight, height) {
    let imcValue = weight / (height * height);
    console.log('imcValue', imcValue);
    return parseFloat(imcValue.toFixed(2));
}

function imcStats(value) {
    value = parseFloat(value);
    console.log('imc recebido', value);
    resultPlace.innerHTML = '';
    
    const imc = document.createElement('p');
    imc.classList.add('imc');
    const stats = document.createElement('h2');
    stats.classList.add('stats');
    const desc = document.createElement('p');
    desc.classList.add('desc');
    
    const images = {
        abaixo_peso: './assets/images/abaixo_peso.png',
        normal_peso: './assets/images/normal_peso.png',
        sobrepeso_peso: './assets/images/sobrepeso_peso.png',
        obesidade_1: './assets/images/obesidade_1_peso.png',
        obesidade_2: './assets/images/obesidade_2_peso.png',
        obesidade_3: './assets/images/obesidade_3_peso.png'
    };
    
    let imgSrc, statusText, descText;
    
    if (value >= 12 && value < 17) {
        imgSrc = images.abaixo_peso;
        statusText = 'Muito abaixo do peso';
        descText = 'Você está muito abaixo do peso ideal. Caso esteja perdendo peso sem motivo aparente, procure um médico.';
    } else if (value >= 17 && value < 18.5) {
        imgSrc = images.abaixo_peso;
        statusText = 'Abaixo do peso';
        descText = 'Você está abaixo do peso ideal. Caso esteja perdendo peso sem motivo aparente, procure um médico.';
    } else if (value >= 18.5 && value < 25) {
        imgSrc = images.normal_peso;
        statusText = 'Peso normal';
        descText = 'Parabéns, você está com o peso normal. Continue com hábitos saudáveis!';
    } else if (value >= 25 && value < 30) {
        imgSrc = images.sobrepeso_peso;
        statusText = 'Sobrepeso';
        descText = 'Atenção! O sobrepeso pode causar problemas de saúde. Procure um médico.';
    } else if (value >= 30 && value < 35) {
        imgSrc = images.obesidade_1;
        statusText = 'Obesidade grau 1';
        descText = 'Sinal de alerta! O excesso de peso é um risco à saúde. Busque orientação médica.';
    } else if (value >= 35 && value <= 40) {
        imgSrc = images.obesidade_2;
        statusText = 'Obesidade grau 2';
        descText = 'Sinal vermelho! O risco de doenças é alto. Procure um profissional de saúde.';
    } else if (value > 40) {
        imgSrc = images.obesidade_3;
        statusText = 'Obesidade grau 3';
        descText = 'Sinal vermelho! O risco de doenças é muito alto. Busque ajuda médica imediatamente.';
    } else {
        alert('Valor inválido');
        console.error('Inválido');
        return;
    }
    
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.classList.add('peso');
    resultPlace.appendChild(imgElement);
    
    imc.textContent = `IMC: ${value}`;
    resultPlace.appendChild(imc);
    
    stats.textContent = statusText;
    resultPlace.appendChild(stats);
    
    desc.textContent = descText;
    resultPlace.appendChild(desc);
}

start();
