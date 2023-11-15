<template>
	<Layout>
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</Layout>
</template>

<script>
import Layout from "./layouot/Layout.vue";
export default {
	components: { Layout },
	name: "App",
};
</script>

<style>
html {
	font-size: 10px;
}

body {
	font-size: 1.6rem;
	font-family: Arial, sans-serif;
	color: var(--color);
}

html,
body {
	width: 100%;
	height: 100%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
