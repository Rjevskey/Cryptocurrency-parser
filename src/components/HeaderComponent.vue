<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ModalComponent from './ModalComponent.vue'
import ButtonComponent from './ButtonComponent.vue'

const router = useRouter()

const demoUser = {
	name: 'Test User',
	email: 'test.user@crypto.eye',
}
const isModalOpen = ref(false)
const isModalDemoOpen = ref(false)

function openModal() {
	isModalOpen.value = true
}
function openDemoModal() {
	isModalDemoOpen.value = true
}

function closeModal() {
	isModalOpen.value = false
}
function closeDemoModal() {
	isModalDemoOpen.value = false
}

function goToDashboard() {
	closeDemoModal()
	router.push('/dashboard')
}
</script>

<template>
	<header class="header">
		<div class="header__logo-project">
			<div class="logo-project__tittle-project">
				<a href="/" class="logo-project__link">
					<img
						src="@/assets/img/logo-project/logo/logo-red-eye.png"
						alt="logo-eye"
						class="logo-project__img"
					/>
				</a>
			</div>
			<div class="logo-project__title-project">
				<h4>Crypto-eye</h4>
			</div>
		</div>
		<div class="button-container">
			<ButtonComponent text="Demo login" @click="openDemoModal" />
			<ButtonComponent text="Registration" @click="openModal" />
		</div>
	</header>
	<ModalComponent :isOpen="isModalOpen" title="Registration" @close="closeModal" />
	<ModalComponent :isOpen="isModalDemoOpen" title="Demo Login" @close="closeDemoModal">
		<input :value="demoUser.name" type="text" placeholder="Name" class="modal-input" readonly />
		<input
			:value="demoUser.email"
			type="email"
			placeholder="Email"
			class="modal-input"
			readonly
		/>
		<button type="button" class="button" id="button-modal___reg" @click="goToDashboard">
			Demo Login
		</button>
	</ModalComponent>
</template>

<style></style>
