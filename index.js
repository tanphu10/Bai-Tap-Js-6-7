/*các yếu tố xác định bài toán lặp : logic lặp đi lặp lại 1 cách tự đông thì bài toán lặp.
bước 1: xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
bước 2: thiết lặp đk lặp
bước 3: cài đặt khối xử lí
bước 4: thay đổi giá trị của bước nhảy
    */

document.getElementById("btnInTheDiv").onclick = function () {
  /*input: Number
    output : string 
    */
  //    var input =document.getElementById('iSo').value*1;
  var input = 10;
  var output = "";
  // xử lí
  // yếu tố thay đổi
  // bước 1
  // var dem = 1;
  // bước 2
  for (
    var i = 1;
    i <= input;
    i++ //còn đúng thì còn làm
  ) {
    //  bước 3
    if (i % 2 == 0) {
      var div = '<div class="alert alert-danger mt-2"> hello world </div>';
      // return;
    } else {
      var div = '<div class="alert alert-success mt-2"> hello world </div>';
    }
    output += div;
    // bước 4
    // dem++;
  }
  document.getElementById("ketQua1").innerHTML = output;
};

// ví dụ 2 : cho phép người dùng nhập vào 1 số tính giai thừ số đó

document.getElementById("btnTinhGiaiThua").onclick = function () {
  // input
  var nhapSo = document.getElementById("nhapSo").value * 1;
  // output : giai thừa =1;
  var giaiThua = 1;
  // bước 1 xác định yếu tố thay đổi
  var giaTri = 1;
  // bước 2 xác định điều kiện lặp
  while (giaTri <= nhapSo) {
    // giaiThua=giaiThua*giaTri;
    // bước 3 xử lí
    giaiThua *= giaTri;
    // bước 4 thay đổi điều kiện lặp
    giaTri++;
  }
  document.getElementById("ketQua2").innerHTML = giaiThua;
};

// ví dụ 3: tính tổng các số khi nhập vào 1 số
document.getElementById("tinhTongSoNguyen").onclick = function () {
  var soN = document.getElementById("soN").value * 1;
  var tongSo = 0;
  // console.log(tongSo)
  // bước 1 xác định các yếu tố thay đổi
  var giaTri1 = 1;
  // bước 2 xác định các điều kiện lặp
  while (giaTri1 <= soN) {
    //số N =4
    tongSo = tongSo + giaTri1;
    // 1+
    // 2+ tổng bước 2 là 3
    // 3+ tổng bước 3 là 3+3
    // 4

    // console.log(tongSo)

    // bước 4 thay đổi đk lặp
    giaTri1++;
  }
  document.getElementById("ketQua3").innerHTML = tongSo;
};

// ví dụ 4
document.getElementById("soNNhoNhat").onclick = function () {
  // input : nhập số 10000
  var soK = document.getElementById("soK").value * 1;
  // 10
  var tongSoNNhoNhat = 0;
  var giaTriN = 0;
  // var ketQua = 0;
  while (tongSoNNhoNhat < soK) {
    giaTriN++;
    console.log(giaTriN);
    tongSoNNhoNhat += giaTriN;
    // console.log(tongSoNNhoNhat)
    // 1+2+...+9<10
  }
  document.getElementById("ketQua4").innerHTML = giaTriN;
  // output: xuất ra số n
};
// ví dụ 5

document.getElementById("tongSoXY").onclick = function () {
  var soX = document.getElementById("nhapSoX").value * 1;
  var soN = document.getElementById("nhapSoN").value * 1;
  var tongX = 0;
  var giaTrin = 1;
  while (giaTrin <= soN) {
    // bước 1: xác định yếu tố thay đổi (khởi tạo biến bước nhảy)
    // bước 2: thiết lặp đk lặp
    // bước 3: cài đặt khối xử lí
    // bước 4: thay đổi giá trị của bước nhảy
    // tongX=math.pow(tongX,giaTriN);
    tongX += Math.pow(soX, giaTrin);
    giaTrin++;
  }
  document.getElementById("ketQua5").innerHTML = tongX;
};

// bài tập in ra các số nguyên tố từ 1 đến số nhập vào
function checksoNT(number){
var check = true ;
for(j=2;j<number;j++){
  if(number % j == 0){
    check =false;
    break;
  }
}
return check;
}

document.getElementById("ketQua6").onclick = function (number) {
var soNT = document.getElementById("nhapSNT").value * 1;
 var arr=[];
 
 for( i=2;i<=soNT;i++){
    if(checksoNT(i) == true){
      arr.push(i)
    }
    console.log(arr)
 }
  
 
  document.getElementById("cacSNT").value = arr;
};
