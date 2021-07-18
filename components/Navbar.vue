<template>
  <div class="header_wrapper">
    <div class="header">
      <div class="header_row">
        <div class="header_logo">
          <img
            src="../static/images/logo image.png"
            alt="Logo_image"
            class="header_logo_image"
          />
          <div class="header_logo_title">logotype</div>
        </div>
        <div class="header_burger"></div>
        <nav class="header_menu">
          <ul class="header_links">
            <li><a href="#">частица</a></li>
            <li><a href="#">частица</a></li>
            <li><a href="#">частица</a></li>
            <li><a href="#">частица</a></li>
            <li><a href="#">частица</a></li>
          </ul>
          <button class="header_buton">Квантовый характер</button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header_wrapper {
  margin: 0 auto;
  max-width: 1384px;
}
.header {
  padding: 28px 0;
  margin-bottom: 45px;
}
.header_row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_logo {
  align-items: center;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  text-transform: uppercase;
}
.header_logo_image {
  margin-right: 16px;
}
.header_burger {
  display: none;
}
.header_menu {
  display: flex;
  justify-content: space-between;
  max-width: 916px;
  flex: 100%;
}
.header_links {
  padding: 0;
  margin: 0;
  display: flex;
  flex: 100%;
  max-width: 448px;
  justify-content: space-between;
  font-size: 13px;
  line-height: 100%;
  text-transform: uppercase;
  align-items: center;
}
.header_links a {
  transition: color 0.5s ease-in;
}
.header_links a:hover {
  color: #00db00;
}
.header_buton {
  background: rgba(239, 246, 255, 0.15);
  border-radius: 18px;
  padding: 16px 20px;
  font-size: 13px;
  line-height: 100%;
  text-transform: uppercase;
  color: #eff6ff;
  font-style: normal;
  font-weight: 500;
  transition: all 0.5s ease-in;
}
.header_buton:hover {
  background: #eff6ff;
  color: #121416;
}
@media (max-width: 767px) {
  /* .header_burger {
    display: block;
    position: relative;
    background: rgba(196, 196, 196, 0.2);
    border-radius: 14px;
    height: 40px;
    width: 50px;
  }
  .header_burger:before,
  .header_burger:after {
    content: "";
    background-color: #eff6ff;
    width: 22px;
    height: 1px;
    position: absolute;
    left: 14px;
  }
  .header_burger:before {
    top: 16px;
  }
  .header_burger:after {
    bottom: 16px;
  }
  .header_menu {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: yellow;
    z-index: 1;
  }
  .header_links {
  } */
}
</style>
