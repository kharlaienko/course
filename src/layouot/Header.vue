<template>
	<header class="header">
		<ul class="container header__list list">
			<li class="list__item">
				<router-link
					class="list__link"
					:class="{ list__link_active: currentRouteName === 'home' }"
					:to="{ name: 'home' }"
					>Home</router-link
				>
			</li>
			<li class="list__item">
				<router-link
					class="list__link"
					:class="{ list__link_active: currentRouteName === 'results' }"
					:to="{ name: 'results' }"
					>Results</router-link
				>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	computed: {
		currentRouteName() {
			return this.$route.name?.toLowerCase();
		},
	},
};
</script>

<style scoped>
.header {
	padding: 1rem 0;
	border-bottom: 1px solid var(--border);
	box-shadow: var(--box-shadow);
}

.list {
	display: flex;
	justify-content: center;
	align-items: center;
}

.list .list__item {
	margin: 0 3rem;
}

.list .list__link {
	text-decoration: none;
	text-transform: uppercase;
	font-size: 1.5rem;
}
.list .list__link.list__link_active {
	color: var(--color-selected);
}
</style>