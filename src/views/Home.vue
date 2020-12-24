<script>
export default {
  name: 'Home',
  data() {
    return {
      currentPhoto: 'assets/stickable/lyft.png',
      stick: false,
      unstick: null,
      windowScroll: null,
      positions: {
        stickable1: null,
        stickable2: null,
        case1: null,
        case2: null,
        case3: null,
        case4: null,
        case5: null,
        case6: null,
      },
      stickablePhotos: [
        'assets/stickable/maskfone.png',
        'assets/stickable/obliphica.png',
        'assets/stickable/lyft.png',
        'assets/stickable/fittea.png',
        'assets/stickable/superscreen.png',
        'assets/stickable/loaded8s.png'
      ],
      droppable: [false, false, false, false, false, false, false, false, false]
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
    //this.cyclePhotos();

    var rect1 = document.getElementById("stickable1").getBoundingClientRect();
    var rect2 = document.getElementById("stickable2").getBoundingClientRect();
    
    var case1 = document.getElementById("case1").getBoundingClientRect();
    var case2 = document.getElementById("case2").getBoundingClientRect();
    var case3 = document.getElementById("case3").getBoundingClientRect();
    var case4 = document.getElementById("case4").getBoundingClientRect();
    var case5 = document.getElementById("case5").getBoundingClientRect();
    var case6 = document.getElementById("case6").getBoundingClientRect();
    
    this.positions.stickable1 = rect1.top;
    this.positions.stickable2 = rect2.top;

    this.positions.case1 = case1.top;
    this.positions.case2 = case2.top;
    this.positions.case3 = case3.top;
    this.positions.case4 = case4.top;
    this.positions.case5 = case5.top;
    this.positions.case6 = case6.top;

    console.log('case1', this.positions.case1);
    console.log('case2', this.positions.case2);
    console.log('case3', this.positions.case3);
    console.log('case4', this.positions.case4);
    console.log('case5', this.positions.case5);
    console.log('case6', this.positions.case6);
  },
  computed: {

  },
  methods: {
    dropdown(context) {
      console.log('dropping down panel ' + context);
      for(let i = 0; i < this.droppable.length; i++) {
        this.droppable[i] = ( i != context ? false : ( this.droppable[i] == true ? false : true ));
      }
      console.log(this.droppable);
    },
    cyclePhotos() {
      console.log('cycling photos...');
      var i = 0;
      setInterval(() => {
        this.currentPhoto = this.stickablePhotos[i];
        console.log(this.currentPhoto);
        var aboutPath = this.currentPhoto;
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + aboutPath) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + aboutPath) + ')';
        if(i == this.stickablePhotos.length - 1) {
          i = 0;
        } else {
          i++;
        }
      }, 6000);
    },
    scrollDown() {
      console.log('scrolling down...');
      window.scroll({
        top: 1000,
        behavior: 'smooth'
      });
    },
    scrollOut(limit) {
      return ( this.windowScroll >= limit ? 0 : (((this.windowScroll/limit)-1)*-1));
    },
    handleScroll() {
      this.windowScroll = window.scrollY;

      //console.log('rect1.top', this.positions.stickable1);
      //console.log('rect2.top', this.positions.stickable2);
      //console.log('windowScroll', this.windowScroll);

      if(this.windowScroll >= this.positions.stickable1 - 80 && this.windowScroll <= this.positions.stickable2 - 80 ) {
        this.stick = true;
      } else {
        this.stick = false;
      }

      var pad = 400;

      if(this.windowScroll <= (this.positions.case1 + pad)) { //case 1 scroll
        console.log('case 1 img load');
        this.currentPhoto = this.stickablePhotos[0];
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
      } else if(this.windowScroll <= (this.positions.case2 + pad)) { //case 2 scroll
        console.log('case 2 img load');
        this.currentPhoto = this.stickablePhotos[1];
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
      } else if(this.windowScroll <= (this.positions.case3 + pad)) { //case 3 scroll
        console.log('case 3 img load');
        this.currentPhoto = this.stickablePhotos[2];
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
      } else if(this.windowScroll <= (this.positions.case4 + pad)) { //case 4 scroll
        console.log('case 4 img load');
        this.currentPhoto = this.stickablePhotos[3];
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
      } else if(this.windowScroll <= (this.positions.case5 + pad)) { //case 5 scroll
        console.log('case 5 img load');
        this.currentPhoto = this.stickablePhotos[4];
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
      } else { //case 6 scroll
        console.log('case 6 img load');
        this.currentPhoto = this.stickablePhotos[5];
        document.getElementById('stickable1').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
        document.getElementById('stickable2').style.backgroundImage = 'url(' +  require('@/' + this.currentPhoto) + ')';
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
    <section class="sec1">
      <div class="title-text" :style="'opacity:'+scrollOut(400)+';transform: scale('+ scrollOut(1800)+')'">
        <h3>A BOUTIQUE AGENCY WITH INTERNATIONAL REACH.</h3>
        <h3 class="sub">IN THIS DIGITAL ERA, WE DELIVER STRATEGY-DRIVEN BRANDING, HIGH PROFILE CELEBRITY SOURCING, FORWARD-THINKING CREATIVE MARKETING AND VISUALLY RICH SOLUTIONS.</h3>
        <div @click="scrollDown()" class="arrow bounce"></div>
      </div>
    </section>
    
    <!-- tagline section -->
    <section class="content-section">
      <div class="tagline-backdrop">
        <video loop muted autoplay data-autoplay data-keepplaying id="reel-vid">
          <source src="../assets/reel.mp4" type="video/mp4">
        </video>
      </div>
      <div class="tagline"></div>
    </section>
    
    <!-- maskfone -->
    <section class="content-section type0 ctnt" id="case1">
      <div class="left-content" style="background-color:#141414">
        <div class="left-inner">
          <div class="case-text-container">
            <div class="case-logo maskfone-logo"></div>
            <h4>STRATEGIC CONSULTING / CONTENT CREATION / WEB DEVELOPMENT</h4>
            <p>This just so happens to be descriptive text, detailing Uprise Management's involvement with Maskfone, and the creative work commissioned on their end in order to elevate the brand.</p>
            <a href="https://maskfone.com" class="link-btn">maskfone.com 🡒</a>
          </div>        
        </div>
      </div>
      <div id="stickable1" class="stickable" :class="( stick ? 'right-stick' : 'right-content' )">
        <div class="right-content-inner"></div>
      </div>
    </section>
    
    <!-- obliphica -->
    <section class="content-section type0" id="case2">
      <div class="left-content" style="background:#6B8D06">
        <div class="left-inner">
          <div class="case-text-container">
            <div class="case-logo obliphica-logo"></div>
            <h4>Strategic Consulting / Content Creation / Campaign Production / Branding / Spatial Design / Talent Sourcing</h4>
            <p>Rebranded Obliphica Professional’s look entirely. Consulted the brand and establish new directive, new creative flow, secured talent,
all content creation, award winning spatial design and a fresh new branding. Overseen entire celebrity campaign with award winning latin
artist Natti Natasha. Created and produced entire global campaign feat. Madison Beer, launching fall 2019.</p>
            <a href="https://obliphica.com" class="link-btn">obliphica.com 🡒</a>
          </div>        
        </div>
      </div>
    </section>

    <!-- lyft -->
    <section class="content-section type0" id="case3">
      <div class="left-content" style="background:#352AB5">
        <div class="left-inner">
          <div class="case-text-container">
            <div class="case-logo lyft-logo"></div>
            <h4>Strategic Consulting / Content Creation / Campaign Production / Branding / Spatial Design / Talent Sourcing</h4>
            <p>Rebranded Obliphica Professional’s look entirely. Consulted the brand and establish new directive, new creative flow, secured talent,
all content creation, award winning spatial design and a fresh new branding. Overseen entire celebrity campaign with award winning latin
artist Natti Natasha. Created and produced entire global campaign feat. Madison Beer, launching fall 2019.</p>
            <a href="https://lyft.com" class="link-btn">lyft.com 🡒</a>
          </div>   
        </div>
      </div>
    </section>

    <!-- fittea -->
    <section class="content-section type0" id="case4">
      <div class="left-content" style="background:#E0F5E6">
        <div class="left-inner">
          <div class="case-text-container">
            <div class="case-logo fittea-logo"></div>
            <h4>Strategic Consulting / Content Creation / Campaign Production / Branding / Spatial Design / Talent Sourcing</h4>
            <p>Rebranded Obliphica Professional’s look entirely. Consulted the brand and establish new directive, new creative flow, secured talent,
all content creation, award winning spatial design and a fresh new branding. Overseen entire celebrity campaign with award winning latin
artist Natti Natasha. Created and produced entire global campaign feat. Madison Beer, launching fall 2019.</p>
            <a href="https://fittea.com" class="link-btn">fittea.com 🡒</a>
          </div>        
        </div>
      </div>
    </section>

    <!-- superscreen -->
    <section class="content-section type1" id="case5">
      <div class="backdrop-layer"></div>
      <div class="content-layer">
        <div class="left-content" style="background-color:#181816">
          <div class="left-inner">
            <div class="case-text-container">
              <div class="case-logo superscreen-logo"></div>
              <h4>Strategic Consulting / Content Creation / Campaign Production / Branding / Spatial Design / Talent Sourcing</h4>
              <p>Rebranded Obliphica Professional’s look entirely. Consulted the brand and establish new directive, new creative flow, secured talent,
  all content creation, award winning spatial design and a fresh new branding. Overseen entire celebrity campaign with award winning latin
  artist Natti Natasha. Created and produced entire global campaign feat. Madison Beer, launching fall 2019.</p>
              <a href="https://superscreen.com" class="link-btn">superscreen.com 🡒</a>
            </div>  
          </div>
        </div>
      </div>
    </section>

    <!-- loaded8s -->
    <section class="content-section type0" id="case6">
      <div class="left-content" style="background: #25134F">
        <div class="case-text-container">
        <div class="left-inner">
          <div class="case-logo loaded8s-logo"></div>
          <h4>Strategic Consulting / Content Creation / Campaign Production / Branding / Spatial Design / Talent Sourcing</h4>
          <p>Rebranded Obliphica Professional’s look entirely. Consulted the brand and establish new directive, new creative flow, secured talent,
all content creation, award winning spatial design and a fresh new branding. Overseen entire celebrity campaign with award winning latin
artist Natti Natasha. Created and produced entire global campaign feat. Madison Beer, launching fall 2019.</p>
          <a href="https://superscreen.com" class="link-btn">superscreen.com 🡒</a>
        </div>
        </div> 
      </div>
      <div id="stickable2" class="stickable" :class="( stick ? 'right-stick' : 'right-content' )">
        <div class="right-content-inner">

        </div>
      </div>
    </section>

    <!-- services -->
    <section class="services-section">
      <!--h1>Our Services</h1>
      <div class="divider"></div-->
      <div class="section-inner">
        <div class="services-container">
          <div class="services-container-left">
            <h1>Services</h1>
            <p class="service-par">UPRISE Management is a 360 ̊ full service marketing, branding and creative agency for luxury, premium and digital brands as well as for leading
e-commerce giants. UPRISE’s experience is broad; specializing in beauty, tech, food & spirits, lifestyle and hospitality. In this digital era, we deliver
strategy-driven branding, high profile celebrity sourcing, forward-thinking creative marketing and visually rich solutions - all in conjunction with
integrated media photography, video and global from-start-to-finish production services.</p>
          </div>
          <div class="services-container-right">
            <ul>
              <li @click="dropdown(0)" class="first-service"><div class="service-icon icon1"></div><span>Strategic Consulting<b :class="( droppable[0] ? '' : '' )"></b></span></li>
              <div class="droppable droppable1" :class="( droppable[0] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Brand<span>-</span>Building</span>
                  <span>Brand<span>-</span>Consulting</span>
                  <span>Brand<span>-</span>Messaging</span>
                  <span>Brand<span>-</span>Strategy</span>
                  <span>Brand<span>-</span>Vision</span>
                  <span>Content<span>-</span>Planning</span>
                  <span>Creative<span>-</span>Direction</span>
                  <span>Digital<span>-</span>Media<span>-</span>Planning</span>
                  <span>Digital<span>-</span>Strategy</span>
                  <span>Performance</span>
                  <span>Marketing<span>-</span>Strategy</span>
                  <span>Paid<span>-</span>Social<span>-</span>Strategy</span>
                  <span>Print<span>-</span>+<span>-</span>OOH<span>-</span>Media<span>-</span>Planning</span>
                  <span>Social<span>-</span>Media<span>-</span>Strategy</span>
                  <span>Storytelling</span>
                </div>
              </div>
              <li @click="dropdown(1)"><div class="service-icon icon2"></div><span>Branding<b></b></span></li>
              <div class="droppable droppable2" :class="( droppable[1] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Art<span>-</span>Direction</span>
                  <span>Brand<span>-</span>Books<span>-</span>+<span>-</span>Guidelines</span>
                  <span>Brand<span>-</span>Development</span>
                  <span>Copy-writing</span>
                  <span>Graphic<span>-</span>Design</span>
                  <span>Logo<span>-</span>Design</span>
                  <span>Name<span>-</span>+<span>-</span>Naming System</span>
                  <span>Packaging<span>-</span>Design</span>
                  <span>Storytelling</span>
                  <span>Visual<span>-</span>Identity</span>
                  <span>Vision</span>
                </div>
              </div>
              <li @click="dropdown(2)"><div class="service-icon icon3"></div><span>Content Creation<b></b></span></li>
              <div class="droppable droppable3" :class="( droppable[2] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Advertising<span>-</span>+<span>-</span>Campaign</span>
                  <span>Animation</span>
                  <span>Concept<span>-</span>Development</span>
                  <span>Creative<span>-</span>Direction</span>
                  <span>Directing<span>-</span>+<span>-</span>Filming</span>
                  <span>Editing<span>-</span>+<span>-</span>Post</span>
                  <span>Global<span>-</span>Production<span>-</span>Services</span>
                  <span>Illustration</span>
                  <span>Photography</span>
                  <span>Retouching</span>
                  <span>Social<span>-</span>Media<span>-</span>Content</span>
                  <span>Still<span>-</span>Life<span>-</span>+<span>-</span>Editorial</span>
                </div>
              </div>
              <li @click="dropdown(3)"><div class="service-icon icon4"></div><span>Public Relations<b></b></span></li>
              <div class="droppable droppable4" :class="( droppable[3] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Email<span>-</span>Sourcing</span>
                  <span>Email<span>-</span>Verification</span>
                  <span>Creative<span>-</span>Email<span>-</span>Marketing</span>
                  <span>Development<span>-</span>Support</span>
                  <span>Email<span>-</span>Template<span>-</span>Creation</span>
                </div>
              </div>
              <li @click="dropdown(4)"><div class="service-icon icon5"></div><span>Talent<b></b></span></li>
              <div class="droppable droppable5" :class="( droppable[4] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Calabrity<span>-</span>Seeding</span>
                  <span>Infuencer<span>-</span>Gifting</span>
                  <span>Infulencer<span>-</span>Partnerships</span>
                  <span>Strategic<span>-</span>Collaborations</span>
                  <span>Strategic<span>-</span>Partnerships</span>
                  <span>Talent<span>-</span>Campaign Strategy</span>
                  <span>Talent<span>-</span>Campaign<span>-</span>Global<span>-</span>Execution</span>
                </div>
              </div>
              <li @click="dropdown(5)"><div class="service-icon icon6"></div><span>Email<b></b></span></li>
              <div class="droppable droppable6" :class="( droppable[5] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Digital<span>-</span>+<span>-</span>Traditional Press</span>
                  <span>Fashion<span>-</span>Shows</span>
                  <span>Front<span>-</span>of<span>-</span>House</span>
                  <span>Full-event<span>-</span>Production</span>
                  <span>Openings</span>
                  <span>Planning</span>
                  <span>Presentations</span>
                  <span>PR<span>-</span>Box<span>-</span>/<span>-</span>Mailers</span>
                  <span>Product<span>-</span>Launches</span>
                  <span>Top-tier<span>-</span>Editorial<span>-</span>Placement</span>
                </div>
              </div>
              <li @click="dropdown(6)"><div class="service-icon icon7"></div><span>Social Media<b></b></span></li>
              <div class="droppable droppable7" :class="( droppable[6] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Benchmarking<span>-</span>&<span>-</span>Analysis</span>
                  <span>Brand<span>-</span>Social<span>-</span>Identity</span>
                  <span>Community<span>-</span>Building</span>
                  <span>Community<span>-</span>Management</span>
                  <span>Social<span>-</span>Media<span>-</span>Growth<span>-</span>Giveaways</span>
                  <span>Paid<span>-</span>Social<span>-</span>Framework</span>
                  <span>Social<span>-</span>Aesthetic<span>-</span>Appeal</span>
                  <span>Social<span>-</span>Media<span>-</span>Management</span>
                  <span>Social<span>-</span>Media<span>-</span>Strategy</span>
                  <span>Strategic<span>-</span>Alignment</span>
                </div>
              </div>
              <li @click="dropdown(7)"><div class="service-icon icon8"></div><span>Spacial Design<b></b></span></li>
              <div class="droppable droppable8" :class="( droppable[7] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>3D<span>-</span>Rendering</span>
                  <span>Custom<span>-</span>Wall<span>-</span>Graphics</span>
                  <span>In-store<span>-</span>Displays</span>
                  <span>Large<span>-</span>Space<span>-</span>Graphics</span>
                  <span>Retail<span>-</span>Displays</span>
                  <span>Special<span>-</span>Events<span>-</span>&<span>-</span>Booth<span>-</span>Design</span>
                  <span>Vector<span>-</span>Graphics</span>
                </div>
              </div>
              <li @click="dropdown(8)"><div class="service-icon icon9"></div><span>Additional Services<b></b></span></li>
              <div class="droppable droppable9" :class="( droppable[8] == true ? 'dropped' : 'collapsed' )">
                <div class="bubble-items">
                  <span>Advisory<span>-</span>Board<span>-</span>Assembly</span>
                  <span>Celebrity<span>-</span>Giveaways</span>
                  <span>CMO<span>-</span>on<span>-</span>Demand</span>
                  <span>Digital<span>-</span>Ads<span>-</span>Management</span>
                  <span>Growth<span>-</span>Hacking</span>
                  <span>Marketing<span>-</span>Advising</span>
                  <span>SEO<span>-</span>-<span>-</span>SEM</span>
                  <span>Social<span>-</span>Verification</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- brands -->
    <section class="brands-section">
      <div class="brands-section-inner">
        who we've worked with
      </div>
    </section>

    <!-- hai -->
    <section class="services-section">
      <div class="brands-section-inner">
        stuffs
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

$pageHeight: calc(100vh - 80px);

.icon1 {
  background-image: url('../assets/services/strategic-consulting.svg');
}

.icon2 {
  background-image: url('../assets/services/branding.svg');
}

.icon3 {
  background-image: url('../assets/services/content-creation.svg');
}

.icon4 {
  background-image: url('../assets/services/public-relations.svg');
}

.icon5 {
  background-image: url('../assets/services/talent.svg');
}

.icon6 {
  background-image: url('../assets/services/email.svg');
}

.icon7 {
  background-image: url('../assets/services/social-media.svg');
}

.icon8 {
  background-image: url('../assets/services/spatial-design.svg');
}

.icon9 {
  background-image: url('../assets/services/additional-services.svg');
}

.first-service {
  border: none !important;
}

.services-container {
  background: white;
  height: 900px;
  width: 75vw;
  margin-top: 120px;
  margin-bottom: 24px;
  display: flex;

  .service-icon {
    //background: black;
    height: 32px;
    width: 32px;
    margin-right: 24px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .bubble-items {
    text-align: left;
    width: 80%;
    margin-left: 24px;
    margin-top: 4px;
    transition: 300ms;

    span {
      margin-right: 4px;
      color: black;
      background: #eee;
      padding: 4px 8px;
      line-height: 1;
      font-size: 12px;
      border-radius: 12px;
      display:inline-block;
      margin-bottom: 6px;
      font-weight: bold;

      span {
        padding: 0px;
        margin: 0px;
        color: transparent;
      }
    }
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style: none;

    .droppable {
      width: 100%;
      height: 0px;
      //background: lime;
      transition: 300ms;
      pointer-events: none;
    }

    .dropped {
      //background: pink;
      height: 200px;
      pointer-events: none;
      //background: green;

      .bubble-items {
        transition-delay: 100ms;
        //background: pink;
        opacity: 1;
      }
    }

    .collapsed {
      //background: gray;
      height: 0px;
      //opacity: 0%;
      pointer-events: none;
      
      .bubble-items {
        //background: red;
        opacity: 0;
        transition: 100ms;
      }
    }
    
    li {
      padding: 18px 0px 18px 24px;
      //border: 1px solid black;
      cursor: pointer;
      border-top: 1px #e0e0e0 solid;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 14px;
        text-transform: uppercase;
        font-weight: bold;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        b {
          margin-right: 24px;
          //background: yellow;
          height: 12px;
          width: 12px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url('../assets/icons/arrow-down.png');
        }
      }

      &:hover {
        span {
          color: gray;

          b {
            color: black !important;
          }
        }
      }
    }
  }

  .service-par {
    font-size: 14px;
  }

  h1 {
    font-size: 48px;
    font-weight: normal;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  p {
    width: 85%;
  }

  .services-container-left {
    //background: red;
    width: 800px;
  }

  .services-container-right {
    //background: orange;
    width: 100%;
  }
}

#case1 {
  p, h4, a {
    color: white !important;
  }
  .link-btn {
    background: #BDE3DF !important;
    color: black !important;
  }
}

#case2 {
  p, h4, a {
    color: white !important;
  }
  .link-btn {
    background: #D23605 !important;
    color:white !important;
  }
}

#case3 {
  p, h4, a {
    color: white !important;
  }
  .link-btn {
    background: #EA0B8C;
    color: white !important;
  }
}

#case4 {
  p, h4, a {
    color: black !important;
  }
  .link-btn {
    background: #5A9342;
    color: white !important;
  }
}

