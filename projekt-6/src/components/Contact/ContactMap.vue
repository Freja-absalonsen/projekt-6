<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { db } from '@/firebase.js'
import { ref as dbRef, get } from 'firebase/database'
import '@/styles/style.scss'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

onMounted(async () => {
    const map = L.map('map').setView([55.397467, 10.391811], 16)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    const snapshot = await get(dbRef(db, 'locations'))
    if (!snapshot.exists()) return

    const locations = snapshot.val()
    const bounds = L.latLngBounds([])

    for (const key in locations) {
        const { lat, lon, name } = locations[key]

        if (lat && lon) {
         L.marker([lat, lon]).addTo(map).bindPopup(`${name} 📍`)
         bounds.extend([lat, lon])
        }
    }

    if (bounds.isValid()) {
        map.fitBounds(bounds)
    }
})
</script>

<template>
  <section class="map-section">
    <h2 class="map-section__title">Find os</h2>

    <div class="map-section__wrapper">
      <div class="square-top-right"></div>
      <div id="map" class="map-section__map"></div>
      <div class="square-bottom-left"></div>
    </div>

    <a href="https://www.google.com/maps/place/N%C3%A6r+mikrobageri/@55.3974529,10.3917123,17z/data=!3m1!4b1!4m6!3m5!1s0x464d21624b0f982b:0xc1ec23b5dd1d809b!8m2!3d55.3974529!4d10.3917123!16s%2Fg%2F11z230vr9p?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="blank" class="map-section__address-link" >
      <img src="@/assets/contact-pin.svg" alt="Lokation ikon" class="map-section__icon">
      <span class="map-section__address">Overgade 22, 5000 Odense</span>
    </a>
  </section>
</template>
