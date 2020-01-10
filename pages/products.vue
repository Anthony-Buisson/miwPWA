<template>
  <div>
    <div class="products">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <qrcode-drop-zone></qrcode-drop-zone>
      <qrcode-capture></qrcode-capture>
      <product
        v-for="(product, i) in products"
        :key="i"
        class="product"
        :product="product"
      >
      </product>
    </div>
  </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    import {QrcodeStream, QrcodeDropZone, QrcodeCapture} from 'vue-qrcode-reader';
    import Product from "../components/Product";

    export default {
        components:{
            QrcodeCapture,
            QrcodeDropZone,
            QrcodeStream,
            Product
        },
        data(){
            return {
                search: '',
            }
        },
        methods:{
            ...mapActions(['fetchProducts']),
            onDecode(result){
                const matchingProduct = this.products.data.find(
                    product => product.bar_code == result
                );
                console.log(matchingProduct);
                this.$router.push({
                    path: matchingProduct ? `product/${matchingProduct._id}` : '404'
                })
            }
        },
        computed: {
            ...mapState({
                products: state => state.products.data,
            })
        },
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
