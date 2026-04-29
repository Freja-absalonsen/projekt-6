<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const emailError = ref('')
const phoneError = ref('')

// https://www.geeksforgeeks.org/javascript/how-to-validate-phone-numbers-using-javascript/ 
// https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/

function handleSubmit() {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^(\+45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/

  emailError.value = ''
  phoneError.value = ''

  let hasError = false
  
  if (!emailRegex.test(form.value.email)) {
    emailError.value = 'Indtast en gyldig email'
    hasError = true
  }
  
  if (!phoneRegex.test(form.value.phone)) {
    phoneError.value = 'Ugyldigt telefonnummer'
    hasError = true
  }

  if (hasError) return

  console.log(form.value)
  alert('Besked sendt!')
}
</script>

<template>
  <section class="form-section">
    <form class="form-section__form" @submit.prevent="handleSubmit">
      <label class="form-section__label">Navn</label>
      <input class="form-section__input" v-model="form.name" type="text" placeholder="Navn" />

      <div class="form-section__row">
        <div class="form-section__field">
          <label class="form-section__label">Email</label>
          <input class="form-section__input" v-model="form.email" type="email" placeholder="Email" />
          <p class="form-section__error" v-if="emailError" style="color:red">{{ emailError }}</p>
        </div>

        <div class="form-section__field">
          <label class="form-section__label">Mobilnummer</label>
          <input class="form-section__input" v-model="form.phone" type="tel" placeholder="Mobilnummer" />
          <p class="form-section__error" v-if="phoneError" style="color:red">{{ phoneError }}</p>
        </div>
      </div>
      

      <label class="form-section__label" >Meddelelse</label>
      <textarea class="form-section__textarea" v-model="form.message" placeholder="Meddelelse"></textarea>

      <button class="form-section__button" type="submit">Send →</button>
    </form>
  </section>
</template>
