<template>
  Pokemons:
  <ul>
    <li v-for="pokemon in pokemons">
      <router-link
          :to="{ name: 'pokemonDetail', params: { id: pokemon.id }}"
      >
        {{ pokemon.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {computed, defineComponent, onBeforeMount} from 'vue';
import {useHead} from '@vueuse/head';
import {useStore} from 'vuex'

export default defineComponent({
  serverPrefetch() {
    return this.$store.dispatch('pokemon/FETCH_POKEMONS');
  },
  setup() {
    const store = useStore()
    const pokemons = computed(() => store.getters['pokemon/pokemons'])

    onBeforeMount(() => {
      store.dispatch('pokemon/FETCH_POKEMONS')
    });
    useHead({
      title: 'Home Page',
      meta: [
        {
          name: 'description',
          content: 'Home Page Description',
        },
      ],
    });

    return {
      pokemons,
    }
  },
});
</script>
