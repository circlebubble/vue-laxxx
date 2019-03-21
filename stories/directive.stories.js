import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("Vue Laxxx", module).add("Directives", () => ({
  template: `
    <div id="main">
      <div id="header" class="section">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/l.png" style="width: 103pt; margin-left: 26pt; margin-bottom: -4pt;" v-lax-translate-x="'0 0, vh 200'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/a.png" v-lax-translate-x="'0 0, vh -200'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" v-lax-opacity="'0 1, (0.8*vh) 0'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" v-lax-translate-y="'0 0, vh 200'" v-lax-opacity="'0 1, (0.8*vh) 0'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" v-lax-translate-y="'0 0, vh 400'" v-lax-opacity="'0 1, (0.8*vh) 0'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" v-lax-translate-y="'0 0, vh 600'" v-lax-opacity="'0 1, (0.8*vh) 0'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" v-lax-translate-y="'0 0, vh 800'" v-lax-opacity="'0 1, (0.8*vh) 0'" />
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" v-lax-translate-y="'0 0, vh 1000'" v-lax-opacity="'0 1, (0.8*vh) 0'" />
        <h2 v-lax-scale="'0 1, vh 0.2'" v-lax-translate-y="'0 0, vh 1200'" v-lax-opacity="'0 1, (vh*0.5) 0'">awesum scroll effects</h2>

        <h4 v-lax-opacity="'0 1, (vh*0.05) 0'">scroll down</h4>
        <i class="fas fa-chevron-down" 
          v-lax-opacity="'0 1, (vh*0.1) 0'" 
          v-lax-translate-y="'0 0, 200 100'">
        </i>
      </div>


      <div id="section1" class="section">
        <div class="left">
          <div class="bubble a"
            style="background: #EDD943"
            v-lax-preset="'lazy-250'"
          ></div>

          <div class="bubble c"
            style="background: #ED2471; margin-left: 80pt"
            v-lax-preset="'lazy-100'"
          ></div>

          <div class="bubble b"
            style="background: #35D5E5; margin-left: 160pt"
            v-lax-preset="'lazy-300'"
          ></div>

          <h3 v-lax-preset="'driftRight'" v-lax-optimize="true" class="chunkyText" style="color: #35D5E5;">oooh!</h3>
        </div>

        <div class="right">
            <div class="bubble a"
              style="background: #35D5E5; margin-left: 120pt"
              v-lax-preset="'lazy-200'"
            ></div>

            <div class="bubble c"
              style="background: #EDD943; margin-left: -20pt"
              v-lax-preset="'lazy-150'"
            ></div>

            <div class="bubble b"
              style="background: #ED2471; margin-left: 20pt; margin-top: 200pt"
              v-lax-preset="'lazy-350'"
            ></div>
          <h3 v-lax-optimize="true" v-lax-preset="'driftLeft'" class="chunkyText" style="color: #ED2471; margin-top: 200pt;">aaah!</h3>
        </div>

        <h3 v-lax-preset="'crazy zoomInOut'" class="crazyText" v-lax-optimize="true">sooo crazy</h3>
      </div>

      <div id="section2" class="section">
        <div class="blockContainer" v-lax-preset="'leftToRight-1.1 fadeInOut'">
          <div class="block"
            style="background: #35D5E5;"
            v-lax-preset="'spin'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.2 fadeInOut'">
          <div class="block"
            style="background: #EDD943; margin-top: -50pt; margin-left: -50pt; width: 40pt; height: 40pt;"
            v-lax-preset="'spinRev-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.4 fadeInOut'">
          <div class="block"
            style="background: #ED2471; margin-top: -90pt; margin-left: -0pt;"
            v-lax-preset="'spin-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.5 fadeInOut'">
          <div class="block"
            style="background: #EDD943; margin-top: 70pt; margin-left: -150pt; width: 40pt; height: 40pt;"
            v-lax-preset="'spinRev-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.3 fadeInOut'">
          <div class="block"
            style="background: #EDD943; margin-top: 100pt; margin-left: -60pt; width: 25pt; height: 25pt;"
            v-lax-preset="'spin-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.05 fadeInOut'">
          <div class="block"
            style="background: #ED2471; margin-top: -30pt; margin-left: -70pt;"
            v-lax-preset="'spin'"
          ></div>
        </div>

        <h3 v-lax-preset="'leftToRight-0.8 speedy'" v-lax-optimize=true class="chunkyText" style="
          color: #white; position: absolute; margin-top: -20pt; margin-left: -100pt">
          wheee!
        </h3>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.15 fadeInOut'">
          <div class="block"
            style="background: #35D5E5; margin-top: -70pt; margin-left: -20pt; width: 40pt; height: 40pt;"
            v-lax-preset="'spinRev-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.45 fadeInOut'">
          <div class="block"
            style="background: #ED2471; margin-top: -50pt; margin-left: -50pt; width: 25pt; height: 25pt;"
            v-lax-preset="'spin-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.5 fadeInOut'">
          <div class="block"
            style="background: #35D5E5; margin-top: 30pt; margin-left: -20pt;"
            v-lax-preset="'spinRev-500'"
          ></div>
        </div>

        <div class="blockContainer" v-lax-preset="'leftToRight-1.25 fadeInOut'">
          <div class="block"
            style="background: #ED2471; margin-top: 80pt; margin-left: -10pt;"
            v-lax-preset="'spin-500'"
          ></div>
        </div>
      </div>

      <div id="section3" class="section">
        <p v-lax-preset="'linger'" v-lax-optimize="true">
          Harness the power of scrolling and make your websites come alive!
        </p>
        <a class="button" v-lax-preset="'linger'" v-lax-optimize="true" v-lax-bg-pos-x="'0 0, 3000 1000'" href="https://github.com/alexfoxy/laxxx">
          Get lax.js
        </a>
      </div>

    </div>
  `
}));
