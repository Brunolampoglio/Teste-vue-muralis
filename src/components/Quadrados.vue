<template>

    <div class="containerQuadrado">
        <div class="bluebox"></div>
        <div class="bluebox"></div>
        <div class="bluebox"></div>
        <div class="inscritos">
            <div class="textQuadrados">Total de Inscritos</div>
            <div class="number">1255</div>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'QuadradosVue',

}
</script>

<style>

.containerQuadrado {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
    gap:60px;
}

.bluebox{
  background-color: #0e3358;
  width: 200px;
  height: 150px;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inscritos{
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  width: 220px;
  height: 150px;
  margin-right: 2rem;
  background-color:rgb(255, 255, 255) ;
}

.textQuadrados{
    font-size: 15px;
    font-weight: bold;
    color: rgb(0, 0, 0);
  
    padding: 15px;
}

.number{
  font-size: 36px;
  color: black;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}
</style>