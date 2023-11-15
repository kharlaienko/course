<!-- src/components/Card.vue -->
<template>
	<div class="card">
		<h2 class="card__title">{{ title }}</h2>

		<div class="card__footer">
			<Link :to="{ name: 'lessons', params: { id: id } }">Learn Now</Link>
		</div>
	</div>
</template>

<script>
import Link from "./UI/Link.vue";
export default {
	components: { Link },
	props: {
		title: {
			type: String,
			required: true,
		},
		id: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			titleRef: null,
		};
	},
};
</script>

<style scoped>
.card {
	width: 100%;
	height: 300px;
	border: 1px solid var(--border);
	border-radius: 8px;
	padding: 20px;
	overflow: hidden;
	transition: border-color 0.3s ease-in-out;
	box-shadow: var(--box-shadow);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.card .card__title {
	margin: 0;
	font-size: 1rem;
	overflow: hidden;
	transition: color 0.3s ease-in-out;
}

.card .card__footer {
	padding-top: 1rem;
	flex-shrink: 0;
	margin: auto auto 0 auto;
}

.card:hover .card__title {
	border-color: var(--color-selected);
	color: var(--color-selected);
}
</style>
