<template>
  <div class="payment-summary">
    <div class="payment-info">
      <div class="total-paid">
        <p>Total Pagado</p>
        <p class="amount">${{ totalPaid.toFixed(2) }}</p>
      </div>
      <div class="remaining">
        <p>Restante por Pagar</p>
        <p class="amount">${{ remainingAmount.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  payments: { method: string, icon: string, amount: number }[]
  totalTips: number
}>()

const totalPaid = computed(() => {
  return props.payments.reduce((acc, payment) => acc + payment.amount, 0)
})

const remainingAmount = computed(() => {
  return props.totalTips - totalPaid.value
})
</script>

<style scoped>
.payment-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.payment-info div {
  font-size: 1.3rem;
  color: #333;
  margin: 0;
}

.payment-info p {
  margin: 0;
}

.amount {
  font-size: 1.8rem;
  color: #f56a5d;
}

.payment-info .total-paid p:first-child,
.payment-info .remaining p:first-child {
  font-weight: bold;
  font-size: 1.5rem;
}

</style>

