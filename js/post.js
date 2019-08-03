//Component for post
Vue.component('post', {
    template: '#post',
    props: {
        post: {

        },
        comments: {
            type: Array
        }
    }
});