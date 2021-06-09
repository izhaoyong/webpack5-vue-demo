declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module "vue/types/vue" {
    interface Vue {
        $http: any;
        $Message: any;
        $Modal: any;
    }
}

declare module "*.png" {
    const value: any;
    export default value;
}