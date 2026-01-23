<script setup>
defineEmits(['close'])
</script>

<template>
	<span class="close-button" @click="$emit('close')">&times;</span>
</template>

<style></style>
