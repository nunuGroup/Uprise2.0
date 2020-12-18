<script>
import store from './store';
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {

    }
  },
  mounted() {
  },
  computed: {
    globalTrans() {
      return store.state.globalTrans;
    }
  }
}
</script>

<template>
  <div class="transition-pane-container">
    <div :class="( globalTrans ? 'pane-active' : 'pane-inactive' )" class="pane"></div>
  </div>
  <Navbar />
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  margin: 0px;
  padding: 0px;
  font-family: 'Montserrat', sans-serif;
  line-height: 2;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
  //padding: 6px; 

}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: white;
  //margin: 8px;
  border-radius: 0px 8px 8px 0px; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.transition-pane-container {
  //background: white;
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0px;
  z-index: 999;
  pointer-events: none;

  .pane-active {
    //background: red;
    height: 100vh;
    bottom: 0px;
    transform: rotate(0deg) scale(1);
  }

  .pane-inactive {
    //background: yellow;
    height: 0vh;
    top: 0px;
    transform: scale(1);
  }

  .pane {
    background: black;
    width: 100%;
    position: absolute;
    bottom: 0px;
    //transition: 1.5s cubic-bezier(0.65, 0, 0.35, 1);
    transition: 600ms cubic-bezier(0.87, 0, 0.13, 1);
  }
}

.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //height: 100%;
}
</style>
