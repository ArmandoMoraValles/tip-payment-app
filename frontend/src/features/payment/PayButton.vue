<template>
  <div class="pay-button-container">
    <button class="pay-btn" @click="payAmount">
      Pagar ${{ totalAmount }} en Propinas
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import axios from 'axios'

const props = defineProps<{
  totalAmount: number;
  payments: { method: string, icon: string, amount: number }[];
  totalTips: number;
  numPeople: number;
}>()

async function payAmount() {
  console.log(props.payments)
  console.log(props.numPeople)
  if (props.payments.length !== props.numPeople) {
    alert('El número de pagos debe coincidir con el número de personas en que se divide la propina.');
    return;
  }

  if (!props.payments || props.payments.length === 0) {
    alert('No hay métodos de pago registrados.');
    return;
  }

  try {
    const response = await axios.post(
      'http://localhost:3000/api/payments',
      {
        totalAmount: props.totalAmount,
        breakdown: props.payments
      },
      {
        responseType: 'blob'
      }
    )
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'payment_receipt.pdf')
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.location.reload();
  } catch (error) {
    console.error('Error al realizar el pago:', error)
    alert('Ocurrió un error al procesar el pago.')
  }
}
</script>

<style scoped>
.pay-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pay-btn {
  background-color: var(--color-primary);
  color: white;
  padding: 20px 40px;
  border-radius: 30px;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 400px;
}

.pay-btn:hover {
  background-color: #f7a59d;
}
</style>
