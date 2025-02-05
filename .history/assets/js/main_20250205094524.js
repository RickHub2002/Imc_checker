function start() {
    buttonResult.addEventListener('click', renderImc);
};

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
};

function imcStats(value) {
    value = parseFloat(value);
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
    
    if (value >= 12 && value <= 16.9) {
        imgSrc = images.abaixo_peso;
        statusText = 'Muito abaixo do peso';
        descText = 'Você está muito abaixo do peso ideal. Caso esteja perdendo peso sem motivo aparente, procure um médico.';
    } else if (value >= 17 && value <= 18.4) {
        imgSrc = images.abaixo_peso;
        statusText = 'Abaixo do peso';
        descText = 'Você está abaixo do peso ideal. Caso esteja perdendo peso sem motivo aparente, procure um médico.';
    } else if (value >= 18.5 && value <= 24.9) {
        imgSrc = images.normal_peso;
        statusText = 'Peso normal';
        descText = 'Parabéns, você está com o peso normal. Continue com hábitos saudáveis!';
    } else if (value >= 25 && value <= 29.9) {
        imgSrc = images.sobrepeso_peso;
        statusText = 'Sobrepeso';
        descText = 'Atenção! O sobrepeso pode causar problemas de saúde. Procure um médico.';
    } else if (value >= 30 && value <= 34.9) {
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
};

start();
