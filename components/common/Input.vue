<script setup lang='ts'>
  import { InputMask } from '@grapecity/wijmo.input';
  import { WjInputMask } from '@grapecity/wijmo.vue2.input';
  import _ from 'lodash'
  import { useField } from 'vee-validate';

  const props = withDefaults(defineProps<{
    id: string
    type?: string
    isRequired?: boolean
    isReadonly?: boolean
    isDisabled?: boolean
    rootClass?: string
    bodyClass?: string
    mask?: string
    maxLength?: number|null
    replace?: Function
    valueChanged?: any
    gotFocus?: any
    lostFocus?: any
    unit?: any
  }>(), {
    id: '', 
    type: 'text', 
    isRequired: false,
    isReadonly: false,
    isDisabled: false,
    rootClass: '', 
    bodyClass: '',
  })
  const { value, errorMessage, meta, handleBlur, handleChange } = useField(
    props.id,
    undefined,
    {
      validateOnValueUpdate: false,
    }
  )

  const isComposition = ref(false)

  const validationListeners = {
    blur: (evt: any) => handleBlur(evt),
    change: handleChange,
    input: (evt: any) => handleChange(evt, !!errorMessage.value),
  };

  const onCompositionStart= (e: CompositionEvent) => {
    isComposition.value = true
  }
  const onCompositionEnd= (e: CompositionEvent) => {
    if (!!props.replace) {
      value.value = props.replace(value.value)
    }
    isComposition.value = false
  }

  const initialized = (sender: InputMask) => {
    // console.log(sender.hostElement.id)
    // sender.inputElement.autocomplete = sender.hostElement.id
    isComposition.value = false
    sender.hostElement.addEventListener("compositionstart", onCompositionStart)
    sender.hostElement.addEventListener("compositionend", onCompositionEnd)
  }
  const valueChanged = (sender: InputMask) => {
    // console.error(sender.rawValue)
    let newValue: any = sender.rawValue
    if (!props.mask) {
      if (!isComposition.value) {
        if (!!props.replace) {
          newValue = props.replace(sender.rawValue)
        }
      }
    }
    value.value = newValue
    sender.value = newValue
    if (props.valueChanged) props.valueChanged(sender)
  }
  const gotFocus = (sender: InputMask) => {
    if (props.gotFocus) props.gotFocus(sender)
  }
  const lostFocus = (sender: InputMask) => {
    // if (!props.mask) {
    //   if (!!props.unit) {
    //     value.value = TransUtils.convertUnit(props.unit, sender.rawValue)
    //   }
    // }
    if (props.lostFocus) props.lostFocus(sender)
  }

</script>

<template>
  <div :class="props.rootClass">
    <wj-input-mask
      class="input-normal wj-control wj-content wj-inputmask "
      :class="[
        {
          'error-style': !!errorMessage, 
          'required-style': props.isRequired, 
          'readonly-style': props.isReadonly, 
          'disabled-style': props.isDisabled,
        },
        props.bodyClass,
      ]"
      :id="props.id" 
      :type="props.type"
      :name="props.id" 
      :autocomplete="props.id"
      :isRequired="false"
      :isInvalid="!meta.valid"
      :isReadOnly="props.isReadonly"
      :isDisabled="props.isDisabled"
      :value="value"
      :valueChanged="valueChanged"
      :gotFocus="gotFocus"
      :lostFocus="lostFocus"
      @input="handleChange"
      v-on="validationListeners" 
      :initialized="initialized"
      :mask="props.mask"
      :maxLength="props.maxLength"
    />
    <div class="input-error-message" v-if="errorMessage">{{errorMessage}}</div>
  </div>
</template>

<style scoped>
</style>