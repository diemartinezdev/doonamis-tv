<template>
  <div id="foot">
    <h3>diemartinezdev</h3>
    <a href="https://github.com/diemartinezdev" target="_blank">
      <img src="@/assets/guthub.png" alt="github logo" />
    </a>
    <a
      href="https://www.linkedin.com/in/diego-martinezpineiro/"
      target="_blank"
    >
      <img src="@/assets/LI-In-Bug.png" alt="linkedin logo" />
    </a>
    <p>Your future best dev</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#foot {
    
      background-color: #151b26;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid #f7690c;
}
h3 {
  color: white;
  font-style: oblique;
  margin-right: 15px;
}

p {
  color: white;
  font-weight: bold;
  margin-left: 15px;
}
img {
  width: 25px;
  margin: 10px;
}
</style>
