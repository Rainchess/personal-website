<template>
	<div class="index">
		<div class="head">
			<img class="circleImg" src="../assets/imgs/head.jpg">
            <hr/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data () {
            return{

            }
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.index{
		background-image: url("../assets/imgs/background.jpg");
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.head{
		text-align: center;
		margin-top: 150px;
	}
	.circleImg{
		border-radius: 125px;
		border: 5px solid white;
		box-shadow: 1px 1px 1px 1px gray;
	}
    hr{
        width: 100px;
        border-color: cadetblue;
    }
</style>
