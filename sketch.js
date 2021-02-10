
var PLAY=1;
var END=0;
var gameState=PLAY;

var obs1,obs2,obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10;
var obs11,obs12,obs13,obs14,obs15,obs16,obs17,obs18,obs19,obs20;
var obs21,obs22,obs23,obs24,obs25,obs26,obs27,obs28,obs29,obs30;
var obs31,obs32,obs33,obs34,obs35,obs36,obs37,obs38,obs39,obs40;
var obs41,obs42,obs43;

var fd1,fd2,fd3,fd4,fd5,fd6,fd7,fd8,fd9,fd10,fd11,fd12,fd13,fd14,fd15;
var fd16,fd17,fd18,fd19,fd20,fd21,fd22,fd23,fd24,fd25,fd26,fd27,fd28,fd29,fd30;
var fd31,fd32,fd33,fd34,fd35,fd36,fd37,fd38,fd39,fd40,fd41,fd42,fd43,fd44,fd45;
var fd46,fd47,fd48,fd49,fd50,fd51,fd52,fd53,fd54,fd55,fd56,fd57,fd58,fd59,fd60;
var fd61,fd62,fd63,fd64,fd65,fd66,fd67,fd68,fd69,fd70,fd71,fd72,fd73,fd74,fd75;
var fd76,fd77,fd78,fd79,fd80,fd81,fd82,fd83,fd84,fd85,fd86,fd87,fd88,fd89,fd90;
var fd91,fd92,fd93,fd94,fd95,fd95,fd97,fd98,fd99,fd100,fd101,fd102,fd103,fd104;
var fd105,fd106,fd107,fd108,fd109,fd110,fd111,fd112,fd113,fd114,fd115,fd116,fd117;
var fd118,fd119,fd120,fd121,fd122,fd123,fd124,fd125,fd126,fd127,fd128,fd129,fd130;
var fd131,fd132,fd133,fd134,fd135,fd136,fd137,fd138,fd139,fd140,fd141,fd142,fd143;
var fd144,fd145,fd146,fd147,fd148,fd149,fd150,fd151,fd152,fd153,fd154,fd155,fd156;
var fd157,fd158,fd159,fd160,fd161,fd162,fd163,fd164,fd165,fd166,fd167,fd168,fd169;
var fd170,fd171,fd172,fd173,fd174;

var score_p1=0;
var score_p2=0;

var Gun,Gunimg;


var pkman1,pkman2,pkman1img,pkman2img;
function preload() {
  pkman1img=loadImage("images/pacman_1.jpg");
  pkman2img=loadImage("images/Pacman_2.png");

  
}

