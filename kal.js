
let konfirmasi = confirm("Mau Main Tebak Angka Ga?");

while(konfirmasi == true){
    let angkaRandom = Math.floor(Math.random() * 50 - 1);
 console.log(angkaRandom);
 let masukkanUser = parseInt(prompt("Coba Tebak Angka Dari 1 sampai 50 "));
 if(angkaRandom == masukkanUser){
  alert("Betul");
  konfirmasi = confirm("Mau main Lagi?");
 }else if(masukkanUser < angkaRandom){
  alert("Angka Nya Terlalu Rendah")
  konfirmasi = confirm("Mau lanjut?");
 }else if(masukkanUser > angkaRandom){
  alert("Angka Nya terlalu tinggi")
  konfirmasi = confirm("Mau lanjut?");
 }else{
 konfirmasi = false;
 }

// console.log(konfirmasi)

// console.log(masukkanUser)

 while(masukkanUser != angkaRandom && konfirmasi == true){
    masukkanUser = parseInt(prompt("Masukkan angka tebakan !! "));
    if(angkaRandom == masukkanUser){
        alert("Betul");
        konfirmasi = confirm("Mau Main Lagi?");
       }else if(masukkanUser < angkaRandom){
        alert("Angka Nya Terlalu Rendah")
        konfirmasi = confirm("Mau lanjut?");
       }else if(masukkanUser > angkaRandom){
        alert("Angka Nya terlalu tinggi")
        konfirmasi = confirm("Mau lanjut?");
       }else{
       konfirmasi = false;
       }   
    console.log(masukkanUser);   
    }    
}