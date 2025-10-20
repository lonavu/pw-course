# Lessons Learned - Automation Testing

> Ghi chú các bài học, kinh nghiệm, tips & tricks trong quá trình làm automation testing

---

## Tháng 10/2024

### ✅ Lesson #2: Git & Javascript basic

**Ngày học**: 17/10/2024  
__1. Hoạt động của Git (three states)__
- Working Directory: Là vùng chứa các file mới và file chỉnh sửa
- Staging Area: Là vùng chứa các file chuẩn bị commit
- Repository: Vùng chứa các commit

__2. Câu lệnh với Git__
- git init: Khởi tạo repo git
- git add <file_name>: Thêm file chỉ định vào staging area
- git add . Thêm toàn bộ các file mới,file chỉnh sửa, file xóa vào staging area
- git commit -m “message”: Tạo 1 commit những thay đổi lên repo

__3. Cấu hình git__

````
git config --global user.name “Tên bạn”
````
````
git config --global user.email “email của bạn”
````
Hai lệnh này để đặt mặc định
username và email cho toàn bộ
các repo trên máy tính

***Lưu ý:*** _Nếu mỗi repo muốn một tên khác nhau thì Set username, password riêng trong từng repo (đứng
tại terminal của repo đó)_

__4. Git - commit convention__

< type> : <short_description> 

Trong đó: 
- Type: Loại commit (chore, feat, fix,...)
- Short_description: Mô tả ngắn gọn commit làm gì

VD: “fix: fix automation for case
1”

__5. JavaScript - Biến và Hằng__

**5.1 Khai báo biến:**  < từ khoá> < tên biến> = < giá trị>

VD: 

````javascript
var name = “Testing”;
````
````javascript
let number = 12;
`````

**So sánh:**

| Tiêu chí | var | let |
|-------|-------|-------|
| Cú pháp | Ra đời trước, cú pháp cũ, ít sử dụng | Ra đời sau, là cú pháp hiện đại và an toàn hơn |
| Khai báo lại | Có thể khai báo lại biến trong cùng phạm vi | Không thể khai báo lại biến trong cùng block |
| Phạm vi | Global | Block |

**5.2 Khai báo hằng:**  < từ khoá> < tên biến> = < giá trị>

VD: 

````javascript
const name = “Testing”;
````
***Lưu ý:*** mặc định dùng const cho an toàn, chỉ dùng let khi chắc chắn cần gán lại giá trị

__6. JavaScript - Comments__

**Comment** là cách vô hiệu hóa tạm thời 1 đoạn code

Có 2 cách comment:
- Thêm // vào trước đoạn code muốn comment
```javascript
// const name = "Testing";
```
- Thêm /* vào trước dòng đầu tiên và */ sau dòng cuối cùng
```javascript
/*
const name = "Testing";
*/
```
__7. JavaScript - Kiểu dữ liệu__

Gồm 2 nhóm chính:
- Primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt

   ````typescript
   const price = 12; // "number"
   const name = "John"; // "string"
   const isActive = true; // "boolean"
   ````
- Reference types: Object

Để kiểm tra kiểu dữ liệu của biến dùng **"typeof"**
````typescript
console.log(typeof 12);        // "number"
console.log(typeof "John");    // "string"
console.log(typeof true);       // "boolean"
````

__8. JavaScript - Các toán tử__

__8.1. Toán tử so sánh__

Gồm 3 nhóm:
- So sánh bằng:
  + `==` : so sánh giá trị sau khi đổi kiểu 

        5 == "5"  //true
        true == 1 //true
  + `===` : so sánh ko đổi kiểu

        5 === "5"  //false
        true === 1 //false
   *Note:* Luôn dùng `===`, dùng `==` khi so sánh ko quan tâm đến kiểu dữ liệu
- So sánh không bằng:
  + `!=` : so sánh giá trị sau khi đổi kiểu 

        5 != "5"  //false
        true != 1 //false
  + `!==` : so sánh giá trị sau khi đổi kiểu 

        5 !== "5"  //true
        true !== 1 //true
- So sánh lớn hơn, nhỏ hơn:
  + `<` : so sánh nhỏ hơn

        5 < 10  //true
  + `<=` : so sánh nhỏ hơn hoặc bằng

        5 <= 10  //true
  + `>` : so sánh lớn hơn

        5 > 10  //false
  + `>=` : so sánh lớn hơn hoặc bằng

        5 > 10  //false

__8.2. Toán tử logic__

Dùng để kết hợp nhiều điều kiện và trả về boolean

- && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
- || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng
````typescript
const isMoreThan6 = true;
const isOfficial = true;
const receive13 = isMoreThan6 ||
isOfficial;
const receive14 = isMoreThan6 &&
isOfficial;
````
__8.3. Toán tử một ngôi__

- `++` → Tăng giá trị biến lên 1.
- `--` → Giảm giá trị biến xuống 1.
- Có hai cách dùng:

    - Prefix (++a): tăng trước, rồi trả về giá trị sau khi tăng.
    - Postfix (a++): trả về giá trị hiện tại, sau đó mới tăng
````typescript
let x = 5;
console.log(++x); // 6 (tăng trước, in ra 6)
console.log(x++); // 6 (in ra 6, sau đó x thành 7)
console.log(x);   // 7
````

__8.4. Toán tử toán học__

|Toán tử | Tên toán tử | Chức năng | Ví dụ | Kết quả |
|--------|-------------|-----------|-------|---------|
| +	| Cộng | Cộng hai số hoặc nối chuỗi | 5 + 3 | 8 |
| -	| Trừ  | Lấy số thứ nhất trừ số thứ hai | 10 - 4 | 6 |
| *	| Nhân | Nhân hai số | 6 * 7 | 42 |
| /	| Chia | Chia số thứ nhất cho số thứ hai| 20 / 5 | 4 |
| %	| Lấy dư | Lấy phần dư sau phép chia | 10 % 3 | 1 |

````typescript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log("number: " + 5);     // "number: 5" (nối chuỗi)
````

__9. JavaScript - Câu điều kiện__

Cú pháp:
````typescript
if (<điều kiện>) {
// code...
}
````
Ví dụ: Kết hợp nhiều điều kiện
````typescript
let hour = 8;
if (hour >= 6 && hour <= 11) {
console.log(“Good morning”);
}
````
````
Output:
Good morning
````
__10. JavaScript - Vòng lặp for__

Cú pháp:
````typescript
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}
````
Trong đó:
- Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu.
- Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
- Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.

Ví dụ:
````typescript
// In ra giá trị từ 1 đến 5
for ( let i = 1; i <= 5; i++){
    console.log(i);
}
````
````
Output:
1
2
3
4
5
````
