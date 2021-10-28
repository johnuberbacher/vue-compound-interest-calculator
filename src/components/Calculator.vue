<template>
  <div>
    <div class="max-w-screen-sm mx-auto p-5 shadow-md rounded bg-white">
      <div class="text-center mt-10 mb-10 px-5">
        <h1
          class="
            text-3xl
            sm:text-4xl
            leading-normal
            font-extrabold
            tracking-tight
            text-gray-900
          "
        >
          <span class="text-indigo-600">Vue</span> Compound Interest Calculator
        </h1>
        <p v-if="compoundInterest" class="mt-6 text-md leading-7 text-gray-500 font-regular font-bold py-5 px-10 shadow-xl rounded bg-white w-auto inline-block border">
          Compound Interest: <span class="text-indigo-600">${{compoundInterest}}</span>
        </p>
      </div>
      <form class="w-full" @submit.prevent="validateForm">
        <div class="flex flex-wrap mb-6">
          <div
            v-if="errors.length"
            class="w-full sm:w-full px-12 mb-10 text-center"
          >
            <div
              v-for="error in errors"
              v-bind:key="error"
              class="text-red-500 font-bold text-sm"
            >
              {{ error }}
            </div>
          </div>
          <div class="w-full sm:w-1/2 px-3 pb-6">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="principal"
            >
              Initial Principal
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="principal"
              v-model.number="principal"
              type="number"
              placeholder="($)10,000"
            />
          </div>
          <div class="w-full sm:w-1/2 px-3 pb-6">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="interestRate"
            >
              Interest Rate
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="interestRate"
              v-model.number="interestRate"
              type="number"
              placeholder="12(%)"
            />
          </div>
          <div class="w-full sm:w-1/2 px-3 pb-6">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="frequency"
            >
              Compounded Cycles
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="frequency"
              v-model.number="frequency"
              type="number"
              placeholder="1 (per year)"
            />
          </div>
          <div class="w-full sm:w-1/2 px-3 pb-6">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="duration"
            >
              Duration of Investment
            </label>
            <div class="flex flex-wrap">
              <div class="w-full sm:w-3/5 px-0 sm:pr-3 pb-6">
                <input
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gray-200
                    text-gray-700
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    leading-tight
                    focus:outline-none focus:bg-white focus:border-gray-500
                  "
                  id="duration"
                  v-model.number="duration"
                  type="number"
                  placeholder="3 (years/months)"
                />
              </div>
              <div class="w-full sm:w-2/5 px-0 sm:pl-3 pb-6">
                <select
                  class="
                    block
                    w-full
                    bg-white
                    border border-gray-200
                    rounded
                    hover:border-gray-300
                    text-gray-700
                    py-3
                    px-4
                    shadow
                    focus:outline-none
                    focus:border-gray-500
                    focus:shadow-outline
                  "
                  v-model="durationType"
                >
                  <option>Year</option>
                  <option>Month</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end w-full px-3 pb-3">
          <button
            class="
              shadow
              bg-transparent 
              text-indigo-600
              hover:bg-indigo-600 
              hover:text-white
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-6
              rounded
            "
            @click.prevent="clearFields"
            type="button"
          >
            Reset
          </button>
          <button
            class="
              ml-5
              shadow
              bg-indigo-600
              hover:bg-indigo-400
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-6
              rounded
            "
            type="submit"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
    <p class="mt-6 text-xs text-center text-gray-500 font-regular font-bold">
      Built with Vue & TailwindCSS
    </p>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data: function () {
    return {
      errors: [],
      principal: null,
      interestRate: null,
      duration: null,
      durationType: 'Year',
      frequency: null,
      compoundInterest: null,
    };
  },
  methods: {
    validateForm: function (e) {
      this.errors = [];
      if (
        this.principal &&
        this.interestRate &&
        this.duration &&
        this.durationType &&
        this.frequency
      ) {
        this.calculateForm();
      }

      if (!this.principal) {
        this.compoundInterest = null;
        this.errors.push("Please enter a valid Initial Princpial");
      }
      if (!this.interestRate) {
        this.compoundInterest = null;
        this.errors.push("Please enter a valid Interest Rate");
      }
      if (!this.duration) {
        this.compoundInterest = null;
        this.errors.push("Please enter a valid Investment Duration");
      }
      if (!this.frequency) {
        this.compoundInterest = null;
        this.errors.push("Please enter a valid amount of Cycles per Year");
      }

      e.preventDefault();
    },
    calculateForm: function () {
      if(this.durationType == "Year") {
        this.compoundInterest = (this.principal * (Math.pow((1 + (this.interestRate/100)/this.frequency), (this.frequency) * (this.duration)))).toFixed(2)
      } else if(this.durationType == "Month") {
        this.compoundInterest =  (this.principal * (Math.pow((1 + (this.interestRate/100)/this.frequency), (this.frequency) * (this.duration/12)))).toFixed(2)
      }
    },
    clearFields: function () {
        this.principal = null,
        this.interestRate  = null,
        this.duration = null,
        this.durationType = 'Year',
        this.frequency = null,
        this.compoundInterest = null,
        this.errors = []
    }
  },
};
</script>
