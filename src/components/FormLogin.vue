<script setup>

</script>

<template>
    <form class="form">
    <input class="input text-black" type="text" placeholder="Email">
    <input class="input text-black" type="password" placeholder="Senha">
    <center><button class="button"><b>Logar</b></button></center>
</form>
</template>

<style>
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-image: #d7d70b;
  border-radius: 2.5em;
  padding: 30px;
  width: 300px;
  height: 260px;
}

.form::before {
  content: '';
  background-image: linear-gradient(45deg, rgb(0, 0, 0),
  #000000);
  height: 358px;
  width: 309px;
  position: absolute;
  margin-top: -34px;
  margin-left: px;
  z-index: -1;
  border-radius: 2.7em;
}

.button {
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  background: #d10202;
  color: black;
  padding: 0.7em 5.5em;
  display: flex;
  align-items: center;
  border: 2px solid #66da4300;
  border-radius: 5em;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}

.button:hover {
  border: 2px solid #ad0505;
  background: #00000000;
  color: #bd0808;
}

.button:active {
  border: 2px solid #66da4300;
  background: #ff5900;
  color: black;
}

.input {
  width: calc(100% - 10px);
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #66da4300;
  border-bottom: 1px solid #a90505;
  outline: none;
  background-color: #8a0404;
  color: #9f0b0b;
  transition: 0.2s;
}

.input:focus {
  border: 1px solid #b30a0a00;
  border-bottom: 1px solid #b00808;
  background-color: red;
  animation-duration: 0.8s;
  animation: ease-in;
  color: white;
}

.input::placeholder {
  color: #9b725b;
}
</style>
