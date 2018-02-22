<template>
    <div class="education">
        <div class="nav">
            <ul>
                <router-link to="/">
                    <li>简介</li>
                </router-link>
                <li>教育</li>
                <router-link to="/experience">
                    <li>经历</li>
                </router-link>
                <router-link to="/skills">
                    <li>技能</li>
                </router-link>
                <router-link to="/contact">
                    <li>联系我</li>
                </router-link>
            </ul>
        </div>
        <div class="head">
            <img class="circleImg" src="../assets/imgs/head1.jpg">
        </div>
        <div class="container">
            <p class="title">教 育</p>
            <hr class="hrTop"/>
            <hr class="hrBottom"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Education',
        data () {
            return{

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .education{
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
</style>