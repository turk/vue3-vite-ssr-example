<template>
  <p>Name: {{pokemon.name}}</p>
  <p>Height: {{pokemon.height}}</p>
  <p>Weight: {{pokemon.weight}}</p>
  <p>base_experience: {{pokemon.base_experience}}</p>
</template>

<script>
import {computed, defineComponent} from 'vue';
import {useHead} from '@vueuse/head';
import {useStore} from "vuex";

export default defineComponent({
  serverPrefetch() {
    console.log(this.$route.params.id)
    return this.$store.dispatch('pokemon/FETCH_POKEMON', this.$route.params.id);
  },
  setup() {
    const store = useStore();
    const pokemon = computed(() => store.getters['pokemon/pokemon'])
    useHead({
      title: '',
      meta: [
        {
          name: 'description',
          content: '',
        },
      ],
    });

    return {
      pokemon,
    }
  },
});
</script>
