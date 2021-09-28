// Upload Sound Files
var PianoKey = new Array();
for (var i = 1; i <= 88; i++) {
  PianoKey[i] = new Audio('./res/e-piano/' + i + '.mp3');
  PianoKey[i].preload = "auto";
}

// 创建KEYMAP API
var KeyMap = new Array(); // Use The SquareArray To Create The KeyBoard
KeyMap["C"] = new Array();
KeyMap["#C"] = new Array();
KeyMap["D"] = new Array();
KeyMap["#D"] = new Array();
KeyMap["E"] = new Array();
KeyMap["F"] = new Array();
KeyMap["#F"] = new Array();
KeyMap["G"] = new Array();
KeyMap["#G"] = new Array();
KeyMap["A"] = new Array();
KeyMap["#A"] = new Array();
KeyMap["B"] = new Array();
//大字二组 0
KeyMap["A"][0] = 1;
KeyMap["#A"][0] = 2;
KeyMap["B"][0] = 3;
//大字一组 1
KeyMap["C"][1] = 4;
KeyMap["#C"][1] = 5;
KeyMap["D"][1] = 6;
KeyMap["#D"][1] = 7;
KeyMap["E"][1] = 8;
KeyMap["F"][1] = 9;
KeyMap["#F"][1] = 10;
KeyMap["G"][1] = 11;
KeyMap["#G"][1] = 12;
KeyMap["A"][1] = 13;
KeyMap["#A"][1] = 14;
KeyMap["B"][1] = 15;
//大字组 2
KeyMap["C"][2] = 16;
KeyMap["#C"][2] = 17;
KeyMap["D"][2] = 18;
KeyMap["#D"][2] = 19;
KeyMap["E"][2] = 20;
KeyMap["F"][2] = 21;
KeyMap["#F"][2] = 22;
KeyMap["G"][2] = 23;
KeyMap["#G"][2] = 24;
KeyMap["A"][2] = 25;
KeyMap["#A"][2] = 26;
KeyMap["B"][2] = 27;
//小字组 3
KeyMap["C"][3] = 28;
KeyMap["#C"][3] = 29;
KeyMap["D"][3] = 30;
KeyMap["#D"][3] = 31;
KeyMap["E"][3] = 32;
KeyMap["F"][3] = 33;
KeyMap["#F"][3] = 34;
KeyMap["G"][3] = 35;
KeyMap["#G"][3] = 36;
KeyMap["A"][3] = 37;
KeyMap["#A"][3] = 38;
KeyMap["B"][3] = 39;
//小字一组 4
KeyMap["C"][4] = 40;
KeyMap["#C"][4] = 41;
KeyMap["D"][4] = 42;
KeyMap["#D"][4] = 43;
KeyMap["E"][4] = 44;
KeyMap["F"][4] = 45;
KeyMap["#F"][4] = 46;
KeyMap["G"][4] = 47;
KeyMap["#G"][4] = 48;
KeyMap["A"][4] = 49;
KeyMap["#A"][4] = 50;
KeyMap["B"][4] = 51;
//小字二组 5
KeyMap["C"][5] = 52;
KeyMap["#C"][5] = 53;
KeyMap["D"][5] = 54;
KeyMap["#D"][5] = 55;
KeyMap["E"][5] = 56;
KeyMap["F"][5] = 57;
KeyMap["#F"][5] = 58;
KeyMap["G"][5] = 59;
KeyMap["#G"][5] = 60;
KeyMap["A"][5] = 61;
KeyMap["#A"][5] = 62;
KeyMap["B"][5] = 63;
//小字三组 6
KeyMap["C"][6] = 64;
KeyMap["#C"][6] = 65;
KeyMap["D"][6] = 66;
KeyMap["#D"][6] = 67;
KeyMap["E"][6] = 68;
KeyMap["F"][6] = 69;
KeyMap["#F"][6] = 70;
KeyMap["G"][6] = 71;
KeyMap["#G"][6] = 72;
KeyMap["A"][6] = 73;
KeyMap["#A"][6] = 74;
KeyMap["B"][6] = 75;
//小字四组 7
KeyMap["C"][7] = 76;
KeyMap["#C"][7] = 77;
KeyMap["D"][7] = 78;
KeyMap["#D"][7] = 79;
KeyMap["E"][7] = 80;
KeyMap["F"][7] = 81;
KeyMap["#F"][7] = 82;
KeyMap["G"][7] = 83;
KeyMap["#G"][7] = 84;
KeyMap["A"][7] = 85;
KeyMap["#A"][7] = 86;
KeyMap["B"][7] = 87;
//小字五组 8
KeyMap["C"][8] = 88;

