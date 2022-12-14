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
        
        desc.textContent = 'Voc?? est?? muito abaixo do peso ideal. Isso pode ser apenas uma cartiera pessoal, mas tamb??m pode ser um sinal de denutri??ao ou de algum problema de saede. Caso esteja perdendo peso sem apari????es motimo, procure um m??cio.';
        resultPlace.appendChild(desc);
    } else if(value >= 17 && value <= 18.4) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_abaixo_peso);
        
        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Abaixo do peso';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Voc?? est?? abaixo do peso ideal. Isso pode ser apenas uma cartiera pessoal, mas tamb??m pode ser um sinal de denutri??ao ou de algum problema de saede. Caso esteja perdendo peso sem apari????es motimo, procure um m??cio.';
        resultPlace.appendChild(desc);
    } else if(value >= 18.5 && value <= 24.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_normal_peso);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Peso normal';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Parab??ns, voc?? est?? com o peso normal. Recomendamos que mantenha h??bitos saud??veis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 por????es di??rias de frutas, verduras e legumes, al??m da pr??tica de exerc??cios f??sicos - pelo menos 150 minutos semanais.';
        resultPlace.appendChild(desc);
    } else if(value >= 25 && value <= 29.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_sobrepeso_peso);
        
        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Sobrepeso';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Aten????o! Alguns quilos a mais j?? s??o suficientes para que algumas pessoas desenvolvam doen??as associadas, como diabetes e hipertens??o. ?? importante rever seus h??bitos. Procure um m??dico.';
        resultPlace.appendChild(desc);
    } else if(value >= 30 && value <= 34.9) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_obesidade_1);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Obesidade grau 1';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Sinal de alerta! O excesso de peso ?? fator de risco para desenvolvimento de outros problemas de sa??de. A boa not??cia ?? que uma pequena perda de peso j?? traz benef??cios ?? sa??de. Procure um m??dico para definir o tratamento mais adequado para voc??';
        resultPlace.appendChild(desc);
    } else if(value >= 35 && value <= 40) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_obesidade_2);
        
        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Obesidade grau 2';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Sinal vermelho! Ao atingir este n??vel de IMC, o risco de doen??as associadas est?? entre alto e muito alto. Busque ajuda de um profissional de sa??de; n??o perca tempo.';
        resultPlace.appendChild(desc);
    } else if(value > 40/*  && value !== Infinity */) {
        resultPlace.innerHTML = '';

        resultPlace.appendChild(img_obesidade_3);

        imc.textContent = `Imc: ${value}`;
        resultPlace.appendChild(imc);
        
        stats.textContent = 'Obesidade grau 3';
        resultPlace.appendChild(stats);
        
        desc.textContent = 'Sinal vermelho! Ao atingir este n??vel de IMC, o risco de doen??as associadas est?? entre alto e muito alto. Busque ajuda de um profissional de sa??de; n??o perca tempo.';
        resultPlace.appendChild(desc);
    } else {
        alert('Inv??lido');
        console.error('Inv??lido');
    };
};

start();