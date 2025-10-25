// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100: " + sum);



// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
const soLe = [];
for (let i = 1; i < 100; i +=2) {
    soLe.push(i);
}
console.log("Mảng số lẻ từ 1 đến 100: " + soLe);


// 4. In ra 10 email dựa trên tên người dùng và số thứ tự
const emails = [];
for (let i = 1; i <= 10; i++) {
    emails.push(`user${i}@example.com`);
}
console.log("List 10 email: " + emails);


