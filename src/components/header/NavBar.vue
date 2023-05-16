<template>
  <div id="nav">
    <RouterLink to="/">
      <img src="@/assets/doonamis-logo.png" alt="doonamis logo" />
    </RouterLink>
    <h1>TV Series</h1>
    <ul id="nav-icons">
      <li>
        <RouterLink to="/" class="nav-link"> Top Rated </RouterLink>
      </li>
      <li>
        <RouterLink to="/popular" class="nav-link"> Most Popular </RouterLink>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
}

img {
  width: 150px;
  margin: 1vw;
}

h1 {
  color: hsl(24, 46%, 77%);
  font-size: 1.8vw;
  font-style: italic;
  user-select: none;
}

.nav-link {
  text-decoration: none;
  color: hsl(24, 46%, 77%);
  font-size: 1.2vw;
  font-weight: bold;
}

.nav-link:hover {
  color: #f7690c;
}

#nav-icons {
  display: flex;
  list-style: none;
  margin-left: 6vw;
  gap: 4vw;
}
@media only screen and (max-width: 768px) {
  h1 {
    display: none;
  }

  .nav-link {
font-size: 2vw;
  }

  
}
</style>
