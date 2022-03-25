<template>
 <div>
    <y-scrollbar
        @mouseenter.native="print"
        @mousemove.native="print"
        class="y-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="y-time-spinner__list"
        noresize
        tag="ul"
        ref="hours">
        <li
          @click="print"
          v-for="item in list"
          class="y-time-spinner__item"
          :key="item"
          :class="{ 'active': false }">{{item}}</li>
      </y-scrollbar>
 </div>
</template>
<script>
  export default {
    name: 'YPicker',
    componentName: 'YPicker',
    data() {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8]
      };
    },
    methods: {
      print(e) {
        console.log(e);
      }
    }
  };
</script>