#case5 {
  p, h4, a {
    color: white !important;
  }
  .link-btn {
    background:#2F8BC9;
    color: white !important;
  }
}

#case6 {
  p, h4, a {
    color: white !important;
  }
  .link-btn {
    background: #BDD751;
    color: white;
  }
}

.link-btn {
  background:white;
  height: 40px;
  width: 240px;
  color: black !important;
  line-height: 40px;
  border-radius: 40px;
  text-decoration: none;
  margin-top: 32px;
  transition: 200ms;
  font-weight: normal;

  &:hover {
    transform: scale(0.95);
  }
}

@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
	40% {
    transform: translateY(-30px);
  }
	60% {
    transform: translateY(-15px);
  }
}

.arrow {
  position: fixed;
  bottom: 0;
  top: 36vh;
  left: 50%;
  margin-left:-20px;
  width: 24px;
  height: 24px;
  filter: invert(1);
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yOTMuNzUxLDQ1NS44NjhjLTIwLjE4MSwyMC4xNzktNTMuMTY1LDE5LjkxMy03My42NzMtMC41OTVsMCwwYy0yMC41MDgtMjAuNTA4LTIwLjc3My01My40OTMtMC41OTQtNzMuNjcyICBsMTg5Ljk5OS0xOTBjMjAuMTc4LTIwLjE3OCw1My4xNjQtMTkuOTEzLDczLjY3MiwwLjU5NWwwLDBjMjAuNTA4LDIwLjUwOSwyMC43NzIsNTMuNDkyLDAuNTk1LDczLjY3MUwyOTMuNzUxLDQ1NS44Njh6Ii8+DQo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjIwLjI0OSw0NTUuODY4YzIwLjE4LDIwLjE3OSw1My4xNjQsMTkuOTEzLDczLjY3Mi0wLjU5NWwwLDBjMjAuNTA5LTIwLjUwOCwyMC43NzQtNTMuNDkzLDAuNTk2LTczLjY3MiAgbC0xOTAtMTkwYy0yMC4xNzgtMjAuMTc4LTUzLjE2NC0xOS45MTMtNzMuNjcxLDAuNTk1bDAsMGMtMjAuNTA4LDIwLjUwOS0yMC43NzIsNTMuNDkyLTAuNTk1LDczLjY3MUwyMjAuMjQ5LDQ1NS44Njh6Ii8+DQo8L3N2Zz4=);
  background-size: contain;
  cursor: pointer;
}

