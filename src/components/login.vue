<template>
  <div>
    <div style="margin:2rem 20rem 0">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Usuario">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="Contraseña">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
      <pre>
        {{$data}}
      </pre>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password:''
      }
    }
  },
  methods:{
    onSubmit() {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.form.email, this.form.password)
      .then((user)=>{
        this.$router.replace('helloWorld')
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error)
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>


