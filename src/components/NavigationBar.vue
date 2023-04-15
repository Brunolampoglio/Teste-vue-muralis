<template>
    <aside>
        <div> 
            <div class="navbarcontainer">
                <div class="userIconWrapper">
                    <div class="userIconContainer">
                        <div class="userIcon">
                            <account  size="xs"/>
                        </div>
                    </div>
                       
                </div>
                <div class="profile">
                   <div class="profileName">Silva Junior</div>
                   <div class="profileName">silva.junior@empresa.com</div>
                </div>  
                
                
                <div class="navbarMenu">
                <router-link class="button" to="/">
                    <div class="navBarMenuItem">
                        
                        <home/>
                            <span>Home</span>
                    </div>
                </router-link>
                <router-link class="button" to="/ingressantes" >
                    <div class="navBarMenuItem" >
                        <folder/>
                        <span>Ingressantes</span>
                  </div>
                </router-link>
                </div>
             </div>
        </div>
         
    </aside>
     

  
</template>

<script>

import home from 'vue-material-design-icons/Home.vue';
import folder from 'vue-material-design-icons/Folder.vue';
import account from 'vue-material-design-icons/Account.vue';

export default {
    name: 'NavigationBar',
    components: {
        home,
        folder,
        account
    }
}
</script>

<style Long="scss" scoped>

aside {
   display: flex;
   flex-direction: column;
   width: 20rem;
   height: 100vh;
   overflow: hidden;
   padding: 1rem;
    background-color: #0e3358;
}

.button:hover, .button:focus {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    text-decoration: none;
    height: 3.5rem;
    font-size: 12pt;
    color: white;
    background-color: #5d666f37;

}

.userIconContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius:100%;
    border: 2px solid #0e3358;
    background-color: #FFFFFF;
}

.userIconWrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #163f62;
    margin-top: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

.image{
    box-sizing: content-box;
}

.userIcon{
  color: #0e3358;
  font-size: 5rem;
  height: 100%;
  align-items: center;
}

.profileName{
  font-family: 'Exo', sans-serif;
  font-size: 12pt;
  color: white;
  margin-top: 0.5rem;
}

.profile{
  align-items: center;
  margin-left: 0.8rem;
  gap: 0.8rem;
  margin-top: 2rem;
}

.icon{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    border-radius: 50%;
    background-color: #163f62;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

.navbarMenu{
  align-items: center;
  margin-left: 0.8rem;
  gap: 0.8rem;
  margin-top: 2rem;
}


.navBarMenuItem{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    text-decoration: none;
    height: 3.5rem;
    font-size: 12pt;
    color: white;
}

.navbarcontainer {
  width: 20rem;
  background-color: #0e3358;
  display: flex;
  height: 150vh;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;
}

</style>