.bounce {
  animation: bounce 2s infinite;
}

.ctnt {
  margin-top: -5px !important;
}

.stickable {
  //background-image: url('../assets/stickable/maskfone.png') !important;
  background-color: white;
  background-size: cover !important;
  background-position: top !important;
  background-repeat: no-repeat !important;
  transition: 150ms ease;
  width: 25%;
}

.brands-section {
  //height: 150vh;
  width: 100%;
  background: #eee;
  flex-direction: column;
  padding-top: 64px;

  h1 {
    font-size: 32px;
    font-weight: normal;
    text-transform: uppercase;
  }

  .divider {
    height: 1px;
    width: 60vw;
    background: black;
    margin-left: auto;
    margin-right: auto;
  }

  //padding: 64px;
}

.stick {
  position: fixed;
  top: 80px;
  z-index: 999;
  right: 0px;
  margin: 0px;
  height: $pageHeight;
  background-image: url('../assets/mission-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.superscreen-logo {
  background-image: url('../assets/superscreen/logo.png');
  height: 60px;
  width: 320px;
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
      //color: white !important;
      opacity: 0.7;
    }
    
    p {
      text-align: left;
    }
  }
}

.maskfone-logo {
  background-image: url('../assets/maskfone/logo.png');
  height: 90px;
  width: 300px;
  //margin-top: 120px;
  filter: invert(1);
}

