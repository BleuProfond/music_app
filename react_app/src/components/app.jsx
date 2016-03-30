import React from 'react';
import Navbar from './Navbar/navbar.jsx';
import Sequencer from './Sequencer/sequencer.jsx';
import SettingsPanel from './SettingsPanel/settings_panel.jsx';
import NewPanel from './NewPanel/new_panel.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
injectTapEventPlugin();

var track = {
  tempo: 80,
  tracks: {
    Kick: [ 
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ],
    Snare: [
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0 
    ],
    Hat: [ 
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ],
    Lead: [ 
      0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0
    ]
  }
}

var ac;
stop = false;
function note2freq(note) {
  return Math.pow(2, (note - 69) / 12) * 440;
} 

var notes = [
  2093.00, 2217.46, 2349.32, 2489.02,
  2637.02, 2793.83, 2959.96, 3135.96,
  3322.44, 3520.00, 3729.31, 3951.08
];

var ref_int;

class App extends React.Component {

  sound(e) {
    class Sequencer {
      constructor(ac, track){
        this.ac = ac;
        this.track = track;
      }

      clock(){
        var beatLen = 60 / this.track.tempo;
        return (this.ac.currentTime - this.startTime) / beatLen;  
      }

      start(){        
        this.startTime = this.ac.currentTime;
        this.nextScheduling = 0;
        this.scheduler(); 
      }

      scheduler(){
        var beatLen = 60 / this.track.tempo;
        var lookahead = 0.1;
        if (stop) {
          return;
        }

        if (this.clock() + lookahead > this.nextScheduling) {
          var steps = [];
          steps.push(this.nextScheduling + beatLen / 4);
          for (var i in this.track.tracks) {
            for (var j = 0; j < steps.length; j++) {
              var idx = Math.round(steps[j] / ((beatLen / 4)));
              var note = this.track.tracks[i][idx % this.track.tracks[i].length];
              var octave = 1;
              if (note != 0) {
                this[i](steps[j], note * octave);
              }
            }
          }

          this.nextScheduling += (60 / this.track.tempo / 4);
        }
        setTimeout(this.scheduler.bind(this), 180);
      }

      Kick(t){
        var kick = new Kick(this.ac);
        kick.trigger(t);
      }

      Hat(t){
        var hat = new Hat(this.ac);
        hat.trigger(t);
      }

      Snare(t){
        var snare = new Snare(this.ac);
        snare.trigger(t);
      }

      Lead(t, note){
        var lead = new Lead(this.ac, 'sine');
        lead.trigger(t, note);
      }
    }

    class Kick {
      constructor(context){
        this.context = context;
        this.oscillator = this.context.createOscillator();
        this.oscillatorEnvelope = this.context.createGain();
        this.oscillator.connect(this.oscillatorEnvelope);
        this.oscillatorEnvelope.connect(this.context.destination);
      }

      trigger(time){
        this.oscillator.frequency.setValueAtTime(120, time);
        this.oscillatorEnvelope.gain.setValueAtTime(1, time);

        this.oscillator.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
        this.oscillatorEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

        this.oscillator.start(time);
        this.oscillator.stop(time + 1);  
      }
    }

    class Snare {
      constructor(context){
        this.context = context;

        this.noise = this.context.createBufferSource();
        this.noise.buffer = this.noiseBuffer();

        var filter = this.context.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 1000;
        this.noise.connect(filter);

        this.noiseEnvelope = this.context.createGain();
        filter.connect(this.noiseEnvelope);

        this.noiseEnvelope.connect(this.context.destination);

        this.oscillator = this.context.createOscillator();
        this.oscillator.type = 'triangle';

        this.oscillatorEnvelope = this.context.createGain();
        this.oscillator.connect(this.oscillatorEnvelope);

        this.oscillatorEnvelope.connect(this.context.destination);
      }

      noiseBuffer(){
        var bufferSize = this.context.sampleRate;
        var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
        var output = buffer.getChannelData(0);

        for(var i = 0; i < bufferSize; i++){
          output[i] = Math.random() * 2 - 1;
        }

        return buffer;
      }

      trigger(time){
        this.noiseEnvelope.gain.setValueAtTime(1, time);
        this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
        this.noise.start(time);

        this.oscillator.frequency.setValueAtTime(100, time);
        this.oscillatorEnvelope.gain.setValueAtTime(0.7, time);
        this.oscillatorEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
        this.oscillator.start(time);

        this.oscillator.stop(time + 0.2);
        this.noise.stop(time + 0.2);  
      }
    }

    class Hat {
      constructor(context){
        this.context = context;

        this.noise = this.context.createBufferSource();
        this.noise.buffer = this.noiseBuffer();

        var filter = this.context.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 5000;
        this.noise.connect(filter);

        this.noiseEnvelope = this.context.createGain();
        filter.connect(this.noiseEnvelope);

        this.noiseEnvelope.connect(this.context.destination);
      }

      noiseBuffer(){
        var bufferSize = this.context.sampleRate;
        var buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
        var output = buffer.getChannelData(0);

        for(var i = 0; i < bufferSize; i++){
          output[i] = Math.random() * 2 - 1;
        }

        return buffer;
      }

      trigger(time){
        this.noiseEnvelope.gain.setValueAtTime(1, time);
        this.noiseEnvelope.gain.setTargetAtTime(0, time, 0.02);
        
        this.noise.start(time); 
        this.noise.stop(time + 0.2);
      }
    }

    class Lead {
      constructor(context, type){
        this.context = context;

        this.oscillator = this.context.createOscillator();
        this.oscillator.type = type;

        var filter = this.context.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 100;
        this.oscillator.connect(filter);

        this.oscillatorEnvelope = this.context.createGain();
        this.oscillator.connect(this.oscillatorEnvelope);

        this.oscillatorEnvelope.connect(this.context.destination);    
      }

      trigger(time, note){
        this.oscillator.frequency.setValueAtTime(note/2, time);

        this.oscillatorEnvelope.gain.setValueAtTime(0.2, time);
        this.oscillatorEnvelope.gain.setTargetAtTime(0.0, time + 0.2, 0.5);

        this.oscillator.start(time);
        this.oscillator.stop(time + 0.2);
      }
    }
 
    ac = new AudioContext();
    var s = new Sequencer(ac, track);
    s.start(); 

    var buttons = document.getElementsByClassName("dot");

    var colOne = [
      buttons[0], buttons[16], buttons[32], buttons[48],
      buttons[64], buttons[80], buttons[96], buttons[112],
      buttons[128], buttons[144], buttons[160], buttons[176],
      buttons[192], buttons[208], buttons[224]
    ];

    var colTwo = [
      buttons[1], buttons[17], buttons[33], buttons[49],
      buttons[65], buttons[81], buttons[97], buttons[113],
      buttons[129], buttons[145], buttons[161], buttons[177],
      buttons[193], buttons[209], buttons[225]
    ];    

    var colThree = [
      buttons[2], buttons[18], buttons[34], buttons[50],
      buttons[66], buttons[82], buttons[98], buttons[114],
      buttons[130], buttons[146], buttons[162], buttons[178],
      buttons[194], buttons[210], buttons[226]
    ]; 

    var colFour = [
      buttons[3], buttons[19], buttons[35], buttons[51],
      buttons[67], buttons[83], buttons[99], buttons[115],
      buttons[131], buttons[147], buttons[163], buttons[179],
      buttons[195], buttons[211], buttons[227]
    ]; 

    var colFive = [
      buttons[4], buttons[20], buttons[36], buttons[52],
      buttons[68], buttons[84], buttons[100], buttons[116],
      buttons[132], buttons[148], buttons[164], buttons[180],
      buttons[196], buttons[212], buttons[228]
    ];

    var colSix = [
      buttons[5], buttons[21], buttons[37], buttons[53],
      buttons[69], buttons[85], buttons[101], buttons[117],
      buttons[133], buttons[149], buttons[165], buttons[181],
      buttons[197], buttons[213], buttons[229]
    ];    

    var colSeven = [
      buttons[6], buttons[22], buttons[38], buttons[54],
      buttons[70], buttons[86], buttons[102], buttons[118],
      buttons[134], buttons[150], buttons[166], buttons[182],
      buttons[198], buttons[214], buttons[230]
    ]; 

    var colEight = [
      buttons[7], buttons[23], buttons[39], buttons[55],
      buttons[71], buttons[87], buttons[103], buttons[119],
      buttons[135], buttons[151], buttons[167], buttons[183],
      buttons[199], buttons[215], buttons[231]
    ]; 

    var colNine = [
      buttons[8], buttons[24], buttons[40], buttons[56],
      buttons[72], buttons[88], buttons[104], buttons[120],
      buttons[136], buttons[152], buttons[168], buttons[184],
      buttons[200], buttons[216], buttons[232]
    ];

    var colTen = [
      buttons[9], buttons[25], buttons[41], buttons[57],
      buttons[73], buttons[89], buttons[105], buttons[121],
      buttons[137], buttons[153], buttons[169], buttons[185],
      buttons[201], buttons[217], buttons[233]
    ];    

    var colEleven = [
      buttons[10], buttons[26], buttons[42], buttons[58],
      buttons[74], buttons[90], buttons[106], buttons[122],
      buttons[138], buttons[154], buttons[170], buttons[186],
      buttons[202], buttons[218], buttons[234]
    ]; 

    var colTwelve = [
      buttons[11], buttons[27], buttons[43], buttons[59],
      buttons[75], buttons[91], buttons[107], buttons[123],
      buttons[139], buttons[155], buttons[171], buttons[187],
      buttons[203], buttons[219], buttons[235]
    ]; 

    var colThirteen = [
      buttons[12], buttons[28], buttons[44], buttons[60],
      buttons[76], buttons[92], buttons[108], buttons[124],
      buttons[140], buttons[156], buttons[172], buttons[188],
      buttons[204], buttons[220], buttons[236]
    ];

    var colFourteen = [
      buttons[13], buttons[29], buttons[45], buttons[61],
      buttons[77], buttons[93], buttons[109], buttons[125],
      buttons[141], buttons[157], buttons[173], buttons[189],
      buttons[205], buttons[221], buttons[237]
    ];    

    var colFifteen = [
      buttons[14], buttons[30], buttons[46], buttons[62],
      buttons[78], buttons[94], buttons[110], buttons[126],
      buttons[142], buttons[158], buttons[174], buttons[190],
      buttons[206], buttons[222], buttons[238]
    ]; 

    var colSixteen = [
      buttons[15], buttons[31], buttons[47], buttons[63],
      buttons[79], buttons[95], buttons[111], buttons[127],
      buttons[143], buttons[159], buttons[175], buttons[191],
      buttons[207], buttons[223], buttons[239]
    ]; 

    var buttonGrid = [
      colOne, colTwo, colThree, colFour, 
      colFive, colSix, colSeven, colEight,
      colNine, colTen, colEleven, colTwelve,
      colThirteen, colFourteen, colFifteen, colSixteen
    ];

    // var ref_int = 0;
    var index = -1;
    function loopGrid(){
      if (index == 15) { index = -1 };

      index++;

      buttonGrid[index].forEach(function(button){
        if (button.style.background !== "red") {
          button.style.background="lightgrey";
        };
      });

      if (index > 0){
        buttonGrid[index-1].forEach(function(button){
          if (button.style.background !== "red") {
            button.style.background="grey";
          };
        });
      };

      if (index === 0){
          buttonGrid[15].forEach(function(button){
          if (button.style.background !== "red") {
            button.style.background="grey";
          };
        });
      }

      ref_int = setTimeout(loopGrid, (60/track.tempo)*250);
    };

    ref_int = setTimeout(loopGrid, 400);  
  }

