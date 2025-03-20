<script setup lang='ts'>
  import { WjPopup } from '@grapecity/wijmo.vue2.input';
  import { Popup } from '@grapecity/wijmo.input';
  import { CancelEventArgs } from '@grapecity/wijmo';
  import { useAuth } from '../composables/useAuth';
  import { useAuthPopup } from '../composables/useAuthPopup';
  import { useForm } from 'vee-validate';
  import * as yup from 'yup'
  import _ from 'lodash'
  import { vMessage } from '~/constants/MESSAGE';

//   const appMsg = useAppMessage()
  const auth = useAuth()
  const authPopup = useAuthPopup()
  // useForm
  const { handleSubmit, errors, meta, setFieldValue } = useForm({
    validationSchema: yup.object({
      name: yup.string().required(vMessage.string.req()),
      // 'current-password': yup.string().required('req'),
    }),
    initialValues: {
      name: auth.currentUser.value?.ユーザ名 ?? '',
     'current-password': ''
    }
    // initialValues: initialValues
  });

  const onError = ({values, errors, results}: any) =>  {
    console.group('AuthPopup-onError')
    console.debug(values); // current form values
    console.debug(errors); // a map of field names and their first error message
    console.debug(results); // a detailed map of field names and their validation results
    const firstError = Object.entries(errors)[0]
    const errorEle = document.getElementById(firstError[0])
    errorEle?.focus()
    console.groupEnd()
  }

  const onSuccess = async (values: any) => {
    console.group('AuthPopup-onSuccess')
    console.debug(values)
    await auth.login(values.name, values['current-password'])
    console.groupEnd()
  }

  const userLogin = handleSubmit(onSuccess, onError)

</script>

<template>
  <wj-popup
    id="auth-popup"
    :initialized="authPopup.initPopup"
    :isDraggable="true"
    :fadeIn="false"
    :fadeOut="false"
    hideTrigger="None"
    :hiding="authPopup.hiding"
    :modal="true"
  >
    <div class="w-96 h-auto p-0 login-root">
      <form @submit="userLogin" novalidate>
        <div class='w-full modal-header border-x-0 border-t-0 border-b-2 p-2 inline-flex items-center'>
          <div class='title-login'>ログイン</div>
          <!-- <div class='error-message ml-5'><p v-html="appMsg.getMessage()" /></div> -->
        </div>
        <div class='py-10 px-5'>
          <div class="inline-flex w-full mb-4">
            <label class="label-login" htmlFor="name">ユーザー名</label>
            <CommonInput
              v-bind="{
                id: 'name',
                rootClass: 'w-9/12',
                bodyClass: 'w-full',
                isRequired: true,
                isReadonly: !_.isNil(auth.currentUser.value?.ユーザ名)
              }"
            />
          </div>
          <div class="inline-flex w-full">
            <label class="label-login" htmlFor="current-password">パスワード</label>
            <CommonInput
              v-bind="{
                id: 'current-password',
                type: 'password',
                rootClass: 'w-9/12',
                bodyClass: 'w-full',
                isRequired: false,
              }"
            />
          </div>
        </div>
        <div class="modal-footer border-x-0 border-t-2 border-b-0 text-end p-2 items-center">
          <div class="mx-auto">
            <button
              type='submit'
              class='btn exec w-32'
              :disabled="auth.isLogging.value"
            >
              ログイン
            </button>
          </div>
          <div class="flex underline">
            <button
              type='button'
              class='clear-button'
              :disabled="auth.isLogging.value || _.isNil(auth.currentUser.value?.ユーザ名)"
              @click="auth.logout()"
            >
              認証情報クリア
            </button>
          </div>
        </div>
      </form>
    </div>
  </wj-popup>
</template>
<style scoped>
.debug-border {
  border: 2px solid red;
}
.login-root {
  background-color: var(--modal-bg-color);
}
.title-login {
  font-size: calc(var(--app-font-size) * var(--app-font-size-xxlg));
}
.label-login {
  font-size: calc(var(--app-font-size) * var(--app-font-size-lg));
  color: var(--app-label-color);
  width: 6.0rem;
  text-align: end;
  margin-right:0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.text-login {
  font-size: calc(var(--app-font-size) * var(--app-font-size-xlg));
}
.modal-header {
  color: var(--modal-header-color);
  background-color: var(--modal-header-bg-color);
  flex-direction: column;
}
.modal-footer {
  background-color: var(--modal-footer-bg-color);
}
.error-message {
  color: var(--app-error-text-color);
  font-size: calc(var(--app-font-size) * var(--app-font-size-xlg));
}
.clear-button {
  width: 6.0rem;
  margin-left: auto;
  &:focus {
    opacity: .6;    
  }
  &:disabled {
    display: none;
  }
  &:hover {
    opacity: .6;
  }
}
</style>