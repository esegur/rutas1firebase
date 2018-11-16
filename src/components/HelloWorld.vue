<template>
  <div class="hello">
    <h2>HELLO WORLD!!!!!</h2>
    <div style="margin:2rem 20rem 0">
      <p>RUTA PROTEGIDA POR USUARIO Y CONTRASEÑA</p>
    </div>
    <el-button @click="logout">salir</el-button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(()=> this.$router.replace('login') )
      .catch(function(error) {
        // An error happened.
      });
    }
  }
}
</script>
