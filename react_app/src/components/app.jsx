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
      1, 0, 0, 0, 1, 0, 0, 0,
      1, 0, 0, 0, 1, 0, 0, 0
    ]
  }
} 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  sound(e) {

    var ac;
    stop = false;
    function note2freq(note) {
      return Math.pow(2, (note - 69) / 12) * 440;
    } 

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
        var lookahead = 0.5;
        if (stop) {
          return;
        }

        if (this.clock() + lookahead > this.nextScheduling) {
          var steps = [];
          steps.push(this.nextScheduling + beatLen / 4);

          for (var i in this.track.tracks) {
            for (var j = 0; j < steps.length; j++) {
              var idx = Math.round(steps[j] / ((beatLen / 4)));
              var note =
        this.track.tracks[i][idx % this.track.tracks[i].length];
              var octave = 1;
              if (note != 0) {
                this[i](steps[j], note * octave);
              }
            }
          }

          this.nextScheduling += (60 / this.track.tempo / 4);
        }
        setTimeout(this.scheduler.bind(this), 15);
      }

      Kick(t){
        var kick = new Kick(this.ac);
        kick.trigger(t);
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

    ac = new AudioContext();
    //gets track from react page
    var s = new Sequencer(ac, track);
    s.start();   
    var buttons = document.getElementsByClassName("dot");

    var colOne = [
      buttons[0], buttons[16], buttons[32], buttons[48],
      buttons[64], buttons[80], buttons[96], buttons[112],
      buttons[128], buttons[144], buttons[160], buttons[176],
    ];

    var colTwo = [
      buttons[1], buttons[17], buttons[33], buttons[49],
      buttons[65], buttons[81], buttons[97], buttons[113],
      buttons[129], buttons[145], buttons[161], buttons[177],
    ];    

    var colThree = [
      buttons[2], buttons[18], buttons[34], buttons[50],
      buttons[66], buttons[82], buttons[98], buttons[114],
      buttons[130], buttons[146], buttons[162], buttons[178],
    ]; 

    var colFour = [
      buttons[3], buttons[19], buttons[35], buttons[51],
      buttons[67], buttons[83], buttons[99], buttons[115],
      buttons[131], buttons[147], buttons[163], buttons[179],
    ]; 

    var colFive = [
      buttons[4], buttons[20], buttons[36], buttons[52],
      buttons[68], buttons[84], buttons[100], buttons[116],
      buttons[132], buttons[148], buttons[164], buttons[180],
    ];

    var colSix = [
      buttons[5], buttons[21], buttons[37], buttons[53],
      buttons[69], buttons[85], buttons[101], buttons[117],
      buttons[133], buttons[149], buttons[165], buttons[181],
    ];    

    var colSeven = [
      buttons[6], buttons[22], buttons[38], buttons[54],
      buttons[70], buttons[86], buttons[102], buttons[118],
      buttons[134], buttons[150], buttons[166], buttons[182],
    ]; 

    var colEight = [
      buttons[7], buttons[23], buttons[39], buttons[55],
      buttons[71], buttons[87], buttons[103], buttons[119],
      buttons[135], buttons[151], buttons[167], buttons[183],
    ]; 

    var colNine = [
      buttons[8], buttons[24], buttons[40], buttons[56],
      buttons[72], buttons[88], buttons[104], buttons[120],
      buttons[136], buttons[152], buttons[168], buttons[184],
    ];

    var colTen = [
      buttons[9], buttons[25], buttons[41], buttons[57],
      buttons[73], buttons[89], buttons[105], buttons[121],
      buttons[137], buttons[153], buttons[169], buttons[185],
    ];    

    var colEleven = [
      buttons[10], buttons[26], buttons[42], buttons[58],
      buttons[74], buttons[90], buttons[106], buttons[122],
      buttons[138], buttons[154], buttons[170], buttons[186],
    ]; 

    var colTwelve = [
      buttons[11], buttons[27], buttons[43], buttons[59],
      buttons[75], buttons[91], buttons[107], buttons[123],
      buttons[139], buttons[155], buttons[171], buttons[187],
    ]; 

    var colThirteen = [
      buttons[12], buttons[28], buttons[44], buttons[60],
      buttons[76], buttons[92], buttons[108], buttons[124],
      buttons[140], buttons[156], buttons[172], buttons[188],
    ];

    var colFourteen = [
      buttons[13], buttons[29], buttons[45], buttons[61],
      buttons[77], buttons[93], buttons[109], buttons[125],
      buttons[141], buttons[157], buttons[173], buttons[189],
    ];    

    var colFifteen = [
      buttons[14], buttons[30], buttons[46], buttons[62],
      buttons[78], buttons[94], buttons[110], buttons[126],
      buttons[142], buttons[158], buttons[174], buttons[190],
    ]; 

    var colSixteen = [
      buttons[15], buttons[31], buttons[47], buttons[63],
      buttons[79], buttons[95], buttons[111], buttons[127],
      buttons[143], buttons[159], buttons[175], buttons[191],
    ]; 

    var buttonGrid = [
      colOne, colTwo, colThree, colFour, 
      colFive, colSix, colSeven, colEight,
      colNine, colTen, colEleven, colTwelve,
      colThirteen, colFourteen, colFifteen, colSixteen
    ];

    var ref_int = 0;
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

      ref_int = setTimeout(loopGrid, (60/track.tempo)*250);
    };

    loopGrid();  
  }

  active(e) {
    var btn = e.target;
    var cell = btn.parentNode.cellIndex;
    var row = btn.parentNode.parentNode.rowIndex;
   
    if (btn.style.background != "red") {
      btn.style.background = "red";
      track.tracks.Kick[cell] = 1;
      console.log(track.tracks.Kick);
    } else {
      btn.style.background = "grey";
    }  
    console.log(cell + "," + row);
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="below">
          <Sequencer active={this.active} />
          <NewPanel />
          <SettingsPanel loop={this.loop} sound={this.sound} />
        </div>
      </div>
    )
  }
}

export default App;
