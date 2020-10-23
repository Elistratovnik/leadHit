<template>
  <div class="analytics">
    <h1 class="analytics__title">Аналитика</h1>
    <router-link class="analytics__link" to="/">на страницу авторизации</router-link>
    <div class="analytics__chart chart">
        <h2 class="chart__title">Аналитика по визитам</h2>
        <Chart />
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";
export default {
  components: {
    Chart,
  },
  mounted() {
    const id = JSON.parse(localStorage.getItem("leadhit-site-id"));
    if (!id) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
  .analytics {
    width: 90%;
    color: white;
  }
  .analytics__title {
    text-align: center;
    margin-bottom: 50px;
  }
  .analytics__chart {
    display: flex;
    flex-direction: column;
  }
  .analytics__link {
    color: white;
  }
</style>