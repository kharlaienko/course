<template>
	<div class="layout">
		<Header />
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
	background-color: #e7e7e7;
}
</style>