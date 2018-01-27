<template>
	<div class="background">
		<div class="head">
			<img src="../assets/imgs/head.jpg">
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.background{
		background-image: url("../assets/imgs/background.jpg");
		width: 100%;
		height: 100%;
		position: absolute;
	}
	img{
		width: 20%;
		height: 200px;
	}
</style>
