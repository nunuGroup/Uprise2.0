<script>

export default {
  name: 'Home',
  data() {
    return {
      stick: false,
      unstick: null,
      windowScroll: null,
      positions: {
        stickable1: null,
        stickable2: null
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    console.log('home mounted');
    var rect1 = document.getElementById("stickable1").getBoundingClientRect();
    var rect2 = document.getElementById("stickable2").getBoundingClientRect();
    this.positions.stickable1 = rect1.top;
    this.positions.stickable2 = rect2.top;
  },
  computed: {

  },
  methods: {
    scrollOut(limit) {
      return ( this.windowScroll >= limit ? 0 : (((this.windowScroll/limit)-1)*-1));
    },
    handleScroll() {
      this.windowScroll = window.scrollY;

      console.log('rect1.top', this.positions.stickable1);
      console.log('rect2.top', this.positions.stickable2);
      console.log('windowScroll', this.windowScroll);

      if(this.windowScroll >= this.positions.stickable1 && this.windowScroll <= this.positions.stickable2 ) {
        this.stick = true;
      } else {
        this.stick = false;
      }

      console.log('stick?', this.stick);

      console.log("");

      // Any code to be executed when the window is scrolled
    }
  }
}
</script>

<template>
  <div class="page-container" id="home">
    
    <!-- landing page -->
    <section class="content-section type0 sec1">
      <div class="title-text" :style="'opacity:'+scrollOut(400)+';transform: scale('+ scrollOut(1800)+')'">
        <h3>A BOUTIQUE AGENCY WITH INTERNATIONAL REACH.</h3>
        <h3 class="sub">IN THIS DIGITAL ERA, WE DELIVER STRATEGY-DRIVEN BRANDING, HIGH PROFILE CELEBRITY SOURCING, FORWARD-THINKING CREATIVE MARKETING AND VISUALLY RICH SOLUTIONS.</h3>
      </div>
    </section>
    
    <!-- tagline section -->
    <section class="content-section type1 sec2">
      <div class="tagline-backdrop">
        <video loop muted autoplay data-autoplay data-keepplaying id="reel-vid">
          <source src="../assets/reel.mp4" type="video/mp4">
        </video>
      </div>
      <div class="tagline"></div>
    </section>
    
    <!-- lyft case study -->
    <section class="content-section type0">
      <div class="left-content">
        <div class="left-inner">
          <div class="case-logo lyft-logo"></div>
          <div class="case-text-container">
            <p>UPRISE was brought on to the influencer and celebrity campaign for Lyft. Activating top influencers (TheGabbieShow, Coby Persin, Jon Paul Piques amongst others) as well as bringing celebrities to the table such as Sean “Diddy” Combs to create exclusive activations. Additionally, UPRISE generated red carpet event placements for Lyft to allow for additional press.</p>
            <a href="#">lyft.com</a>
            <h4>Talent Activation / Increase Market Awareness / Content Creation</h4>
          </div>        
        </div>
      </div>
      <div id="stickable1" class="stickable" :class="( stick ? 'right-stick' : 'right-content' )">
        <div class="right-content-inner">

        </div>
      </div>
    </section>
    
    <!-- maskfone case study -->
    <section class="content-section type0">
      <div class="left-content" style="background:#e">
        <div class="case-text-container">
          <div class="type1-logo maskfone-logo"></div>
          <p>This is a description of the case study for the client at hand. In this particular case, Maskfone is being showcase.</p>
          <a href="#">maskfone.com</a>
          <h4>Increase Market Awareness / Content Creation / Web Development</h4>
        </div>
      </div>
    </section>

    <!-- obliphica case study -->
    <section class="content-section type0">
      <div class="left-content" style="background:#eee">
        <div class="right-content-inner">
          <div class="case-logo obliphica-logo"></div>
          <div class="case-text-container">
            <p>Rebranded Obliphica Professional’s look entirely. Consulted the brand and establish new directive, new creative flow, secured talent, all content creation, award winning spatial design and a fresh new branding. Overseen entire celebrity campaign with award winning latin artist Natti Natasha. Created and produced entire global campaign feat. Madison Beer, launching fall 2019.</p>
            <a href="#">obliphica.com</a>
            <h4>Strategic Consulting / Content Creation / Campaign Production / Branding / Spatial Design / Talent Sourcing</h4>
          </div>
        </div>
      </div>
      <div class="right-content">
        <div class="left-inner"></div>
      </div>
    </section>

    <!-- superscreen case study -->
    <section class="content-section type1">
      <div class="backdrop-layer"></div>
      <div class="content-layer">
        <div class="left-content">
          <div class="type1-logo superscreen-logo"></div><h1>SUPERSCREEN</h1>
        </div>
        <div class="right-content">
          <div class="case-text-container">
            <p>This is a description of the case study for the client at hand. In this particular case, Maskfone is being showcase.</p>
            <a href="#">project.com</a>
            <h4>Increase Market Awareness / Content Creation / Web Development</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- fittea case study --> 
    <section class="content-section type0">
      <div class="left-content">
        <div class="left-inner"></div>
      </div>
      <div class="right-content">
        <div class="right-content-inner">
          <div class="case-logo fittea-logo"></div>
          <div class="case-text-container">
            <p>UPRISE oversaw the entire marketing campaign for Fit Tea securing all talent in order to generate the market awareness the brand wanted. The campaign goals were all surpassed thanks to onboarding talent such as Kim Kardashian, Victoria Justice, Kylie Jenner, Khloe Kardashian, Vanessa Hudgens, Sarah Hyland, Kat Graham, Ashley Benson, Christina Milian, Amber Rose, Lindsay Lohan and many more.</p>
            <a href="#">fittea.com</a>
            <h4>Talent Activation / Social Strategy</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- loaded8s case study -->
    <section class="content-section type0">
      <div class="left-content">
        <div class="case-logo loaded8s-logo"></div>
        <div class="case-text-container">
          <p>This is a description of the case study for the client at hand. In this particular case, Maskfone is being showcase.</p>
          <a href="#">project.com</a>
          <h4>Increase Market Awareness / Content Creation / Web Development</h4>
        </div>
      </div>
      <div id="stickable2" class="stickable" :class="( stick ? 'right-stick' : 'right-content' )">
        <div class="right-content-inner">

        </div>
      </div>
    </section>

    <!-- who we've worked with -->
    <section class="brands-section">
      <div class="brands-section-inner">
        who we've worked with
      </div>
    </section>

    <!-- services -->
    <section class="services-section">
      <div class="brands-section-inner">
        Banner
      </div>
    </section>

    <!-- services -->
    <section class="services-section">
      <div class="brands-section-inner">
        Services
      </div>
    </section>

    <!-- services -->
    <section class="services-section">
      <div class="brands-section-inner">
        Services
      </div>
    </section>


    <section class="content-section footer">
    
    </section>


  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/global';

$pageHeight: calc(100vh);

#reel-vid {
    //width: 177.77777778vh; /* 100 * 16 / 9 */
    width: 100%;
    //height: 100vh; /* 100 * 9 / 16 */
    transform: translate(0%, -130px); /* % of current element */
}

.stickable {
  background-image: url('../assets/mission-bg.png') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}

.brands-section {
  height: 150vh;
  width: 100%;
  background: #e0e0e0;
}

.stick {
  position: fixed;
  top: 80px;
  z-index: 999;
  right: 0px;
  margin: 0px;
  height: $pageHeight;
  width: 50vw;
  background-image: url('../assets/mission-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.superscreen-logo {
  background-image: url('../assets/superscreen/logo.png');
  height: 60px;
  width: 120px;
  margin-right: 24px;
}

.loaded8s-logo {
  background-image: url('../assets/loaded8s/logo.png');
  height: 120px;
  width: 120px;
}

.backdrop-layer {
  background: gray;
  position: absolute;
  height: $pageHeight;
  width: 100%;
  z-index: -1;
}

.content-layer {
  display: flex;
  height: 100%;
  width: 100%;

  .type1-left {
    background: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;

    h1 {
      color: white;
      margin-left: 0px;
      font-size: 32px;
      font-weight: normal;
    }
  }

  .type1-right {
    background: transparent;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    flex-direction: column;
    color: white;

    .type1-right-inner {
      width: 70%;
    }

    h4 {
      text-transform: uppercase;
      font-size: 14px;
      text-align: left;
    }

    a {
      text-align: left;
      color: white !important;
      opacity: 0.7;
    }
    
    p {
      text-align: left;
    }
  }
}

.maskfone-logo {
  background-image: url('../assets/maskfone/logo.png');
  height: 150px;
  width: 400px;
  filter: invert(1);
}

.fittea-logo {
  background-image: url('../assets/fittea/logo.png');
  height: 60px;
  width: 120px;
}

.obliphica-logo {
  background-image: url('../assets/obliphica/logo.png');
  height: 60px;
  width: 180px;
}

.lyft-logo {
  background-image: url('../assets/lyft/logo.svg');
  height: 60px;
  width: 120px;
}

.right-content-inner {
  width: 80%; 
  //margin-right: 64px;
}

.case-logo {
  //background-color: #e0e0e0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 32px;
}

.case-text-container {
  width: 90%;
  margin: 0px;

  p {
    color: white !important;
  }

  a {
    color: white !important;
    opacity: 0.8 !important;
  }

  h4 {
    text-transform: uppercase;
    font-size: 14px;
  }
}

.right-stick2 {
  background: white;
  height: 100vh;
  width: 30%; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  z-index: 9999;
  //padding: 0px 0px 0px 64px;
  //position: fixed;
  top: 0px;
  right: 0px;
}

.right-stick {
  background: white;
  height: 100vh;
  width: 30%; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  z-index: 9999;
  //padding: 0px 0px 0px 64px;
  position: fixed;
  top: 0px;
  right: 0px;
}

.right-content {
  background: white;
  height: 100vh;
  width: 30%; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  z-index: 9999;
  //padding: 0px 0px 0px 64px;
  position: absolute;
  right: 0px;
}

.left-content {
  background:black;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: absolute;
  left: 0px;
  z-index: 9;
  //padding: 0px 64px 0px 0px;
}

.left-inner {
  //background: #333;
  width: 70%;
  height: 70%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white !important;

  a {
    color: white !important;
  }
}

@keyframes carousel-move {
  to {
    background-position-x: 2920px;
  }
}

.sec1 {
  height: $pageHeight !important;
  justify-content: center !important;
}

.sec2 {
    z-index: -1;
    height: $pageHeight !important;
}

.tagline-backdrop {
  background-size: cover;
  background-repeat: repeat-x;
  //background-image: url('../assets/collage.png');
  filter: brightness(0.8) contrast(1);
  height: 100% !important;
  width: 100% !important;
  animation: carousel-move linear forwards 40s infinite;
}

.tagline {
  background-image: url('../assets/design-create-inspire-big.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 1300px;
  filter: invert(1);
  z-index: 1;
  position: absolute;
}

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
  margin-top: -80px;
  transition: 100ms;
}

.content-section {
  height: $pageHeight;
  width: 100%;
  margin: 0px;
}

.type0 {
  background: white;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  width: 100% !important;
  height: $pageHeight !important;
}

.type1-logo {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.type1 {
  //background: gray;
  z-index: 999;
  height: $pageHeight;
  width: 100%;
}
  
.footer {
  background: black;
  height: 60vh;
}

</style>