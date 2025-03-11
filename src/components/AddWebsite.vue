<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const newWebsite = ref({
  name: '',
  url: '',
  description: '',
  category: ''
});

const emit = defineEmits(['add-website']);

const submitWebsite = () => {
  emit('add-website', { ...newWebsite.value, id: Date.now() });
  newWebsite.value = { name: '', url: '', description: '', category: '' };
  showModal.value = false;
};
</script>

<template>
  <div>
    <button @click="showModal = true" class="btn-primary">
      添加网站
    </button>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 class="text-2xl font-bold mb-4">添加新网站</h2>
        <form @submit.prevent="submitWebsite">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">网站名称</label>
            <input v-model="newWebsite.name" type="text" required class="input-primary w-full" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">网站链接</label>
            <input v-model="newWebsite.url" type="url" required class="input-primary w-full" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">描述</label>
            <textarea v-model="newWebsite.description" required class="input-primary w-full"></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">分类</label>
            <input v-model="newWebsite.category" type="text" required class="input-primary w-full" />
          </div>
          <div class="flex justify-end gap-4">
            <button type="button" @click="showModal = false" class="px-4 py-2 text-gray-600 hover:text-gray-800">
              取消
            </button>
            <button type="submit" class="btn-primary">
              提交
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>