.fittea-logo {
  background-image: url('../assets/fittea/logo.png');
  height: 90px;
  width: 190px;
}

.obliphica-logo {
  background-image: url('../assets/obliphica/logo.png');
  height: 90px;
  width: 300px;
  filter: invert(1);
}

.lyft-logo {
  background-image: url('../assets/lyft/logo.svg');
  height: 80px;
  width: 120px;
}

.right-content-inner {
  width: 80%; 
  //margin-right: 64px;
}

.case-logo {
  //background: red;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 24px;
  //margin-bottom: 32px;
  //filter: invert(1);
}

.case-text-container {
  width: 80%;
  margin: 0px;
  text-align: center;
  //background: rgba(white, 0.2);
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: black;
    opacity: 0.4;
  }

  a {
    //color: white !important;
    opacity: 0.85 !important;
  }

  h4 {
    text-transform: uppercase;
    font-size: 14px;
    color: black;
  }
}

.right-stick2 {
  background: white;
  height: calc(100vh - 80px);
  width: 25%; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  z-index: 9999;
  //padding: 0px 0px 0px 64px;
  //position: fixed;
  top: 80px;
  right: 0px;
}

.right-stick {
  background: white;
  height: calc(100vh - 80px);
  width: 25%; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;
  z-index: 9999;
  //padding: 0px 0px 0px 64px;
  position: fixed;
  top: 80px;
  right: 0px;
}

