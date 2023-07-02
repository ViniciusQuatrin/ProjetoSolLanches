<script setup>
  import ListaCardapio from './ListaCardapio.vue';
  import RatingVue from './RatingVue.vue'

  const comprar = () => {
    my_modal_2.showModal()
    console.log("comprado né")
  }
</script>


<template>
    <!-- Open the modal using ID.showModal() method -->
<button class="btn btn-warning" onclick="my_modal_1.showModal()"><b>Confira nosso cardápio</b></button>
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box bg-yellow-300">
    <h3 class="font-bold text-lg">Cardápio</h3>
    <p class="py-4">Confira Nosso Cardápio: </p>
    <div>
      <ListaCardapio :items="[
        'X-Burguer_______________________R$12,50',
        'X-Salada_________________________R$13,00',
        'X-Tudão_________________________R$23,00',
        'A moda da casa__________________R$25,00',
        'X-Egg___________________________R$15,00',
        'X-Bacon_________________________R$17,50',
        'X-Calabresa_____________________R$16,00']"/>
    </div>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn btn-error text-white">Fechar</button>
      <button class="btn btn-success" @click="comprar"><b>Pedir</b></button>
    </div>
  </form>
</dialog>
<dialog id="my_modal_2" class="modal">
        <form method="dialog" class="modal-box bg-success">
          <div class="alert alert-success flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span class="text-center"><b>Compra realizada com sucesso! Avalie-nos:</b></span>
            <RatingVue/>
          </div>
          <div class="flex justify-center modal-action">
           <button class="btn">Fechar</button>
          </div>
        </form>
      </dialog>
</template>
