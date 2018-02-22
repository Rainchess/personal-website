<template>
    <div class="contact">
        <div class="nav">
            <ul>
                <router-link to="/">
                    <li>简介</li>
                </router-link>
                <router-link to="/education">
                    <li>教育</li>
                </router-link>
                <router-link to="/experience">
                    <li>经历</li>
                </router-link>
                <router-link to="/skills">
                    <li>技能</li>
                </router-link>
                <li>联系我</li>
            </ul>
        </div>
        <div class="head">
            <img class="circleImg" src="../assets/imgs/head1.jpg">
        </div>
        <div class="container">
            <p class="title">联 系 我</p>
            <hr class="hrTop"/>
            <hr class="hrBottom"/>
            <div class="info">
                <input class="inputText" type="text" placeholder="姓名">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Skills',
        data () {
            return{

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contact{
        background-image: url("../assets/imgs/background.jpg");
        background-attachment: fixed;
        width: 100%;
        height: 100%;
    }
    .nav{
        position: fixed;
    }
    li{
        width: 150px;
        float: left;
        list-style: none;
        color: gray;
        margin-top: 10px;
        margin-left: 80px;
        font-size: 20px;
        text-align: center;
    }
    .head{
        text-align: center;
        padding-top: 150px;
    }
    .circleImg{
        border-radius: 70px;
        border: 3px solid #EAEAEA;
    }
    .container{
        width: 800px;
        height: 500px;
        background-color: #EAEAEA;
        margin: auto;
        margin-top: -70px;
        margin-bottom: 100px;
    }
    .title{
        font-size: 30px;
        padding-top: 100px;
        text-align: center;
        color: grey;
    }
    hr{
        width: 120px;
        border-top: 0;
        border-bottom: 1px solid #808080;
        margin-left: 340px;
    }
    .hrTop{
        margin-top: 15px;
    }
    .hrBottom{
        margin-top: 1px;
    }
    .inputText{
        width: 350px;
        height: 35px;
        margin-top: 50px;
        margin-left: 40px;
        background-color: transparent;
        border: 1px solid gray;
        font-size: 20px;
        padding-left: 10px;
        color: dimgray;
    }
</style>