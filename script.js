// arrow function adalah penulisan function yg lebih singkat

//berikut contoh function declaration
function Mahasiswa(nama){
	return `Halo ${nama}`;
}

console.log(Mahasiswa("Daeng"));


//berikut contoh function expression

let Mahasiswa1 = function(nama){
	return `Hai ${nama}`;
}

console.log(Mahasiswa1("Daeng"));

//berikut contoh Arrow function

let Mahasiswa2 = (nama) => {
	return `Hai ${nama}, Ini adalah contoh Arrow function`;
}

console.log(Mahasiswa2("Daeng"));

/*Jika bentuknya hanya 1 parameter seperti contoh diatas maka penulisannya 
bisa dibuat tanpa menggunakan () */

let Mahasiswa3 = nama => {
	return `Hai ${nama}, Ini adalah contoh Arrow function 1 parameter`;
}

console.log(Mahasiswa3("Daeng"));

// Tetapi jika ada 2 parameter penulisannya harus menggunakan ()

let Mahasiswa4 = (waktu, nama) => {
	return `Selamat ${waktu} ${nama}`;
}

console.log(Mahasiswa4("Sore", "Daeng"));

// Bahkan penulisan nya bisa lebih disingkat lagi seperti berikut ini

let Mahasiswa5 = (waktu, nama) => `Selamat ${waktu} ${nama}`;

console.log(Mahasiswa5("Pagi", "Daeng"));


//berikut adalah contoh lebih kompleks dari Arrow function
// contoh kita akan menghitung jumlah karakter dari array

let student = ["Anto", "Udin", "Bambang"];

//jika ditulis dalam bentuk function expression

let Mahasiswa6 = student.map(function(nama){
		return nama.length;
	 });

console.log(Mahasiswa6);

//jika ditulis dalam arrow function

let Mahasiswa7 = student.map(nama => nama.length); 

console.log(Mahasiswa7);

//jika hasil yg diinginkan berupa objek 

let Mahasiswa8 = student.map(nama => ({Nama : nama, JumlahHuruf : nama.length}) ); 
//console.table digunakan untuk menampilkan hasil dalam bentuk table di console 
console.table(Mahasiswa8);


/* arrow function tidak mengenal fungsi this, jadi jika arrow function dibuat di dalam
constructor function maka ia akan mengambil this pada lingkungan fungsi nya... */

// dalam bentuk constructor function
function Mahasiswa9 (){
	this.nama = "Daeng";
	this.umur = 19;
	this.sayHello = function(){
		return `Halo ${this.nama}, umur kamu ${this.umur} tahun`;
	}
}

let Mahasiswa9_1 = new Mahasiswa9();


// dalam bentuk arrow function
function Mahasiswa10(){
	this.nama = "Daeng";
	this.umur = 19;

	this.SayHello = () => `Hai ${this.nama}, Umur Kamu Adalah ${this.umur} tahun`;
}

let Mahasiswa10_1 = new Mahasiswa10();













