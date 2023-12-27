// function initMap() {
//   const myLatLng = { lat: 16.8410311, lng: 96.1295897 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatLng,
//   });

//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   });
// }

const places = [
  {
    lat: 19.8169018,
    lng: 96.1532842,
    name: "Mango Nay Pyi Taw",
    location:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "10 am to 6 pm",
    phones: ["09123456", "09876543"],
  },
  {
    lat: 16.8173195,
    lng: 96.1284761,
    name: "Mango Junction Square",
    location:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "10 am to 6 pm",
    phones: ["09123456", "09876543"],
  },
  {
    lat: 21.9806587,
    lng: 96.081561,
    name: "Mango Mandalay Capital",
    location:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "10 am to 6 pm",
    phones: ["09123456", "09876543"],
  },
  // Add more places as needed
];

let map;
let customModal;
let modalTitle;
let modalLocation;
let modalTime;
let modalPhone;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.8169018, lng: 96.1532842 },
    zoom: 6,
  });

  customModal = document.getElementById("customModal");
  modalTitle = document.getElementById("modalTitle");
  modalLocation = document.getElementById("location");
  modalTime = document.getElementById("time");
  modalPhone = document.getElementById("phone");

  places.forEach((place) => {
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lng },
      map: map,
      icon: "./assets/map.png",
      title: place.name,
    });

    marker.addListener("click", () => {
      openModal(place);
    });
  });
}

function openModal(place) {
  modalTitle.innerText = place.name;
  modalLocation.innerText = place.location;
  modalTime.innerText = place.time;
  modalPhone.innerHTML = place.phones
    .map((phone) => `<a href='tel:+${phone}'>${phone}</a>`)
    .join("");
  customModal.style.display = "block";
}

function closeModal() {
  customModal.style.display = "none";
}

window.initMap = initMap;
