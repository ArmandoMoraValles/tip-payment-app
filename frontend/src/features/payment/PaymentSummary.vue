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

<<style scoped>
.payment-summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.payment-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-info div {
  font-size: 1.3rem;
  color: #333;
}

.amount {
  font-size: 1.8rem;
  color: #f56a5d;
}

.payment-info .total-paid p:first-child,
.payment-info .remaining p:first-child {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

.payment-info .total-paid,
.payment-info .remaining {
  width: 100%;
}

.payment-info .remaining {
  text-align: left;
}
</style>

