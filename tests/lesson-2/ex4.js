//Khai báo chiều cao
let chieuCao = 160;

// Tính số lẻ của chiều cao là 2 số cuối của chiều cao = phần dư khi thực hiện phép chia 170 % 100
let soLeChieuCao = chieuCao % 100;

// Tính cân nặng lý tưởngSSS
let canNangLyTuong = (soLeChieuCao * 9) / 10;

// Tính mức cân tối đa
let mucCanToiDa = soLeChieuCao;

// Tính mức cân tối thiểu
let mucCanToiThieu = (soLeChieuCao * 8) / 10;

// In kết quả trên 1 dòng
console.log(
    "Cân nặng lý tưởng: " + canNangLyTuong + "kg", 
    "Cân nặng tối đa:" + mucCanToiDa + "kg", 
    "Cân nặng tối thiểu: " + mucCanToiThieu + "kg"
);

