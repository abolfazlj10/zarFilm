<script>
export default {
    props : ["thems"],
    data(){
        return{
            them : this.thems,
        }
    },
    watch :{
        thems (){
            this.them = this.thems
        }
    },
} 
</script>
<template>
<footer class="FotterHome" :class="(this.them == 'dark') ? 'back_color_dark2 color_text_dark' : ''">
    <div class="container">
        <div class="Icon_footer">
            <a href="#"><i class="fa-brands fa-telegram"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
        <div class="TextCenter_footer">
            کلیه حقوق مادی و معنوی این وب سایت متعلق به زرفیلم می باشید.
        </div>
        <div class="Link_Footer">
            <a href="#"> <p> خرید اشتراک </p></a>
            <a href="#"> <p> پخش آنلاین </p></a>
            <a href="#"> <p> سوالات متداول </p></a>
            <a href="#"> <p> قوانین </p></a>
            <a href="#"> <p> تماس با ما </p></a>
        </div>
    </div>
</footer>
</template>