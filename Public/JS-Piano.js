var player; // Builder 打谱器
var Ver8 = 0; // KeyBoard ±Ver8

// 效果还原
function cleanAct() {
  $(".piano-key").removeClass("WKActive BKActive");
}

// 取消激活样式
function delStyle(e) {
  $(".piano-key[scale=" + e + "]").removeClass("BKActive WKActive");
}

var stop = function() {
  clearInterval(player);
}


/* JSON Localhost S/L */
function fileLoader() {
  var selectedFile = document.getElementById("files").files[0]; //获取读取的File对象
  var name = selectedFile.name; //读取选中文件的文件名
  var size = selectedFile.size; //读取选中文件的大小
  console.log("文件名:" + name + "大小：" + size);
  var reader = new FileReader(); //这里是核心！！！读取操作就是由它完成的。
  reader.readAsText(selectedFile); //读取文件的内容

  reader.onload = function() {
    console.log("读取结果：", this.result); //当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。

    console.log("读取结果转为JSON：");
    let json = JSON.parse(this.result);
    console.log(json);
  };
}

function fileSaver(data, FileName) {
  if (!data || typeof data == 'function') {
    alert("无效数据！");
    return false;
  }
  if (!FileName) FileName = "save.json";
  if (FileName.indexOf(".json") == -1) FileName = FileName + ".json";

  var content = JSON.stringify(data);
  var blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, FileName);
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
  } else if (e.keyCode == 123) {
    layer.msg('当你注视源代码时，源代码也在注释着你');
  }
  if (KeyBlocked.indexOf(e.keyCode) == -1 && pianoKeymap.indexOf(e.keyCode) != -1) {
    createAudio(KeyBind(e.keyCode));
    KeyBlocked.push(e.keyCode)
  } else if (KeyBlocked.indexOf(e.keyCode) != -1 && pianoKeymap.indexOf(e.keyCode) != -1) {
    console.log("blocked");
  }
  // 阻止Ctrl+S
  if (e.ctrlKey == true && e.keyCode == 83) {
    layer.msg('正在保存...');
    e.preventDefault(); // 或者 return false;
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
      console.log("未定义键：", key);
  }
  return pianoKey;
}