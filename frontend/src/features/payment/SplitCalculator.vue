<template>
  <section class="split-calculator">
    <label class="title">¿Entre cuántos quieres dividir las Propinas?</label>

    <div class="input-result">
      <input
        type="number"
        v-model.number="numberOfPeople"
        min="1"
        placeholder="#"
      />
      <span class="per-person">
        ${{ amountPerPerson }} x Persona
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ totalTips: number }>()

const numberOfPeople = ref<number>(0)

const amountPerPerson = computed(() =>
  numberOfPeople.value > 0
    ? (props.totalTips / numberOfPeople.value).toFixed(2)
    : '0.00'
)
</script>

<style scoped>
.split-calculator {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  font-weight: bold;
  color: #333;
}

.input-result {
  display: flex;
  align-items: center;
  gap: 10px;
}

input {
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 8px 20px;
  width: 80px;
  text-align: center;
  font-size: 1rem;
  background-color: #fff;
  color: #333;
}

input::placeholder {
  color: #aaa;
}

.per-person {
  color: #e57373;
  font-weight: bold;
}
</style>
