<template>
    <div class="Login">
      <div>{{ account/isLoggedIn }}</div>
      <form action="" @submit.prevent="">
        <input type="text" placeholder="Логин">
        <input type="password" placeholder="Пароль">
        <input type="submit" placeholder="Войти">
      </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: mapGetters(["account/isLoggedIn"])
};
</script>
