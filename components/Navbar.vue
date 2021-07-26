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
          <a href="#" class="header_logo_title">logotype</a>
        </div>
        <div
          class="header_burger"
          :class="{ burger_active: activeBurger }"
          @click="updateMenu"
        ></div>
        <nav class="header_menu " :class="{ deactive_menu: showMenu }">
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
export default {
  data() {
    return {
      activeBurger: false,
      showMenu: true
    };
  },
  methods: {
    updateMenu() {
      (this.activeBurger = !this.activeBurger),
        (this.showMenu = !this.showMenu);
    }
  }
};
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
  position: relative;
}
.header_logo {
  align-items: center;
  display: flex;
  font-weight: 700;
  font-size: 20px;
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
  .header_logo {
    font-size: 16px;
  }
  .deactive_menu {
    display: none;
    /* border-color: #202426; */
  }
  .header_wrapper {
    max-width: 600px;
  }
  .header_burger {
    display: block;
    position: relative;
    background: #202426;
    border-radius: 14px;
    height: 40px;
    width: 50px;
    border: 1px solid #202426;
    transition: border-color 0.5s ease-in-out;
  }
  .header_burger:before,
  .header_burger:after {
    content: "";
    background: #eff6ff;
    width: 22px;
    height: 1px;
    position: absolute;
    left: 14px;
  }
  .header_burger:before {
    top: 15px;
  }
  .header_burger:after {
    top: 22px;
  }
  .header_burger.burger_active {
    border-color: #7a838d;
  }
  .header_menu {
    width: 150px;
    height: 200px;
    position: absolute;
    right: 0;
    top: 50px;
    background: #202426;
    z-index: 1;
    flex-direction: column;
    border-radius: 16px;
    padding: 8px;
    border: 1px solid #7a838d;
    animation-name: open;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: 0s;
  }
  @keyframes open {
    0% {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
    100% {
      display: block;
      opacity: 1;
      visibility: visible;
    }
  }
  .header_links {
    flex-direction: column;
    margin-bottom: 10px;
  }
}
</style>
