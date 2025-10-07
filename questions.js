const questions = [
    {
        soal: "",
        gambar: "mtk6a1-soal-no1.JPG",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },
    {
        soal: "",
        gambar: "mtk6a1-soal-no2.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih A"
    },
    {
        soal: "",
        gambar: "mtk6a1-soal-no3.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih D"
    },
    {
        soal: "",
        gambar: "mtk6a1-soal-no4.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },
{
        soal: "",
        gambar: "mtk6a1-soal-no5.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih A"
    },
    {
        soal: "",
        gambar: "mtk6a1-soal-no6.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },
    {
        soal: "Hanif, Abi dan Ahmad mengikuti lomba lari. Hanif berlari sejauh 10,5 meter, Abi 8,7 meter dan Aji 9,8 meter. Siswa yang menempuh lintasan terdekat adalah ....",
        pilihan: ["Hanif", "Abi", "Ahmad", "Hanif dan Abi"],
        jawabanBenar: "Hanif dan Abi"
    },
    {
        soal: "Angka 8 pada bilangan 134,28 menempati nilai tempat ....",
        pilihan: ["Puluhan", "Ratusan", "Persepuluhan", "Perseratusan"],
        jawabanBenar: "Perseratusan"
    },
 {
        soal: "",
        gambar: "mtk6a1-soal-no9.jpg",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih D"
    },
    {
        soal: "Ubalah bilangan 4% menjadi desimal ....",
        pilihan: ["0,4", "0,04", "0,05", "0,5"],
        jawabanBenar: "0,04"
    },
   {
        soal: "",
        gambar: "mtk6a1-soal-no11.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih C"
    },
   {
        soal: "",
        gambar: "mtk6a1-soal-no12.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },
   {
        soal: "",
        gambar: "mtk6a1-soal-no13.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },
   {
        soal: "",
        gambar: "mtk6a1-soal-no14.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih A"
    },
   {
        soal: "",
        gambar: "mtk6a1-soal-no15.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih B"
    },

    {
        soal: "Pada bilangan 473,15 angka yang menempati nilai ratusan adalah ....",
        pilihan: ["1", "3", "4", "7"],
        jawabanBenar: "C. 4" // Angka 4
    },
    {
        soal: "Pada bilangan 47,315 angka yang menempati nilai puluhan adalah ....",
        // gambar: "",
        pilihan: ["1", "3", "4", "7"],
        jawabanBenar: "4" // Angka 4     
},
    {
        soal: "Pada bilangan 505,50 angka yang menempati nilai satuan adalah ....",
        // gambar: "",
        pilihan: ["0", "5", "3", "7"],
        jawabanBenar: "5" // Angka 5 (yang berada di kiri koma)
    },
    {
        soal: "Pada bilangan 123,51 angka yang menempati nilai persepuluhan adalah ....",
        // gambar: "",
        pilihan: ["1", "3", "5", "2"],
        jawabanBenar: "5" // Angka 5
    },
    {
        soal: "Pada bilangan 100,34 angka yang menempati nilai perseratusan adalah ....",
        pilihan: ["1", "0", "3", "4"],
        jawabanBenar: "4" // Angka 4
    },
    {
        soal: "Perhatikan Tabel di bawah ini : Kandungan air paling banyak terdapat pada sayuran ....",
        gambar: "tabel12.jpg",
        pilihan: ["Bayam", "Jamur", "Jagung muda", "Kacang Panjang"],
        jawabanBenar: "Jamur"
    },
    {
        soal: "Perhatikan Tabel di bawah ini : Kandungan Protein paling rendah terdapat pada sayuran ...",
        gambar: "tabel12.jpg",
        pilihan: ["Bayam", "Jamur", "Jagung muda", "Kacang Panjang"],
        jawabanBenar: "Kacang Panjang"
    },
    {
        soal: "Perhatikan Tabel di bawah ini : Urutan kandungan lemak dari yang terkecil adalah sayuran ...., ...., ...., ...., ....",
        gambar: "tabel12.jpg",
        pilihan: ["Kacang Panjang, Bayam, Jamur, Jagung muda, Daun Pepaya", "Daun Pepaya, Kacang Panjang, Bayam, Jamur, Jagung muda", "Jagung muda, Daun Pepaya, Kacang Panjang, Bayam, Jamur", "Jamur, Jagung muda, Daun Pepaya, Kacang Panjang, Bayam"],
        jawabanBenar: "Kacang Panjang, Bayam, Jamur, Jagung muda, Daun Pepaya"
    },
    {
        soal: "Perhatikan Tabel di bawah ini : Urutan kandungan protein dari yang paling tinggi adalah .....",
        gambar: "tabel12.jpg",
        pilihan: ["Daun Pepaya, Jagung muda, Jamur, Bayam, Kacang Panjang", 
"Pepaya, Jagung muda, Jamur, Bayam, Kacang Panjang, Daun", 
"Jagung muda, Jamur, Bayam, Kacang Panjang, Daun, Pepaya", 
"Jamur, Bayam, Kacang Panjang, Daun, Pepaya, Jagung muda"],
        jawabanBenar: "Daun Pepaya, Jagung muda, Jamur, Bayam, Kacang Panjang"
    },
    {
        soal: "Perhatikan Tabel di bawah ini : Kandungan air pada bayam adalah .... %",
        gambar: "tabel12.jpg",
        pilihan: ["89,9%", "88,9%", "87,9%", "86,9%"],
        jawabanBenar: "86,9%"
    },
 {
        soal: "",
        gambar: "mtk6a1-soal-no26.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih C"
    },
 {
        soal: "",
        gambar: "mtk6a1-soal-no27.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih C"
    },
 {
        soal: "",
        gambar: "mtk6a1-soal-no28.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih A"
    },
 {
        soal: "",
        gambar: "mtk6a1-soal-no29.png",
        pilihan: ["Pilih A", "Pilih B", "Pilih C", "Pilih D"],
        jawabanBenar: "Pilih C"
    },
 {
        soal: "Bentuk 25% ke desimal adalah ",
        gambar: "",
        pilihan: ["0,15", "0,25", "0,35", "0,55"],
        jawabanBenar: "0,25"
    },



   ];

const totalQuestions = questions.length; 
