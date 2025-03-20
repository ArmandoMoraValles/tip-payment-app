<template>
  <div class="pay-button-container">
    <button class="pay-btn" @click="payAmount">
      Pagar ${{ totalAmount }} en Propinas
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  totalAmount: number
}>()

function payAmount() {
  alert(`Pago de $${props.totalAmount} realizado`)
}
</script>

<style scoped>
.pay-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pay-btn {
  background-color: #f56a5d;
  color: white;
  padding: 20px 40px;  /* Aumenta el padding para hacer el botón más grande */
  border-radius: 30px;
  border: none;
  font-size: 1.5rem; /* Aumenta el tamaño de la fuente */
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; /* Hace que el botón ocupe el ancho disponible */
  max-width: 400px; /* Limita el ancho máximo para no hacer el botón demasiado largo */
}

.pay-btn:hover {
  background-color: #f7a59d;
}
</style>
