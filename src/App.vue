<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Authorization from "@/components/Authorization/Authorization";
export default {
  name: "App",
  components: {
    Authorization,
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(-30deg, #03a9f4 0%, #3a78b7 50%, #262626 50%, #607d8d 100%);
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}

</style>
