<template>
  <div class="container">
    
    <div class="text-right mt-3">
      <v-text-field label="Search Here"></v-text-field>
      <v-btn color="primary" @click="dialog = true">
        Add Employee
      </v-btn>
      <v-dialog v-model="dialog" width="1200px">
        <v-card>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
                label="Name"></v-text-field>

              <v-text-field v-model="phone.value.value" :counter="7" :error-messages="phone.errorMessage.value"
                label="Phone Number"></v-text-field>

              <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                label="E-mail"></v-text-field>

              <v-select v-model="select.value.value" :items="items" :error-messages="select.errorMessage.value"
                label="Select"></v-select>

              <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1"
                label="Option" type="checkbox"></v-checkbox>

              <v-btn class="me-4" type="submit">
                submit
              </v-btn>

              <v-btn @click="handleReset">
                clear
              </v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
  <div class="container-fluid">
    <v-table>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Hire Date</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.id }}</td>
          <td>image</td>
          <td>{{ item.firstname }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.position }}</td>
          <td>{{ item.salary }}</td>
          <td>{{ item.hiredate }}</td>
          <td>{{ item.detail }}</td>
          <td>
            <v-row justify="space-between" class="text-center">
              <v-col-md>
                <v-btn icon="mdi-pencil" size="x-small" color="warning"></v-btn>
              </v-col-md>
              <v-col-md>
                <v-btn icon="mdi-delete" size="x-small" color="error"></v-btn>
              </v-col-md>
            </v-row>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<!-- 
<script>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
export default {
  data() {
    return {
      dialog: false,
      desserts: [
        {
          id: 1,
          firstname: 'THOEUN',
          lastname: 'LOTHIN',
          gender: 'Male',
          age: '24',
          phone: '016324464',
          email: 'lothin@gmail.com',
          address: 'bkk1',
          position: 'Java Developer',
          salary: '2000',
          hiredate: '2023-03-21',
          detail: 'contract Staff',
        },

      ],
    }
  },
}
</script>-->
<script>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

export default {
  data() {
    return {
      dialog: false,
      desserts: [
        {
          id: 1,
          firstname: 'THOEUN',
          lastname: 'LOTHIN',
          gender: 'Male',
          age: '24',
          phone: '016324464',
          email: 'lothin@gmail.com',
          address: 'bkk1',
          position: 'Java Developer',
          salary: '2000',
          hiredate: '2023-03-21',
          detail: 'contract Staff',
        },

      ],
    }
  },
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true

          return 'Name needs to be at least 2 characters.'
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true

          return 'Phone number needs to be at least 9 digits.'
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Must be a valid e-mail.'
        },
        select(value) {
          if (value) return true

          return 'Select an item.'
        },
        checkbox(value) {
          if (value === '1') return true

          return 'Must be checked.'
        },
      },
    })
    const name = useField('name')
    const phone = useField('phone')
    const email = useField('email')
    const select = useField('select')
    const checkbox = useField('checkbox')

    const items = ref([
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ])

    const submit = handleSubmit(values => {
      alert(JSON.stringify(values, null, 2))
    })

    return { name, phone, email, select, checkbox, items, submit, handleReset }
  },
}
</script>
<style></style>