function setup() {
  //Creating canvas

  createCanvas(1200,600);

  // creating Obsacles
 

  
  obs1 = createSprite(600,1,1200,20);
  obs1.shapeColor="Black";

  obs2 = createSprite(1200,1,20,1200);
  obs2.shapeColor="Black";
  
  obs3 = createSprite(1,1,20,1200);
  obs3.shapeColor="Black";
  
  obs4 = createSprite(600,595,1200,20);
  obs4.shapeColor="Black";
  
  obs5 = createSprite(120,56,100,20);
  obs5.shapeColor="Black";
  
  obs6 = createSprite(80,120,20,120);
  obs6.shapeColor="Black";
  
  obs7 = createSprite(119,188,100,20);
  obs7.shapeColor="Black";
  
  obs8 = createSprite(70,260,200,20);
  obs8.shapeColor="Black";
  
  obs9 = createSprite(160,300,20,100);
  obs9.shapeColor="Black";
  
  obs10 = createSprite(70,350,200,20);
  obs10.shapeColor="Black";

  obs11 = createSprite(82,520,20,150);
  obs11.shapeColor="Black";

  obs12 = createSprite(300,57,100,20);
  obs12.shapeColor="Black";

  obs13 = createSprite(360,117,20,140);
  obs13.shapeColor="Black";

  obs14 = createSprite(235,305,20,100);
  obs14.shapeColor="Black";

  obs15 = createSprite(269,188,200,20);
  obs15.shapeColor="Black";

  obs16 = createSprite(200,433,100,20);
  obs16.shapeColor="Black";

  obs17 = createSprite(177,544,20,100);
  obs17.shapeColor="Black";

  obs18 = createSprite(456,109,20,200);
  obs18.shapeColor="Black";

  obs19 = createSprite(560,100,200,20);
  obs19.shapeColor="Black";

  obs20 = createSprite(352,290,100,20);
  obs20.shapeColor="Black";

  obs21 = createSprite(340,410,20,100);
  obs21.shapeColor="Black";

  obs22 = createSprite(286,529,100,20);
  obs22.shapeColor="Black";

  obs23 = createSprite(429,422,20,150);
  obs23.shapeColor="Black";

  obs24 = createSprite(520,357,180,20);
  obs24.shapeColor="Black";

  obs25 = createSprite(617,417,20,140);
  obs25.shapeColor="Black";

  obs26 = createSprite(577,485,100,20);
  obs26.shapeColor="Black";

  obs27 = createSprite(548,230,20,120);
  obs27.shapeColor="Black";

  obs28 = createSprite(697,510,20,150);
  obs28.shapeColor="Black";

  obs29 = createSprite(720,236,180,20);
  obs29.shapeColor="Black";

  obs30 = createSprite(750,228,20,200);
  obs30.shapeColor="Black";

  obs31 = createSprite(820,70,200,20);
  obs31.shapeColor="Black";

  obs32 = createSprite(847,395,200,20);
  obs32.shapeColor="Black";

  obs33 = createSprite(870,241,20,150);
  obs33.shapeColor="Black";

  obs34 = createSprite(808,450,20,100);
  obs34.shapeColor="Black";

  obs35 = createSprite(910,310,100,20);
  obs35.shapeColor="Black";

  obs36 = createSprite(1026,391,20,200);
  obs36.shapeColor="Black";

  obs37 = createSprite(969,481,100,20);
  obs37.shapeColor="Black";

  obs38 = createSprite(1114,537,20,100);
  obs38.shapeColor="Black";

  obs39 = createSprite(1050,217,150,20);
  obs39.shapeColor="Black";

  obs40 = createSprite(1115,313,20,180);
  obs40.shapeColor="Black";

  obs41 = createSprite(1050,75,100,20);
  obs41.shapeColor="Black";

  obs42 = createSprite(1100,115,20,100);
  obs42.shapeColor="Black";

  obs43 = createSprite(1000,145,20,20);
  obs43.shapeColor="Black";

//Creating Foods
 
  fd1 = createSprite(40,30,10,10);
  fd1.shapeColor="Black";

  fd2 = createSprite(40,80,10,10);
  fd2.shapeColor="Black";

  fd3 = createSprite(40,130,10,10);
  fd3.shapeColor="Black";

  fd4 = createSprite(40,180,10,10);
  fd4.shapeColor="Black";

  fd5 = createSprite(40,230,10,10);
  fd5.shapeColor="Black";

  fd6 = createSprite(90,230,10,10);
  fd6.shapeColor="Black";

  fd7 = createSprite(140,230,10,10);
  fd7.shapeColor="Black";

  fd8 = createSprite(190,230,10,10);
  fd8.shapeColor="Black";

  fd9 = createSprite(240,230,10,10);
  fd9.shapeColor="Black";

  fd10 = createSprite(290,230,10,10);
  fd10.shapeColor="Black";

  fd11 = createSprite(340,230,10,10);
  fd11.shapeColor="Black";

  fd12 = createSprite(447,253,10,10);
  fd12.shapeColor="Black";

  fd13 = createSprite(90,30,10,10);
  fd13.shapeColor="Black";

  fd14 = createSprite(140,30,10,10);
  fd14.shapeColor="Black";

  fd15 = createSprite(190,30,10,10);
  fd15.shapeColor="Black";

  fd16 = createSprite(240,30,10,10);
  fd16.shapeColor="Black";

  fd17 = createSprite(290,30,10,10);
  fd17.shapeColor="Black";

  fd18 = createSprite(340,30,10,10);
  fd18.shapeColor="Black";

  fd19 = createSprite(405,30,10,10);
  fd19.shapeColor="Black";

  fd20 = createSprite(405,80,10,10);
  fd20.shapeColor="Black";

  fd21 = createSprite(405,130,10,10);
  fd21.shapeColor="Black";

  fd22 = createSprite(405,180,10,10);
  fd22.shapeColor="Black";

  fd23 = createSprite(405,230,10,10);
  fd23.shapeColor="Black";

  fd24 = createSprite(497,253,10,10);
  fd24.shapeColor="Black";

  fd25 = createSprite(497,203,10,10);
  fd25.shapeColor="Black";

  fd26 = createSprite(497,153,10,10);
  fd26.shapeColor="Black";

  fd27 = createSprite(497,303,10,10);
  fd27.shapeColor="Black";

  fd28 = createSprite(447,303,10,10);
  fd28.shapeColor="Black";

  fd29 = createSprite(193,273,10,10);
  fd29.shapeColor="Black";

  fd30 = createSprite(193,323,10,10);
  fd30.shapeColor="Black";

  fd31 = createSprite(30,397,10,10);
  fd31.shapeColor="Black";

  fd32 = createSprite(80,397,10,10);
  fd32.shapeColor="Black";

  fd33 = createSprite(130,397,10,10);
  fd33.shapeColor="Black";

  fd34 = createSprite(180,397,10,10);
  fd34.shapeColor="Black";

  fd35 = createSprite(230,397,10,10);
  fd35.shapeColor="Black";

  fd36 = createSprite(272,269,10,10);
  fd36.shapeColor="Black";

  fd37 = createSprite(272,319,10,10);
  fd37.shapeColor="Black";
  
  fd38 = createSprite(272,369,10,10);
  fd38.shapeColor="Black";

  fd39 = createSprite(313,328,10,10);
  fd39.shapeColor="Black";

  fd40 = createSprite(363,328,10,10);
  fd40.shapeColor="Black";

  fd41 = createSprite(413,328,10,10);
  fd41.shapeColor="Black";

  fd42 = createSprite(380,373,10,10);
  fd42.shapeColor="Black";

  fd43 = createSprite(380,423,10,10);
  fd43.shapeColor="Black";

  fd44 = createSprite(380,473,10,10);
  fd44.shapeColor="Black";
  
  fd45 = createSprite(300,402,10,10);
  fd45.shapeColor="Black";

  fd46 = createSprite(300,452,10,10);
  fd46.shapeColor="Black";

  fd47 = createSprite(300,502,10,10);
  fd47.shapeColor="Black";

  fd48 = createSprite(315,562,10,10);
  fd48.shapeColor="Black";

  fd49 = createSprite(265,562,10,10);
  fd49.shapeColor="Black";

  fd50 = createSprite(215,562,10,10);
  fd50.shapeColor="Black";

  fd51 = createSprite(215,512,10,10);
  fd51.shapeColor="Black";

  fd52 = createSprite(215,462,10,10);
  fd52.shapeColor="Black";

  fd53 = createSprite(255,480,10,10);
  fd53.shapeColor="Black";

  fd54 = createSprite(160,467,10,10);
  fd54.shapeColor="black";

  fd55 = createSprite(120,467,10,10);
  fd55.shapeColor="black";

  fd56 = createSprite(130,517,10,10);
  fd56.shapeColor="black";
  
  fd57 = createSprite(130,567,10,10);
  fd57.shapeColor="black";

  fd58 = createSprite(40,438,10,10);
  fd58.shapeColor="black";

  fd59 = createSprite(40,488,10,10);
  fd59.shapeColor="black";

  fd60 = createSprite(40,538,10,10);
  fd60.shapeColor="black";

  fd61 = createSprite(380,515,10,10);
  fd61.shapeColor="black";

  fd62 = createSprite(380,560,10,10);
  fd62.shapeColor="black";

  fd63 = createSprite(430,535,10,10);
  fd63.shapeColor="black";

  fd64 = createSprite(480,535,10,10);
  fd64.shapeColor="black";

  fd65 = createSprite(530,535,10,10);
  fd65.shapeColor="black";

  fd66 = createSprite(580,535,10,10);
  fd66.shapeColor="black";

  fd67 = createSprite(630,535,10,10);
  fd67.shapeColor="black";

  fd68 = createSprite(657,485,10,10);
  fd68.shapeColor="black";

  fd69 = createSprite(657,435,10,10);
  fd69.shapeColor="black";

  fd70 = createSprite(657,385,10,10);
  fd70.shapeColor="black";

  fd71 = createSprite(707,385,10,10);
  fd71.shapeColor="black";

  fd72 = createSprite(707,335,10,10);
  fd72.shapeColor="black";

  fd73 = createSprite(707,285,10,10);
  fd73.shapeColor="black";

  fd74 = createSprite(657,2855,10,10);
  fd74.shapeColor="black";

  fd75 = createSprite(657,335,10,10);
  fd75.shapeColor="black";

  fd76 = createSprite(657,285,10,10);
  fd76.shapeColor="black";

  fd76 = createSprite(607,285,10,10);
  fd76.shapeColor="black";

  fd76 = createSprite(607,335,10,10);
  fd76.shapeColor="black";

  fd77 = createSprite(547,320,10,10);
  fd77.shapeColor="black";

  fd78 = createSprite(590,235,10,10);
  fd78.shapeColor="black";

  fd79 = createSprite(590,185,10,10);
  fd79.shapeColor="black";

  fd80 = createSprite(590,185,10,10);
  fd80.shapeColor="black";

  fd81 = createSprite(590,135,10,10);
  fd81.shapeColor="black";

  fd82 = createSprite(540,135,10,10);
  fd82.shapeColor="black";

  fd83 = createSprite(500,43,10,10);
  fd83.shapeColor="black";

  fd84 = createSprite(550,43,10,10);
  fd84.shapeColor="black";

  fd85 = createSprite(600,43,10,10);
  fd85.shapeColor="black";

  fd86 = createSprite(650,43,10,10);
  fd86.shapeColor="black";

  fd87 = createSprite(700,43,10,10);
  fd87.shapeColor="black";

  fd88 = createSprite(700,93,10,10);
  fd88.shapeColor="black";

  fd89 = createSprite(700,143,10,10);
  fd89.shapeColor="black";

  fd90 = createSprite(700,193,10,10);
  fd90.shapeColor="black";

  fd90 = createSprite(700,193,10,10);
  fd90.shapeColor="black";

  fd91 = createSprite(646,139,10,10);
  fd91.shapeColor="black";

  fd92 = createSprite(646,189,10,10);
  fd92.shapeColor="black";

  fd93 = createSprite(750,33,10,10);
  fd93.shapeColor="black";

  fd94 = createSprite(800,33,10,10);
  fd94.shapeColor="black";

  fd95 = createSprite(850,33,10,10);
  fd95.shapeColor="black";

  fd96 = createSprite(900,33,10,10);
  fd96.shapeColor="black";

  fd97 = createSprite(950,33,10,10);
  fd97.shapeColor="black";

  fd98 = createSprite(1000,33,10,10);
  fd98.shapeColor="black";

  fd99 = createSprite(1050,33,10,10);
  fd99.shapeColor="black";

  fd100 = createSprite(1100,33,10,10);
  fd100.shapeColor="black";

  fd101 = createSprite(1150,83,10,10);
  fd101.shapeColor="black";

  fd102 = createSprite(1150,133,10,10);
  fd102.shapeColor="black";

  fd103 = createSprite(1150,183,10,10);
  fd103.shapeColor="black";

  fd104 = createSprite(1150,233,10,10);
  fd104.shapeColor="black";

  fd105 = createSprite(1150,283,10,10);
  fd105.shapeColor="black";

  fd106 = createSprite(1150,333,10,10);
  fd106.shapeColor="black";

  fd107 = createSprite(1150,383,10,10);
  fd107.shapeColor="black";

  fd108 = createSprite(1150,433,10,10);
  fd108.shapeColor="black";

  fd109 = createSprite(1150,33,10,10);
  fd109.shapeColor="black";

  fd110 = createSprite(1150,483,10,10);
  fd110.shapeColor="black";

  fd111 = createSprite(1150,533,10,10);
  fd111.shapeColor="black";

  fd112 = createSprite(750,439,10,10);
  fd112.shapeColor="black";

  fd113 = createSprite(750,489,10,10);
  fd113.shapeColor="black";

  fd114 = createSprite(750,539,10,10);
  fd114.shapeColor="black";

  fd115 = createSprite(800,539,10,10);
  fd115.shapeColor="black";

  fd116 = createSprite(850,539,10,10);
  fd116.shapeColor="black";

  fd117 = createSprite(900,539,10,10);
  fd117.shapeColor="black";

  fd118 = createSprite(950,539,10,10);
  fd118.shapeColor="black";

  fd119 = createSprite(1000,539,10,10);
  fd119.shapeColor="black";

  fd120 = createSprite(1050,539,10,10);
  fd120.shapeColor="black";

  fd121 = createSprite(1070,489,10,10);
  fd121.shapeColor="black";

  fd122 = createSprite(1070,439,10,10);
  fd122.shapeColor="black";

  fd123 = createSprite(1070,389,10,10);
  fd123.shapeColor="black";

  fd124 = createSprite(1070,339,10,10);
  fd124.shapeColor="black";

  fd125 = createSprite(1070,289,10,10);
  fd125.shapeColor="black";

  fd126 = createSprite(1024,255,10,10);
  fd126.shapeColor="black";

  fd127 = createSprite(974,255,10,10);
  fd127.shapeColor="black";

  fd128 = createSprite(924,255,10,10);
  fd128.shapeColor="black";

  fd129 = createSprite(874,255,10,10);
  fd129.shapeColor="black";

  fd130 = createSprite(923,205,10,10);
  fd130.shapeColor="black";

  fd131 = createSprite(923,155,10,10);
  fd131.shapeColor="black";

  fd132 = createSprite(923,105,10,10);
  fd132.shapeColor="black";

  fd130 = createSprite(962,69,10,10);
  fd130.shapeColor="black";

  fd131 = createSprite(1050,187,10,10);
  fd131.shapeColor="black";

  fd132 = createSprite(1050,137,10,10);
  fd132.shapeColor="black";

  fd133 = createSprite(1000,110,10,10);
  fd133.shapeColor="black";

  fd134 = createSprite(982,437,10,10);
  fd134.shapeColor="black";

  fd135 = createSprite(982,387,10,10);
  fd135.shapeColor="black";

  fd136 = createSprite(982,337,10,10);
  fd136.shapeColor="black";

  fd137 = createSprite(932,437,10,10);
  fd137.shapeColor="black";

  fd138 = createSprite(882,437,10,10);
  fd138.shapeColor="black";

  fd139 = createSprite(832,437,10,10);
  fd139.shapeColor="black";

  fd140 = createSprite(882,487,10,10);
  fd140.shapeColor="black";

  fd141 = createSprite(832,487,10,10);
  fd141.shapeColor="black";

  fd142 = createSprite(932,353,10,10);
  fd142.shapeColor="black";

  fd143 = createSprite(882,353,10,10);
  fd143.shapeColor="black";

  fd144 = createSprite(832,353,10,10);
  fd144.shapeColor="black";

  fd145 = createSprite(782,353,10,10);
  fd145.shapeColor="black";

  fd146 = createSprite(782,303,10,10);
  fd146.shapeColor="black";

  fd147 = createSprite(832,303,10,10);
  fd147.shapeColor="black";

  fd148 = createSprite(832,253,10,10);
  fd148.shapeColor="black";

  fd149 = createSprite(832,203,10,10);
  fd149.shapeColor="black";

  fd150 = createSprite(832,153,10,10);
  fd150.shapeColor="black";

  fd151 = createSprite(832,103,10,10);
  fd151.shapeColor="black";

  fd152 = createSprite(877,153,10,10);
  fd152.shapeColor="black";

  fd153 = createSprite(877,103,10,10);
  fd153.shapeColor="black";

  fd154 = createSprite(877,103,10,10);
  fd154.shapeColor="black";

  fd155 = createSprite(777,103,10,10);
  fd155.shapeColor="black";

  fd156 = createSprite(777,153,10,10);
  fd156.shapeColor="black";

  fd157 = createSprite(777,203,10,10);
  fd157.shapeColor="black";

  fd158 = createSprite(210,90,10,10);
  fd158.shapeColor="black";

  fd159 = createSprite(160,90,10,10);
  fd159.shapeColor="black";

  fd160 = createSprite(110,90,10,10);
  fd160.shapeColor="black";

  fd161 = createSprite(260,90,10,10);
  fd161.shapeColor="black";

  fd162 = createSprite(310,90,10,10);
  fd162.shapeColor="black";

  fd163 = createSprite(310,140,10,10);
  fd163.shapeColor="black";

  fd164 = createSprite(260,140,10,10);
  fd164.shapeColor="black";

  fd165 = createSprite(210,140,10,10);
  fd165.shapeColor="black";

  fd166 = createSprite(160,140,10,10);
  fd166.shapeColor="black";

  fd167 = createSprite(110,140,10,10);
  fd167.shapeColor="black";

  fd168 = createSprite(480,484,10,10);
  fd168.shapeColor="black";

  fd169 = createSprite(480,434,10,10);
  fd169.shapeColor="black";

  fd170 = createSprite(480,384,10,10);
  fd170.shapeColor="black";

  fd171 = createSprite(530,434,10,10);
  fd171.shapeColor="black";

  fd172 = createSprite(580,434,10,10);
  fd172.shapeColor="black";

  fd173 = createSprite(580,384,10,10);
  fd173.shapeColor="black";

  fd174 = createSprite(530,384,10,10);
  fd174.shapeColor="black";

  // pacmans

  pkman1 = createSprite(38,572,10,10);
  pkman1.addImage(pkman1img);
  pkman1.scale=0.04;

  pkman2 = createSprite(1160,570,10,10);
  pkman2.addImage(pkman2img);
  pkman2.scale=0.04;
  
  Food=[fd1,fd2,fd3,fd4,fd5,fd6,fd7,fd8,fd9,fd10,fd11,fd12,fd13,fd14,fd15,fd16,fd17,fd18,fd19,fd20,fd21,fd22,fd23,fd24,fd25,fd26,fd27,fd28,fd29,fd30,fd31,fd32,fd33,fd34,fd35,fd36,fd37,fd38,fd39,fd40,fd41,fd42,fd43,fd44,fd45,fd46,fd47,fd48,fd49,fd50,fd51,fd52,fd53,fd54,fd55,fd56,fd57,fd58,fd59,fd60,fd61,fd62,fd63,fd64,fd65,fd66,fd67,fd68,fd69,fd70,fd71,fd72,fd73,fd74,fd75,fd76,fd77,fd78,fd79,fd80,fd81,fd82,fd83,fd84,fd85,fd86,fd87,fd88,fd89,fd90,fd91,fd92,fd93,fd94,fd95,fd95,fd97,fd98,fd99,fd100,fd101,fd102,fd103,fd104,fd105,fd106,fd107,fd108,fd109,fd110,fd111,fd112,fd113,fd114,fd115,fd116,fd117,fd118,fd119,fd120,fd121,fd122,fd123,fd124,fd125,fd126,fd127,fd128,fd129,fd130,fd131,fd132,fd133,fd134,fd135,fd136,fd137,fd138,fd139,fd140,fd141,fd142,fd143,fd144,fd145,fd146,fd147,fd148,fd149,fd150,fd151,fd152,fd153,fd154,fd155,fd156,fd157,fd158,fd159,fd160,fd161,fd162,fd163,fd164,fd165,fd166,fd167,fd168,fd169,fd170,fd171,fd172,fd173,fd174];

}

