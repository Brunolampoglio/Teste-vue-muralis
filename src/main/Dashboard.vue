<template>
    <div id="app" class="mainDashboard">
        <NavigationBarVue /> 
      <div  class="itensDashboard">
        <Header/>
        <Quadrados/>
        <BarChart/>
      </div> 
        <router-view/>
      </div>
  
</template>

<script>

import NavigationBarVue from '../components/NavigationBar.vue'
import Header from '../components/Header.vue'
import Quadrados from '@/components/Quadrados.vue';
import BarChart from  '../components/Dashboard.vue'
export default {
    name: 'DashboardHome',
    components: {
    NavigationBarVue,
    Header,
    Quadrados,
    BarChart


  }
}
</script>

<style>

.mainDashboard{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
    background-color: #c8d6f6;
}
.itensDashboardHeader{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

</style>