<script setup lang='ts'>
import { processingUrl } from '../constants/IMAGE';

</script>
<template>
  <div class="processing">
    <div class="display">
      <div class="icon">
        <img title="processing" :src="processingUrl"/>
      </div>
      <div class="message">処理中...</div>
    </div>
  </div>
</template>
<style scoped>
  .processing {
    position: absolute;
    mix-blend-mode: darken;
    height: 100%;
    width: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2000;
    .display {
      position: absolute;
      top: 40%;
      left: 45%;
      text-align: center;
      .icon {
        width: 10vw;
      }
      .message {
        color: white !important;
        font-size: calc(var(--app-font-size) * var(--app-font-size-2x));
      }
    }
  }
</style>