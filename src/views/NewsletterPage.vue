<template>
<section class="blog_de">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="main_static_b_details about_uspage">
                    <h4>Newsletter subscription</h4>
                    <hr>
                    <AboutNav />
                    <hr>
                </div>
            </div>
            <div class="col-md-8">
                <div class="blog_detailss_content">
                    <div class="first_inner_img">
                        <img :src="require('../assets/img/newsletterPage.png')" alt="">
                    </div>
                    <h5 class="mt-5">Why sign up?</h5>
                    <!-- <p>Are you a designer, architect or landscaper ? If our products are among your favorites to work with, apply for our Trade Program to benefit from discounts when you make purchases from us!</p> -->
                    <div class="working_condtions">

                        <ul>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-tag"></i>
                                </div>

                                <div class="working_condi_content">
                                    <h5>15% OFF PROMO CODE*</h5>
                                    <hr>
                                    <p>Get a welcome offer valid on your next online purchase!</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="fas fa-leaf"></i>
                                </div>

                                <div class="working_condi_content">
                                    <h5>NEW ARRIVALS</h5>
                                    <hr>
                                    <p>Discover new product arrivals before everyone else!</p>
                                </div>
                            </li>
                            <li>
                                <div class="working_condi_ico">
                                    <i aria-hidden="true" class="far fa-envelope"></i>
                                </div>

                                <div class="working_condi_content">
                                    <h5>PROMOTIONS</h5>
                                    <hr>
                                    <p>Receive all our promotional offers by email!</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div class="main_return_Form become_distri">
                        <h5>Subscribe:</h5>
                        <form action="">
                            <div class="return_fe">
                                <label for="">First name</label>
                                <input type="text" placeholder="Full name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Last name</label>
                                <input type="text" placeholder="Last name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Email</label>
                                <input type="text" placeholder="Email" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="language">Language</label>
                                <select name="language" id="language">
                                    <option value="Français" selected>Français</option>
                                    <option value="Anglais">Anglais</option>
                                </select>
                            </div>
                            <div class="return_fe">
                                <label for="Province">Province</label>
                                <select name="Province">
                                    <option value="Québec" selected>Québec</option>
                                    <option value="Ontario">Ontario</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>
                            <div class="return_fe other_checkbox">
                                <label for="agree">By clicking on submit, I agree to receive Décors Véronneau's newsletters.</label>
                                <input type="checkbox" name="agree" required>
                            </div>

                            <div class="return_fe">
                                <input type="submit" value="Submit">
                            </div>
                        </form>

                    </div>

                    <p><em>*Valid on your next online purchase. No refunds on orders already placed. Applies to all products available online at regular price only. Only one use of the promo code per customer. Products on order are excluded from this offer. No other promotion can be combined with this offer.</em></p>
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
                        <input type="text" placeholder="Your email address" required>
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

<style scoped>
.blog_detailss_content h5.mt-5 {
    text-align: center;
}

.blog_detailss_content .working_condtions ul li .working_condi_content h5 {
    font-size: 18px;
    margin: 14px 0 0 0;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe select {
    height: 40px;
}


.blog_detailss_content .main_return_Form.become_distri form .return_fe.other_checkbox {
    flex: 0 0 100%;
    display: flex !important;
    flex-direction: row-reverse;
    padding: 0;
    margin: 0;
    justify-content: start;
    align-items: center;
}

.blog_detailss_content .main_return_Form.become_distri form .return_fe.other_checkbox input[type="checkbox"] {
    margin: 0 10px 0 0px;
}
</style>