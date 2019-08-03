//Component for create new post
Vue.component('create-post', {
    template: '#create-post',
    props: {

    },
    data: function () {
        return {
            titlePost: '',
            textPost: '',
            errors: {
                title: false,
                text: false
            }
        }
    },
    methods: {
        savePost: function () {
            this.errors.title = false;
            this.errors.text = false;
            let count = 2;
            if (this.titlePost.length === 0) {
                this.errors.title = true;
                count--;
            }
            if (this.textPost.length === 0) {
                this.errors.text = true;
                count--;
            }
            if ( count === 2) {
                axios
                    .post('https://jsonplaceholder.typicode.com/posts', {
                        body: JSON.stringify({
                            title: this.titlePost,
                            body: this.textPost,
                            userId: 1
                        }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    .then(function (response) {
                        alert('New post saved: ' + response.data.body);
                    })
                    .catch(function (error) {
                        alert('An error has occurred');
                    });
                this.$emit('close');
            }
        }
    }
});