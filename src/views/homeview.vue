<template>
<mobileHeader />
    
<HomeBanner />
<NewArrivalProduct />
<CategoryList />
<ReviewSection />

<section class="sec_loc">
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="share_loc_head">
                <h2>Shop the look</h2>
                <p>Be inspired to get the look in your own decor.</p>
                <ul>
                    <li>
                        <div class="img_container">
                        <img :src="require('../assets/img/share_lock1.webp')" alt="">
                        <a href="">
                            <div class="trigger">
                            <div class="hoespot">
                                <div class="out_circle"></div>
                                <div class="iner_circle"></div>
                            </div>
                            <div class="spot_box">
                                <div class="pr_box_img">
                                    <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                                </div>
                                <div class="pr_box_content">
                                    <p>Outdoor magnolia tree</p>
                                    <p><strong>$159,99</strong></p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="">
                            <div class="trigger">
                            <div class="hoespot">
                                <div class="out_circle"></div>
                                <div class="iner_circle"></div>
                            </div>
                            <div class="spot_box">
                                <div class="pr_box_img">
                                    <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                                </div>
                                <div class="pr_box_content">
                                    <p>Outdoor magnolia tree</p>
                                    <p><strong>$159,99</strong></p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="">
                            <div class="trigger">
                            <div class="hoespot">
                                <div class="out_circle"></div>
                                <div class="iner_circle"></div>
                            </div>
                            <div class="spot_box">
                                <div class="pr_box_img">
                                    <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                                </div>
                                <div class="pr_box_content">
                                    <p>Outdoor magnolia tree</p>
                                    <p><strong>$159,99</strong></p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </li>
                    <li>
                        <div class="img_container">
                        <img :src="require('../assets/img/share_lock1.webp')" alt="">
                        <a href="">
                            <div class="trigger">
                            <div class="hoespot">
                                <div class="out_circle"></div>
                                <div class="iner_circle"></div>
                            </div>
                            <div class="spot_box">
                                <div class="pr_box_img">
                                    <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                                </div>
                                <div class="pr_box_content">
                                    <p>Outdoor magnolia tree</p>
                                    <p><strong>$159,99</strong></p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="">
                            <div class="trigger">
                            <div class="hoespot">
                                <div class="out_circle"></div>
                                <div class="iner_circle"></div>
                            </div>
                            <div class="spot_box">
                                <div class="pr_box_img">
                                    <img :src="require('../assets/img/share_lock2.webp')" alt="">
                                </div>
                                <div class="pr_box_content">
                                    <p>Outdoor magnolia tree</p>
                                    <p><strong>$159,99</strong></p>
                                </div>
                            </div>
                        </div>
                        </a>
                        <a href="">
                            <div class="trigger">
                            <div class="hoespot">
                                <div class="out_circle"></div>
                                <div class="iner_circle"></div>
                            </div>
                            <div class="spot_box">
                                <div class="pr_box_img">
                                    <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                                </div>
                                <div class="pr_box_content">
                                    <p>Outdoor magnolia tree</p>
                                    <p><strong>$159,99</strong></p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </li>
                </ul>
                <div class="glob_btn">
                    <a href=""><button class="see_more_decor">SEE MORE DECORS</button></a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<BlogPost />

<section class="shop_confi">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="shop_with_confi_head">
                    <h2>Shop with confidence</h2>
                    <p>Shop online in the comfort of your home.</p>
                    <ul>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img :src="require('../assets/img/shop_with1.webp')" alt="">
                            </div>
                            <div class="shop_content">
                                <h5>Shipping across Canada</h5>
                                <hr>
                                <p>Our delivery service is available everywhere in Canada.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="second_last">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main_newletter">
                    <h2>Save with our newsletter!</h2>
                    <p>Save with our newsletter!</p>
                    <form action="">
                        <input type="email" placeholder="Your email address" required>
                        <input type="submit" value="Subscribe to the newsletter">
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<FooterSection />

</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue"
import NewArrivalProduct from "@/components/NewArrivalProduct.vue"
import CategoryList from "@/components/CategoryList.vue"
import ReviewSection from "@/components/ReviewSection.vue"
import BlogPost from "@/components/BlogPost.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'HomeView',
    components: {
        HomeBanner,
        NewArrivalProduct,
        CategoryList,
        ReviewSection,
        BlogPost,
        FooterSection,
        
    },
    methods:{
        toggleCart() {
  // Toggle the cart open/close
  const offCanvasElement = document.getElementById('offCanvas34');
  console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
  if (offCanvasElement) {
    offCanvasElement.classList.toggle('is-open');
  } 
},
closeCart() {
    const offCanvasElement = document.getElementById('offCanvas34');
  console.log('offCanvasElement:', offCanvasElement); // Check if element is retrieved
  if (offCanvasElement) {
    offCanvasElement.classList.remove('is-open');
  } 
  },
    }
   
};
</script>
