<template>
	<component
		:is="isRouterLink ? 'router-link' : 'a'"
		v-bind="$attrs"
		v-on="$listeners"
		:class="{ link_active: isActive }"
		class="link"
	>
		<slot></slot>
	</component>
</template>

<script>
import isObjectEmpty from "../../helpers/isObjectEmpty";
export default {
	props: {
		isActive: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		isRouterLink() {
			return isObjectEmpty(this.$attrs.to);
		},
	},
};
</script>

<style scoped>
.link {
	text-decoration: none;
	text-transform: uppercase;
	font-size: 1.5rem;
	transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	padding: 0 0.2em;
}

.link:hover {
	cursor: pointer;
	color: var(--color-oposite) !important;
	box-shadow: var(--filled-box);
}

.link.link_active {
	color: var(--color-selected);
}
</style>