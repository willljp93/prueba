<template>
  <q-layout view="hHh Lpr fFr">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="col-3">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Eccomerce William
        </q-toolbar-title>

        <q-input
          class="q-pa-xs col-5"
          v-model="search"
          rounded
          dark
          standout
          dense
          type="search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <div class="col justify-end">
          <q-btn unelevated dense padding="5px" label="Iniciar sesión " to="login">
            <q-avatar size="42px">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-btn>

          <q-btn
            dense
            unelevated
            padding="10px"
            label="Mi Carrito"
            icon-right="shopping_cart"
            @click="toggleRightDrawer"
          >
            <q-badge color="red" transparent floating>0</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated class="row bg-dark text-white q-pa-xs">
      <q-toolbar>
        <q-toolbar-title>
          <div class="col-2 q-pa-xs">
            <q-avatar>
              <img src="~/assets/quasar-logo-vertical.svg" />
            </q-avatar>
          </div>
        </q-toolbar-title>
        <div class="col-6 q-pa-xs q-gutter-lg" align="center">
          <q-btn
            round
            flat
            padding="none"
            icon="lab la-facebook"
            size="lg"
            target="_blank"
            href="https://www.facebook.com/"
          />
          <q-btn
            round
            flat
            padding="none"
            icon="lab la-whatsapp"
            size="lg"
            target="_blank"
            href="https://web.whatsapp.com/"
          />
          <q-btn
            round
            flat
            padding="none"
            icon="lab la-telegram"
            size="lg"
            target="_blank"
            href="https://t.me/Will_l"
          />
        </div>
        <q-separator spaced />
        <div class="col-3 justify-center text-center">
          {{ new Date().getFullYear() }} —
          <strong>Copyright: @willl_l</strong>
        </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default {
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const essentialLinks = [
      {
        title: "Home",
        caption: "Homepage",
        icon: "home",
        link: "/",
      },
      {
        title: "Products",
        caption: "View our products",
        icon: "store",
        link: "/products",
      },
      {
        title: "About Us",
        caption: "Learn about our company",
        icon: "info",
        link: "/about",
      },
      {
        title: "Contact Us",
        caption: "Get in touch",
        icon: "email",
        link: "/contact",
      },
    ];

    return {
      search: ref(""),
      essentialLinks,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
