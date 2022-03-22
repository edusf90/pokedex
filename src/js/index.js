const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    const cardPokemonAberto = document.querySelector('.open')
    cardPokemonAberto.classList.remove('open')

    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCardPokemonParaAbrir = 'card-' + idPokemonSelecionado

    const cardPokemonParaAbrir = document.getElementById(
      idDoCardPokemonParaAbrir
    )
    cardPokemonParaAbrir.classList.add('open')

    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
  })
})
