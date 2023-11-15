<template>
	<main class="container result">
		<table v-if="isAttempts">
			<thead>
				<th>Course Id</th>
				<th>Last time</th>
				<th>Attemps</th>
				<th>Last attempt Date</th>
			</thead>
			<tbody>
				<tr v-for="key in Object.keys(attempts)" :key="key">
					<td>{{ key }}</td>
					<td>{{ attempts[key].timeSpend }}</td>
					<td>{{ attempts[key].count }}</td>
					<td>
						{{ new Date(attempts[key].dateStarted).toLocaleDateString() }}
					</td>
				</tr>
			</tbody>
		</table>
		<h2 v-else>There are no data....</h2>
	</main>
</template>

<script>
export default {
	data() {
		return {
			attempts: null,
		};
	},

	computed: {
		isAttempts() {
			if (!this.attempts || typeof this.attempts !== "object") return false;

			return Object.keys(this.attempts).length > 0;
		},
	},
	mounted() {
		let rawValue = localStorage.getItem("attempts");
		try {
			this.attempts = JSON.parse(rawValue);
		} catch {
			this.attempts = null;
		}
	},
};
</script>

<style scoped>
.result {
	margin-top: 2rem;
}
table {
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
}

th,
td {
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
}

th {
	background-color: #f2f2f2;
}

tr:hover {
	background-color: #f5f5f5;
}
</style>