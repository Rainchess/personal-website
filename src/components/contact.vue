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
            <div class="up">
                <p class="title">联 系 我</p>
                <hr class="hrTop"/>
                <hr class="hrBottom"/>
                <div class="info">
                    <input class="common inputText inputTextLeftUp" type="text" placeholder="姓名">
                    <input class="common inputText inputTextRightUp" type="text" placeholder="邮箱">
                    <input class="common inputText inputTextLeftDown" type="text" placeholder="职业">
                    <input class="common inputText inputTextRightDown" type="text" placeholder="电话">
                    <textarea class="common textareaMsg" placeholder="意见..."></textarea>
                    <button class="btn">提交</button>
                </div>
            </div>
        </div>
        <div class="down">
            <div class="msg">

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
    .up{
        width: 800px;
        height: 650px;
        background-color: #EAEAEA;
        margin: auto;
        margin-top: -70px;
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
    input{
        outline: none;
    }
    .common{
        background-color: transparent;
        border: 1px solid gray;
        font-size: 20px;
        padding-left: 10px;
        color: dimgray;
    }
    .inputText{
        width: 350px;
        height: 35px;
    }
    .inputTextLeftUp{
        margin-top: 50px;
        margin-left: 30px;
    }
    .inputTextRightUp{
        margin-left: 10px;
    }
    .inputTextLeftDown{
        margin-top: 20px;
        margin-left: 30px;
    }
    .inputTextRightDown{
        margin-left: 10px;
    }
    textarea{
        outline: none;
    }
    .textareaMsg{
        width: 717px;
        height: 200px;
        margin-top: 20px;
        margin-left: 30px;
        padding-right: 10px;
        padding-top: 5px;
    }
    .btn{
        width: 230px;
        height: 40px;
        margin-top: 20px;
        margin-left: 30px;
        background-color: dimgray;
        color: white;
        border: none;
        font-size: 20px;
    }
    .down{
        width: 800px;
        height: 200px;
        background-image: url("../assets/imgs/contact-down.jpg");
        margin: auto;
        margin-bottom: 100px;
    }
    .msg{
        width: 800px;
        height: 200px;
        background-color: rgba(255,255,255,0.5);
    }
</style>