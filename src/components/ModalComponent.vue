<script setup>
defineProps({
	isOpen: Boolean,
	title: String,
})

defineEmits(['close', 'demo-login'])
</script>
<template>
	<div id="myModalReg" class="header__modal-windows" v-if="isOpen" @click="$emit('close')">
		<div class="header__modal-windows___content" @click.stop>
			<span class="header__modal-windows__close" @click="$emit('close')">&times;</span>
			<h2>{{ title }}</h2>
			<slot>
				<form>
					<input type="text" placeholder="Name" class="modal-input" />
					<input type="email" placeholder="Email" class="modal-input" />
					<button type="submit" class="button" id="button-modal___reg">
						Registration
					</button>
				</form>
			</slot>
		</div>
	</div>
</template>
<style></style>
