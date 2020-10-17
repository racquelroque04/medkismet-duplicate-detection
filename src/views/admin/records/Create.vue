<template>
  <b-container class="container-create-record">
    <b-row>
      <b-col cols="9">
        <span class="title">Create Record</span>
      </b-col>
      <b-col cols="3">
        <span class="title">
          <b-button variant="primary" class="d-button mr-2">Upload CSV</b-button>
        </span>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="Personal Details" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.first_name"
              required
              placeholder="First Name"
            />
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="form.middle_name"
              placeholder="Middle Name"
            />
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="form.last_name"
              required
              placeholder="Last Name"
            />
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              type="number"
              v-model="form.age"
              required
              placeholder="Age"
            />
          </b-form-group>

          <b-form-group id="input-group-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            />
          </b-form-group>

          <b-form-group id="input-group-1">
            <b-form-input
              id="input-1"
              v-model="form.contact_number"
              type="number"
              required
              placeholder="Contact Number"
            />
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-form-input
              id="input-1"
              v-model="form.paypal"
              type="number"
              required
              placeholder="Paypal Account"
            />
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-form-select
              id="input-3"
              v-model="form.gender"
              :options="genders"
              required
            />
          </b-form-group>

          <!-- Address -->
          <b-form-group id="input-group-8" label="Address" label-for="input-8" class="address-field">
            <b-form-input
              id="input-2"
              v-model="form.unit"
              required
              placeholder="House/Unit #"
            />
          </b-form-group>

          <b-form-group id="input-group-8">
            <b-form-input
              id="input-2"
              v-model="form.street"
              required
              placeholder="Street"
            />
          </b-form-group>

          <b-form-group id="input-group-8">
            <b-form-input
              id="input-2"
              v-model="form.barangay"
              required
              placeholder="Barangay"
            />
          </b-form-group>

          <b-form-group id="input-group-8">
            <b-form-input
              id="input-2"
              v-model="form.city"
              required
              placeholder="City"
            />
          </b-form-group>

          <b-form-group id="input-group-8">
            <b-form-input
              id="input-2"
              v-model="form.state"
              required
              placeholder="State/Region"
            />
          </b-form-group>

          <b-form-group id="input-group-8">
            <b-form-input
              id="input-2"
              v-model="form.country"
              required
              placeholder="Country"
            />
          </b-form-group>

          <b-row>
            <b-col class="action-buttons">
              <b-button type="submit" variant="primary" class="d-button mr-2">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Create',
    data() {
      return {
        form: {
          first_name: '',
          middle_name: '',
          last_name: '',
          age: '',
          email: '',
          gender: null,
          contact_number: '',
          paypal: '',
          address: {
            unit: '',
            street: '',
            barangay: '',
            city: '',
            state: '',
            country: '',
          }
        },
        genders: [{ text: 'Select One', value: null }, 'Female', 'Male'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.createRecord();
      },

      onReset(evt) {
        this.form = {};
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      async createRecord() {
        await this.$store.dispatch('registrant/createRecord', {
          ...this.form,
        });
        this.form = {};
      },
    }
  }
</script>

<style lang="scss">
.container {
  &-create-record {
    padding: 50px 20px 20px;

    span.title {
      font-size: 20px;
    }

    .action {
      text-align: right;
    }
  }
}
.d-button {
  background-color: #17a2b8;
  border: #17a2b8;

  &:focus {
      background-color: darken(#17a2b8, 10%);
      border: darken(#17a2b8, 10%);
      box-shadow: #17a2b8;
  }
}

.action-buttons {
  text-align: right;
}

.address-field {
  margin-top: 3rem;
}
</style>