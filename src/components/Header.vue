<template>

    <div class="containerHeader">
        <h1 class="title">CONTROLE GERAL</h1>
        <Menu size="40"/>
    </div>

  
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue';
export default {
name: 'HeaderMain',
components: {
    Menu,
}
}
</script>

<style>

.containerHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97.5%;
  background-color: #c8d6f6;
}

.title{
  font-size: 2rem;
  font-weight: bolder;
  color: #333;
  margin-left: 2.4rem;
  margin-top: 12px;
  align-self: flex-start;
}

</style>