<template>
	<div class="login">
		<Authorization @submit="handleSubmit" />
	</div>
</template>

<script>
import Authorization from "../components/Forms/Authorization.vue";
export default {
	components: { Authorization },
	methods: {
		handleSubmit(data) {
			localStorage.setItem("user", JSON.stringify(data));
			this.$router.push("/");
		},
	},
};
</script>

<style scoped>
.login {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
}
</style>