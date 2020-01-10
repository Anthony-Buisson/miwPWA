<template>
  <div>
    <div style="padding: 1rem;"><label for="search">Recherche par nom : </label><input type="text" v-model="search"></div>
    <div class="products">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <qrcode-drop-zone></qrcode-drop-zone>
      <qrcode-capture></qrcode-capture>
      <div class="product" v-for="(product) in products.data" :key="product._id">
        <img v-if="product.pictures" :src="product.pictures[0]" alt="">
        <h2 class="text-center mb-3">{{ product.name + ' ('+(product.grade ? product.grade+'/5)':'aucune note)')}}</h2>
        <hr class="hr">
        <aside style="width: 48%">
          <h3>de {{ product.brand }}</h3>
          <i>code-barre : {{ product.bar_code ? product.bar_code.$numberInt : 'non renseigné' }}</i><br>
          <i>quantité : {{ product.quantity || 'non renseignée' }}</i>
        </aside>
        <aside class="text-right" v-if="product.ingredients && product.ingredients.length > 0" style="width: 48%">
          <span><b>Ingrédients</b></span><br>
          <span v-for="(ingredient) in product.ingredients">{{ ingredient.name }} ({{ ingredient.proportion }}%)<br></span>
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    import {QrcodeStream, QrcodeDropZone, QrcodeCapture} from 'vue-qrcode-reader';
    export default {
        components:{
            QrcodeCapture,
            QrcodeDropZone,
            QrcodeStream
        },
        data(){
            return {
                search: ''
            }
        },
        methods:{
            ...mapActions(['fetchProducts']),
            onDecode(result){
                console.log(this.products);
                console.log(result);
                const matchingProduct = this.products.data.find(
                    product => product.bar_code == result
                );
                console.log(matchingProduct);
                this.$router.push({
                    path: matchingProduct ? `product/${matchingProduct._id}` : '404'
                })
            }
        },
        computed:
            mapState({
                products: state => state.products
                /*matchingResults: function () {
                    return state.products.filter(product => {
                        return new RegExp(this.search, 'i').test(product.name);
                    })
                },*/
            })
        ,
        mounted() {
            this.fetchProducts();
        }
    }
</script>
<style>
  .products{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .product{
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
    width: 80%;
  }
  .text-center{
    text-align: center;
  }
  .text-right{
    text-align: right;
  }
  aside{
    display: inline-block;
    vertical-align: top;
  }
  .hr{
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
</style>