//定义降号小字组
KeyMap["bD"] = KeyMap["#C"];
KeyMap["bE"] = KeyMap["#D"];
KeyMap["bG"] = KeyMap["#F"];
KeyMap["bA"] = KeyMap["#G"];
KeyMap["bB"] = KeyMap["#A"];

window.pianist = function(M, i, outTime) {
  stop();
  if (!outTime) outTime = 0;
  if (!i) i = 0;
  var speed = M.speed; // It's based on the quarter note, The speed of playing per minute.
  var Music = M.staff;
  var Volume = M.volume;

  // Program Of Music Build 打谱程序
  // setTimeout(function() {
  //   player = setInterval(function() {
  //     if (i >= Music.length) {
  //       return false;
  //     }
  //     for (var j = 0; j < Music[i].length; j++) {
  //       if (Music[i][j][0] != "-") {
  //         setTimeout(function() {
  //           $(".piano-key").removeClass("WKActive");
  //         }, 800)
  //         PianoKey[KeyMap[Music[i][j][0]][Music[i][j][1]]].currentTime = 0;
  //         if (Music[i][j][2] != undefined) {
  //           PianoKey[KeyMap[Music[i][j][0]][Music[i][j][1]]].volume = Music[i][j][2] / 10;
  //           PianoKey[KeyMap[Music[i][j][0]][Music[i][j][1]]].play();
  //         } else {
  //           PianoKey[KeyMap[Music[i][j][0]][Music[i][j][1]]].volume = volumeLv;
  //           PianoKey[KeyMap[Music[i][j][0]][Music[i][j][1]]].play();
  //         }
  //         $(".piano-key[scale=" + KeyMap[Music[i][j][0]][Music[i][j][1]] + "]").addClass("WKActive");
  //       }
  //     }
  //     i++;
  //   }, 60000 / (speed * 8));
  // }, 1000);

  setTimeout(function() {
    player = setInterval(function() {
      if (i >= Music.length) {
        stop();
        i = 0;
        vm.timeAct = i; // 设置播放交互
        console.log('The END');
        return false;
      }
      vm.timeAct = i; // 设置播放交互
      for (var j = 0; j < Music[i].length; j++) {
        if (Music[i][j][0] != "-") {
          createStyle(KeyMap[Music[i][j][0]][Music[i][j][1]], true)
          var MusicK = new Audio('./res/e-piano/' + KeyMap[Music[i][j][0]][Music[i][j][1]] + '.mp3');
          if (Music[i][j][2] != undefined) {
            MusicK.volume = Music[i][j][2] / 10;
            MusicK.play();
          } else {
            MusicK.volume = Volume;
            MusicK.play();
          }
        }
      }
      // “发条”
      i++;
      /* 音符调试处 */
      // if (i >= 8) {
      //   stop();
      // }
    }, 60000 / (speed * 8));
  }, outTime);
  return false;
};

// 键盘创建声音
function createAudio(key, musicalPath, FileType) {
  var musicalPath = musicalPath || './res/e-piano/';
  var FileType = FileType || '.mp3';
  createStyle(key);
  var pianoKeyboard = new Audio(musicalPath + key + FileType);
  pianoKeyboard.volume = KeyboardVol;
  pianoKeyboard.currentTime = 0;
  pianoKeyboard.preload = "auto";
  pianoKeyboard.play();
}

// 键盘创建样式
function createStyle(key, autoClean, time) {
  if ($(".piano-key[scale=" + key + "]").hasClass("whiteKey")) {
    $(".piano-key[scale=" + key + "]").addClass("WKActive");
  } else {
    $(".piano-key[scale=" + key + "]").addClass("BKActive")
  }
  if (autoClean) {
    var time = time || 800;
    setTimeout(function() {
      $(".piano-key[scale=" + key + "]").removeClass("WKActive BKActive")
    }, time)
  }
}

console.groupCollapsed("欢迎来到Piano.js");
console.log('当前版本号: Ver 1.0.0');
console.log('已初步完成所有的预期功能');
console.groupCollapsed("版本号重要功能预告：");
console.log("Ver 1.1: 添加更换MIDI标记颜色功能");
console.log("Ver 1.2: 实现MIDI标记颜色独立，保存与读取时不受当前工作区影响");
console.groupEnd();
console.groupEnd();