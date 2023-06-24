<script>
    import DataBaseInfo from '../../db/main.json'
    
    document.title = localStorage.getItem('NameActor')
    
    import Header from '../page/Header.vue'
    import Footer from '../page/footer.vue'
    export default {
        props:["NameForm"],
        data (){
            return {
                them : 'light',
                InformationActors : [],
                DataMoviesActors : [],
                NameMovie : null ,
                Name : null ,
                Information : null ,
                NumberMovies : null ,
                Birth : null ,
                Skils : null ,
                City : null ,
                NameImageActor : null, 
                LinkImdb : null ,
                SrcImgFolder : "../../../public/img/",
                formatImage : '.jpg',
                SrcImageActor : "../../../public/imageActors/",
                NameForms : this.NameForm
            }
        },  
        methods : {
            ChangeDataThem (event){
                    this.them = event
            },
            getMoviesPlayActor (){
                this.NameMovie.forEach(elem => {
                    DataBaseInfo.PageInfoSerial.find((obj) => {
                        if (obj.name == elem){
                            var addObj = {
                                urlRout : obj.urlRout,
                                Img : obj.Img,
                                color : obj.color,
                                title : obj.title,
                                Imdb : obj.Imdb,
                                Like : obj.Like,
                                name : obj.name
                            }
                            this.DataMoviesActors.push(addObj)
                        }
                    })
                });
            }
        },  
        beforeMount () {
            var nameActorLocal = localStorage.getItem('NameActor')
            this.NameForms = nameActorLocal
            var AddDataActor = DataBaseInfo.Actors.find((obj) => {
                return obj.NameEn == this.NameForms
            })
            this.InformationActors.push(AddDataActor)
            this.Information = this.InformationActors[0].Information
            this.Name = this.InformationActors[0].NameFa
            this.NumberMovies = this.InformationActors[0].Movies.length
            this.NameMovie = this.InformationActors[0].Movies
            this.Birth = this.InformationActors[0].Birth
            this.Skils = this.InformationActors[0].Skils
            this.City = this.InformationActors[0].City
            this.NameImageActor = this.InformationActors[0].Img
            this.LinkImdb = this.InformationActors[0].LinkImdb
            
            this.getMoviesPlayActor()
        },
        components : { Header, DataBaseInfo, Footer }
    }
    
</script>
<template>
    <Header @ChangeThem="ChangeDataThem($event)"></Header>
        <div class="container Name_Actor_Page" :class="(this.them == 'dark') ? 'color_text_dark' : ''">
            <h2>{{this.Name}}</h2>
        </div>
        <div class="InfoActors" >
            <div class="container">
                <div class="Cadr_Actors" :class="(this.them == 'dark') ? 'back_color_dark2' : ''">
                    <div class="Top_Section">
                        <div class="titile_NumberMovies">
                            <div class="Number_Movie"  :class="(this.them == 'dark') ? 'Border_Dark , back_color_dark2 , color_text_dark' : ''">  
                                {{this.NumberMovies}} فیلم
                            </div>
                        </div>
                        <img class="Image_Actors_Movie" :src=" SrcImageActor + NameImageActor + formatImage ">
                    </div>
                    <div class="bottom_Section" >
                        <div class="Info_Data" :class="(this.them == 'dark') ? 'color_text_dark' : ''">     
                            <span class="lable_Information_Actors">نام :</span>
                            <span class="Value_Information_Actors">{{this.Name}}</span>
                        </div>
                        <div class="Info_Data"  :class="(this.them == 'dark') ? 'color_text_dark' : ''">
                            <span class="lable_Information_Actors">تاریخ تولد :</span>
                            <span class="Value_Information_Actors">{{this.Birth}}</span>
                        </div>
                        <div class="Info_Data"  :class="(this.them == 'dark') ? 'color_text_dark' : ''">
                            <span class="lable_Information_Actors">محل تولد :</span>
                            <span class="Value_Information_Actors">{{this.City}}</span>
                        </div>
                        <div class="Info_Data"  :class="(this.them == 'dark') ? 'color_text_dark' : ''">
                            <span class="lable_Information_Actors">حرفه:</span>
                            <span class="Value_Information_Actors">{{this.Skils}}</span>
                        </div>
                        <div class="Info_Data btn_ShowImdb_Actors"  :class="(this.them == 'dark') ? 'color_text_dark' : ''">

                        <a v-if="LinkImdb != false" :href="LinkImdb" target="_blank">
                            <button>مشاهده در IMDB</button>
                        </a>
                        
                        <button v-else style="cursor: default ;" title="در IMDB وجود ندارد">مشاهده در IMDB</button>

                        
                        </div>
                    </div>
                </div>
                <div class="Description_Actors" :class="(this.them == 'dark') ? 'back_color_dark2' : ''">
                {{this.Information}}
                </div>
            </div>
        </div>
        <div class="Movies_Actors">
            <div class="title_Movies_Actors container" :class="(this.them == 'dark') ? 'color_text_dark' : ''">
                <span>مجموعه </span>
                آثار
            </div>
            <div class="Items_Movie_Actors container">
                <div class="Movie_Cader_Actors" v-for="Movie in this.DataMoviesActors">
                    <RouterLink :to="Movie.urlRout"  class="Cover_Cadr_Movie" :style="'background-image: linear-gradient(#00000000 ,#0202028c) , url(' + SrcImgFolder +  Movie.Img + formatImage +  ') ;'">
                      <div class="Top_itemSlider ">
                        <div class="info_status_movie" :style="'background:' + Movie.color "  :class="(this.them == 'dark') ? '' : 'Border_Light'">{{Movie.title}}</div>
                        <div class="btn_play_ItemSlider"><i class="fa-solid fa-circle-play"></i></div>
                      </div>
                      <div class="bottom_itemSlider_Movie">
                        <div class="Points_imdb_itmeSlider number_imdb_Header">
                            {{Movie.Imdb}}<span class="number_imdb_Header_up">/10</span>
                          </div>
                        <div class="Like_itmeSlider_Movie">
                          <span class="like_percent">
                            {{Movie.Like}}%
                          </span>
                          <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                      </div>
                    </RouterLink>
                    <div class="Name_Movie_Actor">
                        <RouterLink :to="Movie.urlRout" :class="(this.them == 'dark') ? 'color_text_dark' : ''"> 
                            {{Movie.name}}
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    <Footer :thems=them></Footer>
</template>