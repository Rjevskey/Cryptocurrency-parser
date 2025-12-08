<script setup>
defineProps({
	text: {
		type: String,
		default: 'Не заполнено !',
	},
})

defineEmits(['click'])
</script>
<template>
	<button class="button" @click="$emit('click')">
		{{ text }}
	</button>
</template>
<style></style>
