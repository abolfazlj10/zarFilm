<script>
import DataBaseInfo from '../../db/main.json'

document.title = 'Yaghi | ZarFilm'

import Header from '../page/Header.vue'
import Footer from '../page/footer.vue'
    export default{
        data (){
            return{
                them : 'light',
                arrayInfo : [],
                nameSerial : "شبکه مخفی زنان",
                srcImgCover : '../../../public/img/',
                srcImgBack : '../../../public/backgroundInformation/',
                SrcImageActors : "../../../public/imageActors/",
                formatImg : '.jpg',
                urlRootLinkActor : "/Actors/ActorTempleate",
                backgroundBoxCober : null ,
                BackImage : null ,
                colorTitle : null ,
                TitleBox : null ,
                GanreSerial : null ,
                DayPlay : null ,
                HourPlay: null ,
                lastPart : null ,
                NextPart : null ,
                chanell : null ,
                MinutsPart : null ,
                Age : null ,
                Directo : null ,
                YearBuild : null ,
                Imdb : null ,
                Desciption : null ,
                Actors : null,
                pressed : false , 
                startX : 0 ,
                x : 0 ,
                lastLeft : 0 ,
            }
        },
        methods :{
            downMous (e){
                this.pressed = true
                
                this.startX = e.pageX - this.$refs.innerSlid.offsetLeft
            },
           
            MoveMouse (e){
                
                if (this.pressed){
                    this.$refs.innerSlid.style.pointerEvents = 'none'

                    e.preventDefault()
                    

                    this.x = e.pageX

                    this.$refs.innerSlid.style.left = `${this.x - this.startX}px`


                    this.AllowGoLeft()
                    
                }
            },

             UpMouse (){
                this.pressed = false;
                this.$refs.innerSlid.style.pointerEvents = 'auto'
            },

            AllowGoLeft (){
                if (parseInt(this.$refs.innerSlid.style.left) > this.AllowLeft) {
                    this.$refs.innerSlid.style.left = this.AllowLeft + "px"
                }

                if (this.$refs.innerSlid.getBoundingClientRect().right < this.$refs.outerSlid.getBoundingClientRect().right) {
                    this.$refs.innerSlid.style.left = `-${this.$refs.innerSlid.getBoundingClientRect().width - this.$refs.outerSlid.getBoundingClientRect().width}px`
                }
            },
            
             ChangeDataThem (event){
                this.them = event
            },

            TopLeftAllow (){
                this.lengthActors = Object.keys(this.Actors).length

                switch (this.lengthActors) {
                    case 25:
                        this.AllowLeft = 1791
                        break;
                    case 24:
                        this.AllowLeft = 1658
                        break;
                    case 23:
                        this.AllowLeft = 1528
                        break;
                    case 22:
                        this.AllowLeft = 1385
                        break;
                    case 21:
                        this.AllowLeft = 1257
                        break;
                    case 20:
                        this.AllowLeft = 1124
                        break;
                    case 19:
                        this.AllowLeft = 978
                        break;
                    case 18:
                        this.AllowLeft = 845
                        break;
                    case 17:
                        this.AllowLeft = 715
                        break;
                    case 16:
                        this.AllowLeft = 579
                        break;
                    case 15:
                        this.AllowLeft = 444
                        break;
                    case 14:
                        this.AllowLeft = 308
                        break;
                    case 13:
                        this.AllowLeft = 172
                        break;
                    case 12:
                        this.AllowLeft = 36
                        break;
                    default:
                        this.AllowLeft = 0
                        break;
                }
            },
            SaveName (name){
                localStorage.setItem('NameActor' , name)
            }
        },
        beforeMount () {
            
            var findMovie = DataBaseInfo.PageInfoSerial.find((obj) => {
                return obj.name == "شبکه مخفی زنان"
            })
            

            this.arrayInfo.push(findMovie)
            

            this.backgroundBoxCober = this.arrayInfo[0].Img
            this.BackImage = this.arrayInfo[0].imgBack
            this.colorTitle = this.arrayInfo[0].color
            this.TitleBox = this.arrayInfo[0].title
            this.GanreSerial = this.arrayInfo[0].Ganre
            this.DayPlay = this.arrayInfo[0].Day
            this.HourPlay = this.arrayInfo[0].HourPlay
            this.lastPart = this.arrayInfo[0].lastPart
            this.NextPart = this.arrayInfo[0].NextPart
            this.chanell = this.arrayInfo[0].chanell
            this.MinutsPart = this.arrayInfo[0].MinutsPart
            this.Age = this.arrayInfo[0].Age
            this.Directo = this.arrayInfo[0].Directo
            this.YearBuild = this.arrayInfo[0].YearBuild
            this.Imdb = this.arrayInfo[0].Imdb
            this.Desciption = this.arrayInfo[0].description
            this.Actors = this.arrayInfo[0].Actors
            this.TopLeftAllow()
        },
        components : { Header, DataBaseInfo, Footer }
    }
