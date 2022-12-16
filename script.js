/* Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả. (1đ)
●	Đầu vào: str 
●	Đầu ra: đảo ngược chuỗi và in ra kết quả
●	Ví dụ:
○	Cho: str = "program"; in ra: "margorp"
○	Cho: str = "data"; in ra: "atad"
●	Lưu ý: không sử dụng hàm reverse()
*/

// let str1 = prompt("Nhập vào chuỗi"); // Chuỗi nhập vào

// let arrStr = str1.split("");
// // console.log(arrStr);

// for (let i = 0, j = arrStr.length - 1; i < arrStr.length / 2; i++, j--) {
//   let temp = arrStr[i]; // Đổi chỗ các gtrị trong mảng
//   arrStr[i] = arrStr[j];
//   arrStr[j] = temp;
// }

// // console.log(arrStr);
// let result1 = arrStr.join("").toString();
// console.log(result);

/*Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (1đ)
●	Đầu vào: str
●	Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
●	Ví dụ
○	Cho "this is A Test"; In ra "This Is A Test"
○	Cho "hello rikkei academy"; In ra "Hello Rikkei Academy”
*/

// let str2 = prompt("Nhập vào chuỗi"); // Chuỗi nhập vào
// let arr2 = str2.split(" ");
// let newarray2 = [];

// for (let index = 0; index < arr2.length; index++) {
// //   console.log(arr2[index].slice(1));
//   newarray2.push(arr2[index].charAt(0).toUpperCase() + arr2[index].slice(1)); // thay đổi chữ cái đầu tiên trong mỗi từ sang dạng in hoa
// } // push vào mảng mới

// let result2 = newarray2.join(" ");
// console.log(result2);

/* Bài 3:Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (1đ)
●	Đầu vào: 1 mảng bất kỳ
●	Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
●	Ví dụ
○	Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
○	Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

*/

let arr3 = [];
let lengthArr3 = prompt("Nhap do dai mang");

for (i = 0; i < lengthArr3; i++) {
  arr3[i] = prompt("Nhap vao phan tu thu " + i);
}

arr3 = new Set(arr3);

console.log(arr3);

/* Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần. (2đ)
●	Đầu vào: 1 mảng bất kỳ
●	Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
●	Ví dụ
○	Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
●	Lưu ý: Không dùng hàm sort()

*/

// let arr4 = [];
// let lengthArr4 = prompt("Nhap do dai mang");

// for (i = 0; i < lengthArr4; i++) {
//   arr4[i] = prompt("Nhap vao phan tu thu " + i);
// }
// console.log(arr4);
// for (let i = 0; i < arr4.length - 1; i++) {
//   for (let j = arr4.length - 1; j > i; j--) {
//     if (arr4[j] < arr4[j - 1]) {
//       let temp = arr4[j];
//       arr4[j] = arr4[j - 1];
//       arr4[j - 1] = temp;
//     }
//   }
// }
// console.log(arr4);

/*Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên). 
Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)
 */
