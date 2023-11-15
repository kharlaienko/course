<template>
	<header class="header">
		<ul class="container header__list list" v-if="routes.length">
			<li class="list__item" v-for="item in routes" :key="item.name">
				<Link
					:to="{ name: item.name }"
					class="list__link"
					:isActive="currentRouteName === item.name.toLowerCase()"
					>{{ item.name }}</Link
				>
			</li>
		</ul>
	</header>
</template>

<script>
import Link from "../components/UI/Link.vue";
import { routesList } from "../router/router";
export default {
	components: { Link },
	computed: {
		currentRouteName() {
			return this.$route.name?.toLowerCase();
		},

		routes() {
			return routesList || [];
		},
	},
};
</script>

<style  scoped>
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
	margin: 0 1.5rem;
}

@media (min-width: 641px) {
	.list .list__item {
		margin: 0 3rem;
	}
}
</style>