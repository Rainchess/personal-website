<template>
	<div class="index">
        <div class="nav">
            <ul>
                <li>简介</li>
                <router-link to="/education">
                    <li>教育</li>
                </router-link>
                <router-link to="/experience">
                    <li>经历</li>
                </router-link>
                <li>技能</li>
            </ul>
        </div>
		<div class="head">
			<img class="circleImg" src="../assets/imgs/head.jpg">
            <hr/>
            <p class="title">
                张屿麒的个人主页
            </p>
		</div>
        <div class="container">
            <div class="whiteRec">
                <p></p>
            </div>
            <div class="grayRec">
                <div class="frame">
                    <div class="bubble">
                        <div class="top"></div>
                        <div class="bottom"></div>
                    </div>
                </div>
            </div>
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
        background-attachment: fixed;
		width: 100%;
		height: 100%;
	}
    .nav{
        position: fixed;
    }
    li{
        width: 200px;
        float: left;
        list-style: none;
        color: gray;
        margin-top: 10px;
        margin-left: 90px;
        font-size: 20px;
        text-align: center;
    }
	.head{
		text-align: center;
		padding-top: 150px;
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
        margin-left: 46%;
    }
    .title{
        margin-top: 10px;
        color: dimgrey;
    }
    .whiteRec{
        background-color: #EAEAEA;
        color: gray;
        width: 700px;
        height: 450px;
        margin-top: 50px;
        margin-left: 400px;
        margin-bottom: 50px;
    }
    .grayRec{
        background-color: grey;
        width: 450px;
        height: 400px;
        margin-top: -475px;
        margin-left: 75px;
        margin-bottom: 75px;
        position: absolute;
    }
    .frame{
        background-color: transparent;
        border: 5px double white;
        color: whitesmoke;
        width: 390px;
        height: 340px;
        margin-top: 25px;
        margin-left: 25px;
        position: relative;
    }
    .top{
        background-color: wheat;
        color: gray;
        width: 90px;
        height: 40px;
        margin-top: 25px;
        margin-left: 25px;
    }
    .bottom{
        background-color: wheat;
        color: gray;
        width: 0;
        height: 0;
        margin-left: 35px;
        border-width: 5px 10px;
        border-style:dashed solid solid dashed;
        border-color:#F5DEB3 #808080 #808080 #F5DEB3;
    }
</style>