.right-content {
  //background: white;
  height: calc(100vh - 80px);
  width: 25%; 
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
  background:white;
  color: black !important;
  height: calc(100vh - 80px);
  width: 75%;
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
  //color: white !important;

  a {
    //color: white !important;
  }
}

@keyframes carousel-move {
  to {
    background-position-x: 2920px;
  }
}

.sec1 {
  justify-content: center !important;
  background: white !important;
  height: 112vh !important;
  width: 100%;
}

.sec2 {
    z-index: -1;
    height: 86.56vh !important;
}

.tagline-backdrop {
  filter: brightness(0.6) contrast(0.9);
  background: green;
  height: 100%;
  width: 100%;
  position: absolute;
  //width: 177.77777778vh; /* 100 * 16 / 9 */
  //height: 100vh; /* 100 * 9 / 16 */
  //transform: translate(0%, -130px); /* % of current element */

video {
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    min-width: 100vw;
    transform: translate(-50%, -50%); /* % of current element */
}
}

.tagline {
  background-image: url('../assets/design-create-inspire-big.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 1300px;
  filter: invert(1);
  transform: scale(0.8) !important;
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
  margin-top: -120px;
  transition: 100ms;
}

.content-section {
  height: calc(100vh - 80px);
  width: 100%;
  margin: 0px;
}

.type0 {
  background: white;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  width: 100% !important;
  //height: 100vh !important;
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