<template>
  <div style="margin: 20px;">
     <y-popover
      placement="bottom-start"
      width="100"
      trigger="click">
      <y-picker />
      <y-input slot="reference"></y-input>
    </y-popover>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Yun UI!!'
      };
    }
  };
</script>
