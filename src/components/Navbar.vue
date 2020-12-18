<script>
//import store from '../store'

export default {
    name: 'Navbar',
    mounted() {
        console.log('CURRENT ROUTE PARAMS: ', this.context);
    },
    computed: {
        context() {
            return this.$route.name;
        },
        contextHash() {
            return this.$route.hash;
        }
    },
    methods: {
        /*move(sec) {
            //console.log('already on home. navigating to section ' + sec);
            //this.eventHub.$emit('move', sec)
        }*/
    }
}
</script>

<template>
  <div class="navbar-container">
    <ul class="nav-items">
        <li class="nav-item hoverable"><router-link class="hoverable" to="/services">SERVICES</router-link></li>
        <li class="nav-item hoverable"><router-link class="hoverable" to="/clients">CLIENTS</router-link></li>
        <li class="nav-item hoverable"><router-link class="hoverable" to="/about">ABOUT</router-link></li>
        <li class="nav-item hoverable"><router-link class="hoverable" to="/contact">CONTACT</router-link></li>
    </ul>
    <router-link class="home-link" to="/"><div class="center-logo"></div></router-link>
    <ul class="social">
        <a href="https://www.instagram.com/uprisemgmt/"><li class="social-item insta"></li></a>
        <a href="https://www.facebook.com/lion.shirdan.9"><li class="social-item fb"></li></a>
        <a href="https://www.linkedin.com/company/uprisemanagement/about/"><li class="social-item li"></li></a>
        <a href="https://twitter.com/UpriseMGMT"><li class="social-item tw"></li></a>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/global';

$navHeight: 80px;

.home-link {
    opacity: 1 !important;
}

.center-logo {
    background-image: url('../assets/FULL-BLACK2.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 50px;
    width: 300px;
    mix-blend-mode: difference;
    filter: invert(1);
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
}

.social {
    width: 500px;
    height: $navHeight;
    //background: blue;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 80px 0px 0px;

    a:hover {
        opacity: 1 !important;
    }

    .social-item {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        margin-right: 18px;
        //border-radius: 100%;
        padding: 0px;
    }
}

.nav-items {
    width: 500px;
    height: $navHeight;
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 80px;
}

.router-link-exact-active {
    //background: red !important;
    opacity: 1 !important;
    font-weight: bold !important;
    //color: purple;
}

.navbar-container {
    background: white;
    color: white;
    height: $navHeight;
    width: 100%;
    position: fixed;
    z-index: 99;
    top: 0px;
    //padding-right: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 0px;

    ul {
        list-style: none;
        display: flex;
        margin: 0px;
    }

    a {
        text-decoration: none;
        color: white;
        font-family: 'Gotham', Helvetica, Arial, sans-serif;
        font-weight: bold;
        mix-blend-mode: difference;
        opacity: 0.4;
        font-size: 12px;
        //cursor: none;
    }

    .nav-item {
        padding-right: 8px;
        padding-left: 8px;
        height: 0px;
        //opacity: 0.3;
        transition: 200ms;
        font-weight: normal;

        &:hover {
            opacity: 1;
            //background: rgba(black, 0.5);
        }
    }
}

</style>