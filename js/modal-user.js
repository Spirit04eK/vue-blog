//Component for modal user

Vue.component('modal-user', {
    template: '#modal-user-template',
    props: {
        userId: {
            type: Number,
            default: 1
        }
    }
});