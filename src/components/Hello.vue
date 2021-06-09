<template lang="pug">
    h1 {{ msg }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
    name = 'HelloWorld';

    data(): Record<string, unknown> {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    }
}
</script>

<style scoped lang="less">
h1,
h2 {
    font-weight: normal;
}
</style>
