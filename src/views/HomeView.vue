<template>
  <div class="form-container">
    <h2>Add New Employee</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="employerid">Employer ID:</label>
        <input type="text" id="employerid" v-model="form.employerid" required />
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model.number="form.age" required />
      </div>
      <div class="form-group">
        <label for="role">Role:</label>
        <select id="role" v-model="form.role" required>
          <option value="tester">Tester</option>
          <option value="developer">Developer</option>
          <option value="it_management">IT Management Team</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="form.description" required></textarea>
      </div>
      <button type="submit">Add Employee</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        employerid: '',
        name: '',
        age: '',
        role: '',
        description: ''
      },
      message: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        employerid: this.form.employerid,
        name: this.form.name,
        age: this.form.age,
        role: this.form.role,
        description: this.form.description
      };

      axios.post('http://localhost:3000/api/employers', formData)
        .then(response => {
          console.log(response.data); // Handle success response
          this.message = 'Employer added successfully';
          this.resetForm();
        })
        .catch(error => {
          console.error('Error adding employer:', error); // Handle error
          this.message = 'Error adding employer';
        });
    },
    resetForm() {
      this.form = {
        employerid: '',
        name: '',
        age: '',
        role: '',
        description: ''
      };
    }
  }
};
</script>

<style scoped>
.form-container {
 height:500px;
  width: 600px;
  margin-left:500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369b73;
}

p {
  margin-top: 15px;
  font-weight: bold;
}
</style>
