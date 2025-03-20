<script setup lang="ts">
import CommonAndStyle from './components/common/CommonAndStyle.vue';
import AuthPopup from './features/auth/components/AuthPopup.vue';


  // window.name
  const route = useRoute()
  // const pagePath = usePagePath()
  // window.name = getPathInfo('name', {
  //   path: pagePath.path.value ?? route.path,
  //   params: pagePath.params.value ?? route.params
  // })
  // 初期データ未取得の場合、取得処理を実行
  // const initialData = useMasterLoad(getWindowId(window.name), false)
  // initialData.isLoading.value = true
  // await initialData.fetchInitialData()

  // TITLE
  useHead({
    htmlAttrs: {
      lang: 'ja',
      class: 'overflow-hidden'
    },
    bodyAttrs: {
      class: 'body-class' 
    },
    // titleTemplate: () => {
    //   const route = useRoute()
    //   const title = getPathInfo('title', route) || ''
    //   return title
    // },
    link: [{ rel: "icon", href: __publicAssetsURL("/favicon.ico") }],
  });

</script>

<template>
  <CommonAndStyle/>
  <AuthPopup/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
.body-class {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: var(--app-font-size);
  border-color: var(--app-bd-color);
  background-color: var(--app-bg-color);
}
</style>
