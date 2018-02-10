<template>
    <div class="experience">
        <div class="nav">
            <ul>
                <router-link to="/">
                    <li>简介</li>
                </router-link>
                <router-link to="/education">
                    <li>教育</li>
                </router-link>
                <li>经历</li>
                <li>技能</li>
            </ul>
        </div>
        <div class="head">
            <img class="circleImg" src="../assets/imgs/head1.jpg">
        </div>
        <div class="container">
            <p class="title">经 历</p>
            <hr class="hrTop"/>
            <hr class="hrBottom"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Experience',
        data () {
            return{

            }
        }
    }
</script>

<style scoped>
    .experience{
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
        width: 100px;
        height: 1px;
        margin-left: 350px;
    }
    .hrTop{
        margin-top: 20px;
    }
</style>