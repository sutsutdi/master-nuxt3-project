<template>
  <v-app style="font-family: Prompt" :theme="theme">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item>
        <v-img src="@/assets/images/logo.png" style="height: 60px"></v-img>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          prepend-avatar="./../../assets/images/dr2.png"
          title="Dr.Suthee Suddee"
          subtitle="sandra_a88@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-folder"
          title="Home"
          value="home"
          
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Person"
          value="person"
        
        ></v-list-item>


        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="NCD Clinic"
          value="clinic"
        
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-star"
          title="Provider"
          value="provider"
          
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-star"
          title="Telemed"
          value="telemed"
         
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-star"
          title="Login"
          value="login"
          
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-star"
          title="Practice"
          value="practice"
          
        ></v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        icon="mdi-menu"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="text-primary">Warin PCU NCD </v-toolbar-title>
      <v-btn icon>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon  @click="location">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="changeTheme"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <slot />
  </v-app>
</template>

<script setup lang="ts">

import { ref } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();
const drawer = ref(false);
const theme = ref("light");

const changeTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};

const latitude = ref(0)
const longitude = ref(0)
const myLocation = ref("")

const location = () => {
  window.navigator.geolocation.getCurrentPosition((position)=>{
     latitude.value = position.coords.latitude
     longitude.value = position.coords.longitude
     myLocation.value = `https://www.google.com/maps/search/?api=1&query=${latitude.value},${longitude.value}`
    //  window.location.assign( myLocation.value);
       window.open( myLocation.value, '_blank');
  })
}
</script>
