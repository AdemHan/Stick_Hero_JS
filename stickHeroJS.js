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
  
  // Yapılandırma
 const canvasWidth = 375;               // Tuval genisligi
 const canvasHeight = 375;              // Tuval yuksekligi
 const platformHeight = 100;            // Platform yuksekligi
 const heroDistanceFromEdge = 10;       // Kenardan kahramanin uzakligi (beklerken)
 const paddingX = 100;                  // Kahramanin orijinal tuval boyutundan beklemesi gereken konumu
 const perfectAreaSize = 10;            // Mükemmel bolge boyutu

// Arka plan, kahramandan daha yavas hareket eder
const backgroundSpeedMultiplier = 0.2;  // Arka planın hızını ayarlayan çarpan

// Tepenin 1. kısmı için parametreler
const hill1BaseHeight = 100;            // Tepenin taban yüksekligi
const hill1Amplitude = 10;              // Tepenin genisligi
const hill1Stretch = 1;                 // Tepenin uzatılma oranı

// Tepenin 2. kısmı için parametreler
const hill2BaseHeight = 70;             // Tepenin taban yüksekligi
const hill2Amplitude = 20;              // Tepenin genisligi
const hill2Stretch = 0.5;               // Tepenin uzatilma orani

const stretchingSpeed = 4;              // Bir piksel cizmek icin gecen milisaniye sayisi
const turningSpeed = 4;                 // Bir derece döndürmek icin gecen milisaniye sayisi
const walkingSpeed = 4;                 // Yürüme hızı
const transitioningSpeed = 2;           // Gecis hızı
const fallingSpeed = 2;                 // Dusme hızı

const heroWidth = 17;                   // Kahramanın genisligi
const heroHeight = 30;                  // Kahramanın yüksekligi

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;       // Tuvali tam ekran yapiyorum
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");    // Tuval icin 2D baglam olusturuyorum

const introductionElement = document.getElementById("introduction");    // Tanitim elementi
const perfectElement = document.getElementById("perfect");              // Mukemmel element
const restartButton = document.getElementById("restart");               // Yeniden baslatma dügmesi
const scoreElement = document.getElementById("score");                  // Skor elementi
