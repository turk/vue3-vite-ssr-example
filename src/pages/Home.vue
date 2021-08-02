<template>
  Home Page
</template>

<script>
import {defineComponent} from 'vue';
import {useHead} from '@vueuse/head';

export default defineComponent({
  setup() {
    useHead({
      title: 'Home Page',
      meta: [
        {
          name: 'description',
          content: 'Home Page Description',
        },
      ],
    });
  },
});
</script>

<style scoped>

</style>
