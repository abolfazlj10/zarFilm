<script>
import DataBaseJson from '../../db/main.json'
export default{
    data (){
        return{
            ForamtFileIMg : '.jpg',
            srcIMGBox : '../../public/img/' ,
            arryNamesImg : [],
            IsRestart : false,
            currentSlide : 3 ,
            IsScrool : false,
            FirstClient : 0 ,
            LastClinet : 0 ,
            DirectionSliderBar : 'ltr',
            nameMovieSlider : null , 
            imdbMovieHeader : null ,
            urlRootMovieHeader : null ,
            UrlImgBackHeader : null ,
            pressed : false ,
            startX : null,
            x : null ,
            allMovieInSwiper : 8 ,
        }
    },
    methods :{
      ChangeSlide (mode){
        if (mode == "auto"){
          switch (this.currentSlide) {
            case 2:
              this.$refs.innerSlid.style.left = "-490px"
              setTimeout(() => {
                this.currentSlide = 10
                this.$refs.innerSlid.style.transition = "none"
                this.ChangeSlide('auto')
              }, 400);
            break;
            case 3:
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
              this.$refs.innerSlid.style.transition = "none"
              this.$refs.innerSlid.style.left = "-729px"
            break;
            case 4:
              this.$refs.innerSlid.style.left = "-970px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
            break;
            case 5:
              this.$refs.innerSlid.style.left = "-1207px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
            break;
            case 6:
              this.$refs.innerSlid.style.left = "-1449px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
            break;
            case 7:
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
              this.$refs.innerSlid.style.left = "-1683px"
              this.GetInfoMovieFocus("reverse")
              break;
            case 8:
              this.$refs.innerSlid.style.left = "-1924px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
  
              break;
            case 9:
              this.$refs.innerSlid.style.left = "-2160px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
              
              break;
              case 10:
                this.$refs.innerSlid.style.transition = "none"
              this.$refs.innerSlid.style.left = "-2400px"
              this.GetInfoMovieFocus("reverse")
  
              break;
            case 11:
              this.$refs.innerSlid.style.left = "-2643px"
              this.GetInfoMovieFocus("reverse")
              setTimeout(() => {
                this.currentSlide = 3
                this.$refs.innerSlid.style.transition = "none"
                this.ChangeSlide('auto')
              }, 400);
              break;
          
            default:
              break;
          }
        }else {
          var modeLeftElem = this.$refs.innerSlid.style.left
          modeLeftElem = modeLeftElem.slice(0 , modeLeftElem.length -2) // cut charactes PX
         
          if (modeLeftElem >= -490){
            this.currentSlide = 2
          }else if (modeLeftElem >= -729){
            this.currentSlide = 3
          }else if (modeLeftElem >= -970){
            this.currentSlide = 4
          }else if (modeLeftElem >= -1207){
            this.currentSlide = 5
          }else if (modeLeftElem >= -1449){
            this.currentSlide = 6
          }else if (modeLeftElem >= -1683){
            this.currentSlide = 7
          }else if (modeLeftElem >= -1924){
            this.currentSlide = 8
          }else if (modeLeftElem >= -2160){
            this.currentSlide = 9
          }else if (modeLeftElem >= -2400){
            this.currentSlide = 10
          }else if (modeLeftElem >= -2643){
            this.currentSlide = 11
          }else if (modeLeftElem <= -2643){
            this.currentSlide = 11
            
          }
        }
      },
      ChangeSlideTimes (){
        switch (this.currentSlide) {
            case 2:
              this.$refs.innerSlid.style.left = "-490px"
              setTimeout(() => {
                this.currentSlide = 10
                this.$refs.innerSlid.style.transition = "none"
                this.ChangeSlide('auto')
              }, 400);
            break;
            case 3:
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
              this.$refs.innerSlid.style.transition = "none"
              this.$refs.innerSlid.style.left = "-729px"
            break;
            case 4:
              this.$refs.innerSlid.style.left = "-970px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
            break;
            case 5:
              this.$refs.innerSlid.style.left = "-1207px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
            break;
            case 6:
              this.$refs.innerSlid.style.left = "-1449px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
            break;
            case 7:
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
              this.$refs.innerSlid.style.left = "-1683px"
              this.GetInfoMovieFocus("reverse")
              break;
            case 8:
              this.$refs.innerSlid.style.left = "-1924px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
  
              break;
            case 9:
              this.$refs.innerSlid.style.left = "-2160px"
              this.GetInfoMovieFocus("reverse")
              this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
              
              break;
              case 10:
                this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
                this.$refs.innerSlid.style.left = "-2400px"
                this.GetInfoMovieFocus("reverse")
                
                break;
                case 11:
                  this.$refs.innerSlid.style.left = "-2640px"
                  this.GetInfoMovieFocus("reverse")
                  this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
                  setTimeout(() => {
                    this.currentSlide = 3
                this.ChangeSlide('auto')
              }, 400);
              break;
          
            default:
              break;
          }
      },

      
      downMous (e){
                this.pressed = true
              this.$refs.innerSlid.style.transition = "none"
              

                this.startX = e.pageX - this.$refs.innerSlid.offsetLeft
            },
           
            MoveMouse (e){
              
              
              if (this.pressed){
                
                
                this.$refs.innerSlid.style.pointerEvents = 'none'

                    e.preventDefault()
                    
                    
                    this.x = e.pageX

                      this.$refs.innerSlid.style.left = `${this.x - this.startX}px`
                    
                }
            },

             UpMouse (){
                this.pressed = false;
                this.$refs.innerSlid.style.transition = "all 0.25s ease 0s"
                  this.ChangeSlide("manual")
                  this.ChangeSlide("auto")
                this.$refs.innerSlid.style.pointerEvents = 'auto'
                

            },
          GetInfoMovieFocus (IsSlider){
            if (IsSlider == 'normal'){
              this.nameMovieSlider = this.arryNamesImg[0][this.currentSlide + 1].name 
              this.imdbMovieHeader = this.arryNamesImg[0][this.currentSlide + 1].imdb
              this.urlRootMovieHeader = this.arryNamesImg[0][this.currentSlide + 1].urlRout
              this.UrlImgBackHeader = this.arryNamesImg[0][this.currentSlide + 1].srcImgHeader
            }else {
              this.nameMovieSlider = this.arryNamesImg[0][this.currentSlide].name 
              this.imdbMovieHeader = this.arryNamesImg[0][this.currentSlide].imdb
              this.urlRootMovieHeader = this.arryNamesImg[0][this.currentSlide].urlRout
              this.UrlImgBackHeader = this.arryNamesImg[0][this.currentSlide].srcImgHeader
            }
          },

    
    
  },
  beforeMount (){
      this.arryNamesImg.push(DataBaseJson.infoHeader)
      this.nameMovieSlider =  this.arryNamesImg[0][this.currentSlide].name
      this.imdbMovieHeader =  this.arryNamesImg[0][this.currentSlide].imdb
      this.urlRootMovieHeader = this.arryNamesImg[0][this.currentSlide].urlRout
      this.UrlImgBackHeader = this.arryNamesImg[0][this.currentSlide].srcImgHeader
  },
  mounted (){
      setInterval(() => {
        if (this.pressed == false){
          this.currentSlide++
          this.ChangeSlideTimes()
        }
      }, 3000);
  },
  conponents : {
    DataBaseJson,
  }
}
</script>
<template>
  <img :src="srcIMGBox + UrlImgBackHeader + ForamtFileIMg" alt="background header">
  <div class="CoverAndSwiper"></div>
  <div class="Swiper_Info_Header container">



            <div class="swiper-container"  ref="outerSlid"  @mouseup="UpMouse"  @mousedown="downMous" @mousemove="MoveMouse" @touchstart="downMous" @touchmove="MoveMouse" @touchend="UpMouse">
              <div class="inner-swiper" ref="innerSlid" style="left:-729px;">
                <RouterLink  v-for="item in arryNamesImg[0]" :to="item.urlRout" class="itemSlider" :style="'background-image: linear-gradient(#00000000 ,#0202028c) , url(' +srcIMGBox + item.img_Header + ForamtFileIMg+ ') ;'">
                  <div class="Top_itemSlider ">
                    <div class="info_status_movie" :style="'background:' + item.color ">{{item.title}}</div>
                    <div class="btn_play_ItemSlider"><i class="fa-solid fa-circle-play"></i></div>
                  </div>
                  <div class="bottom_itemSlider">
                    <div class="Points_imdb_itmeSlider number_imdb_Header">
                        {{item.imdb}}<span class="number_imdb_Header_up">/10</span>
                      </div>
                    <div class="Like_itmeSlider">
                      <span class="like_percent">
                        {{item.like}}%
                      </span>
                      <i class="fa-solid fa-thumbs-up"></i>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
        <RouterLink :to="urlRootMovieHeader" class="parent_btn_reading"> 
          <div class="btn_reading_document btn_reading_document1">
            <div class="btn_reading_document">
              <div class="Icon_Read_Doc"><i class="fa-brands fa-readme"></i></div>
            </div>
          </div>
        </RouterLink>
      <div class="Swiper_box_Transform">
          <RouterLink :to="urlRootMovieHeader"  class="name_Movie_Header">{{this.nameMovieSlider}}</RouterLink>
          <div class="imdb_Movie_Header"><i class="fa-brands fa-imdb"></i></div>
          <div class="number_imdb_Header">
            {{this.imdbMovieHeader}}<span class="number_imdb_Header_up">/10</span>
          </div>
      </div>
      <RouterView></RouterView>
  </div>
</template>