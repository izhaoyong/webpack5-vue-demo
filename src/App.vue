<template>
    <div class="app">
        要做 {{ msg }} 的码农
        <br />

        <img src="@/resources/images/icons/car.png" />
        <img />
        <br />

        <div class="image" :style="{ backgroundImage: `url(${carPng})` }"></div>
        <div
            class="image"
            :style="{ backgroundImage: `url(${'@/resources/images/icons/car.png'})` }"
        ></div>

        <HelloComponent />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HelloComponent from '@/components/Hello.vue';

import carPng from '@/resources/images/icons/car.png';

import '@/resources/styles/main.css';

@Component({
    components: {
        HelloComponent,
    },
})
export default class App extends Vue {
    name = 'App';
    msg = '有追求的';
    carPng = carPng;

    hello(): string {
        return 'Hello';
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    created() {
        // eslint-disable-next-line no-console
        console.log('created');
    }
}
</script>

<style scoped lang="less">
// @import '@/resources/styles/main.css';

.app {
    // color: red;
    // display: flex;
    // justify-content: center;
    // transform: rotate(45deg);
    font-family: MyFont;

    img {
        background: url(~@/resources/images/icons/car.png) no-repeat;
        background-size: 20px;
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .image {
        width: 100px;
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
}
</style>
