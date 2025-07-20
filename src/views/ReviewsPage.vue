<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Gift card</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/blog_post_page.webp')" alt="">
                    </div>
                    <h5 class="mt-5">A reward for your opinion</h5>
                    <p>We want to hear what you think about our products! Our new A reward for your opinion program thanks you for your feedback. It’s easy to participate, just post your review online about a product you purchased and get a 10% off promo code*. Note that only one coupon code will be sent to you, even if you leave more than one review.</p>
                    <div class="other">
                        <h5>How to leave a review online ?</h5>
                        <div class="two_para_sec">
                            <div class="img">
                                <img :src="require('../assets/img/reviews_gif.gif')" alt="">
                            </div>
                            <ul>
                                <li>Click on the magnifying glass at the top of the site or via the confirmation email of the product purchased.</li>
                                <li>Enter the code or name of the product you wish to search for.</li>
                                <li>On the selected product page, at the very bottom, look for the 'Clients reviews' box.</li>
                                <li>Add your rating and review in the form and simply submit it**.</li>
                            </ul>
                        </div>
                    </div>
                    <p><em>*The 10% off promo code will be sent to you by email after the review has been verified by our team (which may take 24-48 hours), so don’t forget to check your spam if you can’t find the offer. Valid until the date shown in your email, on your next online purchase. No refunds will be given on orders already placed. Applies to regular priced products only. Only one promo code per person. Only one use of the promo code per customer. No promotions can be combined with this offer.</em></p>
                    <p><em>**If the product you purchased is no longer available on our website, it is probably out of stock. Send us your review by email at marketing@veronneau.com (between 1 and 5 stars and a comment). Once the product is back in stock, we will be able to publish your review.</em></p>
                    <p><em>By leaving your review, you have read and accepted our privacy policy as well as our terms and conditions.</em></p>                 

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
import AboutNav from "@/components/AboutNav.vue"
import FooterSection from "@/components/FooterSection.vue"

export default {
    name: 'ProductCategory',
    components: {
      AboutNav,
        FooterSection,
    }
};
</script>
