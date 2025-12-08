<script setup>
import { ref } from 'vue'
import ModalComponent from './ModalComponent.vue'
import ButtonComponent from './ButtonComponent.vue'

const isModalOpen = ref(false)

function openModal() {
	isModalOpen.value = true
}

function closeModal() {
	isModalOpen.value = false
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
			<ButtonComponent text="Demo login" />
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
</template>

<style></style>
