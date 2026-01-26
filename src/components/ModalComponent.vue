<script setup>
import { useRouter } from 'vue-router'
import CloseButton from './CloseButton.vue'

const route = useRouter()

defineProps({
	isOpen: Boolean,
	title: String,
})

const emit = defineEmits(['close', 'demo-login'])

function maitenanceDownload() {
	emit('close')
	route.push('/maintenance')
}
</script>
<template>
	<div id="myModalReg" class="header__modal-windows" v-if="isOpen" @click="$emit('close')">
		<div class="header__modal-windows___content" @click.stop>
			<CloseButton @close="$emit('close')" />
			<h2>{{ title }}</h2>
			<slot>
				<form>
					<input type="text" placeholder="Name" class="modal-input" />
					<input type="email" placeholder="Email" class="modal-input" />
					<button
						type="button"
						class="button"
						id="button-modal___reg"
						@click="maitenanceDownload"
					>
						Registration
					</button>
				</form>
			</slot>
		</div>
	</div>
</template>
<style></style>
