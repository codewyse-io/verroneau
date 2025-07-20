


<template>
  <section class="cat_sec distributor">
    <div class="container">
        <div class="col-md-12">
            <div class="banner_cat">
                <h2>Our distributors</h2>
                <!-- <p>Outdoor flowers, plants, garden decorations, trellises and planters</p> -->
            </div>
        </div>
    </div>
  </section>

  <div class="last">
    <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/AboutUs">About</a></li>
            </ul>
  </div>

  <section class="distrubtion">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main_quebe_head">
            <h2>Quebec</h2>
            <ul>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section class="distrubtion">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main_quebe_head">
            <h2>Elsewhere in Canada</h2>
            <ul>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
              <li>
                <div class="distri_img">
                  <img :src="require('../assets/img/distrubtion.jpg')" alt="">
                </div>
                <div class="second_dis_inner">
                  <h4>Montréal and Laval</h4>
                  <a href="">View the distributors </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <FooterSection />
 </template>
  
  
  
  <script>

import FooterSection from "@/components/FooterSection.vue"

  export default {
      name: 'ProductCategory',
      components: {
      
        FooterSection,
      }
  };
  </script>
  
  