function draw() {

  background("White");
  if(gameState===1){

    drawSprites();

    if(keyDown("UP_ARROW")) {
      pkman1.y = pkman1.y-5;
    }
  
    if(keyDown("DOWN_ARROW")) {
      pkman1.y = pkman1.y+5;
    }
  
    if(keyDown("LEFT_ARROW")) {
      pkman1.x = pkman1.x-5;
    }
  
    if(keyDown("RIGHT_ARROW")) {
      pkman1.x = pkman1.x+5;
    }
  
    if(keyDown("W")) {
      pkman2.y = pkman2.y-5;
    }
  
    if(keyDown("S")) {
      pkman2.y = pkman2.y+5;
    }
  
    if(keyDown("A")) {
      pkman2.x = pkman2.x-5;
    }
  
    if(keyDown("D")) {
      pkman2.x = pkman2.x+5;
    }
  
    pkman1.bounceOff(obs1);
    pkman1.bounceOff(obs2);
    pkman1.bounceOff(obs3);
    pkman1.bounceOff(obs4);
    pkman1.bounceOff(obs5);
    pkman1.bounceOff(obs6);
    pkman1.bounceOff(obs7);
    pkman1.bounceOff(obs8);
    pkman1.bounceOff(obs9);
    pkman1.bounceOff(obs10);
    pkman1.bounceOff(obs11);
    pkman1.bounceOff(obs12);
    pkman1.bounceOff(obs13);
    pkman1.bounceOff(obs14);
    pkman1.bounceOff(obs15);
    pkman1.bounceOff(obs16);
    pkman1.bounceOff(obs17);
    pkman1.bounceOff(obs18);
    pkman1.bounceOff(obs19);
    pkman1.bounceOff(obs20);
    pkman1.bounceOff(obs21);
    pkman1.bounceOff(obs22);
    pkman1.bounceOff(obs23);
    pkman1.bounceOff(obs24);
    pkman1.bounceOff(obs25);
    pkman1.bounceOff(obs26);
    pkman1.bounceOff(obs27);
    pkman1.bounceOff(obs28);
    pkman1.bounceOff(obs29);
    pkman1.bounceOff(obs30);
    pkman1.bounceOff(obs31);
    pkman1.bounceOff(obs32);
    pkman1.bounceOff(obs33);
    pkman1.bounceOff(obs34);
    pkman1.bounceOff(obs35);
    pkman1.bounceOff(obs36);
    pkman1.bounceOff(obs37);
    pkman1.bounceOff(obs38);
    pkman1.bounceOff(obs39);
    pkman1.bounceOff(obs40);
    pkman1.bounceOff(obs41);
    pkman1.bounceOff(obs42);
    pkman1.bounceOff(obs43);
  
    pkman2.bounceOff(obs1);
    pkman2.bounceOff(obs2);
    pkman2.bounceOff(obs3);
    pkman2.bounceOff(obs4);
    pkman2.bounceOff(obs5);
    pkman2.bounceOff(obs6);
    pkman2.bounceOff(obs7);
    pkman2.bounceOff(obs8);
    pkman2.bounceOff(obs9);
    pkman2.bounceOff(obs10);
    pkman2.bounceOff(obs11);
    pkman2.bounceOff(obs12);
    pkman2.bounceOff(obs13);
    pkman2.bounceOff(obs14);
    pkman2.bounceOff(obs15);
    pkman2.bounceOff(obs16);
    pkman2.bounceOff(obs17);
    pkman2.bounceOff(obs18);
    pkman2.bounceOff(obs19);
    pkman2.bounceOff(obs20);
    pkman2.bounceOff(obs21);
    pkman2.bounceOff(obs22);
    pkman2.bounceOff(obs23);
    pkman2.bounceOff(obs24);
    pkman2.bounceOff(obs25);
    pkman2.bounceOff(obs26);
    pkman2.bounceOff(obs27);
    pkman2.bounceOff(obs28);
    pkman2.bounceOff(obs29);
    pkman2.bounceOff(obs30);
    pkman2.bounceOff(obs31);
    pkman2.bounceOff(obs32);
    pkman2.bounceOff(obs33);
    pkman2.bounceOff(obs34);
    pkman2.bounceOff(obs35);
    pkman2.bounceOff(obs36);
    pkman2.bounceOff(obs37);
    pkman2.bounceOff(obs38);
    pkman2.bounceOff(obs39);
    pkman2.bounceOff(obs40);
    pkman2.bounceOff(obs41);
    pkman2.bounceOff(obs42);
    pkman2.bounceOff(obs43);
  
  
    if(pkman1.isTouching(fd1)) {
      fd1.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd2)) {
      fd2.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd3)) {
      fd3.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd4)) {
      fd4.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd5)) {
      fd5.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd6)) {
      fd6.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd7)) {
      fd7.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd8)) {
      fd8.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd9)) {
      fd9.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd10)) {
      fd10.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd11)) {
      fd11.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd12)) {
      fd12.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd13)) {
      fd13.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd14)) {
      fd14.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd15)) {
      fd15.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd16)) {
      fd16.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd17)) {
      fd17.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd18)) {
      fd18.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd19)) {
      fd19.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd20)) {
      fd20.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd21)) {
      fd21.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd22)) {
      fd22.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd23)) {
      fd23.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd24)) {
      fd24.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd25)) {
      fd25.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd26)) {
      fd26.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd27)) {
      fd27.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd28)) {
      fd28.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd29)) {
      fd29.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd30)) {
      fd30.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd31)) {
      fd31.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd32)) {
      fd32.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd33)) {
      fd33.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd34)) {
      fd34.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd35)) {
      fd35.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd36)) {
      fd36.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd37)) {
      fd37.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd38)) {
      fd38.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd39)) {
      fd39.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd40)) {
      fd40.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd41)) {
      fd41.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd42)) {
      fd42.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd43)) {
      fd43.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd44)) {
      fd44.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd45)) {
      fd45.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd46)) {
      fd46.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd47)) {
      fd47.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd48)) {
      fd48.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd49)) {
      fd49.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd50)) {
      fd50.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd51)) {
      fd51.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd52)) {
      fd52.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd53)) {
      fd53.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd54)) {
      fd54.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd55)) {
      fd55.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd56)) {
      fd56.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd57)) {
      fd57.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd58)) {
      fd58.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd59)) {
      fd59.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd60)) {
      fd60.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd61)) {
      fd61.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd62)) {
      fd62.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd63)) {
      fd63.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd64)) {
      fd64.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd65)) {
      fd65.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd66)) {
      fd66.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd67)) {
      fd67.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd68)) {
      fd68.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd69)) {
      fd69.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd70)) {
      fd70.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd71)) {
      fd71.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd72)) {
      fd72.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd73)) {
      fd73.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd74)) {
      fd74.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd75)) {
      fd75.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd76)) {
      fd76.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd77)) {
      fd77.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd78)) {
      fd78.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd79)) {
      fd79.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd80)) {
      fd80.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd81)) {
      fd81.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd82)) {
      fd82.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd83)) {
      fd83.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd84)) {
      fd84.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd85)) {
      fd85.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd86)) {
      fd86.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd87)) {
      fd87.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd88)) {
      fd88.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd89)) {
      fd89.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd90)) {
      fd90.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd91)) {
      fd91.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd92)) {
      fd92.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd93)) {
      fd93.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd94)) {
      fd94.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd95)) {
      fd95.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd96)) {
      fd96.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd97)) {
      fd97.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd98)) {
      fd98.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd99)) {
      fd99.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd100)) {
      fd100.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd101)) {
      fd101.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd102)) {
      fd102.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd103)) {
      fd103.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd104)) {
      fd104.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd105)) {
      fd105.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd106)) {
      fd106.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd107)) {
      fd107.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd108)) {
      fd108.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd109)) {
      fd109.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd110)) {
      fd110.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd111)) {
      fd111.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd112)) {
      fd112.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd113)) {
      fd113.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd114)) {
      fd114.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd115)) {
      fd115.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd116)) {
      fd116.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd117)) {
      fd117.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd118)) {
      fd118.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd119)) {
      fd119.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd120)) {
      fd120.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd121)) {
      fd121.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd122)) {
      fd122.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd123)) {
      fd123.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd124)) {
      fd124.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd125)) {
      fd125.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd126)) {
      fd126.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd127)) {
      fd127.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd128)) {
      fd128.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd129)) {
      fd129.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd130)) {
      fd130.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd131)) {
      fd131.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd132)) {
      fd132.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd133)) {
      fd133.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd134)) {
      fd134.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd135)) {
      fd135.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd136)) {
      fd136.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd137)) {
      fd137.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd138)) {
      fd138.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd139)) {
      fd139.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd140)) {
      fd140.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd141)) {
      fd141.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd142)) {
      fd142.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd143)) {
      fd143.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd144)) {
      fd144.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd145)) {
      fd145.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd146)) {
      fd146.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd147)) {
      fd147.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd148)) {
      fd148.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd149)) {
      fd149.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd150)) {
      fd150.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd151)) {
      fd151.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd152)) {
      fd152.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd153)) {
      fd153.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd154)) {
      fd154.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd155)) {
      fd155.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd156)) {
      fd156.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd157)) {
      fd157.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd158)) {
      fd158.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd159)) {
      fd159.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd160)) {
      fd160.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd161)) {
      fd161.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd162)) {
      fd162.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd163)) {
      fd163.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd164)) {
      fd164.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd165)) {
      fd165.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd166)) {
      fd166.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd167)) {
      fd167.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd168)) {
      fd168.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd169)) {
      fd169.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd170)) {
      fd170.destroy();
      score_p1+=1;
    }
    
    if(pkman1.isTouching(fd171)) {
      fd171.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd172)) {
      fd172.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd173)) {
      fd173.destroy();
      score_p1+=1;
    }
  
    if(pkman1.isTouching(fd174)) {
      fd174.destroy();
      score_p1+=1;
    }
  
  /*
  CREATING 
  PLAYER 2 
  ISTOUCHING 
  FUNCTION
  */
  
    if(pkman2.isTouching(fd1)) {
      fd1.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd2)) {
      fd2.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd3)) {
      fd3.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd4)) {
      fd4.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd5)) {
      fd5.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd6)) {
      fd6.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd7)) {
      fd7.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd8)) {
      fd8.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd9)) {
      fd9.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd10)) {
      fd10.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd11)) {
      fd11.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd12)) {
      fd12.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd13)) {
      fd13.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd14)) {
      fd14.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd15)) {
      fd15.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd16)) {
      fd16.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd17)) {
      fd17.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd18)) {
      fd18.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd19)) {
      fd19.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd20)) {
      fd20.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd21)) {
      fd21.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd22)) {
      fd22.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd23)) {
      fd23.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd24)) {
      fd24.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd25)) {
      fd25.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd26)) {
      fd26.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd27)) {
      fd27.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd28)) {
      fd28.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd29)) {
      fd29.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd30)) {
      fd30.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd31)) {
      fd31.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd32)) {
      fd32.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd33)) {
      fd33.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd34)) {
      fd34.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd35)) {
      fd35.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd36)) {
      fd36.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd37)) {
      fd37.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd38)) {
      fd38.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd39)) {
      fd39.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd40)) {
      fd40.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd41)) {
      fd41.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd42)) {
      fd42.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd43)) {
      fd43.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd44)) {
      fd44.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd45)) {
      fd45.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd46)) {
      fd46.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd47)) {
      fd47.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd48)) {
      fd48.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd49)) {
      fd49.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd50)) {
      fd50.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd51)) {
      fd51.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd52)) {
      fd52.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd53)) {
      fd53.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd54)) {
      fd54.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd55)) {
      fd55.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd56)) {
      fd56.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd57)) {
      fd57.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd58)) {
      fd58.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd59)) {
      fd59.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd60)) {
      fd60.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd61)) {
      fd61.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd62)) {
      fd62.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd63)) {
      fd63.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd64)) {
      fd64.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd65)) {
      fd65.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd66)) {
      fd66.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd67)) {
      fd67.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd68)) {
      fd68.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd69)) {
      fd69.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd70)) {
      fd70.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd71)) {
      fd71.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd72)) {
      fd72.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd73)) {
      fd73.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd74)) {
      fd74.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd75)) {
      fd75.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd76)) {
      fd76.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd77)) {
      fd77.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd78)) {
      fd78.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd79)) {
      fd79.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd80)) {
      fd80.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd81)) {
      fd81.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd82)) {
      fd82.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd83)) {
      fd83.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd84)) {
      fd84.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd85)) {
      fd85.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd86)) {
      fd86.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd87)) {
      fd87.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd88)) {
      fd88.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd89)) {
      fd89.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd90)) {
      fd90.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd91)) {
      fd91.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd92)) {
      fd92.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd93)) {
      fd93.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd94)) {
      fd94.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd95)) {
      fd95.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd96)) {
      fd96.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd97)) {
      fd97.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd98)) {
      fd98.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd99)) {
      fd99.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd100)) {
      fd100.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd101)) {
      fd101.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd102)) {
      fd102.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd103)) {
      fd103.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd104)) {
      fd104.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd105)) {
      fd105.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd106)) {
      fd106.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd107)) {
      fd107.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd108)) {
      fd108.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd109)) {
      fd109.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd110)) {
      fd110.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd111)) {
      fd111.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd112)) {
      fd112.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd113)) {
      fd113.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd114)) {
      fd114.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd115)) {
      fd115.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd116)) {
      fd116.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd117)) {
      fd117.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd118)) {
      fd118.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd119)) {
      fd119.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd120)) {
      fd120.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd121)) {
      fd121.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd122)) {
      fd122.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd123)) {
      fd123.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd124)) {
      fd124.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd125)) {
      fd125.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd126)) {
      fd126.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd127)) {
      fd127.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd128)) {
      fd128.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd129)) {
      fd129.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd130)) {
      fd130.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd131)) {
      fd131.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd132)) {
      fd132.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd133)) {
      fd133.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd134)) {
      fd134.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd135)) {
      fd135.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd136)) {
      fd136.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd137)) {
      fd137.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd138)) {
      fd138.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd139)) {
      fd139.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd140)) {
      fd140.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd141)) {
      fd141.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd142)) {
      fd142.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd143)) {
      fd143.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd144)) {
      fd144.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd145)) {
      fd145.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd146)) {
      fd146.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd147)) {
      fd147.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd148)) {
      fd148.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd149)) {
      fd149.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd150)) {
      fd150.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd151)) {
      fd151.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd152)) {
      fd152.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd153)) {
      fd153.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd154)) {
      fd154.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd155)) {
      fd155.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd156)) {
      fd156.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd157)) {
      fd157.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd158)) {
      fd158.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd159)) {
      fd159.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd160)) {
      fd160.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd161)) {
      fd161.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd162)) {
      fd162.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd163)) {
      fd163.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd164)) {
      fd164.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd165)) {
      fd165.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd166)) {
      fd166.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd167)) {
      fd167.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd168)) {
      fd168.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd169)) {
      fd169.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd170)) {
      fd170.destroy();
      score_p2+=1;
    }
    
    if(pkman2.isTouching(fd171)) {
      fd171.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd172)) {
      fd172.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd173)) {
      fd173.destroy();
      score_p2+=1;
    }
  
    if(pkman2.isTouching(fd174)) {
      fd174.destroy();
      score_p2+=1;
    }
    if(score_p1===50){
    gameState=0;
    }
    if(score_p2===50){
      gameState=0;
      }
      
  }
  
if(gameState===0){
  if(score_p1<score_p2){
    text("PLAYER_1_WIN",600,300);
  }

  if(score_p2<score_p1){
    text("PLAYER_2_WIN",600,300);
  }
}
text("PL-2-Score = "+score_p1,566,567);
text("PL-1-Score = "+score_p2,775,567);
//text(mouseX+","+mouseY,mouseX,mouseY);

 

}