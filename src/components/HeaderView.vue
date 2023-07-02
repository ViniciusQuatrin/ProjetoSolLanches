<template>
    <header class="bg-warning">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Sol Burguers</span>
            <img class="h-9 w-auto" src="src\imgs\burgaoDOculosOficial.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Abrir menu principal</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Lanchonete</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Como chegar</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Trabalhe conosco</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Quem somos</a>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900" @click="exibirLogin = !exibirLogin">Logar <span aria-hidden="true">&rarr;</span></a>
          <div v-if="exibirLogin" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div class="relative bg-yellow-500 p-4 rounded">
              <FormLogin/>
              <button class="absolute top-2 right-2 text-black hover:text-red-500" @click="exibirLogin = false"><b>X</b></button>
            </div>
          </div>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-yellow-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Sol Burgues</span>
              <img class="h-9 w-auto" src="src/imgs/burgaoDOculosOficial.png" alt="um hamburguer com oculos de sol" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Fechar menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-600">Lanchonete</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-600">Onde estamos</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-600">Trabalhe conosco</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-600">Quem Somos</a>
              </div>
              <div class="py-6">
                <a href="#" class="-mx-3 block   rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-red-600" @click="exibirLogin = !exibirLogin">Logar</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>

  <script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

  import FormLogin from './FormLogin.vue'

  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]

  const isOpen = ref(false)
  const mobileMenuOpen = ref(false)
  const exibirLogin = ref(false)
  </script>
