<script setup>
import { ref } from 'vue'
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const requiredError = ref('')
const emailError = ref('')
const phoneError = ref('')
const nameError = ref('')
const messageError = ref('')

// https://www.geeksforgeeks.org/javascript/how-to-validate-phone-numbers-using-javascript/ 
// https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/

async function handleSubmit() {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^(\+45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/

  emailError.value = ''
  phoneError.value = ''
  nameError.value = ''
  messageError.value = ''

  let hasError = false

 if (!form.value.name) {
    nameError.value = 'Indtast dit navn'
    hasError = true
  }

  if (!form.value.email) {
    emailError.value = 'Indtast en email'
    hasError = true
  } else if (!emailRegex.test(form.value.email)) {
    emailError.value = 'Indtast en gyldig email'
    hasError = true
  }

  if (!form.value.phone) {
    phoneError.value = 'Indtast et telefonnummer'
    hasError = true
  } else if (!phoneRegex.test(form.value.phone)) {
    phoneError.value = 'Ugyldigt telefonnummer'
    hasError = true
  }

  if (!form.value.message) {
    messageError.value = 'Skriv en meddelelse'
    hasError = true
  }

  if (hasError) return


  await addDoc(collection(firestore, "messages"), {
    name: form.value.name,
    email: form.value.email,
    phone: form.value.phone,
    message: form.value.message
  })

  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  
  alert('Besked sendt!')
}

</script>

<template>
  <section class="form-section">
    <form class="form-section__form" @submit.prevent="handleSubmit">
      <label class="form-section__label">Navn</label>
      <input class="form-section__input" v-model="form.name" type="text" placeholder="Navn" />
      <p class="form-section__error" v-if="nameError" style="color:red">{{ nameError }}</p>

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
      <p class="form-section__error" v-if="messageError" style="color:red">{{ messageError }}</p>

      <button class="form-section__button" type="submit">Send →</button>

    </form>
  </section>
</template>
