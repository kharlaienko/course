<template>
	<div class="spinner">
		<div class="spinner-inner"></div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.spinner-inner {
	border: 4px solid rgba(0, 0, 0, 0.1);
	border-top: 4px solid var(--color-selected);
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
