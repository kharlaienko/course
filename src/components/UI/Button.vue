<template>
	<button v-bind="$attrs" v-on="$listeners" class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
	text-decoration: none;
	text-transform: uppercase;
	font-size: 1.2rem;
	transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	padding: 0.5em 1em;
	border-radius: 1rem;
	border: 1px solid var(--color-selected);
	background: transparent;
}

.button:hover {
	cursor: pointer;
	color: var(--color-oposite) !important;
	box-shadow: var(--filled-box);
}
</style>