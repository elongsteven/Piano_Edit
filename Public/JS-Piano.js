var volumeLv = 0.2;
var player; // 打谱器

//载入声音文件
var PianoKey = new Array();
for (var i = 1; i <= 88; i++) {
  PianoKey[i] = new Audio('res/' + i + '.mp3');
  PianoKey[i].preload = "auto";
}

window.pianist = function () {
  var speed = 72; //以四分音符为准。每分钟演奏的速度
  //构建键盘表
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

  //打谱程序
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
          setTimeout(function() {
            $(".piano-key").removeClass("WKActive");
          }, 800)
          var MusicK = new Audio('res/' + KeyMap[Music[i][j][0]][Music[i][j][1]] + '.mp3');
          if (Music[i][j][2] != undefined) {
            MusicK.volume = Music[i][j][2] / 10;
            MusicK.play();
          } else {
            MusicK.volume = volumeLv;
            MusicK.play();
          }
          $(".piano-key[scale=" + KeyMap[Music[i][j][0]][Music[i][j][1]] + "]").addClass("WKActive");
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

var Ver8 = 0;

// 效果还原
function cleanAct() {
  $(".piano-key").removeClass("WKActive");
  $(".piano-key").removeClass("BKActive");
}

// 键盘创建声音
function createAudio(e) {
  var pianoKeyboard = new Audio('res/' + e + '.mp3');
  pianoKeyboard.volume = KeyboardVol;
  $(".piano-key[scale=" + e + "]").addClass("BKActive");
  pianoKeyboard.play();
}

// 取消激活样式
function delStyle(e) {
  $(".piano-key[scale=" + e + "]").removeClass("BKActive");
}

var stop = function () {
  clearInterval(player);
}

// 函数锁
var KeyBlocked = [];
var pianoKeymap = [90, 83, 88, 68, 67, 86, 71, 66, 72, 78, 74, 77, 81, 50, 87, 51, 69, 82, 53, 84, 54, 89, 55, 85, 73, 57, 79, 48, 80];

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 189 && KeyBind(90) - 12 >= 1) {
    Ver8 -= 12;
    console.log(Ver8);
  } else if (e.keyCode == 187 && KeyBind(80) + 12 <= 88) {
    Ver8 += 12;
    console.log(Ver8);
  } else if (e.keyCode == 123){
    layer.msg('当你注视源代码时，源代码也在注释着你');
  }
  if (KeyBlocked.indexOf(e.keyCode) == -1 && pianoKeymap.indexOf(e.keyCode) != -1) {
    createAudio(KeyBind(e.keyCode));
    KeyBlocked.push(e.keyCode)
  } else if (KeyBlocked.indexOf(e.keyCode) != -1 && pianoKeymap.indexOf(e.keyCode) != -1) {
    console.log("blocked");
  }
});

document.addEventListener("keyup", function(e) {
  delStyle(KeyBind(e.keyCode))
  KeyBlocked.remove(e.keyCode);
});

// Arr.remove(st);
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

function KeyBind(key) {
  var pianoKey;
  switch (key) {
    case 90: // Z
      pianoKey = 28 + Ver8;
      break;
    case 83: // S
      pianoKey = 29 + Ver8;
      break;
    case 88: // X
      pianoKey = 30 + Ver8;
      break;
    case 68: // D
      pianoKey = 31 + Ver8;
      break;
    case 67: // C
      pianoKey = 32 + Ver8;
      break;
    case 86: // V
      pianoKey = 33 + Ver8;
      break;
    case 71: // G
      pianoKey = 34 + Ver8;
      break;
    case 66: // B
      pianoKey = 35 + Ver8;
      break;
    case 72: // H
      pianoKey = 36 + Ver8;
      break;
    case 78: // N
      pianoKey = 37 + Ver8;
      break;
    case 74: // J
      pianoKey = 38 + Ver8;
      break;
    case 77: // M
      pianoKey = 39 + Ver8;
      break;

    case 81: // Q
      pianoKey = 40 + Ver8;
      break;
    case 50: // 2
      pianoKey = 41 + Ver8;
      break;
    case 87: // W
      pianoKey = 42 + Ver8;
      break;
    case 51: // 3
      pianoKey = 43 + Ver8;
      break;
    case 69: // E
      pianoKey = 44 + Ver8;
      break;
    case 82: // R
      pianoKey = 45 + Ver8;
      break;
    case 53: // 5
      pianoKey = 46 + Ver8;
      break;
    case 84: // T
      pianoKey = 47 + Ver8;
      break;
    case 54: // 6
      pianoKey = 48 + Ver8;
      break;
    case 89: // Y
      pianoKey = 49 + Ver8;
      break;
    case 55: // 7
      pianoKey = 50 + Ver8;
      break;
    case 85: // U
      pianoKey = 51 + Ver8;
      break;

    case 73: // I
      pianoKey = 52 + Ver8;
      break;
    case 57: // 9
      pianoKey = 53 + Ver8;
      break;
    case 79: // O
      pianoKey = 54 + Ver8;
      break;
    case 48: // 0
      pianoKey = 55 + Ver8;
      break;
    case 80: // P
      pianoKey = 56 + Ver8;
      break;



    case 189: // Fn -
      break;
    case 187: // Fn +
      break;
    case 123: // F12
      break;

      // 默认执行项
    default:
      console.log("你按下的键对应的keyCode为： " + key, "该按键未定义");
  }
  return pianoKey;
}