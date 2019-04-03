<template>
  <div class="container">
    <div class="nav">
      <div class="title">
        <h1>Live.js</h1>
      </div>
      <div class="transport">
        <img
          v-if="!playing"
          class="transport-button"
          src="../assets/icons/play.png"
          v-on:click="playStop"
        >
        <img
          v-if="playing"
          class="transport-button"
          src="../assets/icons/stop.png"
          v-on:click="playStop"
        >
        <img class="transport-button" src="../assets/icons/circle.png">
        <knob-control
          class="vol-knob"
          :min="40"
          :max="300"
          :size="40"
          :stroke-width="12"
          v-model="bpm"
          primary-color="#67D0F7"
        ></knob-control>
      </div>
    </div>

    <div class="step-grid">
      <div class="drum-title">Kick</div>
      <div class="step-button" v-on:click="randomButtonClicked()">
        <img class="random-button" src="../assets/icons/random.png">
      </div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[0] }" v-on:click="toggleKick(0)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[1] }" v-on:click="toggleKick(1)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[2] }" v-on:click="toggleKick(2)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[3] }" v-on:click="toggleKick(3)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[4] }" v-on:click="toggleKick(4)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[5] }" v-on:click="toggleKick(5)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[6] }" v-on:click="toggleKick(6)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[7] }" v-on:click="toggleKick(7)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[8] }" v-on:click="toggleKick(8)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[9] }" v-on:click="toggleKick(9)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[10] }" v-on:click="toggleKick(10)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[11] }" v-on:click="toggleKick(11)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[12] }" v-on:click="toggleKick(12)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[13] }" v-on:click="toggleKick(13)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[14] }" v-on:click="toggleKick(14)"></div>
      <div class="step kick" v-bind:class="{ kickActive: kickSeq[15]}" v-on:click="toggleKick(15)"></div>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="kickVol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>

    <div class="step-grid">
      <div class="drum-title">Clap</div>
      <div class="step-button" v-on:click="randomButtonClicked()">
        <img class="random-button" src="../assets/icons/random.png">
      </div>

      <div class="step clap" v-bind:class="{ clapActive: clapSeq[0] }" v-on:click="toggleClap(0)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[1] }" v-on:click="toggleClap(1)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[2] }" v-on:click="toggleClap(2)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[3] }" v-on:click="toggleClap(3)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[4] }" v-on:click="toggleClap(4)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[5] }" v-on:click="toggleClap(5)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[6] }" v-on:click="toggleClap(6)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[7] }" v-on:click="toggleClap(7)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[8] }" v-on:click="toggleClap(8)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[9] }" v-on:click="toggleClap(9)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[10] }" v-on:click="toggleClap(10)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[11] }" v-on:click="toggleClap(11)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[12] }" v-on:click="toggleClap(12)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[13] }" v-on:click="toggleClap(13)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[14] }" v-on:click="toggleClap(14)"></div>
      <div class="step clap" v-bind:class="{ clapActive: clapSeq[15]}" v-on:click="toggleClap(15)"></div>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="clapVol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>
    <!-- <div class="step-grid">
      <div class="drum-title">Open Hat</div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.one }" v-on:click="toggleOh('one')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.two }" v-on:click="toggleOh('two')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.three }" v-on:click="toggleOh('three')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.four }" v-on:click="toggleOh('four')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.five }" v-on:click="toggleOh('five')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.six }" v-on:click="toggleOh('six')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.seven }" v-on:click="toggleOh('seven')"></div>
      <div class="step oh" v-bind:class="{ ohActive: ohSeq.eight }" v-on:click="toggleOh('eight')"></div>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="ohVol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>-->
    <div class="step-grid">
      <div class="drum-title">Closed Hat</div>
      <div class="step-button" v-on:click="randomButtonClicked()">
        <img class="random-button" src="../assets/icons/random.png">
      </div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[0] }" v-on:click="toggleCh(0)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[1] }" v-on:click="toggleCh(1)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[2] }" v-on:click="toggleCh(2)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[3] }" v-on:click="toggleCh(3)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[4] }" v-on:click="toggleCh(4)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[5] }" v-on:click="toggleCh(5)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[6] }" v-on:click="toggleCh(6)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[7] }" v-on:click="toggleCh(7)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[8] }" v-on:click="toggleCh(8)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[9] }" v-on:click="toggleCh(9)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[10] }" v-on:click="toggleCh(10)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[11] }" v-on:click="toggleCh(11)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[12] }" v-on:click="toggleCh(12)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[13] }" v-on:click="toggleCh(13)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[14] }" v-on:click="toggleCh(14)"></div>
      <div class="step ch" v-bind:class="{ chActive: chSeq[15]}" v-on:click="toggleCh(15)"></div>

      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="chVol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>
    <div class="step-grid">
      <div class="drum-title">Snare 1</div>
      <div class="step-button" v-on:click="randomButtonClicked()">
        <img class="random-button" src="../assets/icons/random.png">
      </div>

      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[0] }" v-on:click="toggleSn1(0)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[1] }" v-on:click="toggleSn1(1)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[2] }" v-on:click="toggleSn1(2)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[3] }" v-on:click="toggleSn1(3)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[4] }" v-on:click="toggleSn1(4)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[5] }" v-on:click="toggleSn1(5)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[6] }" v-on:click="toggleSn1(6)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[7] }" v-on:click="toggleSn1(7)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[8] }" v-on:click="toggleSn1(8)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[9] }" v-on:click="toggleSn1(9)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[10] }" v-on:click="toggleSn1(10)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[11] }" v-on:click="toggleSn1(11)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[12] }" v-on:click="toggleSn1(12)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[13] }" v-on:click="toggleSn1(13)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[14] }" v-on:click="toggleSn1(14)"></div>
      <div class="step sn1" v-bind:class="{ sn1Active: sn1Seq[15]}" v-on:click="toggleSn1(15)"></div>
      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="sn1Vol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>
    <!-- <div class="step-grid">
      <div class="drum-title">Snare 2</div>

      <div class="step sn2" v-bind:class="{ sn2Active: sn2Seq.one }" v-on:click="toggleSn2('one')"></div>
      <div class="step sn2" v-bind:class="{ sn2Active: sn2Seq.two }" v-on:click="toggleSn2('two')"></div>
      <div
        class="step sn2"
        v-bind:class="{ sn2Active: sn2Seq.three }"
        v-on:click="toggleSn2('three')"
      ></div>
      <div
        class="step sn2"
        v-bind:class="{ sn2Active: sn2Seq.four }"
        v-on:click="toggleSn2('four')"
      ></div>
      <div
        class="step sn2"
        v-bind:class="{ sn2Active: sn2Seq.five }"
        v-on:click="toggleSn2('five')"
      ></div>
      <div class="step sn2" v-bind:class="{ sn2Active: sn2Seq.six }" v-on:click="toggleSn2('six')"></div>
      <div
        class="step sn2"
        v-bind:class="{ sn2Active: sn2Seq.seven }"
        v-on:click="toggleSn2('seven')"
      ></div>
      <div
        class="step sn2"
        v-bind:class="{ sn2Active: sn2Seq.eight }"
        v-on:click="toggleSn2('eight')"
      ></div>

      <knob-control
        class="vol-knob"
        :min="0"
        :max="100"
        :size="40"
        :stroke-width="12"
        v-model="sn2Vol"
        primary-color="#67D0F7"
      ></knob-control>
    </div>-->
  </div>
