<template>
   <div>
    
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
            
          >
           <strong>{{ solution1}}&nbsp;kCal </strong></b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="PROTEINA ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
          <p>  <strong>{{ solution2 }}&nbsp;g</strong> </p>
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
            <strong>{{ solution2 }}&nbsp;g</strong>
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
            <strong>{{ solution4 }} &nbsp;g</strong>
          </b-form-group>
        </b-form>
      </b-card>
    </div>
  </div> 
</template>
<script>

export default {
    name:'Kalorije', 
 
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
    },
  },
 
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