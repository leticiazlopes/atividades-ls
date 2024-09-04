const cepInput = document.querySelector('#cep')
const streetInput = document.querySelector('#street')
const neighborhoodInput = document.querySelector('#neighborhood')
const stateInput = document.querySelector('#state')
const cityInput = document.querySelector('#city')

//await chama o async; no get nao precisa especificar oS HEADERS para o fetch
async function getCepValues(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await response.json();
}

cepInput.onchange = async () => {
    const cep = cepInput.value

    const street = await getCepValues(cep);
    streetInput.value = street.logradouro;

    const neighborhood = await getCepValues(cep);
    neighborhoodInput.value = neighborhood.bairro;

    const state = await getCepValues(cep);
    stateInput.value = state.uf;

    const city = await getCepValues(cep);
    cityInput.value = city.localidade;
    
    //get na api

}
    