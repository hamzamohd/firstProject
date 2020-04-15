var picIndex = 0;
var picIndex2 = 0;

var imgUrl = [
  "mq1.jpg",
  "mq2.jpg",
  "mq3.jpg",
  "mq4.jpg",
  "mq5.jpg",
  "mq6.jpg",
  "mq7.jpg",
  "mq8.jpg",
  "mq9.jpg",
  "mq10.jpg",
];
var imgUrl2 = [
  "ms1.jpg",
  "ms2.jpg",
  "ms3.jpg",
  "ms4.jpg",
  "ms5.jpg",
  "ms6.jpg",
  "ms7.jpg",
  "ms8.jpg",
  "ms9.jpg",
  "ms10.jpg",
];

function changePic() {
  document.getElementById("pics").src = imgUrl[picIndex];
  picIndex++;
  if (picIndex === imgUrl.length) {
    picIndex = 0;
  }
}
changePic();
setInterval(changePic, 1000);

function changePic2() {
  document.getElementById("msmemes").src = imgUrl2[picIndex2];
  picIndex2++;
  if (picIndex2 === imgUrl2.length) {
    picIndex2 = 0;
  }
}

changePic2();
setInterval(changePic2, 2000);
