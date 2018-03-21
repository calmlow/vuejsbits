/** some filters */
Vue.filter('mynum', function (number) {
    if (!number) {
        return '';
    }
    var num = isNaN(number = Math.abs(number)) ? 0 : number;
    num = Math.round(num);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
})


/** Main entry point */
var app = new Vue({
    router,
    el: '#app',
    mounted: function() {
        //q = this.$route.query.q;
        //console.log(q);
        this.currentRoute = this.$route.path;
    },
    data: {
        currentVersion: Vue.version,
        currentRoute: window.location.pathname,
        message: 'message from main vue instance'
    }
});
app.$mount('#app')