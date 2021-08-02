<template>
  Post Page
</template>

<script>
import {defineComponent} from 'vue';
import {useHead} from '@vueuse/head';

export default defineComponent({
  setup() {
    useHead({
      title: 'Post Page',
      meta: [
        {
          name: 'description',
          content: 'Post Page Description',
        },
      ],
    });
  },
});
</script>

<style scoped>

</style>
