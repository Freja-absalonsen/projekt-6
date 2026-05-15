<template>
    <section class="home-history">
        <h2 class="home-history__title">Vores historie og værdier</h2>

        <div class="home-history__content">
            <div class="home-history__text">
                <p class="home-history__text-block">
                    Vores rejse begyndte med kærlighed for surdej, godt håndværk og ærlige ingredienser. I dag bager vi hver morgen i Overgade – med respekt for traditioner og lysten til at skabe noget, der smager af mere.
                </p>

                <RouterLink :to="{ name: 'about' }">
                    <button class="home-history__button">Læs mere →</button>
                </RouterLink>
            </div>

            <div class="home-history__wrapper">
              <div class="square-top-right"></div>
              <img src="@/assets/home-jesper.webp" alt="Jesper i forklæde">
              <div class="square-bottom-left"></div>
            </div>
        </div>


    </section>
</template>