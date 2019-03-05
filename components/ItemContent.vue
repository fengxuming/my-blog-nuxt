<template>
    <div class="item-content">
        <div class="item-title">
            {{title}}
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        
    }
}
</script>
<style>
    .item-content{
        margin-left: 20px;
        margin-right: 20px;
    }
    .item-content .item-title{
        text-align: left;
        border-bottom: 1px solid #eee;
        padding-bottom: 6px;

    }
</style>


