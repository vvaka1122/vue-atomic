<template>
    <div class="media">
        <a class="media__wrap" :href="url">
            <div class="media__body">
                <div class="media__thumb">
                    <Img :url="image" :alt="alt" :title="title" width="100%" />
                </div>
                <div class="media__info">
                    <Heading :level=3 :txt="title" />
                    <Txt :message="description" />
                </div>
            </div>
            <div class="media__footer">
                <Link txt="動画を見る" :url="url" :blank="true" :click="click" />
            </div>
        </a>
    </div>
</template>
<script src='./index.ts' lang='ts'></script>
<style src='./index.scss' lang='scss' scoped></style>
