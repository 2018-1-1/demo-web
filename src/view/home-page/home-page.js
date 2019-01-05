export const homePage={
    data () {
        return {
            // isCollapse:false
            centerDialogVisible: false
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