<template>
  <section class="tip_">
      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="tip_trend_head">
                      <h2>Trends and tips</h2>
                      <p> Do you love home decor? Discover our most recent blog posts.</p>
                      <ul class="slider" ref="slider" >
                          <li>
                              <div class="trends_box">
                                  <div class="img">
                                      <img :src="require('../assets/img/tips_trends1.webp')">
                                  </div>
                                  <div class="trends_conet">
                                      <h6>Commercial Design</h6>
                                      <h4><a href="">Plants To Increase Your Airbnb Bookings? </a></h4>
                                      <p>
                                          Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large inventory of properties available, it is essential to find ways to stand out. But did you know that the key to success in renting your property is not just about competitive prices, positive reviews or beautiful pictures on your ad? In fact, interior design and the addition of green plants can play a crucial role in closing more visitors. Find out in this blog post how to take advantage of these tips to optimize your conversion rate on Airbnb.</p>
                                      <div class="blog_btn">
                                          <a href=""><button class="blog_btn">read the blog post</button></a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div class="trends_box">
                                  <div class="img">
                                      <img :src="require('../assets/img/tips_trends1.webp')">
                                  </div>
                                  <div class="trends_conet">
                                      <h6>Commercial Design</h6>
                                      <h4><a href="">Plants To Increase Your Airbnb Bookings? </a></h4>
                                      <p>
                                          Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large inventory of properties available, it is essential to find ways to stand out. But did you know that the key to success in renting your property is not just about competitive prices, positive reviews or beautiful pictures on your ad? In fact, interior design and the addition of green plants can play a crucial role in closing more visitors. Find out in this blog post how to take advantage of these tips to optimize your conversion rate on Airbnb.</p>
                                      <div class="blog_btn">
                                          <a href=""><button class="blog_btn">read the blog post</button></a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div class="trends_box">
                                  <div class="img">
                                      <img :src="require('../assets/img/tips_trends1.webp')">
                                  </div>
                                  <div class="trends_conet">
                                      <h6>Commercial Design</h6>
                                      <h4><a href="">Plants To Increase Your Airbnb Bookings? </a></h4>
                                      <p>
                                          Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large inventory of properties available, it is essential to find ways to stand out. But did you know that the key to success in renting your property is not just about competitive prices, positive reviews or beautiful pictures on your ad? In fact, interior design and the addition of green plants can play a crucial role in closing more visitors. Find out in this blog post how to take advantage of these tips to optimize your conversion rate on Airbnb.</p>
                                      <div class="blog_btn">
                                          <a href=""><button class="blog_btn">read the blog post</button></a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div class="trends_box">
                                  <div class="img">
                                      <img :src="require('../assets/img/tips_trends1.webp')">
                                  </div>
                                  <div class="trends_conet">
                                      <h6>Commercial Design</h6>
                                      <h4><a href="">Plants To Increase Your Airbnb Bookings? </a></h4>
                                      <p>
                                          Every day, a growing number of owners are looking to list their property on Airbnb, meanwhile increasing the competition in this sector. With this large inventory of properties available, it is essential to find ways to stand out. But did you know that the key to success in renting your property is not just about competitive prices, positive reviews or beautiful pictures on your ad? In fact, interior design and the addition of green plants can play a crucial role in closing more visitors. Find out in this blog post how to take advantage of these tips to optimize your conversion rate on Airbnb.</p>
                                      <div class="blog_btn">
                                          <a href=""><button class="blog_btn">read the blog post</button></a>
                                      </div>
                                  </div>
                              </div>
                          </li>
                         
  
                      </ul>
                  </div>
              </div>
          </div>
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
            infinite: false,
            slidesToShow: window.screen.width < 700 ? 1 : 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: []
            // Add more options as needed
        });
    },
};
</script>