  active(e) {
    var btn = e.target;
    var cell = btn.parentNode.cellIndex;
    var row = btn.parentNode.parentNode.rowIndex;

    var table_id = btn.parentNode.parentNode.parentNode.parentNode.id;

    if (btn.style.background != "red") {
      btn.style.background = "red";
      switch(table_id){
      case 'kicktable':
        track.tracks.Kick[cell] = 1;
        break;
      case 'snaretable':
        track.tracks.Snare[cell] = 1;
        break;
      case 'hattable':
        track.tracks.Hat[cell] = 1;
        break;
      case 'synthtable':
        track.tracks.Lead[cell] = notes[row];        
        break;
      default:
        break;
      }
    } 
    else {
      btn.style.background = "grey";
      switch(table_id){
      case 'kicktable':
        track.tracks.Kick[cell] = 0;
        break;
      case 'snaretable':
        track.tracks.Snare[cell] = 0;
        break;
      case 'hattable':
        track.tracks.Hat[cell] = 0;
        break;
      case 'synthtable':
        track.tracks.Lead[cell] = 0;        
        break;
      default:
        break;
      }
    }  
  }

  stopTrack(e){
    ac.close();
    function stopAnime(){
      window.clearTimeout(ref_int);
    };
    stopAnime();
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="below">
          <Sequencer active={this.active} />
          <SettingsPanel stopTrack={this.stopTrack} sound={this.sound} />
        </div>
      </div>
    )
  }
}

export default App;
