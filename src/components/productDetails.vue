<template>
<section class="pr_details">
    <div class="cotainer-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="pr_details_img">
                    <ul class="overlay-panel-actions-primary">
                        <li @click="currentTab = 0"><img :src="require('../assets/img/pr_detail_icon.webp')" alt=""></li>
                        <li @click="currentTab = 1"><img :src="require('../assets/img/pr_detal_icon1.webp')" alt=""></li>
                    </ul>
                    <div class="big_img">
                        <img v-show="currentTab === 0"  :src="require('../assets/img/pr_details1.webp')" alt="">
                        <img v-show="currentTab === 1" :src="require('../assets/img/pr_details2.webp')" alt="">
                        <div class="product-newbadge">
                            <span>New</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="pr_details_content">
                    <div class="head_and_heart">
                        <h2>Artificial orange hibiscus and greenery rail flower box, 31 x 30”</h2>
                        <a href=""><i class="fa-regular fa-heart"></i></a>
                    </div>
                    <p>Outdoor flowers, Railing planters, Home page</p>
                    <div class="sku_pr">SKU : ARREXT134</div>
                    <div class="price_pr">$284.99</div>
                    <hr>
                    <ul>
                        <li>
                            <div class="icon_size width">
                                <img :src="require('../assets/img/width_icon.webp')" alt="">
                            </div>
                            <div class="size_parame">
                                <p>Width: <br><b>30"</b> </p>
                            </div>
                        </li>
                        <li>
                            <div class="icon_size height">
                                <img :src="require('../assets/img/width_icon.webp')" alt="">
                            </div>
                            <div class="size_parame">
                                <p>Height: <br><b>31"</b> </p>
                            </div>
                        </li>
                        <li>
                            <div class="icon_size depth">
                                <img :src="require('../assets/img/width_icon.webp')" alt="">
                            </div>
                            <div class="size_parame">
                                <p>Depth: <br><b>16"</b> </p>
                            </div>
                        </li>
                    </ul>
                    <div class="add_cart_pr">
                        <div class="quantity" v-for="(item, index) in cartItems" :key="index">
                            <span class="minus" @click="decrementItem(index)">-</span>
                            <label class="screen-reader-text" for="quantity"></label>
                            <input type="number" v-model="item.quantity" class="input-text qty text" min="1" max="" step="1" placeholder="" inputmode="numeric" autocomplete="off">
                            <span class="plus" @click="incrementItem(index)">+</span>
                        </div>

                        <button class="add_to_cart_pr">Add to cart </button>
                    </div>
                    <div class="share_social">
                        <p>Share</p>
                        <ul>
                            <li><a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa-brands fa-pinterest"></i></a></li>
                            <li><a href="" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>

                        </ul>
                    </div>
                    <hr>
                    <div class="second_tab">
                        <ul>
                            <li @click="currentTab1 = 0">Description</li>
                            <li @click="currentTab1 = 1">Additional information</li>
                        </ul>
                        <div class="content" v-show="currentTab1 === 0" >
                            <p>This stunning flower box is designed to create a vibrant pop of color and tropical flair to your outdoor space with ease. Railing planters are perfect for adorning balconies, terraces, or garden fences! Details: the flower box only measures 7” high by 23,5” wide. It is made out of synthetic rattan. To protect your outdoor planter over time and prevent any discoloration, spray an anti-UV protector at the beginning of each season.</p>
                        </div>
                        <div class="content" v-show="currentTab1 === 1" >
                            <ul>
                                <li><p><b>Dimensions </b> &nbsp;&nbsp; 16" × 30" × 31"</p></li>
                                <li><p><b>Materials </b> &nbsp;&nbsp; Plastic</p></li>
                                <li><p><b>Colors	 </b> &nbsp;&nbsp; Green, Orange</p></li>
                                <li><p><b>Type	 </b> &nbsp;&nbsp; 	Outdoor / Indoor</p></li>

                            </ul>
                        </div>
                    </div>
                    <div class="last_para_details mt-5">
                        <p><b>Please note: </b> that since this is a handmade product, the shape of it may vary slightly. Also, please note that not all of our handmade products are necessarily available in store, as they must first be made by our florists and artisans. To have it on the same day, it is best to call us before you come.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </template>
    
    <script>

export default {
    data() {
        return {
            currentTab: 0,
            currentTab1: 0,
            cartItems: [{
                    quantity: 1
                },
                // Add more cart items if needed
            ]
        };
    },
    methods: {
        incrementItem(index) {
            this.cartItems[index].quantity++;
        },
        decrementItem(index) {
            if (this.cartItems[index].quantity > 1) {
                this.cartItems[index].quantity--;
            }
        }
    }
};
</script>
