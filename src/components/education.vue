<template>
    <div class="education">
        <div class="nav">
            <ul>
                <router-link to="/">
                    <li>简介</li>
                </router-link>
                <li>教育</li>
                <li>经历</li>
                <li>技能</li>
            </ul>
        </div>
    </div>
</template>

<script>

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
        width: 200px;
        float: left;
        list-style: none;
        color: gray;
        margin-top: 10px;
        margin-left: 90px;
        font-size: 20px;
        text-align: center;
    }
</style>