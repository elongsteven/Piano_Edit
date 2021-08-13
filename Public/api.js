// Upload Sound Files
var PianoKey = new Array();
for (var i = 1; i <= 88; i++) {
  PianoKey[i] = new Audio('./res/e-piano/' + i + '.mp3');
  PianoKey[i].preload = "auto";
}

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
  //大字二组
  KeyMap["a"][-3] = 1;
  KeyMap["#a"][-3] = 2;
  KeyMap["b"][-3] = 3;
  //大字一组
  KeyMap["c"][-2] = 4;
  KeyMap["#c"][-2] = 5;
  KeyMap["d"][-2] = 6;
  KeyMap["#d"][-2] = 7;
  KeyMap["e"][-2] = 8;
  KeyMap["f"][-2] = 9;
  KeyMap["#f"][-2] = 10;
  KeyMap["g"][-2] = 11;
  KeyMap["#g"][-2] = 12;
  KeyMap["a"][-2] = 13;
  KeyMap["#a"][-2] = 14;
  KeyMap["b"][-2] = 15;
  //大字组
  KeyMap["c"][-1] = 16;
  KeyMap["#c"][-1] = 17;
  KeyMap["d"][-1] = 18;
  KeyMap["#d"][-1] = 19;
  KeyMap["e"][-1] = 20;
  KeyMap["f"][-1] = 21;
  KeyMap["#f"][-1] = 22;
  KeyMap["g"][-1] = 23;
  KeyMap["#g"][-1] = 24;
  KeyMap["a"][-1] = 25;
  KeyMap["#a"][-1] = 26;
  KeyMap["b"][-1] = 27;
  //小字组
  KeyMap["c"][0] = 28;
  KeyMap["#c"][0] = 29;
  KeyMap["d"][0] = 30;
  KeyMap["#d"][0] = 31;
  KeyMap["e"][0] = 32;
  KeyMap["f"][0] = 33;
  KeyMap["#f"][0] = 34;
  KeyMap["g"][0] = 35;
  KeyMap["#g"][0] = 36;
  KeyMap["a"][0] = 37;
  KeyMap["#a"][0] = 38;
  KeyMap["b"][0] = 39;
  //小字一组
  KeyMap["c"][1] = 40;
  KeyMap["#c"][1] = 41;
  KeyMap["d"][1] = 42;
  KeyMap["#d"][1] = 43;
  KeyMap["e"][1] = 44;
  KeyMap["f"][1] = 45;
  KeyMap["#f"][1] = 46;
  KeyMap["g"][1] = 47;
  KeyMap["#g"][1] = 48;
  KeyMap["a"][1] = 49;
  KeyMap["#a"][1] = 50;
  KeyMap["b"][1] = 51;
  //小字二组
  KeyMap["c"][2] = 52;
  KeyMap["#c"][2] = 53;
  KeyMap["d"][2] = 54;
  KeyMap["#d"][2] = 55;
  KeyMap["e"][2] = 56;
  KeyMap["f"][2] = 57;
  KeyMap["#f"][2] = 58;
  KeyMap["g"][2] = 59;
  KeyMap["#g"][2] = 60;
  KeyMap["a"][2] = 61;
  KeyMap["#a"][2] = 62;
  KeyMap["b"][2] = 63;
  //小字三组
  KeyMap["c"][3] = 64;
  KeyMap["#c"][3] = 65;
  KeyMap["d"][3] = 66;
  KeyMap["#d"][3] = 67;
  KeyMap["e"][3] = 68;
  KeyMap["f"][3] = 69;
  KeyMap["#f"][3] = 70;
  KeyMap["g"][3] = 71;
  KeyMap["#g"][3] = 72;
  KeyMap["a"][3] = 73;
  KeyMap["#a"][3] = 74;
  KeyMap["b"][3] = 75;
  //小字四组
  KeyMap["c"][4] = 76;
  KeyMap["#c"][4] = 77;
  KeyMap["d"][4] = 78;
  KeyMap["#d"][4] = 79;
  KeyMap["e"][4] = 80;
  KeyMap["f"][4] = 81;
  KeyMap["#f"][4] = 82;
  KeyMap["g"][4] = 83;
  KeyMap["#g"][4] = 84;
  KeyMap["a"][4] = 85;
  KeyMap["#a"][4] = 86;
  KeyMap["b"][4] = 87;
  //小字五组
  KeyMap["c"][5] = 88;
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
          var MusicK = new Audio('./res/e-piano/' + KeyMap[Music[i][j][0]][Music[i][j][1]] + '.mp3');
          if (Music[i][j][2] != undefined) {
            MusicK.volume = Music[i][j][2] / 10;
            MusicK.play();
          } else {
            MusicK.volume = volumeLv;
            MusicK.play();
          }
          createStyle(KeyMap[Music[i][j][0]][Music[i][j][1]], true)
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