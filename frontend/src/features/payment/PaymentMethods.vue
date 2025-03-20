<template>
  <section class="payment-methods">
    <p class="title"> 
      <span class="icon">💳</span> Elige el Método de Pago
    </p>

    <div class="methods-list">
      <button
        v-for="method in methods"
        :key="method.id"
        :class="['method-btn', { selected: selectedMethod?.id === method.id }]"
        @click="selectMethod(method)"
      >
        <span class="icon">{{ method.icon }}</span>
        <span>{{ method.name }}</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'

interface PaymentMethod {
  id: number
  name: string
  icon: string
}

defineProps<{
  selectedMethod: PaymentMethod | null
}>()

const emit = defineEmits<{
  (e: 'select', method: PaymentMethod): void
}>()

const methods = ref<PaymentMethod[]>([
  { id: 1, name: 'Efectivo', icon: '💵' },
  { id: 2, name: 'Tarjeta', icon: '💳' },
  { id: 3, name: 'Otros', icon: '🪙' } // agrega un ícono cualquiera
])

function selectMethod(method: PaymentMethod) {
  if (!method.id || !method.name || !method.icon) {
    return
  }

  emit('select', method)
}
</script>

<style scoped>
.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.title {
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.methods-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.method-btn {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100px;
  min-width: 150px;
  transition: background-color 0.3s, border-color 0.3s;
}

.method-btn .icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.method-btn.selected {
  background-color: #f56a5d;
  border-color: #f56a5d;
  color: #fff;
}

.method-btn.selected .icon {
  color: #fff;
}
</style>
