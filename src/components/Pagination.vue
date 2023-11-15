<template>
	<div class="pagination">
		<button @click="prevPage" :disabled="currentPage === 0">Previous</button>
		<span>{{ currentPage + 1 }}/{{ totalPages }}</span>
		<button @click="nextPage" :disabled="currentPage + 1 === totalPages">
			Next
		</button>
		<button @click="finish" v-if="isLastPage">Finish</button>
	</div>
</template>

<script>
export default {
	props: {
		currentPage: {
			type: Number,
			required: true,
		},
		totalPages: {
			type: Number,
			required: true,
		},
	},
	computed: {
		isLastPage() {
			return this.currentPage + 1 === this.totalPages;
		},
	},
	methods: {
		prevPage() {
			if (this.currentPage !== this.totalPages) {
				this.$emit("updatePage", this.currentPage - 1);
			}
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.$emit("updatePage", this.currentPage + 1);
			}
		},
		finish() {
			this.$emit("finish");
		},
	},
};
</script>

<style scoped>
.pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px;
}

.pagination button {
	padding: 8px 16px;
	font-size: 14px;
	cursor: pointer;
}
</style>
