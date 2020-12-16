<template>
  <div :message="msg">
    <div
      class="bg-secondary text-dark p-3 mx-5 mt-4 "
      style="background-color:white !important;"
      id="masti"
    >
      <h2>Unesi podatke:</h2>
      <b-form @submit="onSubmit" class="text-left">
        <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
          <b-form-select
            class="w-25"
            id="input-1"
            v-model="form.calorie_spol"
            :options="calorie_spol"
            required
          >
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-1" label="Aktivnost:" label-for="input-1">
          <b-form-select
            class="w-25"
            id="input-1"
            v-model="form.calorie_aktivnost"
            :options="calorie_aktivnost"
            required
          >
          </b-form-select>
        </b-form-group>
        <b-form-group
          class="w-25"
          id="input-group-2"
          label="Unesite težinu (kg):"
          label-for="input-2"
        >
          <b-form-input
            v-model="form.calorie_tezina"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Unesite visinu (cm):" label-for="input-1">
          <b-form-input
            class="w-25"
            id="input-1"
            type="number"
            v-model="form.calorie_visina"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label=" Unesite dob:" label-for="input-1">
          <b-form-input
            class="w-25"
            id="input-1"
            type="number"
            v-model="form.calorie_dob"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button
          type="sumbit"
          variant="success"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          >Izračunaj</b-button
        >
        
      </b-form>
    </div>
    <div class="calorie mt-5 mx-5">
      <b-card
        header="Cilj: izgubiti masti, dnevni unos mora biti:"
        class="text-left"
        style="background-color:#F8F8F8;"
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="KALORIJA (dnevno) ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
            v-model="kalorija1"
          >
           <strong>{{ solution1.toFixed(0) }}&nbsp;kCal </strong></b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="PROTEINA ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
          <p>  <strong>{{ solution2.toFixed(0) }}&nbsp;g</strong> </p>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="UGLJIKOHIDRATA ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
            <strong>{{ solution2.toFixed(0) }}&nbsp;g</strong>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="MASTI ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
            <strong>{{ solution4.toFixed(0) }} &nbsp;g</strong>
          </b-form-group>
        </b-form>
      </b-card>
    </div>
  <Kalorije />
  </div>
  
</template>

<script>


import Kalorije from "@/components/Kalorije.vue";

export default {
  name: "Calorie",
  
  components: {Kalorije},
  
  data() {
    return {
      solution1: 0,
      solution2: 0,
      solution3: 0,
      solution4: 0,
      form: {
        calorie_aktivnost: null,
        calorie_spol: null,
        calorie_tezina:null,
        calorie_visina:null,
        calorie_dob:null,
        kalorija1: "",
        proteina1: "",
        ugljikohidrata1: "",
        masti1: "",
        
      },

      calorie_spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      calorie_aktivnost: [
        { text: "Odaberi aktivnost", value: null },
        "Neaktivan",
        "Srednje aktivan",
        "Jako aktivan",
      ],
      show: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      JSON.stringify(this.form);

      var solution = null;
      if (this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Neaktivan") {
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.2
        this.solution2=(this.solution1*0.40)/7.7
        this.solution4=(this.solution1*0.20)/7.7
      }
      else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.55
        this.solution2=(this.solution1*0.40)/7.7
        this.solution4=(this.solution1*0.20)/7.7
      }
       else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.9
        this.solution2=(this.solution1*0.40)/7.7
        this.solution4=(this.solution1*0.20)/7.7
      }



       if (this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Neaktivan"){
         this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)-161))*1.2
         this.solution2=(this.solution1*0.40)/7.7
         this.solution4=(this.solution1*0.20)/7.7
       }
       else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)-161))*1.55
        this.solution2=(this.solution1*0.40)/7.7
        this.solution4=(this.solution1*0.20)/7.7
      }
      else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)-161))*1.9
        this.solution2=(this.solution1*0.40)/7.7
        this.solution4=(this.solution1*0.20)/7.7
      }
      
    },
  },
   watch:{
    'message':function(){
      this.onSubmit();
    }
  }
};
</script>

<style scoped>
.card-header {
  background-color: #e6e6e6;
  font-size: 30px;
  font-weight: 500;
}

.calorie {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}
</style>
