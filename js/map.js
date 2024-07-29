// js/map.js

export const initMap = () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.9311, lng: 30.3609 }, // Координаты Санкт-Петербурга
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: { lat: 59.9311, lng: 30.3609 },
    map: map,
    title: "Alpha marketing",
  });
};
