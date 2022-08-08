<template>
  <div id="app">
      <section class="trail">
          <div class="trail-content">
            <h1>The Trail Runner SWT Is Here.</h1>
            <p>Durable. Comfortable. Ready to get dirty.</p>
            <div class="trail-btn">
                <button>Shop Men</button>
                <button>Shop Women</button>
            </div>
          </div>
      </section>
      <section class="img-first">
          <img src="./../../assets/img/section-legs.png" alt="">
      </section>
    
      <section class="seasons">
          <div class="seasons-header">
              <h1>Seasons Change. Your Shoes Don’t Have To.</h1>
              <p>Soft and cozy wool shoes to keep you comfortable all year round.</p>
              <div class="seasons-btn">
                  <button>Shop Men</button>
                  <button>Shop Women</button>
              </div>
          </div>
      </section>
      <main-products></main-products>
      <section class="img-second">
          <img src="./../../assets/img/tree.png" alt="">
      </section>
      <section class="nature">
          <div class="nature-header">
              <h1>Made From Nature, For Nature</h1>
              <p>We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, <br> because they're our best chance for a sustainable future.</p>
              <div class="nature-btn">
                  <button>See How</button>
              </div>
          </div>
          <div class="nature-content">
              <h2>Stories</h2>
              <div class="nature-content__box">
                  <a href="#">
                      <img src="./../../assets/img/man.png" alt="">
                      <h1>Planet-Friendly Activewear</h1>
                      <p>The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.</p>
                  </a>
                  <a href="#">
                      <img src="./../../assets/img/adidas.png" alt="">
                      <h1>adidas and Allbirds</h1>
                      <p>Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.</p>
                  </a>
                  <a href="#">
                      <img src="./../../assets/img/stickers.png" alt="">
                      <h1>How much did your outfit cost the planet?</h1>
                      <p>Now any brand can use our Carbon Footprint tools to label their emissions.</p>
                  </a>
              </div>
              
          </div>
      </section>


    <main-stories></main-stories>
  </div>
</template>

<script>
import MainProducts from './components/Main-products.vue'
import MainStories from './components/Main-stories.vue'

export default {
  name: 'App',
  components: {
    MainProducts,
    MainStories,
    
  }
}
</script>

<style scoped>
    .trail {
        background: url(/src/assets/img/trail-runner.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0;
        
    }
    .trail-content {
        padding-top: 504px;
        padding-left: 54px;
    }
    .trail-content h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 48px;
        line-height: 63px;
        letter-spacing: 0.5px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }
    .trail-content p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #FFFFFF;
    }
    .trail-btn {
        display: flex;
        padding-right: 24px;
        
    }
    .trail-btn button {
        display: block;
        width: 180px;
        height: 48px;
        text-align: center;
        margin: 24px 24px 60px 0;
        border: none;
        background: #FFFFFF;
        border-radius: 2px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #212A2F;
    }
    .seasons-header h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 32px;
        line-height: 42px;
        letter-spacing: 0.5px;
        color: #000;
        text-align: center;
        padding-top: 52px;
        
    }
    .seasons-header p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #000;
        padding-top: 54px;
        padding-bottom: 30px;
        text-align: center;
    }
    .seasons-btn {
        display: flex;
        padding-right: 24px;
        justify-content: center;
        
    }
    .seasons-btn button {
        display: block;
        width: 180px;
        height: 48px;
        text-align: center;
        margin: 24px 24px 60px 0;
        border: none;
        background: #000;
        border-radius: 2px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #fff;
    }
    .seasons-content {
        padding-top: 64px;
        padding-bottom: 134px;
        padding-left: 102px;
    }
    .seasons-content__box {
        display: flex;
        justify-content: space-between;
        padding-top: 24px;
    }
    .seasons-content h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #000;
    }
    .seasons-content__box h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 29px;
        letter-spacing: 0.5px;
        color: #212A2F;
        padding-top: 17px;
        padding-bottom: 10px;
    }
    .seasons-content__box p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #212A2F;
        width: 357px;
        padding-bottom: 134px;
    }
    .nature-header h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 32px;
        line-height: 42px;
        letter-spacing: 0.5px;
        color: #000;
        text-align: center;
        padding-top: 52px;
    }
    .nature-header p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #000;
        padding-top: 54px;
        padding-bottom: 30px;
        text-align: center;
    }
    .nature-btn {
        display: flex;
        padding-right: 24px;
        justify-content: center;
    }
    .nature-btn button {
        display: block;
        width: 384px;
        height: 48px;
        text-align: center;
        margin: 24px 24px 60px 0;
        border: none;
        background: #000;
        border-radius: 2px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #fff;
    }
    .nature-content {
        padding-top: 64px;
        padding-bottom: 134px;
        padding-left: 102px;
    }
    .nature-content__box {
        display: flex;
        justify-content: space-between;
        padding-top: 24px;
    }
    .nature-content h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #000;
    }
    .nature-content__box h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 29px;
        letter-spacing: 0.5px;
        color: #212A2F;
        padding-top: 17px;
        padding-bottom: 10px;
    }
    .nature-content__box p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #212A2F;
        width: 357px;
        padding-bottom: 134px;
    }
   

    
</style>
