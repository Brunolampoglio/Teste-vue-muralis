<template>
    <div id="app" class="main">
      <NavigationBarVue />
        <RegistrationClient/>
        <router-view/>
      </div>
  
</template>

<script>

import RegistrationClient from '../components/Registration.vue'
import NavigationBarVue from '../components/NavigationBar.vue'
export default {
    name: 'IngressantesClient',
    components: {
    RegistrationClient,
    NavigationBarVue
  }
}
</script>

<style>

.main{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}



</style>