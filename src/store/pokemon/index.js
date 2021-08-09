import PokemonService from '/src/services/http/PokemonService.js';

export default {
    namespaced: true,
    state: {
        pokemons: [],
        pokemon: {
            name: null,
            height: null,
            base_experience: null,
            weight: null,
        },
    },
    mutations: {
        SET_STATE(state, payload) {
            Object.assign(state, {
                ...payload,
            });
        },
    },
    actions: {
        async FETCH_POKEMONS({commit}) {
            const res = await PokemonService.fetchPokemons();
            const data = [];

            await res.results.forEach((item) => {
                data.push(
                    {
                        id: parseInt(item.url.split('/')[6]),
                        name: item.name,
                    },
                )
            })
            await commit('SET_STATE', {
                pokemons: data,
            });
        },

        async FETCH_POKEMON({commit}, id) {
            const res = await PokemonService.fetchPokemon(id);
            console.log(res.name)
            await commit('SET_STATE', {
                pokemon: {
                    name: res.name,
                    height: res.height,
                    base_experience: res.base_experience,
                    weight: res.weight,
                },
            });
        },
    },
    getters: {
        pokemons: state => state.pokemons,
        pokemon: state => state.pokemon,
    },
};
