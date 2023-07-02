<script setup>
    import { ref } from 'vue'
    import ModalCardapioVue from './ModalCardapioVue.vue';
    import lanches from '../imgs/lanches.jpeg'
</script>

<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${lanches})` }">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Seja Bem-Vindo</h1>
        <p class="mb-5 font-bold">Venha conhecer a melhor e mais moderna lanchonete da região Sol Burguers! Estamos presentes em grande parte
            do território Oeste do Paraná para saciar a sua fome e tornar a experiencia de pedir um lanche online totalmente
            <i>diferenciada</i>
        </p>
        <ModalCardapioVue/>
      </div>
    </div>
  </div>

</template>
