<template>
        
    <div class="stepper">
      <ul class="stepper-progress">
        <li v-for="step in steps" :key="step.title" :class="{ 'is-active': step.isActive }">
          {{ step.title }}
        </li>
      </ul>
  
      <div class="stepper-content">
        <template v-if="currentStep === 1">
            <h5>Personal information</h5>
          <div class="step-content">
            <div class="main_step">
            <label for="employer-name">Last name:</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
        </div>
        <div class="main_step">
            <label for="employer-name">First name:</label>
            <input v-model="formData.firstname" type="text" id="employer-name" required>
        </div>
        <div class="main_step">
            <label for="employer-city">City:</label>
            <input v-model="formData.city" type="text" id="employer-city" required>
        </div>
        <div class="main_step">
            <label for="employer-email">Email:</label>
            <input v-model="formData.email" type="text" id="employer-email" required>
        </div>
        <div class="main_step">
            <label for="employer-phone">Phone number:</label>
            <input v-model="formData.phone" type="number" id="employer-phone" required>
        </div>
        <div class="main_step">
            <label for="employer-phone">Cell phone number:</label>
            <input v-model="formData.phone" type="text" id="employer-phone" required>
        </div>
        <div class="main_main_inner_language">
            <h5>Languages</h5>
            <div class="main_step">
            <select v-model="formData.employerType" id="employer-type" required>
          <option value="">Please select</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="turkish">turkish</option>
            </select>
            </div>
            <div class="main_step">
            <select v-model="formData.employerType" id="employer-type" required>
          <option value="">Please select</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="turkish">turkish</option>
            </select>
            </div>
            <div class="main_step">
            <select v-model="formData.employerType" id="employer-type" required>
          <option value="">Please select</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="turkish">turkish</option>
            </select>
            </div>
            <div class="main_step">
            <select v-model="formData.employerType" id="employer-type" required>
          <option value="">Please select</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="turkish">turkish</option>
            </select>
            </div>
        </div>
            <button @click="goToStep(2)" :disabled="isLoading">Next</button>
          </div>
        </template>
        <template v-else-if="currentStep === 2">
          <div class="step-content">
            <div class="secon_main_step">
            <label for="employer-type">Desired position:</label>
        <select v-model="formData.employerType" id="employer-type" required>
          <option value="Florist">Florist</option>
          <option value="Florist apprentice">Florist apprentice</option>
          <option value="Sales consultant">Sales consultant</option>
          <option value="Warehouse-employee">Warehouse employee</option>
        </select>
    </div>
    <div class="secon_main_step">
            <label for="employer-type">Type of position desired:</label>
        <select v-model="formData.employerType" id="employer-type" required>
          <option value="Florist">Florist</option>
          <option value="Florist apprentice">Florist apprentice</option>
          <option value="Sales consultant">Sales consultant</option>
          <option value="Warehouse-employee">Warehouse employee</option>
        </select>
    </div>

    <div class="secon_main_step">
        <label for="supervisor-name">Availabilities:</label>
            <textarea v-model="formData.supervisorName" type="text" placeholder="Evening, days, weekends" id="supervisor-name" required></textarea>  
    </div>
    
    <button @click="goToStep(3)" :disabled="isLoading">Next</button>

          </div>
        </template>
        <template v-else-if="currentStep === 3">
          <div class="step-content">
            <h4>Personal informations</h4>
            <div class="secon_main_step">
            <label for="employer-type">Secondary:</label>
        <select v-model="formData.employerType" id="employer-type" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">Technical study</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">College: indicate the discipline</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">University : indicate the discipline</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>


    
    <button @click="goToStep(4)" :disabled="isLoading">Next</button>

          </div>
        </template>
        <template v-else-if="currentStep === 4">
          <div class="step-content">
            <h4>Professional experience (last job)</h4>
            <div class="secon_main_step">
                <label for="employer-name">Employer's name</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">Start date</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">End date</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">Position held</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">Supervisor's name</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <div class="secon_main_step">
        <label for="employer-name">Phone number</label>
            <input v-model="formData.lastname" type="text" id="employer-name" required>
    </div>
    <h4>Professional experience</h4>
    <div class="secon_main_step">
        <label for="employer-type">Years of experience in a similar position:</label>
        <select v-model="formData.employerType" id="employer-type" required>
          <option value="">none</option>
          <option value="Between 3 and 5 years">Between 3 and 5 years</option>
          <option value="Between 1 and 2 years">Between 1 and 2 years</option>
          <option value="Between 1 month and 11 months">Between 1 month and 11 months</option>
        </select>
    </div>


    
    <button @click="goToStep(5)" :disabled="isLoading">Next</button>

          </div>
        </template>
        <template v-else-if="currentStep === 5">
          <div class="step-content">
            <h4>Resume and presentation letter</h4>
            <div class="secon_main_step">
                <label for="employer-name">Explain in a few words your personal interests or paste your presentation letter</label>
            <textarea v-model="formData.lastname" type="file" id="employer-name" required></textarea>
    </div>
    <!-- <button @click="goToStep(6)" :disabled="isLoading">Next</button> -->
    <button @click="handleSubmit" :disabled="isLoading">Submit</button>
    
          </div>
        </template>
      </div>


      <div class="stepper-actions">
        <button v-if="currentStep > 1" @click="goToStep(currentStep - 1)" :disabled="isLoading">Back</button>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'StepperForm',
    data() {
      return {
        steps: [
          { title: '1', isActive: true },
          { title: '2', isActive: false },
          { title: '3', isActive: false },
          { title: '4', isActive: false },
          { title: '5', isActive: false }
          
        ],
        currentStep: 1,
        formData: {
        lastname: '',
        
        },
        isLoading: false,
      };
    },
    methods: {
      goToStep(step) {
        if (step < 1 || step > this.steps.length) return; // Handle invalid steps
  
        this.steps = this.steps.map(s => ({ ...s, isActive: s.title === this.steps[step - 1].title }));
        this.currentStep = step;
      },
      handleSubmit() {
        this.isLoading = true; // Simulate loading state
        console.log('Form submitted:', this.formData);
        setTimeout(() => {
          this.isLoading = false;
        }, 1000); // Simulate delay
  
        // Implement your form submission logic here (e.g., send data to server)
      },
    },
  };
  </script>
  
    
  <style scoped>
  .stepper {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .stepper-progress {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .stepper-progress li {
    flex: 1;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
  
  .stepper {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.27);
    padding: 2%;
    width: 700px !important;
}

.stepper ul.stepper-progress li {
    border: 1px solid;
    padding: 0 0 0 0;
    width: 45px;
    height: 25px;
    border-radius: 150px;
    flex: 0 0 4%;
    margin: 0 30px 0 30px;
    justify-content: center;
    position: relative;
}

.stepper ul.stepper-progress {
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 0 40px 0;
}

.stepper ul.stepper-progress li.is-active {
    background: black;
    color: white;
}

.stepper ul.stepper-progress li::after {
    content: '';
    display: block;
    position: absolute;
    width: 59px;
    height: 1px;
    background: black;
    top: 10px;
    left: 24px;
}

li.is-active {}

.stepper ul.stepper-progress li:last-child::after {
    width: 0;
}

.stepper .stepper-content {
    text-align: start;
}

.stepper .stepper-content .step-content {
    position: relative;
}


.stepper .stepper-content .step-content h4,.stepper .stepper-content .step-content h5  {
    font-size: 40px;
    font-family: serif;
    margin: 0 0 21px 0;
}

.stepper .stepper-content .step-content .secon_main_step {
    display: flex;
    flex-direction: column;
    margin: 0 0 12px 0;
}

.stepper .stepper-content .step-content .secon_main_step label {
    font-size: 20px;
    margin: 0 0 2px 0;
}

.stepper .stepper-content .step-content .secon_main_step input,.stepper .stepper-content .step-content .secon_main_step select {
    height: 38px;
    width: 100%;
}

.stepper .stepper-content .step-content button {
    position: absolute;
    top: unset;
    bottom: -60px;
    left: unset;
    right: 0;
    /* margin: auto; */
    width: 140px;
    background: gray;
    border: none;
    border-radius: 20px;
    padding: 10px 10px 10px 10px;
}

.stepper-actions {
    display: flex;
}

.stepper-actions button {
    background: gray;
    width: 120px;
    padding: 10px 0 10px 0;
    border-radius: 20px;
    border: none;
}
.stepper .stepper-content .step-content .main_step {
    display: flex;
    flex-direction: column;
    margin: 0 0 11px 0;
}.main_step {}

.stepper .stepper-content .step-content .main_step label {
    font-size: 20px;
    margin: 0 0 3px 0;
}

.stepper .stepper-content .step-content .main_step input,.stepper .stepper-content .step-content .main_step select {
    height: 39px;
    margin: 0 0 2px 0;
}

.stepper .stepper-content .step-content .main_main_inner_language {
    display: flex;
    flex-wrap: wrap;
}

.stepper .stepper-content .step-content .main_main_inner_language h5 {
    flex: 0 0 100%;
}

.stepper .stepper-content .step-content .main_main_inner_language .main_step {
    flex: 0 0 45%;
    margin: 0 21px 20px 0;
}
  </style>