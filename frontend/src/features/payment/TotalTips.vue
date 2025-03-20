<template>
  <section class="total-tips">
    <p class="label">Total de Propinas</p>
    <div class="amount-box">
      <input
        type="text"
        v-model="editableTips"
        :readonly="!editMode"
        class="amount"
        @blur="saveNewTotal"
        @focus="editMode = true"
      />
      <button class="edit-btn" @click="editMode = true">✏️</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, defineProps } from 'vue'

const props = defineProps<{ total: number }>()
const emit = defineEmits(['update:total'])

const editMode = ref(false)
const editableTips = ref(formatNumber(props.total))

watch(() => props.total, () => {
  editableTips.value = formatNumber(props.total)
})

function formatNumber(num: number): string {
  return num.toLocaleString('en-US')
}

function saveNewTotal() {
  const parsed = parseFloat(editableTips.value.replace(/,/g, ''))
  if (!isNaN(parsed)) {
    emit('update:total', parsed)
    editableTips.value = formatNumber(parsed)
  } else {
    editableTips.value = formatNumber(props.total)
  }
  editMode.value = false
}
</script>

<style scoped>
.total-tips {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  color: #e57373;
  font-weight: bold;
}

.amount-box {
  background-color: #fddedd;
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
}

.amount {
  font-size: 2rem;
  color: #e57373;
  font-weight: bold;
  border: none;
  background-color: transparent;
  width: 140px;
}

.amount:read-only {
  cursor: default;
}

.edit-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
}
</style>
