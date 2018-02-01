<template>
	<div class="index">
		<div class="head">
			<img class="circleImg" src="../assets/imgs/head.jpg">
            <hr/>
            <p class="title">
                张屿麒的个人主页
            </p>
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
	.index{
		background-image: url("../assets/imgs/background.jpg");
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.head{
		text-align: center;
		margin-top: 150px;
        font-size: 30px;
	}
	.circleImg{
		border-radius: 125px;
		border: 5px solid white;
		box-shadow: 1px 1px 1px 1px gray;
	}
    hr{
        width: 100px;
        height: 1px;
        border: none;
        border-top: 1px solid dimgray;
        margin-top: 10px;
        margin-left: 590px;
    }
    .title{
        margin-top: 10px;
        color: dimgrey;
    }
</style>
