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
    return imcValue.toFixed(2);
};

function imcStats(value) {
    const imc = document.createElement('p');
    imc.classList.add('imc');
    const stats = document.createElement('h2');
    imc.classList.add('stats');
    const desc = document.createElement('p');
    imc.classList.add('desc');
    
    const img_abaixo_peso = document.createElement('img');
    img_abaixo_peso.src = './assets/images/abaixo_peso.png';
    img_abaixo_peso.classList.add('peso');

    const img_normal_peso = document.createElement('img');
    img_normal_peso.src = './assets/images/normal_peso.png';
    img_normal_peso.classList.add('peso');

    const img_sobrepeso_peso = document.createElement('img');
    img_sobrepeso_peso.src = './assets/images/sobrepeso_peso.png';
    img_sobrepeso_peso.classList.add('peso');

    const img_obesidade_1 = document.createElement('img');
    img_obesidade_1.src = './assets/images/obesidade_1_peso.png';
    img_obesidade_1.classList.add('peso');

    const img_obesidade_2 = document.createElement('img');
    img_obesidade_2.src = './assets/images/obesidade_2_peso.png';
    img_obesidade_2.classList.add('peso');

    const img_obesidade_3 = document.createElement('img');
    img_obesidade_3.src = './assets/images/obesidade_3_peso.png';
    img_obesidade_3.classList.add('peso');

    if(value >= 12 && value <= 16.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_abaixo_peso);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Muito abaixo do peso';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Você está muito abaixo do peso ideal. Isso pode ser apenas uma cartiera pessoal, mas também pode ser um sinal de denutriçao ou de algum problema de saede. Caso esteja perdendo peso sem aparições motimo, procure um mécio.';
        resultPlace.appendChild(desc);
    } else if(value >= 17 && value <= 18.4) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_abaixo_peso);
        
        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Abaixo do peso';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Você está abaixo do peso ideal. Isso pode ser apenas uma cartiera pessoal, mas também pode ser um sinal de denutriçao ou de algum problema de saede. Caso esteja perdendo peso sem aparições motimo, procure um mécio.';
        resultPlace.appendChild(desc);
    } else if(value >= 18.5 && value <= 24.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_normal_peso);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Peso normal';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.';
        resultPlace.appendChild(desc);
    } else if(value >= 25 && value <= 29.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_sobrepeso_peso);
        
        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Sobrepeso';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico.';
        resultPlace.appendChild(desc);
    } else if(value >= 30 && value <= 34.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_obesidade_1);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Obesidade grau 1';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você';
        resultPlace.appendChild(desc);
    } else if(value >= 35 && value <= 40) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_obesidade_2);
        
        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Obesidade grau 2';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.';
        resultPlace.appendChild(desc);
    } else if(value > 40/*  && value !== Infinity */) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_obesidade_3);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Obesidade grau 3';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas está entre alto e muito alto. Busque ajuda de um profissional de saúde; não perca tempo.';
        resultPlace.appendChild(desc);
    } else {
        alert('Inválido');
        console.error('Inválido');
    };
};

start();