</script>
<template>
 <!-- بازیگران -->
    <Header @ChangeThem="ChangeDataThem($event)"></Header>
    <div class="Information_Serial_Url">
        <div class="gradiant_Background"></div>
        <img class="background_img" :src="srcImgBack + BackImage + formatImg" alt="background">
        <div class="container">
        <div class="location_Url">
            <img class="Img_Location_url" src="../../assets/img/location-dot-solid.svg" alt="Icon Location">
            
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/" >خانه</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">سریال {{this.nameSerial}}</li>
            </ol>
            </nav>
        </div>
        <div class="Information_Serial">
            <div>
                <div :style="'background-image: linear-gradient(#00000000 ,#0202028c) , url(' +srcImgCover + backgroundBoxCober + formatImg+ ') ;'" class="cover_img_Serial">
                    <div class="Title_Box_cover">
                        <div class="info_status_movie" :style="'background:' + colorTitle ">{{this.TitleBox}}</div>
                    </div>
                </div>
            </div>
            <div class="Box_Center_Info">
                <div class="Icons_Box_Cover"></div>
                <div class="Name_Serial_Box">
                    <h1>سریال {{this.nameSerial}}</h1>
                </div>
                <div class="Ganre_serial_BoxCover">
                    <span>ژانرها:</span>
                    <div v-for="Ganre in this.GanreSerial" class="Ganre_Serial_Box">{{Ganre}}</div>
                </div>
                <div class="Info_Serial_Icons">
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-calendar"></i></div>
                        <div class="Text_BoxMini">
                            <p>انتشار :</p>
                            {{this.DayPlay}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-clock"></i></div>
                        <div class="Text_BoxMini">
                            <p>ساعت انتشار :</p>
                            {{this.HourPlay}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-calendar-check"></i></div>
                        <div class="Text_BoxMini">
                            <p>آخرین قسمت :</p>
                            {{this.lastPart}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-file-video"></i></div>
                        <div class="Text_BoxMini">
                            <p>پخش اختصاصی :</p>
                            {{this.chanell}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-hourglass-half"></i></div>
                        <div class="Text_BoxMini">
                            <p>هر قسمت  :</p>
                            {{this.MinutsPart}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-user"></i></div>
                        <div class="Text_BoxMini">
                            <p> کارگردان  :</p>
                            {{this.Directo}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-calendar-plus"></i></div>
                        <div class="Text_BoxMini">
                            <p>رده سنی  :</p>
                            {{this.Age}}
                        </div>
                    </div>
                    <div class="Box_Mini_Info">
                        <div class="Icon_BoxMini"><i class="fa-solid fa-circle-play"></i></div>
                        <div class="Text_BoxMini">
                            <p> سال ساخت  :</p>
                            {{this.YearBuild}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="About_Box_Imdb">
                <div class="imdb_Info">
                    <div class="number_imdb_Header">
                        {{this.Imdb}}<span class="number_imdb_Header_up">/10</span>
                    </div>
                    <i class="fa-brands fa-imdb"></i>
                </div>
                <h3 class="Description_Info">{{this.Desciption}}</h3>
                <div></div>
            </div>

        </div>
        </div>
    </div>

    <div class="Swiper_Actors container">
        <div class="Icon_Star"><i class="fa-solid fa-star"></i><span class="lable_Actors">ستارگان</span></div>

        <div class="slider-container" ref="outerSlid" @mouseup="UpMouse"  @mousedown="downMous" @mousemove="MoveMouse" @touchstart="downMous" @touchmove="MoveMouse" @touchend="UpMouse">
            <div class="inner-slider" ref="innerSlid" style="left:0;">
                <router-link ref="item"  class="Item_Actors" v-for="Actor in this.Actors" :to="(Actor[3] == false) ? '' : this.urlRootLinkActor" @click="SaveName(Actor[2])"   :class="(this.them == 'dark') ? 'color_text_dark' : ''">
                    <div  class="Image_Actors" :style="'background-image: url(' + SrcImageActors + Actor[2] + formatImg +');'"></div>
                    <div  class="Name_Actors">{{Actor[0]}}</div>
                    <div  class="Name_Actors_inMovie">{{Actor[1]}}</div>
                </router-link>
            </div>
        </div>

    </div>
    <Footer :thems=them></Footer>
</template>