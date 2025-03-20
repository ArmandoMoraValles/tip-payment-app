<template>
  <div class="payment-screen">
    <section class="left-panel">
      <TotalTips :total="totalTips" @update:total="totalTips = $event" />
      <SplitCalculator :totalTips="totalTips" />
      <PaymentMethods
        :selectedMethod="selectedMethod"
        @select="(method) => selectedMethod = method"
      />
    </section>

    <section class="center-panel">
      <NumericKeypad 
        @confirm="addPayment"
        :remainingAmount="remainingAmount"
      />
    </section>

    <section class="right-panel">
      <PaymentsList :payments="payments" @remove="removePayment" />
    </section>
  </div>

  <footer class="payment-footer">
    <div class="summary-section">
      <PaymentSummary :payments="payments" :selectedMethod="selectedMethod" :totalTips="totalTips" />
    </div>
    <div class="pay-button-section">
    <PayButton 
      :totalAmount="totalPaid"
      :payments="payments"
      :totalTips="totalTips"
    />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TotalTips from './TotalTips.vue'
import SplitCalculator from './SplitCalculator.vue'
import PaymentMethods from './PaymentMethods.vue'
import NumericKeypad from './NumericKeypad.vue'
import PaymentsList from './PaymentsList.vue'
import PaymentSummary from './PaymentSummary.vue'
import PayButton from './PayButton.vue'

interface PaymentItem {
  method: string
  icon: string
  amount: number
}

const totalTips = ref<number>(1828)
const selectedMethod = ref<{ name: string; icon: string } | null>(null)
const payments = ref<PaymentItem[]>([])

const totalPaid = computed(() => {
  return payments.value.reduce((acc, payment) => acc + payment.amount, 0)
})

const remainingAmount = computed(() => {
  return totalTips.value - totalPaid.value
})

function addPayment(amount: number) {
  if (!selectedMethod.value) {
    alert('Selecciona un método de pago primero')
    return
  }

  payments.value.push({
    method: selectedMethod.value.name,
    icon: selectedMethod.value.icon,
    amount,
  })

  selectedMethod.value = null
}

function removePayment(index: number) {
  payments.value.splice(index, 1)
}
</script>

<style scoped>
.payment-screen {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* Secciones */
.left-panel, .center-panel, .right-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.center-panel {
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
}

.right-panel {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
}

/* Footer */
.payment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #ddd;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.summary-section {
  flex: 60%;
}

.pay-button-section {
  flex: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
