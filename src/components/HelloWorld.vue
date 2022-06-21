<template>
  <b-container>
    <b-form-input v-model="group.name" placeholder="Enter group name"></b-form-input>
  <b-button variant="success" @click="group_create">Create Group</b-button>

  Test modif !!!
</b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      group: {}
    }
  },
  methods: {
    group_create(){
      console.log(this.group)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
