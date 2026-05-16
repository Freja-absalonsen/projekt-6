<template>
    <section class="home-info">
        <div class="home-info__hero">

        <video 
            autoplay 
            muted 
            loop 
            playsinline 
            class="home-info__video">
            <source src="https://res.cloudinary.com/dnx8dt5jn/video/upload/v1778171889/Optagelse_2026-05-07_182132_ijaua8.mp4" type="video/mp4">
        </video>
        </div>

        <div class="home-info__content">
            <h1 class="home-info__title">Nær mikrobageri</h1>
            <p class="home-info__text">Et mikrobageri i hjertet af Odense. Her finder du friskbagt brød og kager lavet med omhu og passion. - Et sted du kan kigge forbi på farten, slå et lille smut ind, eller bare være et øjeblik
            </p>

            

            <RouterLink :to="{ name: 'kontakt' }">
              <button class="home-info__button">Find vej →</button>
            </RouterLink>
        </div>
    </section>
</template>