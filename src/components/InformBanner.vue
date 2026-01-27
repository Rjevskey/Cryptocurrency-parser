<script setup>
import CloseButton from './CloseButton.vue'

defineEmits(['close'])
</script>

<template>
	<div class="banner">
		<div class="banner__border">
			<CloseButton @close="$emit('close')" />
			<slot name="icon-banner"> </slot>
			<slot name="text-banner">
				<h3>N|A</h3>
			</slot>
		</div>
	</div>
</template>

<style></style>
