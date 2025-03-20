<template>
  <div class="numeric-keypad">
    <div class="display">
      <span>$</span> {{ formattedAmount }}
      <button class="backspace-btn" @click="backspace">⬅️</button>
    </div>

    <div class="divider"></div>

    <div class="keypad">
      <button v-for="key in keys" :key="key" @click="append(key)">
        {{ key }}
      </button>
      <button @click="append('00')">00</button>
      <button @click="append('0')">0</button>
      <button class="confirm" @click="confirm">✔</button>
    </div>

    <div class="remaining">
      Cantidad Restante ${{ props.remainingAmount.toFixed(2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'

const props = defineProps<{
  remainingAmount: number
}>()

const emit = defineEmits(['confirm'])

const amount = ref<string>('')

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const formattedAmount = computed(() => {
  return Number(amount.value).toLocaleString('en-US', { minimumFractionDigits: 2 })
})

function append(value: string) {
  amount.value += value
}

function backspace() {
  amount.value = amount.value.slice(0, -1)
}

function confirm() {
  if (amount.value) {
    emit('confirm', Number(amount.value))
    amount.value = ''
  }
}
</script>

<style scoped>
.numeric-keypad {
  background-color: #fef5f3;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid #f56a5d;
  width: 80%;
}

.display {
  font-size: 2rem;
  background-color: transparent;
  padding: 15px;
  text-align: center;
  position: relative;
}

.backspace-btn {
  position: absolute;
  right: 10px;
  top: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.divider {
  border-bottom: 2px solid #d7d7d7;
  margin: 10px 0;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.keypad button {
  padding: 20px;
  font-size: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keypad .confirm {
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 20%;
  font-size: 1.8rem;
  width: 60px;
  height: 60px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keypad .confirm:hover {
  background-color: var(--color-primary);
}

.remaining {
  background-color: #fff;
  border: 1px solid var(--color-primary);
  border-radius: 30px;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  color: #f56a5d;
  font-weight: bold;
}
</style>