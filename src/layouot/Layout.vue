<template>
	<div class="layout">
		<Header />
		<div class="wrapper">
			<slot />
		</div>
	</div>
</template>

<script>
import Header from "./Header.vue";
export default {
	components: { Header },
};
</script>

<style>
.layout {
	height: 100%;
	width: 100%;
	background-color: var(--bg);
	display: flex;
	flex-direction: column;
}
.wrapper {
	overflow-y: auto;
	height: 100%;
	flex-grow: 1;
	padding-bottom: 2rem;
}
</style>