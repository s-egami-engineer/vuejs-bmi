const app = new Vue({
  el: '#app',
  data: {
    height: 0,
    weight: 0,
    degree: '',
    appropriateWeightValue: 0,
    weightDifferenceValue: 0,
    bmiValue: 0
  },
  methods: {
    appropriateWeight: function() {
      this.appropriateWeightValue = Math.round((Math.pow(this.height/100, 2) * 22) * 10) / 10;
    },
    weightDifference: function() {
      this.weightDifferenceValue = Math.round((this.weight - this.appropriateWeightValue) * 100) / 100;
    },
    bmi: function() {
       this.bmiValue = Math.round((this.weight / Math.pow(this.height/100, 2)) * 100) / 100;
    },
    obesityDegreeDecision: function() {
      if(this.bmiValue < 18.5) {
        this.degree = '低体重';
      } else if(this.bmiValue >= 18.5 && this.bmiValue < 25) {
        this.degree = '普通体重';
      } else if(this.bmiValue >= 25 && this.bmiValue < 30) {
        this.degree = '肥満（１度）';
      }  else if(this.bmiValue >= 30 && this.bmiValue < 35) {
        this.degree = '肥満（２度）';
      }  else if(this.bmiValue >= 35 && this.bmiValue < 40) {
        this.degree = '肥満（３度）';
      }  else {
        this.degree = '肥満（４度）';
      } 
    },
    reset: function() {
      this.height = 0;
      this.weight = 0;
    },
    multipleHandler: function() {
      this.appropriateWeight();
      this.weightDifference();
      this.bmi();
      this.obesityDegreeDecision();
    }
  }
});



