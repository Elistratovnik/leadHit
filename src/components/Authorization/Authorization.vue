<template>
  <div class="authorization">
    <h1 class="authorization__title">LeadHit</h1>
    <Form v-bind:loading = "loading"/>
  </div>
</template>

<script>
import Form from "./Form";
export default {
  components: {
    Form
  },
};
</script>

<style scoped>
.authorization {
  position: relative;
  padding: 50px;
  width: 360px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 0.2);
}
.authorization::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 5px;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 15%,
    transparent 50%,
    transparent 85%,
    rgba(255, 255, 255, 0.3) 100%
  );
}
.authorization__title {
  margin: 0;
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
</style>