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
      <div id="map" class="map-section__map"></div>
    </div>

    <p class="map-section__address">📍 Overgade 22, 5000 Odense</p>
  </section>
</template>
