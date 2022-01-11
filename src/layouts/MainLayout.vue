<template>
  <div>

     <Header :userData="user" />

     <Body  :userData="user" />

     <Footer />


  </div>
</template>

<script>
import Header from "@/layouts/MainSections/Header";
import Body from "@/layouts/MainSections/Body";
import Footer from "@/layouts/MainSections/Footer";
export default {
  name : "MainLayout",
  components : {
    Header,
    Body,
    Footer
  },
  computed: {
    user(){
      return this.$store.state.user
    }
  }
}
</script>