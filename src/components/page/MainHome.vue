<script>
import DataBaseJson from '../../db/main.json'
export default {
    props : ["thems"],
    data(){
        return{
            arryShowBoxExplore : [],
            formatImageExplore: '.jpg',
            srcIMGBox : '../../../public/CoverExploreMain/',
            them : this.thems,
        }
    },
    watch :{
        thems (){
            this.them = this.thems
        }
    },
    components : {DataBaseJson},
    mounted () {
        this.arryShowBoxExplore.push(DataBaseJson.ExploreMainBox)
    },
}

</script>
<template>
<div class="Serial_Explore_Main container">
    <div class="Title_Explore_Main">
        <div class="Icon_serial_Playnow">
            <img class="Icon_serial_Playnow" src="../../assets/img/video-solid.svg" alt="Video Icon">
        </div>
        <div class="Title_Serial" :class="(this.them == 'dark') ? 'color_text_dark' : ''">
            <h4>سریال های در حال پخش</h4>
            <h6>سریال های در حال پخش در نمایش خانگی</h6>
        </div>
    </div>
    <div class="Show_Serial_PlayNow">
        <router-link  class="Box_Serial_explore" v-for="item in this.arryShowBoxExplore[0]" :to="item.urlRout">
            <div class="Box_Explore" :style="'background-image: url(' +srcIMGBox + item.img + formatImageExplore+ ') ;'">
            <div class="shdow_gradiant"></div>
            <div class="Like_Serial_Explore">
                 <i class="fa-solid fa-thumbs-up"></i>
                 <span>{{item.like}}%</span>
            </div>
            </div>
            <div class="info_Box_Explore_play">
                <div class="seison_Part" :class="(this.them == 'dark') ? 'color_text_dark back_color_dark2' : ''">
                    <span class="part_explore_box">+ قسمت {{item.part}}</span>
                    <span class="sesion_explore_box">فصل {{item.sesion}}</span>
                </div>
                <div class="name_box_explore" :class="(this.them == 'dark') ? 'color_text_dark' : ''">{{item.name}}</div>
            </div>
            </router-link>
        <router-view></router-view>
    </div>
</div>
</template>