import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import WebsiteDirectory from './components/WebsiteDirectory.vue';
import './index.css';

const messages = {
  en: {
    title: 'Website Directory',
    search: {
      placeholder: 'Search websites...'
    },
    categories: {
      all: 'All'
    },
    addWebsite: {
      title: 'Add New Website',
      form: {
        title: 'Title',
        url: 'URL',
        description: 'Description',
        category: 'Category',
        submit: 'Add Website',
        cancel: 'Cancel'
      }
    }
  },
  zh: {
    title: '网站目录',
    search: {
      placeholder: '搜索网站...'
    },
    categories: {
      all: '全部'
    },
    addWebsite: {
      title: '添加新网站',
      form: {
        title: '标题',
        url: '网址',
        description: '描述',
        category: '分类',
        submit: '添加网站',
        cancel: '取消'
      }
    }
  }
};

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: WebsiteDirectory
    }
  ]
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount('#root');