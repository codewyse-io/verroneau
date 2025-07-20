<template>
<section class="inspiration_secONd">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="inspiration_head">
          <h2>Inspirations Component</h2>
          <p>Here you will discover photo galleries featuring our products in the most beautiful spaces!</p>
          <p>Whether it’s our achievements or those of our collaborators, these photos will certainly give you the inspiration you need to take advantage of the artificial.</p>
          <div class="inspiration_tab_list4">
            <ul>
              <li><button class="tab_btn" :class="{ 'active': activeTab === 'INDOOR' }" @click="setActiveTab('INDOOR')">INDOOR</button></li>
              <li><button class="tab_btn" :class="{ 'active': activeTab === 'OUTDOOR' }" @click="setActiveTab('OUTDOOR')">OUTDOOR</button></li>
              <li><button class="tab_btn" :class="{ 'active': activeTab === 'CHRISTMAS' }" @click="setActiveTab('CHRISTMAS')">CHRISTMAS</button></li>
              <li><button class="tab_btn" :class="{ 'active': activeTab === 'COMMERCIAL PORTFOLIO' }" @click="setActiveTab('COMMERCIAL PORTFOLIO')">COMMERCIAL PORTFOLIO</button></li>
            </ul>
            <div class="tab_content" v-if="activeTab === 'INDOOR'">
              <ul>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab_content" v-if="activeTab === 'OUTDOOR'">
              <ul>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab_content" v-if="activeTab === 'CHRISTMAS'">
              <ul>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab_content" v-if="activeTab === 'COMMERCIAL PORTFOLIO'">
              <ul>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
                <li>
                  <div class="inspiration_box">
                    <div class="inner_img">
                      <img :src="require('../assets/img/inspirations_tab1.webp')" alt="">
                    </div>
                    <div class="md_inspiration_prduct">
                      <div class="md_inspiration_imf">
                        <img :src="require('../assets/img/lock_box_pr1.webp')" alt="">
                      </div>
                      <div class="md_inspiration_content">
                        <h4><a href="">Artificial fig tree, 55”</a></h4>
                        <hr>
                        <p>MTB25629DKGR</p>
                        <p class="md_inspiration__slide_price">$219.99</p>
                      </div>
                    </div>
                    <div class="md_inspiration__credit">photo:</div>
                  </div>
                </li>
              </ul>
            </div>
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
      activeTab: 'INDOOR'
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  }
};
</script>