</template>

<script>
import Tone from "tone";
import StartAudioContext from "startaudiocontext";

export default {
  name: "home",
  created() {
    //need to start audio context this way due to new browser restrictions
    StartAudioContext(Tone.context, "#button").then(function() {
      console.log("audio context started");
    });

    // Tie play/stop button to space bar
    window.addEventListener("keydown", e => {
      if (e.code == "Space") {
        this.playStop();
      }
    });

    //sequencer index init
    this.index = 0;

    // let sampler = new Tone.Players(
    //   {
    //     "kick": "../public/drums/808/kick.wav",
    //     "clap": "../public/drums/808/clap.wav",
    //     "ch": "../public/drums/808/ch.wav",
    //     "sn1": "../public/drums/808/sn1.wav"
    //   },
    //   () => console.log("drums ready")
    // ).toMaster();

    Tone.Transport.scheduleRepeat(repeat, "16n");
    let self = this;
    function repeat(time) {
      // let step = self.index % 16;
      // for (let i = 0; i < 4; i++) {
      //   if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
      // }

      if (self.chSeq[self.index] == true) {
        var chSynth = new Tone.NoiseSynth().toMaster();
        chSynth.triggerAttackRelease("16n");
      }

      if (self.clapSeq[self.index] == true) {
        var clapSynth = new Tone.NoiseSynth().toMaster();
        clapSynth.set("noise.type", "white");
        clapSynth.set("envelope.decay", ".4");
        clapSynth.set("envelope.attack", "0.005");
        clapSynth.set("envelope.sustain", "0");
        clapSynth.triggerAttackRelease("16n");
      }

      if (self.kickSeq[self.index] == true) {
        var kickSynth = new Tone.MembraneSynth().toMaster();
        kickSynth.triggerAttackRelease("C2", "16n");
      }

      // move index up one every note
      if (self.index < 15) {
        self.index++;
      } else {
        self.index = 0;
      }
    }
  },
  methods: {
    randomButtonClicked() {
      console.log(Math.random() < 0.5);
    },
    toggleKick(number) {
      console.log(this.kickSeq[number]);
      if (this.kickSeq[number] == false) {
        this.kickSeq[number] = true;
      } else if (this.kickSeq[number] == true) {
        this.kickSeq[number] = false;
      }
    },
    toggleClap(number) {
      console.log(this.clapSeq[number]);
      if (this.clapSeq[number] == false) {
        this.clapSeq[number] = true;
      } else if (this.clapSeq[number] == true) {
        this.clapSeq[number] = false;
      }
    },
    toggleOh(number) {
      console.log(this.ohSeq[number]);
      if (this.ohSeq[number] == false) {
        this.ohSeq[number] = true;
      } else if (this.ohSeq[number] == true) {
        this.ohSeq[number] = false;
      }
    },
    toggleCh(number) {
      console.log(this.chSeq[number]);
      if (this.chSeq[number] == false) {
        this.chSeq[number] = true;
      } else if (this.chSeq[number] == true) {
        this.chSeq[number] = false;
      }
    },
    toggleSn1(number) {
      console.log(this.sn1Seq[number]);
      if (this.sn1Seq[number] == false) {
        this.sn1Seq[number] = true;
      } else if (this.sn1Seq[number] == true) {
        this.sn1Seq[number] = false;
      }
    },
    toggleSn2(number) {
      console.log(this.sn1Seq[number]);
      if (this.sn2Seq[number] == false) {
        this.sn2Seq[number] = true;
      } else if (this.sn2Seq[number] == true) {
        this.sn2Seq[number] = false;
      }
    },
    playStop() {
      if (this.playing == false) {
        this.index = 0;
        Tone.Transport.start("+0.1");
        this.playing = true;
      } else {
        this.index = 0;
        this.playing = false;
        Tone.Transport.stop();
      }
    }
  },
  computed: {},
  data() {
    return {
      bpm: 120,
      index: 0,
      playing: false,
      kickSeq: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      clapSeq: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      chSeq: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      ohSeq: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      sn1Seq: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false
      },
      sn2Seq: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false
      },
      kickVol: 40,
      clapVol: 40,
      ohVol: 40,
      chVol: 40,
      sn1Vol: 40,
      sn2Vol: 40
    };
  },
  watch: {
    bpm: function(val) {
      Tone.Transport.bpm.value = val;
      console.log(Tone.Transport.bpm.value);
    }
  }
};
</script>

<style>
.random-button {
  height: 20px;
  margin-right: 9px;
}

.transport {
  display: inline-block;
}

.kickActive {
  background-color: #f9f378 !important;
}

.clapActive {
  background-color: #fa7000 !important;
}

.ohActive {
  background-color: #feef14 !important;
}

.chActive {
  background-color: #8bfd5e !important;
}

.sn1Active {
  background-color: #27fda3 !important;
}

.sn2Active {
  background-color: #00a5f1 !important;
}

.vol-knob {
  padding-left: 10px;
}

nav {
  display: flex;
}

.transport-button {
  width: 20px;
  padding: 5px;
}

.drum-title {
  margin-right: 10px;
  width: 90px;
}

.step {
  margin: 5px;
  height: 20px;
  width: 20px;
  background-color: #636363;
}

.step-button {
  margin: 5px;
  height: 20px;
  width: 20px;
}

.step-grid {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
}

body {
  background-color: #b5b2b1;
}
</style>
