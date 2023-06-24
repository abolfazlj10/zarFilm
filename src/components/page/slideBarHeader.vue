<script>
import SwiperHeader1 from "./swiperHeader.vue";
import DataBaseJson from "../../db/main.json"

export default {
    props : ["thems"],
    data (){
        return{
            them : this.thems,
            showboxdropdown : false,
            arryGanre : [],
            TypeGanreSerach : null,
            typeShowMedia : 'All'
        }
    },
    methods :{
        showDropDown (){
            if (this.showboxdropdown){
                this.showboxdropdown = false
            }else {
                this.showboxdropdown = true
            }
        }
    },
    watch :{
        thems (){
            this.them = this.thems
        }
    },
    mounted (){
        this.arryGanre.push(DataBaseJson.ganreMenu)
    },
    components: { SwiperHeader1 }
}
</script>
<style>
@import url(../../assets/style/all.css);
</style>
<template>
    <div class="Explore_Movie_Header">
        <SwiperHeader1></SwiperHeader1>
    </div>
    <div class="container search_pro_main" :class="(this.them == 'dark') ? 'search_pro_main_dark' : ''">
        <div class="Serach_Type_Ganre">
            <div class="type_Movie_Search" :class="(this.them == 'dark') ? 'back_color_dark1' : ''">
                <div @click="this.typeShowMedia = 'All'" class="Box_Type_Movie " :class="(this.typeShowMedia == 'All') ? 'Box_Type_Movie_Active' : ''">
                    همه
                </div>
                <div @click="this.typeShowMedia = 'Movie'" class="Box_Type_Movie" :class="(this.typeShowMedia == 'Movie') ? 'Box_Type_Movie_Active' : ''">
                    فیلم
                </div>
                <div @click="this.typeShowMedia = 'Serial'" class="Box_Type_Movie" :class="(this.typeShowMedia == 'Serial') ? 'Box_Type_Movie_Active' : ''">
                    سریال
                </div>
            </div>
            <div class="ganre_Movie_Search">
                <span>ژانر:</span>
                <div @click="showDropDown()" class="Select_Type_Ganre" :class="(this.them == 'dark') ? 'back_color_dark1' : ''">
                    انتخاب کنید
                    <div class="Icon_Drop_Menu" :class="(this.them == 'dark') ? 'back_color_dark2' : ''">
                        <i class="fa-solid fa-square-caret-down"></i>
                    </div>
                <div class="drop_box_ganre" v-if="this.showboxdropdown" :class="(this.them == 'light') ? 'color_text_dark' : ''">
                    <div v-for="item in this.arryGanre[0]" class="item_dropdown" @click="this.TypeGanreSerach = item">{{item}}</div>
                </div>
                </div>
            </div>
        </div>
        <button class="Submit_Movie_Search">
            جست و جو
        </button>

    </div>
</template>