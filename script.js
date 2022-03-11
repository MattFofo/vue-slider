
const app = new Vue({
    el: '#root',
    data: {
        indexActiveThumb: 0,
        arrSlides: [
        {
            image: '01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
        },
        {
            image: '02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum'
        },
        {
            image: '03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
            image: '04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
        },
        {
            image: '05.jpg',
            title: 'Paradise',
            text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
        }
    
        ],
    },
    methods: {
        nextThumb() {
            if (this.indexActiveThumb == this.arrSlides.length - 1) {
                this.indexActiveThumb = 0;
            } else {
                this.indexActiveThumb++;

            }
        },
        previousThumb() {
            if (this.indexActiveThumb == 0) {
                this.indexActiveThumb = this.arrSlides.length - 1;
            } else {
                this.indexActiveThumb--;
            }
        },

    },
    created() {
        setInterval(this.nextThumb, 3000)
    }
});



