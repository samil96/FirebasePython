// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB52vmGi_rTm2mmsBcPl0-wDSOFNlda9XQ",
  authDomain: "prevencionvial-7bfee.firebaseapp.com",
  databaseURL: "https://prevencionvial-7bfee.firebaseio.com",
  projectId: "prevencionvial-7bfee",
  storageBucket: "prevencionvial-7bfee.appspot.com",
  messagingSenderId: "217430412403",
  appId: "1:217430412403:web:0f0f33f603ef4bfc1fee06",
  measurementId: "G-E8QGEH4CL7"
});

const db = firebase.firestore();

const searcher = document.getElementById("searcher");
const btnSearch = document.getElementById("btn-search");
const card = document.getElementById("conductor");

//lee los datos y los pinta
const filter = () => {
  db.collection("conductores").onSnapshot(querySnapshot => {
    card.innerHTML = '';
  querySnapshot.forEach(doc => {
    const txtSearch = searcher.value.toUpperCase();
    const track = doc.data().COD_PLACA.toUpperCase();
    if (track.indexOf(txtSearch) !== -1) {
      card.innerHTML += `
    <div class="card section-talent__card mx-2 my-2" style="width: 16rem;">
      <img src="https://www.ebizfiling.com/wp-content/uploads/2017/12/images_20-3.jpg" class="card-img-top section-talent__img" alt="Foto de perfil">
      <div class="card-body section-talent__cont-icons">
        <h5 class="card-title text-center">Num Placa: ${doc.data().COD_PLACA}</h5>
        <h6 class="card-subtitle mb-3 text-center">Cargga util: ${doc.data().CARGA_UTIL}</h6>
        
        <h6 class="card-text my-2">Marca del auto: ${doc.data().MARCA}.</h6>
        <div class="text-center">
       
          <div class="section-talent__icons mx-2"><a href="mailto:${doc.data().mail}" target="_blank" class="section-talent__link"><i class="fas fa-envelope"></i></a></div>
          <div class="section-talent__icons mx-2"><a href="https://api.whatsapp.com/send?phone=${doc.data().number}&text=Hola%20${doc.data().name},%20te%20vi%20en%20la%20página%20de%20Talent%20On%20Board%20y%20me%20gustaría%20hablar%20contigo.&source=&data=" target="_blank" class="section-talent__link"><i class="fab fa-whatsapp"></i></a></div>
        </div>
      </div>
    </div>
    `;
    } else {
      console.log(doc.data().id)
    }
  });
});
}
searcher.addEventListener("keyup", filter);
filter();
