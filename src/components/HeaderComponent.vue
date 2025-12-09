<script setup>
import { ref } from 'vue'
import ModalComponent from './ModalComponent.vue'
import ButtonComponent from './ButtonComponent.vue'

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
</script>

<template>
	<header class="header">
		<div class="header__logo-project">
			<div class="logo-project__tittle-project">
				<a href="/index.html" class="logo-project__link">
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
	<nav>
		<div class="navigation">
			<div class="navigation__title">
				<h1>Current rate for today</h1>
			</div>
		</div>
	</nav>
	<ModalComponent :isOpen="isModalOpen" title="Registration" @close="closeModal" />
	<ModalComponent :isOpen="isModalDemoOpen" title="Demo Login" @close="closeDemoModal">
		<form>
			<input
				:value="demoUser.name"
				type="text"
				placeholder="Name"
				class="modal-input"
				readonly
			/>
			<input
				:value="demoUser.email"
				type="email"
				placeholder="Email"
				class="modal-input"
				readonly
			/>
			<button
				type="submit"
				class="button"
				id="button-modal___reg"
				@click="$emit('demo-login')"
			>
				Demo Login
			</button>
		</form>
	</ModalComponent>
</template>

<style></style>
