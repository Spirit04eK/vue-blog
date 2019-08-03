let app = new Vue({
    el: '#app',
    data() {
        return {
            buttonCreatePost: true,
            createPost: false,
            table: true,
            post: false,
            postValue: [],
            postComment: [],
            posts: [],
            currentPosts: [],
            totalPost: 0,
            perPage: 10,
            currentPage: 1,
            modalComment: false,
            modalUser: false,
            userId: 1,
            comment: []
        }
    },
    created() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.data;
                this.totalPost = this.posts.length;
                this.fetchPosts(this.currentPage);
            });
    },
    methods: {
        showCreatePost: function() {
            this.createPost = !this.createPost;
            this.table = !this.table;
            this.buttonCreatePost = !this.buttonCreatePost;
        },
        showPost: function(postId) {
            this.post = !this.post;
            this.table = !this.table;
            this.buttonCreatePost = !this.buttonCreatePost;
            if (this.post) {
                axios
                    .get('https://jsonplaceholder.typicode.com/posts/' + postId)
                    .then(response => {
                        this.postValue = response.data;
                        console.log(this.postValue);
                    });
                axios
                    .get('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
                    .then(response => {
                        this.postComment = response.data;
                        console.log(this.postComment);
                    });
            } else {
                this.postValue = [];
                this.postComment = [];
            }
        },
        showModalComment: function(id) {
            this.modalComment = !this.modalComment;
            if (this.modalComment) {
                axios
                    .get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
                    .then(response => {
                        this.comment = response.data;
                    });
            } else {
                this.comment = [];
            }
        },
        showModalUser: function (id) {
            this.modalUser = !this.modalUser;
            if (this.modalUser) {
                this.userId = id;
            } else {
                this.userId = 0;
            }
        },
        fetchPosts: function(page) {
            page = page -1;
            let start = page * this.perPage;
            let end = start + this.perPage;
            page++;
            this.currentPage = page;
            this.currentPosts = this.posts.slice(start,end);
        }

    }
});
