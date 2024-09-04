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

    const {logradouro, bairro, uf, localidade} = await getCepValues(cep)
    streetInput.value = logradouro;
    neighborhoodInput.value = bairro;
    stateInput.value = uf;
    cityInput.value = localidade;
}
    