// Vòng lặp từ 1 tới 100
for (let i = 1; i <= 100; i++) {
    // Kiểm tra giá trị của vòng lặp chia hết cho 2
    if (i % 2 === 0){
        console.log("Số " + i + " là số chẵn");
    }
    if (i % 2 === 1){
        console.log("Số " + i + " là số lẻ");
    }
}

// Cách dùng if else 
for (let i = 1; i <= 100; i++) {
    // Kiểm tra giá trị của vòng lặp chia hết cho 2
    if (i % 2 === 0){
        console.log("Số " + i + " là số chẵn");
    } else {
        console.log("Số " + i + " là số lẻ");
    }
}