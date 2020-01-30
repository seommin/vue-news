<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import Firebase from "firebase";
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

let config = {
  apiKey: "AIzaSyCbaeLDEAF9eymTCH4l-Aj9W2bNHI39u2s",
  authDomain: "vuejs-seommin.firebaseapp.com",
  databaseURL: "https://vuejs-seommin.firebaseio.com",
  projectId: "vuejs-seommin",
  storageBucket: "vuejs-seommin.appspot.com",
  messagingSenderId: "225722120941",
  appId: "1:225722120941:web:b67af5cff755937d982ae4",
  measurementId: "G-Z7N8QQLLGM"
};

// Initialize Firebase
let app = Firebase.initializeApp(config);
let db = app.database();

export default {
  firebase: () => {
    return {
      db
    };
  },
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #35495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-ender,
.page-leave-to {
  opacity: 0;
}
</style>
