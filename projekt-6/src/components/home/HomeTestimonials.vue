<!-- har fundet inspiration på disse to hjemmesider https://coreui.io/answers/how-to-build-a-slider-in-vue/ og https://cruip.com/how-to-build-a-fancy-testimonial-slider-with-tailwind-css-and-vue/ -->

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

const currentIndex = ref(0)

const testimonials = [
    { text: 'Kvaliteten kan i den grad smages', author:'Maiken'},
    { text: 'Jeg bliver altid mødt af et stort smil af medarbejderne i bageriet', author:'Elias'},
    { text: 'Bedste surdejsbrød i Odense!', author:'Sofie'},
    { text: 'Fantastisk kaffe og hyggelige stemning', author:'Mikkel'},
    { text: 'Man kan virkelig smage håndværket', author:'Line'},
    { text: 'Mit faste stop hver weekend', author:'Jonas'},
    { text: 'Lækre kager og altid god service', author:'Camiliia'},
]

const slidesPerView = 2

const maxIndex = testimonials.length - slidesPerView
const totalDots = testimonials.length - slidesPerView + 1

const nextSlide = () => {
    if (currentIndex.value >= maxIndex){
        currentIndex.value = 0
    } else {
        currentIndex.value++
    }
}

const goToSlide = (index) => {
    currentIndex.value = index
}

let interval

onMounted(() =>{
    interval = setInterval(nextSlide, 4000)
})

onUnmounted(() => {
    clearInterval(interval)
})

</script>

<template>
    <section class="testimonials">
        <h2 class="testimonials__title">Vores kunder siger</h2>
        <div class="testimonials__wrapper">
            <div class="square-top-right"></div>
            <div class="testimonials__slider">
                <div class="testimonials__track" :style="{transform: `translateX(-${currentIndex * 50}%)`}">
                    <div v-for="(testimonial,index) in testimonials" :key="index" class="testimonials__slide">
                        <div class="testimonials__card">
                            <div class="testimonials__stars">★★★★★</div>
                            <p class="testimonials__text">"{{ testimonial.text }}"</p>
                            <p class="testimonials__author">@{{ testimonial.author }}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="square-bottom-left"></div>
        </div>

        <div class="testimonials__dots">
            <span v-for="index in totalDots" :key="index" class="testimonials__dot" :class="{ 'testimonials__dot--active': index - 1 === currentIndex }" @click="goToSlide(index - 1)"></span>
        </div>
    </section>
</template>