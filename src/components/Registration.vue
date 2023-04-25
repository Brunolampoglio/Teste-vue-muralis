<template>
   <div class="container">
    <div class="form">
    <div class="text"> Cadastro de ingressantes</div>

    <label class="labelIngre" for="name">Nome</label>
    <input class="input" type="text" id="name" name="name" placeholder="">

    <label class="labelIngre" for="name">Curso</label>
    <select class="input" name="curso" id="curso" v-model="curso">
      <option value=""></option>
      <option value="Matemática">Matemática</option>
      <option value="Geografia">Geografia</option>
      <option value="Inglês">Inglês</option>
      
      </select>


    <label class="labelIngre" for="name">Estado</label>
    <select class="input" name="estado" id="estado" v-model="estado">
      <option value=""></option>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Minas Gerais">Minas Gerais</option>
    </select>

    <label class="labelIngre" for="name">Cidade</label>
    <select class="input" name="cidade" id="cidade" v-model="cidade">
      <option value=""></option>
      <option v-for="city in cities" :key="city.id">{{city}}</option>
    </select>

    <div class="buttons">
      <button class="buttonIngreYellow" >Voltar</button>
      <button type='submit' class="buttonIngreGreen" v-on:click="notify">Gravar</button>
      </div>
    </div>  
   </div>
</template>

<script Long="scss" scoped>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {
    name: 'RegistrationClient',
    
    data () {
      return {
        cities:[],
        estado:null,
        cidade:null,
        states: [
          { value: 1, name: 'São Paulo' },
          { value: 2, name: 'Rio de Janeiro' },
          { value: 3, name: 'Minas Gerais' },
        ],
        brasil: {
          "São Paulo": {
            "nome": "São Paulo",
            "cidade": [
              "Mogi das Cruzes",
              "Suzano", 
              "Póa",
               "Guararema"
            ]
          },
          "Rio de Janeiro": {
            "nome": "Rio de Janeiro",
            "cidade": ["Angra dos Reis", "Niterói", "Itaboraí"]
          },
          "Minas Gerais": {
            "nome": "Minas Gerais",
            "cidade": ["Belo Horizonte", "Monte Azul", "Muzambinho"]
          }
        },
        stateSelected: {},

      }
    },

    watch: {
    'estado': function () {
      this.cities = this.brasil[this.estado].cidade
    }
  },

  setup() {
    const notify = () => {
      toast("Salvo com Sucesso !", {
        autoClose: 1000,
      }); // ToastOptions
    }
    return { notify };
  }
}
</script>

<style>

.container {
  width: 20rem;
  display: flex;
  height: 60vh;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: relative;
  margin-top: 10rem;
}
 
.form{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid  #046fda;
  border-radius: 1px;
  padding-bottom: 10px;
}

.text{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid  #060606;
  border-radius: 1px;
  padding-bottom: 10px;
  font-size: 1.2rem;
    color: #FFFFFF;
    background-color:  #4573c4;
    text-align: center;
    margin-bottom: 10px;
    padding: 20px;
}

.labelIngre{
  display: flex;
  justify-content: flex-start;
  margin-top: 2px;
  color: #000;
  font-size: 1.2rem;
  margin-left: 5px;
}

.input{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #4573c4;
  width: 97%;
  margin: 5px; 
}

.buttonIngreYellow{
  margin: 0 10px;
  padding: 5px 15px;
  border: none;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  height:30px;
  margin-top: 10px;
  background-color:#fec000;
}

.buttonIngreGreen{
  margin: 0 10px;
  padding: 5px 15px;
  border: none;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  height:40px;
  background-color:green;
}

.buttons{
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1rem;

}

</style>