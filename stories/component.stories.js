import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("Vue Laxxx", module).add("Components", () => ({
  template: `
  <div id="main">
  <div id="header" class="section">
      <laxxx translate-x="'0 0, vh 200'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/l.png" style="width: 103pt; margin-left: 26pt; margin-bottom: -4pt;" />
      </laxxx>
      <laxxx :translate-x="'0 0, vh -200'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/a.png" />
      </laxxx>
      <laxxx :opacity="'0 1, (0.8*vh) 0'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" />
      </laxxx>
      <laxxx :translate-y="'0 0, vh 200'" :opacity="'0 1, (0.8*vh) 0'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" />
      </laxxx>
      <laxxx :translate-y="'0 0, vh 400'" :opacity="'0 1, (0.8*vh) 0'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" />
      </laxxx>
      <laxxx :translate-y="'0 0, vh 600'" :opacity="'0 1, (0.8*vh) 0'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" />
      </laxxx>
      <laxxx :translate-y="'0 0, vh 800'" :opacity="'0 1, (0.8*vh) 0'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" />
      </laxxx>
      <laxxx :translate-y="'0 0, vh 1000'" :opacity="'0 1, (0.8*vh) 0'">
        <img src="https://raw.githubusercontent.com/alexfoxy/laxxx/master/docs/img/x.png" style="margin-top: -79pt" />
      </laxxx>
      <laxxx :scale="'0 1, vh 0.2'" :translate-y="'0 0, vh 1200'" :opacity="'0 1, (vh*0.5) 0'">
        <h2>awesum scroll effects</h2>
      </laxxx>
      <laxxx :opacity="'0 1, (vh*0.05) 0'">
        <h4>scroll down</h4>
      </laxxx>
      <laxxx :opacity="'0 1, (vh*0.1) 0'" :translate-y="'0 0, 200 100'">
        <i class="fas fa-chevron-down" />
      </laxxx>
    </i>
  </div>

  <div id="section1" class="section">
      <div class="left">
          <laxxx :preset="'lazy-250'">
            <div class="bubble a" style="background: #EDD943"></div>
          </laxxx>
          <laxxx :preset="'lazy-100'">
            <div class="bubble c" style="background: #ED2471; margin-left: 80pt"></div>
          </laxxx>
          <laxxx :preset="'lazy-300'">
            <div class="bubble b" style="background: #35D5E5; margin-left: 160pt"></div>
          </laxxx>
          <laxxx :preset="'driftRight'" :optimize="true">
            <h3 class="chunkyText" style="color: #35D5E5;">oooh!</h3>
          </laxxx>
      </div>

      <div class="right">
          <laxxx :preset="'lazy-200'">
            <div class="bubble a" style="background: #35D5E5; margin-left: 120pt"></div>
          </laxxx>
          <laxxx :preset="'lazy-150'">
            <div class="bubble c" style="background: #EDD943; margin-left: -20pt"></div>
          </laxxx>
          <laxxx :preset="'lazy-350'">
            <div class="bubble b" style="background: #ED2471; margin-left: 20pt; margin-top: 200pt"></div>
          </laxxx>
          <laxxx :optimize="true" :preset="'driftLeft'">
            <h3 class="chunkyText" style="color: #ED2471; margin-top: 200pt;">aaah!</h3>
          </laxxx>
      </div>

      <laxxx :preset="'crazy zoomInOut'" :optimize="true">
        <h3 class="crazyText">sooo crazy</h3>
      </laxxx>
  </div>

  <div id="section2" class="section">
      <laxxx :preset="'leftToRight-1.1 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spin'">
            <div class="block" style="background: #35D5E5;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.2 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spinRev-500'">
            <div class="block" style="background: #EDD943; margin-top: -50pt; margin-left: -50pt; width: 40pt; height: 40pt;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.4 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spin-500'">
            <div class="block" style="background: #ED2471; margin-top: -90pt; margin-left: -0pt;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.5 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spinRev-500'">
            <div class="block" style="background: #EDD943; margin-top: 70pt; margin-left: -150pt; width: 40pt; height: 40pt;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.3 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spin-500'">
            <div class="block" style="background: #EDD943; margin-top: 100pt; margin-left: -60pt; width: 25pt; height: 25pt;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.05 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spin'">
            <div class="block" style="background: #ED2471; margin-top: -30pt; margin-left: -70pt;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-0.8 speedy'" :optimize="true">
        <h3 class="chunkyText" style="color: #white; position: absolute; margin-top: -20pt; margin-left: -100pt">
          wheee!
        </h3>
      </laxxx>

      <laxxx>
        <div class="blockContainer" :preset="'leftToRight-1.15 fadeInOut'">
          <laxxx>
            <div class="block" style="background: #35D5E5; margin-top: -70pt; margin-left: -20pt; width: 40pt; height: 40pt;" :preset="'spinRev-500'"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx>
        <div class="blockContainer" :preset="'leftToRight-1.45 fadeInOut'">
          <laxxx>
            <div class="block" style="background: #ED2471; margin-top: -50pt; margin-left: -50pt; width: 25pt; height: 25pt;" :preset="'spin-500'"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.5 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spinRev-500'">
            <div class="block" style="background: #35D5E5; margin-top: 30pt; margin-left: -20pt;"></div>
          </laxxx>
        </div>
      </laxxx>

      <laxxx :preset="'leftToRight-1.25 fadeInOut'">
        <div class="blockContainer">
          <laxxx :preset="'spin-500'">
            <div class="block" style="background: #ED2471; margin-top: 80pt; margin-left: -10pt;"></div>
          </laxxx>
        </div>
      </laxxx>
  </div>

  <div id="section3" class="section">
    <laxxx :preset="'linger'" :optimize="true">
      <p>
          Harness the power of scrolling and make your websites come alive!
      </p>
      <laxxx :preset="'linger'" :optimize="true" :bg-pos-x="'0 0, 3000 1000'">
        <a class="button" href="https://github.com/alexfoxy/laxxx">
          Get lax.js
        </a>
      </laxxx>
    </laxxx>
  </div>
</div>
  `,
  methods: {
    customPreset() {
      return {
        name: "myCoolPreset",
        preset: {
          "v-lax-opacity": "(vh*0.8) 1, (vh*0.6) 0",
          "v-lax-rotate": "(vh*2) 1000, (vh*0.5) 0"
        }
      }
    }
  }
}));
