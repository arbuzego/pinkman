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
              <p v-if="errors.length">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                  <li v-for="error,idx in errors" :key='error'>{{idx+1}}. {{ error }}</li>
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
              <select
                v-model="country"
                class="form_inputs_country"
              >
                <option disabled selected>Страна</option>
                <option class="form_inputs_country_option">Россия</option>
                <option class="form_inputs_country_option">Украина</option>
                <option class="form_inputs_country_option">Казахстан</option>
                <option class="form_inputs_country_option">Беларусь</option>
                <option class="form_inputs_country_option">Таджикистан</option>
              </select>

              <input
                class="form_inputs_button"
                type="submit"
                value="Получить консультацию"
              />
              <div class="form_text">
                Нажимая «Получить консультацию» вы соглашаетесь с
                <span class="form_text_link">политикой конфиденциальности</span>
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
  data() {
    return {
      errors: [],
      fullName: "",
      email: "",
      country: "Страна"
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.fullName.length) {
        this.errors.push("Требуется указать имя и фамилию.");
      }
      if (!this.email.length) {
        this.errors.push("Требуется указать E-mail.");
      }else if (!this.validEmail(this.email)) {
        this.errors.push('Укажите корректный адрес электронной почты.');
      }
      if (this.country === "Страна") {
        this.errors.push("Требуется указать страну.");
      }
      if(!this.errors.length){
        this.fullName= "",
      this.email= "",
      this.country= "Страна"
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  }
}
</script>

<style>
.form {
  margin-bottom: 60px;
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
}
.form_inputs_fullName,
.form_inputs_email,
.form_inputs_country {
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
.form_inputs_country {
  margin-bottom: 28px;
}
.form_inputs_email:hover,
.form_inputs_email:focus,
.form_inputs_fullName:hover,
.form_inputs_fullName:focus,
.form_inputs_country:hover,
.form_inputs_country:focus {
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
  text-decoration: underline;
}
@media (max-width: 767px) {
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
  .form_inputs_country {
    padding: 16px 15px;
    border-radius: 12px;
    font-weight: normal;
    font-size: 12px;
  }
  .form_inputs_country {
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
