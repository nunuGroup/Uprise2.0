<template>
  <div class="page-container">
      <div class="title-text" :style="'opacity:'+scrollOut(400)+';transform: scale('+ scrollOut(1800)+')'">
        <h3>A BOUTIQUE AGENCY WITH INTERNATIONAL REACH.</h3>
        <h3 class="sub">IN THIS DIGITAL ERA, WE DELIVER STRATEGY-DRIVEN BRANDING, HIGH PROFILE CELEBRITY SOURCING, FORWARD-THINKING CREATIVE MARKETING AND VISUALLY RICH SOLUTIONS.</h3>
        <div @click="scrollDown()" class="arrow bounce"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {

        }
    },
    mounted() {

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';



</style>
