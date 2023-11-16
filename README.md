Dokumentasi API URL : https://todo-express.adaptable.app/
1. Pengguna(user) harus melakukan register terlebih dahulu (apabila sudah mempunyai akun langsung pada step 2(login))
![image-11](https://github.com/Farel2512/expresstodo/assets/139944164/a53e98ca-3ed3-445e-8359-a1797239ace4)
Diakses melalui Thunder Client. Untuk melakukan register gunakan endpoint dengan method POST : https://todo-express.adaptable.app/auth/register
Setelah itu pada body masukan data name, email, dan password

2. Pengguna melakukan login
Gunakan endpoint dengan method POST : https://todo-express.adaptable.app/auth/login .Langkah yang perlu dilakukan adalah pada body dengan masukkan data email dan password sesuai yang telah didaftarkan sebelumnya. Setelah melakukan login user akan mendapat sebuah token agar dapat mengakses endpoint lain.
![image-22](https://github.com/Farel2512/expresstodo/assets/139944164/5eb0f167-3e98-4b35-924f-4fdf5710df7f)

3. Mengambil data todos
Setelah mendapat token, saat akan melakukan request data todo pada kolom Header, ditambahkan field authorization dengan value berisi token yang telah diperoleh. Untuk mendapat data todo, gunakan endpoint dengan method GET : https://todo-express.adaptable.app/todos
![image-20](https://github.com/Farel2512/expresstodo/assets/139944164/ed411173-7e3e-4f2f-ac93-3af705fd4b92)

4. Mengambil data todo berdasarkan ID nya
Untuk mengambil data todo berdasarkan ID-nya, gunakan endpoint dengan method GET : https://todo-express.adaptable.app/todos/(id_todo) yang ingin ditampilkan datanya
Contoh menggunakan ID 1, pastikan header berisi token yang telah diberikan pada saat login
![image-29](https://github.com/Farel2512/expresstodo/assets/139944164/4cf9d2be-4a13-4fff-8880-0ac378d674c5)

5. Menambah Todo
Untuk menambah todo, gunakan endpoint dengan method POST : https://todo-express.adaptable.app/todos/(id_todo) yang sudah melakukan login
![image-13](https://github.com/Farel2512/expresstodo/assets/139944164/3cc9ee58-1a2f-41ac-a741-64f1f859e3c2)

6. Melakukan Update(Edit) Value pada todo
Untuk mengedit value pada data todo, gunakan endpoint dengan method PUT : https://todo-express.adaptable.app/todos/(id_todo) yang ingin diedit valuenya. Setelah itu pada bagian body masukan data value
![image-23](https://github.com/Farel2512/expresstodo/assets/139944164/c8f10969-8ccb-480d-8329-47793bdd7592)

Sebelum di edit : 

![image-33](https://github.com/Farel2512/expresstodo/assets/139944164/719c538c-35f8-49cd-9d20-a669152d4448)

Sesudah di edit : 

![image-28](https://github.com/Farel2512/expresstodo/assets/139944164/2efd6ecc-0d4d-4ecf-925c-3dadb732ab4f)

7. Menghapus data Todo berdasarkan ID
Untuk menghapus data todo berdasarkan ID-nya, gunakan endpoint dengan method DELETE : https://todo-express.adaptable.app/todos/(id_todo) yang ingin dihapus
![image-24](https://github.com/Farel2512/expresstodo/assets/139944164/accfa60f-7d0a-4d7e-b370-84a41db8ab7a)

8. Menghapus seluruh Todo
Untuk menghapus data tods, gunakan endpoint dengan method DELETE : https://todo-express.adaptable.app/todos/
![image-32](https://github.com/Farel2512/expresstodo/assets/139944164/7267fa56-1538-4144-b68d-64a310abee3b)

9. Cek Token
Apabila belum login tapi mencoba untuk mengakses endpoint seperti misalnya : https://todo-express.adaptable.app/todos/ , server akan mengirimkan pesan error : Undefined headers
![image-21](https://github.com/Farel2512/expresstodo/assets/139944164/e892bdb8-0e6e-4058-9e91-249c2c06e24a)


