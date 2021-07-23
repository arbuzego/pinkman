<template>
  <div class="form">
    <div class="form_title">Проконсультируем вас</div>
    <div class="form_body">
      <div class="container">
        <div class="form_row">
          <div class="form_subTitle">
            Свяжитесь<br />
            со мной
          </div>
          <div class="form_inputs">
            <form
              class="form_inputs_row"
              @submit.prevent="checkForm"
              novalidate="true"
            >
              <p v-if="errorsList.length">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                  <li v-for="error,idx in errorsList" :key='error'>{{idx+1}}. {{ error }}</li>
                </ul>
              </p>
              <input
                class="form_inputs_fullName"
                v-model="fullName"
                placeholder="Имя и фамилия"
                type="text"
              />
              <input
                class="form_inputs_email"
                v-model="email"
                placeholder="E-mail"
                type="email"
              />
              <div class="__select" data-state="">
                <div class="select">
                    <input class="select__input" type="hidden" name="" >
                    <div class="select__head" >Страна</div>
                      <ul class="select__list" style="display: none;">
                        <li class="select__item">Россия</li>
                        <li class="select__item">Украина</li>
                        <li class="select__item">Казахстан</li>
                        <li class="select__item">Беларусь</li>
                        <li class="select__item">Таджикистан</li>
                      </ul>
                </div>
              </div>
              <input
                class="form_inputs_button"
                type="submit"
                value="Получить консультацию"
              />
              <div class="form_text">
                Нажимая «Получить консультацию» вы соглашаетесь с
                <a href="#" class="form_text_link">политикой конфиденциальности</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
