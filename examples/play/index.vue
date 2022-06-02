<template>
  <div style="margin: 20px;">
     <y-popover
      placement="bottom-start"
      width="100"
      trigger="click">
      <y-picker />
      <y-input slot="reference"></y-input>
    </y-popover>

    <y-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点">
    </y-time-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Yun UI!!',
        value1: new Date(2016, 9, 10, 18, 40),
      };
    }
  };
</script>
