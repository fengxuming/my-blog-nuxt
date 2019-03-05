<template>
    <div class="info-detail" v-bind:class="{ portrait: portrait }">
        <div class="img-view">
            <img :src="imgUrl">
        </div>
        <div class="content-view">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        portrait:Boolean,
        imgUrl:String
    }
}
</script>
<style>

    .info-detail{
        display: flex;
        padding: 25px;
        
    }
    .info-detail.portrait{
        flex-direction:column;
    }
    .info-detail .img-view{
        width: 250px;
        /* height: 370px; */
    }
    .info-detail.portrait .img-view{
        width: 100%;
    }
    .info-detail .content-view{
        margin-left: 30px;
    }
    .info-detail.portrait .content-view{
        margin-top: 30px;
    }
    .info-detail .img-view img{
        width: 100%;
        box-shadow: 4px 10px 18px #333;
    }
    .info-detail .img-view img:hover{
        transition: all .4s ease;
        -webkit-transform: translate3D(0,-1px,0) scale(1.02);
        transform: translate3D(0,-1px,0) scale(1.02);
    }
</style>

