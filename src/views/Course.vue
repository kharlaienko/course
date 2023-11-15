<template>
	<div class="lesson container" v-if="lessons.length">
		<div class="lesson__header">
			<h1 class="lesson__title">{{ currentLesson.title }}</h1>
			<div class="lesson__stopwatch">
				<Stopwatch @start="start" @update="updateTime" />
			</div>
		</div>
		<article
			class="lesson__content"
			ref="article"
			v-html="currentLesson.content"
		></article>
		<div class="lesson_footer">
			<Pagination
				@finish="finish"
				@updatePage="updatePage"
				:currentPage="page"
				:totalPages="lessons.length"
			/>
		</div>
	</div>
	<div v-else class="spinner">
		<Spinner />
	</div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Stopwatch from "../components/Stopwatch.vue";
import Spinner from "../components/UI/Spinner.vue";

const KEY_ATTEMPTS = "attempts";
export default {
	components: { Stopwatch, Pagination, Spinner },
	data() {
		return {
			page: 0,
			dateStarted: null,
			time: null,
		};
	},
	computed: {
		itemId() {
			return this.$route.params.id;
		},
		lessons() {
			return this.$store.state.lessons;
		},

		currentLesson() {
			return this.lessons[this.page];
		},
	},
	methods: {
		updatePage(page) {
			this.page = page;

			this.$refs.article.scrollTo({ top: 0, behavior: "smooth" });
		},

		finish() {
			let prevValue = localStorage.getItem(KEY_ATTEMPTS);
			let json;
			let attempt = {
				dateStarted: this.dateStarted,
				timeSpend: this.time,
				count: 1,
			};
			if (prevValue) {
				try {
					json = JSON.parse(prevValue);
				} catch {
					json = null;
				}
			}
			if (json && json[this.itemId]) {
				localStorage.setItem(
					KEY_ATTEMPTS,
					JSON.stringify({
						...json,
						[this.itemId]: {
							...attempt,
							count: json[this.itemId].count + 1,
						},
					})
				);
			} else if (json) {
				localStorage.setItem(
					KEY_ATTEMPTS,
					JSON.stringify({
						...json,
						[this.itemId]: {
							...attempt,
						},
					})
				);
			} else {
				localStorage.setItem(
					KEY_ATTEMPTS,
					JSON.stringify({ [this.itemId]: attempt })
				);
			}
			this.$router.push({ name: "results" });
		},

		start(date) {
			this.dateStarted = date;
		},

		updateTime(value) {
			this.time = value;
		},
	},
	mounted() {
		this.$store.dispatch("fetchLessons", this.itemId);
	},
};
</script>

<style>
.spinner {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.lesson {
	position: relative;
	max-width: 80ch;
	width: 100%;
	margin: 1rem auto 0;
	overflow: hidden;
}

.lesson .lesson__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.lesson .lesson__content {
	height: 65svh;
	margin-top: 2rem;
	padding: 0 4ch;
	overflow-y: auto;
}

.lesson .lesson__content p {
	text-align: justify;
	margin: 1em 0;
}
</style>