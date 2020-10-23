<template>
  <form @submit.prevent="onSubmit" class="form">
    <input
      class="form__input"
      type="text"
      placeholder="site id"
      v-model="value"
      v-on:input="onInput"
    />
    <button class="form__input form__input_button" type="submit" :disabled="disabled">
      войти
    </button>
    <span v-if="error.length" class="form__error">{{ error }}</span>
     <Loader v-bind:loading = "loading"/>
  </form>
</template>

<script>
import Loader from "../Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      value: "",
      error: "",
      disabled: false,
      loading: false
    };
  },
  methods: {
    onSubmit() {
      this.validate() ? this.fetchedID() : console.log("не валидно");
    },
    validate() {
      if (this.value.length !== 24) {
        this.error = "id сайта должен содержать 24 символа";
        this.disabled = true;
        return false;
      } else {
        this.error = "";
        this.disabled = false;
        return true;
      }
    },
    onInput() {
      this.error = "";
      this.disabled = false;
    },
    fetchedID() {
      this.loading = true
      fetch("https://track-api.leadhit.io/client/test_auth", {
        method: "GET",
        headers: {
          "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
          "Leadhit-Site-Id": this.value,
        },
      })
        .then((res) => res.json())
        .then((json) => {if (json.message === 'ok') {
            localStorage.setItem('leadhit-site-id', JSON.stringify(this.value))
            this.$router.push('/analytics')
        } else {
            this.error = 'неверный id'
        }})
        .catch((err) =>{this.error = 'ошибка сервера, попробуйте позже'})
        .finally(() => {this.loading = false});
        
    },
  },
};
</script>

<style scoped>
  .form {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .form__input {
    margin-bottom: 30px;
    width: 100%;
    outline: none;
    border: 1px solid rgba(255, 255,255, 0.2);
    background: transparent;
    padding: 8px 10px;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.2);
  }
  .form__input_button {
    background-color: #fff;
    color: #111;
    max-width: 100px;
    box-shadow: none;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .form__error {
    color:#BF3030	;
    font-weight: bold;
  }
</style>