<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          My App
        </q-toolbar-title>

        <q-space />

        <q-btn-dropdown
          v-model:menu="isCartNotEmpty"
          color="primary"
          label="Cart"
          icon="shopping_cart"
        >
          <q-card>
            <q-card-section>
              <q-list dense>
                <q-item
                  v-for="(item, index) in cartItems"
                  :key="index"
                >
                  <q-item-section>
                    <q-item-label>{{ item.name }}</q-item-label>
                    <q-item-label caption>{{ item.price }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn
                      round
                      dense
                      flat
                      icon="remove"
                      @click="removeItem(index)"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
            <q-card-actions>
              <q-btn
                color="primary"
                label="Go to Cart"
                @click="goToCart"
              />
            </q-card-actions>
          </q-card>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const cartItems = ref([])
    const router = useRouter()

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function removeItem (index) {
      cartItems.value.splice(index, 1)
    }

    function goToCart () {
      const itemsParam = cartItems.value.map(item => encodeURIComponent(JSON.stringify(item))).join(',')
      router.push(`/cart?items=${itemsParam}`)
    }

    const isCartNotEmpty = computed(() => cartItems.value.length > 0)

    return {
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Homepage',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Products',
          caption: 'View our products',
          icon: 'store',
          link: '/products'
        },
        {
          title: 'About Us',
          caption: 'Learn about our company',
          icon: 'info',
          link: '/about'
        },
        {
          title: 'Contact Us',
          caption: 'Get in touch',
          icon: 'email',
          link: '/contact'
        }
      ],
      leftDrawerOpen,
      toggleLeftDrawer,
      cartItems,
      removeItem,
      goToCart,
      isCartNotEmpty
    }
  }
})
</script>
