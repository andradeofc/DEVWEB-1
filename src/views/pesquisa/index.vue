<template>

<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Da um UP!</title>
  </head>
  <body>
    <!-- Inicio MENU -->
    <Navbar> </Navbar>
    <!-- Fim MENU -->

    <!-- Inicio Carousel -->
    <Carousel> </Carousel>
    <!-- Fim Carousel -->
    
    <!-- Inicio NavbarLocalização -->
    <NavbarMap> </NavbarMap>
    <!-- Fim NavbarLocalização -->

 <!-- Lista -->
    <div class="container">
    <div class="row">
        <div class="col-md-9">
            <div class="row">
                <div class="col-md-12 post">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>
                                <strong><a href="#" class="post-title text-dark">Teste</a></strong></h4>
                        </div>
                        <h1> {{estabelecimento.nome}} </h1>
                    </div>
                    <div class="row">
                        <div class="col-md-12 post-header-line">
                            <span class="glyphicon glyphicon-user"></span><a href="#">A aproximadamente 1km</a>
                        </div>
                    </div>
                    <div class="row post-content">
                        <div class="col-md-3">
                            <a href="#">
                                <img src="" alt="" class="img-responsive">
                            </a>
                        </div>
                        <div class="col-md-9">
                            <p>
                                Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option.
                                Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari
                                conclusionemque, ad nobis propriae quaerendum sea.
                            </p>
                            <p>
                                <a class="btn btn-read-more" href="">Saber mais</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 post">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>
                                <strong><a href="#" class="post-title text-dark">Teste</a></strong></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 post-header-line">
                            <span class="glyphicon glyphicon-user"></span><a href="#">A aproximadamente 2km</a>
                        </div>
                    </div>
                    <div class="row post-content">
                        <div class="col-md-3">
                            <a href="#">
                                <img src="" alt="" class="img-responsive">
                            </a>
                        </div>
                        <div class="col-md-9">
                            <p>
                                Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option.
                                Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari
                                conclusionemque, ad nobis propriae quaerendum sea.
                            </p>
                            <p>
                                <a class="btn btn-read-more" href="">Saber mais</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 post">
                    <div class="row">
                        <div class="col-md-12">
                            <h4>
                                <strong><a href="#" class="post-title text-dark">Teste</a></strong></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 post-header-line">
                            <span class="glyphicon glyphicon-user"></span><a href="#">A aproximadamente 2km</a>
                        </div>
                    </div>
                    <div class="row post-content">
                        <div class="col-md-3">
                            <a href="#">
                                <img src="" alt="" class="img-responsive">
                            </a>
                        </div>
                        <div class="col-md-9">
                            <p>
                                Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option.
                                Utinam salutatus ex eum. Ne mea dicit tibique facilisi, ea mei omittam explicari
                                conclusionemque, ad nobis propriae quaerendum sea.
                            </p>
                            <p>
                                <a class="btn btn-read-more" href="">Saber mais</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            
        </div>
    </div>
    </div>

     <!-- Lista-->
</body>

</html>

</template>

<script>
/* eslint-disable no-unused-vars */
import Navbar from "@/components/common/Navbar";
import NavbarMap from "@/components/common/NavbarMap";
import Carousel from "@/components/common/Carousel";
export default {
  
  components: {
    Navbar, NavbarMap, Carousel
  },
  data() {
    return {
        estabelecimento:{
            nome: String,
            descrição: String,
            serviços: String,
            localização: String
        }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init(){
      let id = this.$route.params.id
      await this.getEstabelecimentos(id)
    },

    async getEstabelecimentos(id){
      const resp = await this.$services.estabelecimento.getAll();
      if(resp && resp.data){
        this.estabelecimento = resp.data
      }
      else{
        this.makeToast('warning')
      }
    },

    generateStaticLocal(id){
        let local
        if(id=="1"){
            local = {
                nome: 'Sempre Bella',
                descrição:[
                 {"type":"text", "label":"Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option."}
                ],
                serviços: "",
                localização: "",
            }
          }
          if(id=="2"){
            local = {
                nome: "Sempre Bella 2",
                descrição:[
                 {"type":"text", "label":"Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option."}
                ],
                serviços: "",
                localização: "",
            }
          }
          if(id=="3"){
            local = {
                nome: "Sempre Bella 3",
                descrição:[
                 {"type":"text", "label":"Lorem ipsum dolor sit amet, id nec conceptam conclusionemque. Et eam tation option."}
                ],
                serviços: "",
                localização: "",
            }
          }
        return local
    },

    home: function() {
      this.$router.push("/"); 
    },
    loginempresa: function() {
      this.$router.push("/loginempresarial"); 
    }
  }
};


/* eslint-disable */
</script>


<style scoped>

a:hover { text-decoration:none; }
.btn
{
    transition: all .2s linear;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -o-transition: all .2s linear;
}
.btn-read-more
{
    padding: 5px;
    text-align: center;
    border-radius: 0px;
    display: inline-block;
    border: 2px solid rgb(0, 0, 0);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    color:rgb(20, 20, 20);
}

.btn-read-more:hover
{
    color: #FFF;
    background: #5bc0de;
}
.post { border-bottom:1px solid #DDD }
.post-title {  color:#292b2c; }
.post .glyphicon { margin-right:5px; }
.post-header-line { border-top:1px solid #DDD;border-bottom:1px solid #DDD;padding:5px 0px 5px 15px;font-size: 12px; }
.post-content { padding-bottom: 15px;padding-top: 15px;}

</style>
