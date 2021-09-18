// Upload Sound Files
var PianoKey = new Array();
for (var i = 1; i <= 88; i++) {
  PianoKey[i] = new Audio('./res/e-piano/' + i + '.mp3');
  PianoKey[i].preload = "auto";
}

// 创建KEYMAP API
window.pianist = function() {
  var speed = 72; // It's based on the quarter note, The speed of playing per minute.
  // Use The SquareArray To Create The KeyBoard
  var KeyMap = new Array();
  KeyMap["c"] = new Array();
  KeyMap["#c"] = new Array();
  KeyMap["d"] = new Array();
  KeyMap["#d"] = new Array();
  KeyMap["e"] = new Array();
  KeyMap["f"] = new Array();
  KeyMap["#f"] = new Array();
  KeyMap["g"] = new Array();
  KeyMap["#g"] = new Array();
  KeyMap["a"] = new Array();
  KeyMap["#a"] = new Array();
  KeyMap["b"] = new Array();
  //大字二组 0
  KeyMap["a"][0] = 1;
  KeyMap["#a"][0] = 2;
  KeyMap["b"][0] = 3;
  //大字一组 1
  KeyMap["c"][1] = 4;
  KeyMap["#c"][1] = 5;
  KeyMap["d"][1] = 6;
  KeyMap["#d"][1] = 7;
  KeyMap["e"][1] = 8;
  KeyMap["f"][1] = 9;
  KeyMap["#f"][1] = 10;
  KeyMap["g"][1] = 11;
  KeyMap["#g"][1] = 12;
  KeyMap["a"][1] = 13;
  KeyMap["#a"][1] = 14;
  KeyMap["b"][1] = 15;
  //大字组 2
  KeyMap["c"][2] = 16;
  KeyMap["#c"][2] = 17;
  KeyMap["d"][2] = 18;
  KeyMap["#d"][2] = 19;
  KeyMap["e"][2] = 20;
  KeyMap["f"][2] = 21;
  KeyMap["#f"][2] = 22;
  KeyMap["g"][2] = 23;
  KeyMap["#g"][2] = 24;
  KeyMap["a"][2] = 25;
  KeyMap["#a"][2] = 26;
  KeyMap["b"][2] = 27;
  //小字组 3
  KeyMap["c"][3] = 28;
  KeyMap["#c"][3] = 29;
  KeyMap["d"][3] = 30;
  KeyMap["#d"][3] = 31;
  KeyMap["e"][3] = 32;
  KeyMap["f"][3] = 33;
  KeyMap["#f"][3] = 34;
  KeyMap["g"][3] = 35;
  KeyMap["#g"][3] = 36;
  KeyMap["a"][3] = 37;
  KeyMap["#a"][3] = 38;
  KeyMap["b"][3] = 39;
  //小字一组 4
  KeyMap["c"][4] = 40;
  KeyMap["#c"][4] = 41;
  KeyMap["d"][4] = 42;
  KeyMap["#d"][4] = 43;
  KeyMap["e"][4] = 44;
  KeyMap["f"][4] = 45;
  KeyMap["#f"][4] = 46;
  KeyMap["g"][4] = 47;
  KeyMap["#g"][4] = 48;
  KeyMap["a"][4] = 49;
  KeyMap["#a"][4] = 50;
  KeyMap["b"][4] = 51;
  //小字二组 5
  KeyMap["c"][5] = 52;
  KeyMap["#c"][5] = 53;
  KeyMap["d"][5] = 54;
  KeyMap["#d"][5] = 55;
  KeyMap["e"][5] = 56;
  KeyMap["f"][5] = 57;
  KeyMap["#f"][5] = 58;
  KeyMap["g"][5] = 59;
  KeyMap["#g"][5] = 60;
  KeyMap["a"][5] = 61;
  KeyMap["#a"][5] = 62;
  KeyMap["b"][5] = 63;
  //小字三组 6
  KeyMap["c"][6] = 64;
  KeyMap["#c"][6] = 65;
  KeyMap["d"][6] = 66;
  KeyMap["#d"][6] = 67;
  KeyMap["e"][6] = 68;
  KeyMap["f"][6] = 69;
  KeyMap["#f"][6] = 70;
  KeyMap["g"][6] = 71;
  KeyMap["#g"][6] = 72;
  KeyMap["a"][6] = 73;
  KeyMap["#a"][6] = 74;
  KeyMap["b"][6] = 75;
  //小字四组 7
  KeyMap["c"][7] = 76;
  KeyMap["#c"][7] = 77;
  KeyMap["d"][7] = 78;
  KeyMap["#d"][7] = 79;
  KeyMap["e"][7] = 80;
  KeyMap["f"][7] = 81;
  KeyMap["#f"][7] = 82;
  KeyMap["g"][7] = 83;
  KeyMap["#g"][7] = 84;
  KeyMap["a"][7] = 85;
  KeyMap["#a"][7] = 86;
  KeyMap["b"][7] = 87;
  //小字五组 8
  KeyMap["c"][8] = 88;
  //定义降号小字组
  KeyMap["bd"] = KeyMap["#c"];
  KeyMap["be"] = KeyMap["#d"];
  KeyMap["bg"] = KeyMap["#f"];
  KeyMap["ba"] = KeyMap["#g"];
  KeyMap["bb"] = KeyMap["#a"];

  // Program Of Music Build 打谱程序
  var i = 0;
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
        return false;
      }
      for (var j = 0; j < Music[i].length; j++) {
        if (Music[i][j][0] != "-") {
          createStyle(KeyMap[Music[i][j][0]][Music[i][j][1]], true)
          var MusicK = new Audio('./res/e-piano/' + KeyMap[Music[i][j][0]][Music[i][j][1]] + '.mp3');
          if (Music[i][j][2] != undefined) {
            MusicK.volume = Music[i][j][2] / 10;
            MusicK.play();
          } else {
            MusicK.volume = volumeLv;
            MusicK.play();
          }
        }
      }
      i++;
      // if (i >= 8) {
      //   stop();
      // }
    }, 60000 / (speed * 8));
  }, 3000);
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