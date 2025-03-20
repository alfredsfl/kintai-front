<script setup lang='ts'>
import { useAuth } from '~/features/auth/composables/useAuth';
import { useAuthPopup } from '~/features/auth/composables/useAuthPopup';

  definePageMeta({
    layout: false,
  });

  const auth = useAuth()
  const dialog = useAuthPopup()

  // auth.clearUser()

  watch(dialog.authPopup, async (val) => {
    if (val) {
      await dialog.confirm()
    }
  })
</script>

<template>
  <div />
</template>