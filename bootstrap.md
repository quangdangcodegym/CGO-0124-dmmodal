### sử dụng bootstrap cần lưu ý:

cài đặt bootstrap: npm i bootstrap

- File bootstrap.bundle.min.js: nó bao gồm bootstrap.min.js và thư viện popper.js để định vị vị trí và các tooltips
- Để import bootstrap css thì
  C1: add ở đầu file index.html
  C2: import 'bootstrap/dist/css/bootstrap.css';

- Để import file bootstrap.js thì chỉ có 1 cách là import ở đầu file index.html
  TEST thử thì biết: tạo 2 file test.js và testcss.css thì
  Tại component App.jsx nếu dùng 2 import sau
  import './test.js' // import ko được
  import './testcss.css' // import css thì được
