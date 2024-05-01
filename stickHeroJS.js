// Javascript'in temel islevlerini genisletiyorum
Array.prototype.last = function () {        // Dizinin son elemanini donduren bir fonksiyon
    return this[this.length - 1];
  };
  
  // Radyanlar yerine dereceleri kabul eden bir sinüs fonksiyonu yaziyorum
  Math.sinus = function (degree) {
    return Math.sin((degree / 180) * Math.PI);      // Derecenin radyana donusumunu yaptim
  };
  
  // Oyun verileri
  let phase = "waiting";    // Bekleme durumu
  let lastTimestamp;        // Onceki requestAnimationFrame dongusunun zaman islemi
  
  let heroX;                // Ileri doGru hareket ettiginde degisir
  let heroY;                // Sadece düstügünde degisir
  let sceneOffset;          // Tüm oyunu hareket ettirir
  
  let platforms = [];       // Platformlar dizisi
  let sticks = [];          // Sopalar dizisi
  let trees = [];           // Agaclar dizisi

  let score = 0;            // Skor girdisi
  