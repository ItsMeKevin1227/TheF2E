<template lang="pug">
  #app
    NavBar
    TodoInput
    TodoList
</template>
<script>
import NavBar from './components/NavBar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default {
  components: {
    NavBar,
    TodoInput,
    TodoList,
  },
};
</script>
<style>
* {
  font-family: Roboto-Medium;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
}
li {
  list-style: none;
}
#app {
  width: 1024px;
  min-height: 1024px;
  background-color: #e1e1e1;
  margin: 0 auto;
}
</style>
