<style>
@import url(../assets/style/HomeStyle.css);
</style>
<script>
document.title = 'ZarFilm'

import slideBarHeader from '../components/page/slideBarHeader.vue'
import MainHome from '../components/page/MainHome.vue'
import Header from '../components/page/Header.vue'
import Footer from '../components/page/footer.vue'
export default {
    
    data() {
        return {
          them : 'light',
        };
    },
    methods : {
        ChangeDataThem (event){
            this.them = event
        }
    },
    components: { slideBarHeader, MainHome, Header, Footer },
}
</script>

<template>
<Header @ChangeThem="ChangeDataThem($event)" :thems=them></Header>
<slideBarHeader :thems=them></slideBarHeader>
<MainHome :thems=them></MainHome>
<Footer :thems=them></Footer>
</template>