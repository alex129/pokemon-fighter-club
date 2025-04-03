<script setup lang="ts">
import { ref } from 'vue';
import type { Nullable } from '@/types/shared/Nullable';

const email = ref<Nullable<string>>(null);
const password = ref<Nullable<string>>(null);

const handleSubmit = () => {
  console.log(email.value, password.value);
};
</script>

<template>
  <form class="flex flex-col gap-4 border border-gray-700 rounded-lg shadow-md p-5 min-w-[300px]" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-2">
      <label for="email">Email: </label>
      <input
        class="rounded-md p-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        type="email"
        id="email"
        v-model="email"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="password">Password: </label>
      <input
        class="rounded-md p-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        type="password"
        id="password"
        v-model="password"
      />
    </div>

    <div class="flex items-center justify-center">
      <button
        class="mt-8 p-2 rounded-md border border-gray-700 cursor-pointer hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
        type="submit"
      >
        Login
      </button>
    </div>
  </form>
</template>
