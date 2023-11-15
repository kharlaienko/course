<!-- src/components/Stopwatch.vue -->
<template>
	<div class="stopwatch">
		<p>{{ displayTime }}</p>
	</div>
</template>

<script>
export default {
	emits: ["start", "update"],
	data() {
		return {
			stopwatchRunning: false,
			stopwatchStartDate: null,
			stopwatchTime: 0,
			stopwatchInterval: null,
		};
	},
	mounted() {
		this.startStopwatch();
	},
	computed: {
		displayTime() {
			const seconds = Math.floor((this.stopwatchTime / 1000) % 60);
			const minutes = Math.floor((this.stopwatchTime / (1000 * 60)) % 60);
			const hours = Math.floor(this.stopwatchTime / (1000 * 60 * 60));

			return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
				seconds < 10 ? "0" : ""
			}${seconds}`;
		},
	},
	methods: {
		startStopwatch() {
			this.stopwatchStartDate = new Date();
			this.$emit("start", this.stopwatchStartDate);
			this.stopwatchRunning = true;
			this.stopwatchInterval = setInterval(() => {
				this.stopwatchTime = new Date() - this.stopwatchStartDate;
			}, 10);
		},
		stopStopwatch() {
			clearInterval(this.stopwatchInterval);
		},
	},

	watch: {
		displayTime() {
			this.$emit("update", this.displayTime);
		},
	},

	beforeDestroy() {
		this.stopStopwatch();
	},
};
</script>

<style scoped>
.stopwatch {
	text-align: center;
	margin: 20px;
	font-size: 18px;
}

button {
	margin: 10px;
	padding: 8px 16px;
	font-size: 14px;
	cursor: pointer;
}
</style>
