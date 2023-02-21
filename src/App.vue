<template>
  <v-app>
    <v-main>
      <MenuBar />
      <AsideBar/>
    </v-main>
  </v-app>
</template>
<script>
import AsideBar from './components/AsideBar.vue';
import MenuBar from './components/MenuBar.vue';
export default {
  name: 'App',
  components: {
    AsideBar,
    MenuBar,
},
  data: () => ({
    //
  }),
}
</script>
