<template>
  <div class="page-container">
    <section class="content-section type0">
      <div class="title-text">
        <h3>A BOUTIQUE AGENCY WITH INTERNATIONAL REACH.</h3>
        <h3 class="sub">IN THIS DIGITAL ERA, WE DELIVER STRATEGY-DRIVEN BRANDING, HIGH PROFILE CELEBRITY SOURCING, FORWARD-THINKING CREATIVE MARKETING AND VISUALLY RICH SOLUTIONS.</h3>
      </div>
    </section>
    <section class="content-section type1"></section>
    <section class="content-section type0"></section>
    <section class="content-section type1"></section>
    <section class="content-section type0"></section>
    <section class="content-section type1"></section>
    <section class="content-section type0"></section>
    <section class="content-section type1"></section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  mounted() {
    console.log('home moutned');
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

.sub {
  font-weight: 400;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-text {
  text-align: center;
  width: 820px;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.7em;
  letter-spacing: .14em;
  margin-top: 80px;
}

.content-section {
  height: 80vh;
  width: 100%;
  margin: 0px;
}

.type0 {
  background: white;
}

.type1 {
  background: #eee;
}
  
</style>