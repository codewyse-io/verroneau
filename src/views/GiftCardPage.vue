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
                        <img :src="require('../assets/img/giftCard.png')" alt="">
                    </div>
                    <h5 class="mt-5">Gift card terms and conditions</h5>
                    <p>Véronneau’s gift cards can be purchased online or in-store. The delivery of the gift card is free of charge. However, it is only valid in-store. It cannot be used online. The amount applied is in Canadian currency. The value of the gift card is not redeemable for cash and is non-refundable, even in the case of a stolen, lost or damaged gift card. No expiration date.</p>
                    <p>To check your card balance, please visit our store or verify the balance online here.</p>
                    <p>Décors Véronneau acts as a responsible party for all personal information you provide. That is why we have a Privacy Policy explaining how your personal information will be handled and protected. You can find our full Privacy Policy here.</p>

                    
                 
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
