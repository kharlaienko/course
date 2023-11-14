<template>
	<Layout>
		<router-view />
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
</style>
