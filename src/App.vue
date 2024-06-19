<template>
  <div id="app">
    <aside class="sidebar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCHU5JIkqfD2z1KMc4c1nW4zdArnxBM3cCcQ&s" alt="PICTURE" />
      <nav>
        <router-link to="/" class="sidebar-link">Insert Employer</router-link>
        <router-link to="/about" class="sidebar-link">View all Employer</router-link>
      </nav>
    </aside>
      <router-view/>
  </div>
</template>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh; /* Full height of the viewport */
}

.sidebar {
  flex: 0 0 auto; /* Do not grow or shrink, fixed width */
  width: 200px; /* Adjust width as needed */
  background-color: #f0f0f0;
  padding: 20px;
  border-right: 1px solid #ccc;
  height: 100%; /* Full height of the viewport */
  overflow-y: auto; /* Enable scrolling if content exceeds height */
}

img
{
  display: block;
  height: 150px;
  width: 150px;
  margin-bottom:30px;
}

.sidebar nav {
  margin-bottom: 20px;
}

.sidebar-link {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

.sidebar-link:hover {
  background-color: #e0e0e0;
}

.main-content {
  flex: 1;
  padding: 20px;
  text-align: center;
  overflow-y: auto; /* Enable scrolling if content exceeds height */
}
</style>
