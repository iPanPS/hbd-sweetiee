  const body = document.querySelector("body");
  const swalst = Swal.mixin({timer: 2300, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,});
   audio = new Audio('' + linkmp3.src); ftganti=0;fungsi=0;fungsiAwal=0;deffotostiker=fotostiker.src;function berjatuhan() {
      const heart = document.createElement("div"); heart.className = "fas fa-snowflake"; 
      heart.style.left = (Math.random() * 90)+"vw"; 
      heart.style.animationDuration = (Math.random()*3)+2+"s";
       body.appendChild(heart);
    } setInterval(function name(params) {var heartArr = document.querySelectorAll(".fa-snowflake");
     if (heartArr.length > 100) {heartArr[0].remove()}},100);Content.style = "opacity:1;margin-top:16vh";
      const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); 
	
  document.getElementById("kadoIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;kadoIn.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(initengahan,300);setTimeout(inipesan,500)}}
  
  async function inipesan(){
    var { value: balas } = await swals.fire({
           title: 'Halo ' + nama + ', baca dengan teliti yaa', input: 'text',
       });
       if(balas && balas.length < 20){
         window.balas = balas;
         vketikhalo="Halo, " + nama + " ✨";
         mulaibalas();
         } else {
           await swals.fire('Ups!', 'Balasannya jangan kosong atau lebih dari 20 karakter, ya!');inipesan();
    }
  }

  //Variable Pertanyaan Akhir
  var tanya = 'Mau Kado Gak Nih??';
  var opstanya = 'Ayo jawab';
  var tompositif = 'Mauu';
  var tomnegatif = 'Engga';
  var nama = 'Kaliss';
    
    async function menuju(){pesanwhatsapp = "Makasii udah ngucapin ultah aku ya Agung";await swals.fire('okee', 'Kirim jawabannya ke WhatsApp aku ya', 'success');window.location = "https://api.whatsapp.com/send?087862026565=&text=" + pesanwhatsapp;}


    // + untuk nambah nama otomatis +