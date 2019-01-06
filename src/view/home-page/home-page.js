export const homePage={
    data () {
        return {
            // isCollapse:false
            centerDialogVisible: false,
            menus:[{
                name:'调查问卷',
                path:'/',
                icon:"fa fa-braille"
            },{
                name:'因子分析',
                path:'',
                icon:"fa fa-bar-chart"
            },{
                name:'个人信息录入',
                path:'',
                icon:"fa fa-file-text-o"
            },{
                name:'课程达成度',
                path:'',
                icon:"fa fa-check-square-o"
            },{
                name:'个人信息',
                path:'',
                icon:"fa fa-address-card"
            }]
        }
    },
    methods: {
        popover(){
            if(this.centerDialogVisible==false){
                this.centerDialogVisible=true
            }else{
                this.centerDialogVisible=false
            }
        },
        pageActions(){
            if(this.isCollapse==true){
                this.isCollapse=false
            }else{
                this.isCollapse=true
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
    },
    mounted() {
        
    },
}