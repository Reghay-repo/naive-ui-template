import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import messages from "./utils/locals/messages";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from "pinia";
import {router} from "@/router";

// I18n
const i18n = createI18n({
  locale: "en",
  messages: messages,
  silentTranslationWarn: true,
  warnHtmlInMessage: "off",
  globalInjection: true,
  fallbackLocale: "en",
  silentFallbackWarn: true,
  legacy: false,
});

// pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App);
app.use(i18n);
app.use(pinia);
app.use(router);

app.mount("#app");
