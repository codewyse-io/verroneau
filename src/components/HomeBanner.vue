<template>
<section class="sec_1">
    <div class="home-slider">
        <ul ref="slider" class="slider"> 
            <li>
                <div class="banner_content">
                    <h2>New outdoor  <br> collection 2024 </h2>
                    <p>Discover the newest arrivals of plants, flowers and garden accents</p>
                    <div class="global_btn">
                        <a href=""><button class="banner_btn">Shop</button></a>
                    </div>
                </div>
                <img :src="require('../assets/img/banner_1.webp')" alt="">
            </li>
            <li>
                <div class="banner_content">
                    <h2>Get to save up to<br>  50% on houseplants </h2>
                    <p>On selected artificial plants!</p>
                    <div class="global_btn">
                        <a href=""><button class="banner_btn">Save</button></a>
                    </div>
                </div>
                <img :src="require('../assets/img/banner_2.webp')" alt="">
            </li>
            <li>
                <div class="banner_content">
                    <h2>The destination  <br> to be inspired! </h2>
                    <p>Visit our store decorated for spring and summer</p>
                    <div class="global_btn">
                        <a href=""><button class="banner_btn">SEE THE ADDRESS</button></a>
                    </div>
                </div>
                <img :src="require('../assets/img/banner_3.webp')" alt="">
            </li>
            <li>
                <div class="banner_content">
                    <h2>Trust our design team <br>  for your project! </h2>
                    <p>Check out our commercial project portfolio</p>
                    <div class="global_btn">
                        <a href=""><button class="banner_btn">Shop</button></a>
                    </div>
                </div>
                <img :src="require('../assets/img/banner_4.webp')" alt="">
            </li>
        </ul>
  </div>

</section>
</template>


<script>
import 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jquery from 'jquery';



export default {
  mounted() {
    // Initialize Slick Slider
    jquery(this.$refs.slider).slick({
      // Slick Slider options
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay:false,
      // Add more options as needed
    });
  },
};
</script>

<style scoped>
section.sec_1 .home-slider ul.slider.slick-initialized.slick-slider {
    padding: 0;
    margin: 0;
}

ul.slider.slick-initialized.slick-slider li img {
    position: relative;
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 450px;
}
section.sec_1 {
    overflow-x: hidden;
}

ul.slider.slick-initialized.slick-slider li .banner_content {
    position: absolute;
    z-index: 1;
    padding: 60px 0 0 100px;
}

ul.slider.slick-initialized.slick-slider li .banner_content h2 {
    font-size: 78px;
    text-align: start;
    color: white;
    font-weight: 400;
    font-family: serif;
}

ul.slider.slick-initialized.slick-slider li .banner_content p {
    font-size: 25px;
    color: white;
}

ul.slider.slick-initialized.slick-slider li .banner_content .global_btn {
    display: flex;
}

ul.slider.slick-initialized.slick-slider li .banner_content .global_btn a button.banner_btn {
    background: white;
    border: none;
    font-size: 20px;
    padding: 10px 60px 10px 60px;
    border-radius: 20px;
}
</style>
