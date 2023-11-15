<template>
	<div class="form">
		<h2>Registration</h2>
		<form @submit.prevent="register">
			<div class="form__group">
				<label for="email">Email:</label>
				<input type="email" id="email" v-model="email" required />
			</div>

			<div class="form__group">
				<label for="name">Name:</label>
				<input type="text" id="name" v-model="name" required />
			</div>

			<div class="form__button">
				<Button type="submit">Register</Button>
			</div>
		</form>
	</div>
</template>

<script>
import Button from "../UI/Button.vue";
export default {
	components: { Button },
	emits: ["submit"],
	data() {
		return {
			email: "",
			name: "",
		};
	},
	methods: {
		register() {
			const userData = {
				email: this.email,
				name: this.name,
			};
			this.$emit("submit", userData);
		},
	},
};
</script>

<style scoped>
.form {
	max-width: 400px;
	width: 100%;
	margin: auto;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form h2 {
	text-align: center;
	font-size: 2rem;
	margin-bottom: 20px;
}

.form form {
	display: flex;
	flex-direction: column;
}

.form .form__group {
	margin-bottom: 15px;
}
.form .form__group label {
	font-weight: bold;
}

.form .form__group input {
	width: 100%;
	padding: 8px;
	margin-top: 5px;
	box-sizing: border-box;
}

.form .form__button {
	margin: 0 auto;
}
</style>
