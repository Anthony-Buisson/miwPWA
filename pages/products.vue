<template>
  <div>
  <div style="padding: 1rem;"><label for="search">Recherche par nom : </label><input type="text" v-model="search"></div>
  <div class="products">
    <div class="product" v-for="(product) in matchingResults" :key="product._id.$oid">
      <h2 class="text-center mb-3">{{ product.name + ' ('+product.grade+'/5)'}}</h2>
      <hr class="hr">
      <aside style="width: 48%">
        <h3>de {{ product.brand }}</h3>
      <i>code-barre : {{ product.bar_code ? product.bar_code.$numberInt : 'non renseigné' }}</i><br>
      <i>quantité : {{ product.quantity || 'non renseignée' }}</i>
      </aside>
      <aside class="text-right" v-if="product.ingredients.length > 0" style="width: 48%">
        <span><b>Ingrédients</b></span><br>
        <span v-for="(ingredient) in product.ingredients">{{ ingredient.name }} ({{ ingredient.proportion }}%)<br></span>
      </aside>
    </div>
  </div>
  </div>
</template>
<script>
    // import { mapActions, mapState } from 'vuex';
    export default {
        data(){
            return {
              search: '',
                products: [
                    {
                        "_id": {
                            "$oid": "5dea4fa36247bf23d8339037"
                        },
                        "name": "Lipton Ice Tea",
                        "brand": "Unilever",
                        "bar_code": {
                            "$numberInt": "123456789"
                        },
                        "grade": "5",
                        "pictures": ["/public/img1", "/public/img2"],
                        "quantity": "200 ml",
                        "ingredients": [{
                            "name": "sugar",
                            "proportion": "70"
                        }, {
                            "name": "petrol",
                            "proportion": "10"
                        }, {
                            "name": "water",
                            "proportion": "5"
                        }, {
                            "name": "strawberry",
                            "proportion": "10"
                        }, {
                            "name": "milk",
                            "proportion": "5"
                        }]
                    },
                  {
                        "_id": {
                            "$oid": "5dea4fa36dedbf23d8339037"
                        },
                        "name": "Sprite",
                        "brand": "Coca-Cola Company",
                        "bar_code": {
                            "$numberInt": "987654321"
                        },
                        "grade": "3",
                        "pictures": ["/public/img1", "/public/img2"],
                        "quantity": "330 ml",
                        "ingredients": [{
                            "name": "sugar",
                            "proportion": "70"
                        }, {
                            "name": "petrol",
                            "proportion": "10"
                        }, {
                            "name": "water",
                            "proportion": "5"
                        }, {
                            "name": "strawberry",
                            "proportion": "10"
                        }, {
                            "name": "milk",
                            "proportion": "5"
                        }]
                    },
                  {
                        "_id": {
                            "$oid": "5dea4fa36247bf23d83447837"
                        },
                        "name": "Orangina",
                        "brand": "Orangina Suntory France",
                        "bar_code": {
                            "$numberInt": "123451479"
                        },
                        "grade": "5",
                        "pictures": ["/public/img1", "/public/img2"],
                        "quantity": "200 ml",
                        "ingredients": [{
                            "name": "sugar",
                            "proportion": "70"
                        }, {
                            "name": "petrol",
                            "proportion": "10"
                        }, {
                            "name": "water",
                            "proportion": "5"
                        }, {
                            "name": "strawberry",
                            "proportion": "10"
                        }, {
                            "name": "milk",
                            "proportion": "5"
                        }]
                    },
                  {
                        "_id": {
                            "$oid": "5aaa4fa36247bf23d8339037"
                        },
                        "name": "Coca-Cola",
                        "brand": "Coca-Cola Company",
                        "bar_code": {
                            "$numberInt": "123456789"
                        },
                        "grade": "5",
                        "pictures": ["/public/img1", "/public/img2"],
                        "quantity": "200 ml",
                        "ingredients": [{
                            "name": "sugar",
                            "proportion": "70"
                        }, {
                            "name": "petrol",
                            "proportion": "10"
                        }, {
                            "name": "water",
                            "proportion": "5"
                        }, {
                            "name": "strawberry",
                            "proportion": "10"
                        }, {
                            "name": "milk",
                            "proportion": "5"
                        }]
                    },
                  {
                        "_id": {
                            "$oid": "5dga4fa78954bf23d8339037"
                        },
                        "name": "7 Up",
                        "brand": "Seven Up",
                        "bar_code": {
                            "$numberInt": "123456789"
                        },
                        "grade": "5",
                        "pictures": ["/public/img1", "/public/img2"],
                        "quantity": "200 ml",
                        "ingredients": [{
                            "name": "sugar",
                            "proportion": "70"
                        }, {
                            "name": "petrol",
                            "proportion": "10"
                        }, {
                            "name": "water",
                            "proportion": "5"
                        }, {
                            "name": "strawberry",
                            "proportion": "10"
                        }, {
                            "name": "milk",
                            "proportion": "5"
                        }]
                    },
                    {
                        "_id": {
                            "$oid": "5dfb3be981c85c2f808c89cb"
                        },
                        "pictures": [],
                        "quantity": "",
                        "ingredients": [],
                        "name": "pepsi",
                        "brand": "satan",
                        "__v": {
                            "$numberInt": "0"
                        }
                    }
                ]
            }
        },
        /*methods:{
            // ...mapActions(['fetchProducts'])
        },*/
        computed: {
          matchingResults() {
            return this.products.filter(product => {
              return new RegExp(this.search, 'i').test(product.name);
            })
          }
        },
        mounted() {
            // this.fetchProducts();
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
