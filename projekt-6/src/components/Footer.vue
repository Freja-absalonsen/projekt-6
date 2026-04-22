<script setup>

</script>

<template>
    <footer class="footer">
        <div class="footer-inner">
            <h2 class="footer-title"> NÆR Mikrobageri</h2>

            <div class="footer-grid">
                <div class="footer-left">
                    <div class="footer-section">
                        <h3 class="section-heading">Kontaktoplysninger</h3>
                        <p class="section-text">+45 25 60 21 34</p>
                        <p class="section-text">nær@gmail.com</p>
                    </div>

                    <div class="footer-section">
                        <h3 class="section-heading">Adresse</h3>
                        <p class="section-text">Overgade 22, 5000 Odense</p>
                        <p class="section-text">CVR:45517748</p>
                    </div>
                </div>

                <div class="footer-right">
                    <div class="footer-section">
                        <h3 class="section-heading">Åbningstider</h3>
                        <p class="section-text">Tirsdag - lørdag 7.30-16</p>
                        <p class="section-text">Søndag - mandag lukket</p>
                    </div>

                    <div class="footer-section report">
                        <img alt="Kontrol til rapport">
                    </div>
                </div>

            </div>

        </div>
    </footer>

</template>

<style scoped>

.footer{
    background-color: #362110;
    color: #FFFECC;
    padding: 60px 20px;
}

.footer-inner {
    max-width: 1100px;
    margin: 0 auto;
}

.footer-title {
    text-align: center;
    font-size: 16px;
    margin-bottom: 40px;
}

.footer-grid {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 40px;
}

.footer-section {
    margin-bottom: 30px;
}

.footer-right{
    text-align: right;
}

.footer-section h3 {
    font-size: 15px;
    margin-bottom: 5px;
}

.footer-section p {
    font-size: 14px;
    margin: 5px 0;
}

@media (max-width: 768px) {
    .footer-grid {
        flex-direction: row;
    }
}

</style>