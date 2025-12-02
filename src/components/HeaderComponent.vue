<script setup>
import { ref } from 'vue'
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
		<div class="header__button-registration">
			<button
				class="header__button-registration__button"
				id="openRegModal"
				@click="openModal()"
			>
				Registration
			</button>
		</div>
	</header>
	<nav>
		<div class="navigation">
			<div class="navigation__title">
				<h1>Current rate for today</h1>
			</div>
		</div>
	</nav>

	<!-- Модальное окно -->
	<div id="myModalReg" class="header__modal-windows" v-if="isModalOpen" @click="closeModal">
		<div class="header__modal-windows___content" @click.stop>
			<span class="header__modal-windows__close" @click="closeModal">&times;</span>
			<h2>Registration</h2>
			<form>
				<input type="text" placeholder="Name" class="header__modal-input-style" />
				<input type="email" placeholder="Email" class="header__modal-input-style" />
				<button type="submit" class="button-registration-style" id="button-modal___reg">
					Registration
				</button>
			</form>
		</div>
	</div>
</template>

<style></style>
