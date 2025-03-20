<template>
  <section class="payments-list">
    <p class="title">Pagos</p>
    <div v-if="payments.length === 0" class="no-payments">Sin Pagos</div>
    <ul v-else>
      <li v-for="(payment, index) in payments" :key="index">
        <div class="payment-info">
          <span class="icon">{{ payment.icon }}</span>
          <span class="method">{{ payment.method }}</span>
        </div>
        <div class="amount-remove">
          <span class="amount">${{ payment.amount.toFixed(2) }}</span>
          <button class="remove-btn" @click="$emit('remove', index)">✖</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface PaymentItem {
  method: string
  icon: string
  amount: number
}

defineProps<{ payments: PaymentItem[] }>()
defineEmits(['remove'])
</script>

<style scoped>
.payments-list {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-weight: bold;
  margin-bottom: 10px;
}

.no-payments {
  color: #777;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 90%;
  overflow-y: auto;
}

li {
  background: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  border: 1px solid #cac4c4;
  border-radius: 3%;
}

.payment-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 1.5rem;
}

.amount-remove {
  display: flex;
  align-items: center;
  gap: 15px;
}

.amount {
  font-weight: bold;
  font-size: 1.1rem;
}

.remove-btn {
  background: none;
  border: none;
  color: #f56a5d;
  font-size: 1.2rem;
  cursor: pointer;
}

ul::-webkit-scrollbar {
  width: 8px;
}

ul::-webkit-scrollbar-thumb {
  background-color: #f56a5d;
  border-radius: 8px;
}

ul::-webkit-scrollbar-track {
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
