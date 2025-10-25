# Lessons Learned - Automation Testing

> Ghi chú các bài học, kinh nghiệm, tips & tricks trong quá trình làm automation testing

---

## Tháng 10/2024

### ✅ Lesson #2: Git & Javascript basic

**Ngày học**: 21/10/2024  
__1. Git -  Undo Action__
- Commit message: chỉnh sửa message cho commit vừa tạo
  ````
  git commit --amend -m”message”
  ````
- Đưa File staging → working directory:
  ````
  git restore --staged <file_name> // Restore file cụ thể
  ````
  ````
  git restore --staged .  // Restore toàn bộ file
  ````
- Đưa File repository → working directory (un-commit)
  ````
  git reset HEAD~N    // Reset N commit
  ````
***Lưu ý***:
- Commit đầu tiên không thể bị reset.
- Nếu muốn reset → xoá thư mục .git đi rồi init lại

__2. Git - Branching Model__

2.1. Pull code

`git pull origin main`

2.2. Một số câu lệnh với branch:

  - Xem danh sách nhánh: `git branch`
  - Tạo nhánh mới:  `git branch <tên_branch>`
  - Chuyển sang nhánh mới:  `git checkout <tên_branch>`
  - Vừa tạo, vừa chuyển sang nhánh mới:  `git checkout -b <tên>`
  - Xoá branch: `git branch -D <tên nhánh>`

   ***Lưu ý:*** Luôn pull code về trước khi tạo nhánh mới

2.3. Git - ignore file
- File .gitignore là một file cấu hình quan trọng trong Git, chỉ định những file và thư mục nào sẽ không được theo dõi (untracked) bởi Git.
- Các cú pháp
  - `config.txt` : ignore file cụ thể
  - `*.log`  : ignore tất cả file có extension .log
  - `node_modules/` : ignore thư mục
  - `**/*.tmp` : ignore mọi file trong thư mục con
  - `!important.log`: không ignore file này
  - `/TODO`: ignor file chỉ ở thư mục gốc
  - `doc/**/*.txt`: gnore tất cả file .txt trong thư mục doc/

__3. Convention__

Convention được dùng để:
- Code theo format chung, dễ nhin
- Người trong cùng 1 team dễ đọc code

Convention phổ biến:
- snake-case
- kebab-case: đặt tên file và folder
- camelCase: đặt tên biến và hàm
- PascalCase: đặt tên class

__4. JavaScript - Object__

Cú pháp:
````
const/let <variable_name> = {
key1: value1,
key2: value2,

...
}
````
Trong đó:

● `key`: giống quy tắc đặt tên
biến

● `value`: có kiểu giống biến,
hoặc là 1 object khác.

Ví dụ:
````typescript
const product = {
“name”: “Laptop”,
“price”: 500,
“isWindow”: true,
“manufacturer”: {
“name”: “Acer”,
“year”: 2024
}
````
- Cách gán lại giá trị:
  
  `user.age = 28`
  
  `product[“manufacturer”][“year”] = 2025`

- Cách thay đổi thuộc tính của 1 object

  ````typescript
  const student = {“name”: “alex”, “age”: 20}
  student.name = “Nagi”; // Hợp lệ
  ````

- Thêm thuộc tính vào object: dùng dấu . hoặc ngoặc vuông []
  ````typescript
  let bike = {
    make: 'Yamaha',
    model: 'YZF-R3'
  };
  bike.color = “Blue”;
  bike[“price new”] = 100;
  console.log(bike);

  Output: 
  {make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}
  ````
- Xóa thuộc tính của object: dùng hàm delete
  ````typescript
  let employee = {
      name: 'Le Van C',
      age: 30,
      department: 'HR'
   };

  delete employee.age;
  console.log(employee);

  Output: {name: 'Le Van C', department: 'HR'}
  ````

__5. Javascript - Array__
  
  - Cú pháp tạo array
  ````typescript
  // Dùng dấu ngoặc vuông
  let fruits = ["Apple", "Banana", "Cherry"];
  ````
  - Truy cập phần tử trong mảng: sử dụng chỉ số
  ````typescript
  console.log(fruits[0]); // "Apple"
  console.log(fruits[2]); // "Cherry"
  ````
  - Thêm phần tử vào mảng: dùng hàm push 
  ````typescript
  let fruits = ["Apple", "Banana", "Cherry"];
  fruits.push("Mango");

  console.log(fruits);

  // Kết quả in ra
  ["Apple", "Banana", "Cherry", "Mango"]
  ````

__6. Javascript - Function__

Cú pháp:
````typescript
// Khai báo function
function tenHam(thamSo1, thamSo2) {
  // Thực hiện action
  return thamSo1 + thamSo2; // trả về kết quả
}

// Gọi function
const result = tenHam(2, 3);
console.log(result); // 5
````
