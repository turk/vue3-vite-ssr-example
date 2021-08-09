import Client from '/src/services/axios/index';

const fetchPokemons = async () => {
    const response = await Client.get(`pokemon?offset=0&limit=20"`);

    return response.data;
};

const fetchPokemon = async (id) => {
    const response = await Client.get(`pokemon/${ id }/`);

    return response.data;
};

export default {
    fetchPokemons,
    fetchPokemon,
};
