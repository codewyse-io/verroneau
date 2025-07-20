<template>
<section class="about_us">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="about_head">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/AboutUs">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contact_us">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="need_help">
                    <h2>Need help ?</h2>
                    <ul>
                        <li>
                            <div class="icon"><a href=""><i aria-hidden="true" class="fas fa-search"></i></a></div>
                            <div class="content_help">
                                <h4>FAQ</h4>
                                <p>See <a href=""> the answers</a> to the most asked questions</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><a href=""><i aria-hidden="true" class="fas fa-shipping-fast"></i></a></div>
                            <div class="content_help">
                                <h4>Order</h4>
                                <p>Get the status of your order in <a href=""> your account</a></p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><i aria-hidden="true" class="fab fa-facebook-messenger"></i></div>
                            <div class="content_help">
                                <h4>Online chat</h4>
                                <p>Locate this icon in the bottom left corner to chat</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><i aria-hidden="true" class="fas fa-phone"></i></div>
                            <div class="content_help">
                                <h4>Phone</h4>
                                <p>Call us at 1 888 909-2998 if you have any questions</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><i aria-hidden="true" class="far fa-envelope"></i></div>
                            <div class="content_help">
                                <h4>Email</h4>
                                <p>Fill out the form below for assistance</p>
                            </div>
                        </li>
                        <li>
                            <div class="icon"><i aria-hidden="true" class="fas fa-map-marker-alt"></i></div>
                            <div class="content_help">
                                <h4>Address</h4>
                                <p>Find <a href=""> our address</a> and pictures of our store</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<ContactForm />

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
import FooterSection from "@/components/FooterSection.vue"
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'ContactUs',
    components: {
        FooterSection,
        ContactForm,
    }
};
</script>

    
<style scoped>
.about_head h2 {
    text-align: start;
}
</style>
