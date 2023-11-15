<template>
	<main class="container">
		<ul class="list" v-if="courses.length">
			<li class="list__item" v-for="course in courses" :key="course.id">
				<Card :title="course.title" :id="course.id" />
			</li>
		</ul>
		<div class="spinner" v-else>
			<Spinner />
		</div>
	</main>
</template>

<script>
import Card from "../components/Card.vue";
import Spinner from "../components/UI/Spinner.vue";
export default {
	components: { Card, Spinner },

	computed: {
		courses() {
			return this.$store.state.courses;
		},
	},
	mounted() {
		this.$store.dispatch("fetch");
	},
};
</script>

<style scoped>
.spinner {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.list {
	margin-top: 3rem;
	display: grid;
	place-items: center;
	grid-template-columns: 1fr;
	column-gap: 1rem;
	row-gap: 2rem;
}

.list .list__item {
	display: inline-flex;
	justify-content: center;
	max-width: 400px;
	width: 100%;
}

@media (min-width: 641px) {
	.list {
		grid-template-columns: 1fr 1fr;
	}
}

@media (min-width: 1325px) {
	.list {
		grid-template-columns: 1fr 1fr 1fr;
	}
}
</style>