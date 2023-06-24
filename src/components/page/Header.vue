<script>

export default {
    props : ["thems"],
    data (){
        return{
            them : this.thems,
        }
    },
    watch : {
        them(){
            if (this.them == 'light'){
                this.$emit('ChangeThem' , this.them)
                lightBody()
                localStorage.setItem('them_Movie' , this.them)
                }else {
                this.$emit('ChangeThem' , this.them)
                DarkBody()
                localStorage.setItem('them_Movie' , this.them)
            }
        }
    },
    beforeMount(){
        this.them = localStorage.getItem('them_Movie')
    },
    mounted (){
            if (this.them == 'light'){
                this.$emit('ChangeThem' , this.them)
                lightBody()
            }else {
                this.$emit('ChangeThem' , this.them)
                DarkBody()
            }
    },
}
function DarkBody (){
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
}
function lightBody (){
    document.body.style.backgroundColor = '#f8f9f9'
    document.body.style.color = '#545454'
}

</script>
<template>
    <nav class="navbar_header_home">
        <div class="container">
            <RouterLink  :class="(this.them == 'dark') ? 'color_text_dark' : ''" to="/">صفحه اصلی</RouterLink>
            <RouterLink  :class="(this.them == 'dark') ? 'color_text_dark' : ''" to="/AboutUs">درباره ما</RouterLink>
            <RouterLink  :class="(this.them == 'dark') ? 'color_text_dark' : ''" to="/ConcatsUs">تماس با ما</RouterLink>
            
            <RouterView></RouterView>
        </div>
    </nav>
    <header class="Header_Home" :class="(this.them == 'dark') ? 'back_color_dark2' : ''" >
        <div>
            <div class="Tools_bar_Header container">

                <div class="Logo_Header">
                    <RouterLink v-if="this.them == 'light'" to="/"><img src="../../assets/img/Logo-Light.png" alt="brand logo"></RouterLink>
                    <RouterLink v-else to="/"> <img src="../../assets/img/Logo-Dark.png" alt="brand logo"></RouterLink>
                    <RouterView></RouterView>
                   
                </div>
                <div class="Search_Swich_Login">
                    <div class="SearchBar_Header">
                        <input class="Serach_input_Header" :class="(this.them == 'dark') ? 'Serach_input_Header_dark' : ''" type="search" placeholder="نام فیلم و سریال مورد نظر را وارد کنید...">
                        <button>
                            <img class="Icon_search_header" src="../../assets/img/magnifying-glass-solid.svg" alt="">
                        </button>
                    </div>
                    <div class="Mode_switch">
                        <div @click="(this.them == 'light') ? them = 'dark' : them = 'light'" class="Swich_btn" :class="(this.them == 'dark') ? 'Swich_btn_dark' : ''">
                            <div><i class="fa-regular fa-sun"></i></div>
                            <div><i class="fa-regular fa-moon"></i></div>
                            <span class="Marker_them"  :class="(this.them == 'dark') ? 'Marker_them_Change Marker_them_dark' : ''"></span>
                        </div>
                    </div>
                    <div class="Login_btn_Header">ورود / عضویت</div>
                </div>
            </div>
            </div>
    </header>
</template>