<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- Here we can override slots -->
    <!-- https://vitepress.dev/guide/extending-default-theme#layout-slots -->
    <!-- <template #aside-outline-before> My custom sidebar top content </template> -->
    <!-- <template #nav-bar-title-before>salut</template> -->

    <!-- <template #nav-bar-title-after>after</template> -->
  </Layout>
</template>