fullName:'',
email:'',
country:'',
errorsList:[]
    }
  },
  methods: {
    checkForm() {
      this.errorsList=[]
      if (!this.fullName.length) {
        this.errorsList.push("Требуется указать имя и фамилию.");
      }
      if (!this.email.length) {
        this.errorsList.push("Требуется указать E-mail.");
      }else if (!this.validEmail(this.email)) {
        this.errorsList.push("Укажите корректный адрес электронной почты.");
      }
      if (this.country==='Страна' || !this.country.length) {
        this.errorsList.push("Требуется указать страну.");
      }
      if(!this.errorsList.length){
        const user = {
          fullName: this.fullName,
          email: this.email,
          country:this.country
        }
        this.$store.dispatch("updateUsers", user)
        this.fullName='',
        this.email='',
        this.country='',
        document.querySelector('.select__head').innerHTML='Страна'
      }
    },
    updateCountry() {
      this.country = document.querySelector('.select__head').innerHTML;
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    
  },
  created(){
    if (process.browser) {
      document.querySelector('.form_inputs_button').addEventListener("click", this.updateCountry);
    }
  },
  destroy() {
    if (process.browser) {
      document.querySelector('.form_inputs_button').removeEventListener("click", this.updateCountry);
    }
  },
  mounted(){
    $(document).ready(function() {
    jQuery(($) => {
      });
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
  }
}
</script>

<style>
.select {
    position: relative;
    display: block;
    cursor: pointer;
} 

.select__head::after {
    width: 14px;
    height: 14px;
    background: url("/images/arroy for selecter.png") no-repeat center;
    position: absolute;
    right: 24px;
    bottom: 50%;
    transform: translateY(50%);
    content: '';
    display: block;
    transition: .2s ease-in;
}

.select__head.open::after {
    transform: translateY(50%) rotate(180deg);
}

.select__list {
    display: none;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    border: 1px solid #7a838d;
  background: #272b2d;
    border-radius: 16px;
     font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #eff6ff;
  padding: 12px}

.select__list .select__item {
  background: #272b2d;
  border-radius: 12px;
    position: relative;
    padding: 12px 16px;
    cursor: pointer;
    list-style-type: none;
}

.select__list .select__item:hover {
    color: rgba(0, 219, 0, 1);
}
.select__list .select__item:active {
    background: #2f3234;
}
.form {
  margin-bottom: 70px;
}
.form_title {
  font-weight: 600;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -0.03em;
  margin-bottom: 50px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.form_body {
  background-color: #1a1f21;
  border-radius: 40px;
}
.form_row {
  display: flex;
}
.form_subTitle {
  font-size: 46px;
  line-height: 105%;
  letter-spacing: -0.04em;
  flex: 50%;
}
.form_inputs {
  flex: 50%;
  padding-left: 48px;
}
.form_inputs_row {
  display: flex;
  flex-direction: column;
}
.form_inputs_fullName::placeholder,
.form_inputs_email::placeholder {
  color: #eff6ff;
  font-weight: normal;
font-size: 17px;
line-height: 150%;
letter-spacing: -0.02em;
}
.form_inputs_fullName,
.form_inputs_email,
.select__head  {
  max-width: 562px;
  border: 1px solid #1a1f21;
  padding: 20px 10px 20px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  font-size: 17px;
  line-height: 150%;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  color: #eff6ff;
  transition: border-color 0.5s ease-in-out;
}
.select__head{
  
  margin-bottom: 28px;
  }
.form_inputs_email:hover,
.form_inputs_email:focus,
.form_inputs_fullName:hover,
.form_inputs_fullName:focus,
.select__head:hover,
.select__head.open {
  border-color: #7a838d;
}


.form_inputs_button {
  transition: all 0.1s ease-in;
  justify-content: center;
  align-items: center;
  padding: 32px 10px;
  background: linear-gradient(
      269.1deg,
      #20c7d1 2.7%,
      rgba(144, 228, 0, 0.63) 105.95%
    ),
    linear-gradient(0deg, #1dd052, #1dd052);
  box-shadow: 0px 10px 50px rgba(29, 208, 82, 0.3);
  border-radius: 28px;
  font-size: 17px;
  line-height: 100%;
  text-transform: uppercase;
  color: #121416;
  margin-bottom: 40px;
}

.form_inputs_button:hover {
  background: linear-gradient(
      120.36deg,
      rgba(255, 247, 53, 0.4) 9.98%,
      rgba(0, 219, 0, 0.4) 49.43%,
      rgba(90, 176, 255, 0.4) 100%
    ),
    linear-gradient(270deg, #20c7d1 0%, rgba(144, 228, 0, 0.63) 106.04%),
    linear-gradient(0deg, #1dd052, #1dd052);
}

.form_text {
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  color: #7a838d;
}
.form_text_link {
  color: #7a838d !important;
  text-decoration: underline !important;
}
@media (max-width: 767px) {
  .form_inputs_fullName::placeholder,
.form_inputs_email::placeholder {
font-size: 12px;
}
  .form {
    margin-bottom: 40px;
  }
  .form_title {
    display: none;
  }
  .form_body {
    border-radius: 25px;
  }
  .form_row {
    flex-direction: column;
  }
  .form_subTitle {
    font-size: 27px;
    line-height: 120%;
    letter-spacing: -0.05em;
    margin-bottom: 32px;
  }
  .form_inputs {
    padding-left: 0;
  }
  .form_inputs_fullName,
  .form_inputs_email,
  .select__head {
    padding: 16px 15px;
    border-radius: 12px;
    font-weight: normal;
    font-size: 12px;
  }
  .select__list {
    top: 60px;
    border-radius: 12px;
    font-size: 12px;
    padding: 8px
  }
  .select__list .select__item {
  border-radius: 12px;
    padding: 8px 10px;
    cursor: pointer;
    list-style-type: none;
}
  .select__head {
    margin-bottom: 24px;
  }

  .form_inputs_button {
    padding: 20px 25px 20px 25px;
    border-radius: 15px;
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 32 px;
  }

  .form_text {
    max-width: 250px;
    letter-spacing: -0.02em;
  }
}
</style>
