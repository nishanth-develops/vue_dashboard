<template>
  <div class="table-container">
    <h2>Employers List</h2>
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employer in paginatedEmployers" :key="employer.employerid">
          <td>{{ employer.employerid }}</td>
          <td>{{ employer.name }}</td>
          <td>{{ employer.age }}</td>
          <td>{{ employer.role }}</td>
          <td>{{ employer.description }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      employers: [],
      currentPage: 1,
      itemsPerPage: 5
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.employers.length / this.itemsPerPage);
    },
    paginatedEmployers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.employers.slice(start, end);
    }
  },
  methods: {
    fetchEmployers() {
      axios.get('http://localhost:3000/api/employers')
        .then(response => {
          this.employers = response.data;
        })
        .catch(error => {
          console.error('Error fetching employers:', error);
        });
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  created() {
    this.fetchEmployers();
  }
};
</script>

<style>
.table-container {
  width: 1000px;
  margin-left:250px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #42b983;
  color: white;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
