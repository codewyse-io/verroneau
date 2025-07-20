<template>
    <section class="blog_de">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="main_static_b_details about_uspage">
                        <h4>Influencers and collaborations</h4>
                        <hr>
                        <AboutNav />
                        <hr>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="blog_detailss_content">
                        <div class="first_inner_img">
                            <img :src="require('../assets/img/influencerCollaborator.png')" alt="">
                        </div>
                        <!-- <h5 class="mt-5">A reward for your opinion</h5> -->
                        <p>Looking for an Instagram partnership ? We have some good news, we are looking for influencers and brand ambassadors ! If you’re a decorating, lifestyle, plant and/or floral influencer and obviously love Décors Veronneau, we want to hear from you! We are looking to work with creative minds who share the same passion as we do. We are constantly seeking new perspectives and opportunities to share compelling content and showcase our products in beautiful settings.</p>
                        <h5>What we are looking for</h5>
                        <p>Instagram collaborations and influencers – mainly from Quebec and Ontario – with instagram accounts focused on design and home decor, with a minimum of 10k followers.</p>
                        <h5>What you'll get</h5>
                        <p>Because we like it to be a win-win situation, you’ll get access to trending products that you can showcase in various forms – in the most respectful way possible of your editorial line – and then share on your multiple platforms. And thanks to the content you share, you’ll also develop your community and increase your engagement rate with new relevant subscribers!</p>
                        <p>Small accounts, we’ve thought of you too! Contact us to find out what we can offer you in exchange for a few publications with the mention @decorsveronneau!</p>
                       
                       <div class="main_return_Form become_distri">
                        <h5>Let us know if you are interested!</h5>
                        <form action="">
                            <div class="return_fe">
                                <label for="">Full name</label>
                                <input type="text" placeholder="Full name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Instagram account name</label>
                                <input type="text" placeholder="Instagram account name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">City and province</label>
                                <input type="text" placeholder="City and province" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Number of followers</label>
                                <input type="text" placeholder="Number of followers" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Phone number</label>
                                <input type="number" placeholder="Phone number" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Blog name</label>
                                <input type="text" placeholder="Blog name" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Email</label>
                                <input type="email" placeholder="Email" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Blog address</label>
                                <input type="text" placeholder="Blog address" name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <label for="">Add your media kit!</label>
                                <input type="file"  name="order_number" required>
                            </div>
                            <div class="return_fe">
                                <input type="submit" value="Submit the form">
                            </div>
                        </form>
                        
                    </div>
                    <div class="influencer_sec">
                        <ul>
                            <li>
                                <img :src="require('../assets/img/influencer1.webp')" alt="">
                                <span>@designbecomeshim</span>
                            </li>
                            <li>
                                <img :src="require('../assets/img/influencer1.webp')" alt="">
                                <span>@designbecomeshim</span>
                            </li>
                            <li>
                                <img :src="require('../assets/img/influencer1.webp')" alt="">
                                <span>@designbecomeshim</span>
                            </li>
                        </ul>
                    </div>
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
    