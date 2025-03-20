<template>
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

/* input */
.input-normal {
  border-width: 2px;
  border-radius: 0.25rem;
  color: var(--input-color);
  background-color: var(--input-bg-color);
  border-color: var(--input-bd-color);
  outline: none;
  width: 100%;
  input {
    outline: none;
  }
  &.wj-control, .wj-form-control {
    border-color: var(--input-bd-color);
    background-color: var(--input-bg-color);
  }
  &.wj-state-focused {
    border-color: var(--input-focused-bd-color);
  }
  &.required-style {
    border-color: var(--input-required-bd-color);
    background-color: var(--input-required-bg-color);
    &.wj-state-focused {
      border-color: var(--input-required-focused-bd-color);
    }
  }
  &.readonly-style {
    border-color: var(--input-readonly-bd-color);
    background-color: var(--input-readonly-bg-color) !important;
    &.wj-state-focused {
      border-color: var(--input-readonly-focused-bd-color);
    }
  }
  &.wj-state-readonly {
    border-color: var(--input-readonly-bd-color);
    background-color: var(--input-readonly-bg-color) !important;
    &.wj-state-focused {
      border-color: var(--input-readonly-focused-bd-color);
    }
  }
  &.disabled-style {
    color: var(--input-disabled-color);
    border-color: var(--input-disabled-bd-color);
    background-color: var(--input-disabled-bg-color) !important;
    opacity: .5;
    &.wj-state-focused {
      border-color: var(--input-disabled-focused-bd-color);
    }
  }
  &.wj-state-disabled {
    color: var(--input-disabled-color);
    border-color: var(--input-disabled-bd-color);
    background-color: var(--input-disabled-bg-color) !important;
    opacity: .5;
    &.wj-state-focused {
      border-color: var(--input-disabled-focused-bd-color);
    }
  }
  &.error-style {
    border-color: var(--input-error-bd-color);
    background-color: var(--input-error-bg-color) !important;
    &.wj-state-focused {
      border-color: var(--input-error-focused-bd-color);
    }
  }
}
.input-error-message {
  color: var(--app-error-text-color);
  font-size: calc(var(--app-font-size) * var(--app-font-size-sm));
  line-height: 1.0rem;
}
/* button */
.btn {
  color: var(--btn-color);
  background-color: var(--btn-nostyle-bg-color);
  padding-top: 0.5rem;
  padding-right: 1.0rem;
  padding-bottom: 0.5rem;
  padding-left: 1.0rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  opacity: 1;
  &:focus {
    border-width: 0px;
    outline-style: solid;
    outline-width: 0.2rem;
    outline-color: var(--btn-nostyle-focus-color);
  }
  &.normal {
    background-color: var(--btn-nostyle-bg-color);
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-nostyle-focus-color);
    }
  }
  &.exec {
    background-color: var(--btn-exec-bg-color);
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-exec-focus-color);
    }
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-exec-focus-color);
    }
  }
  &.cancel {
    background-color: var(--btn-cancel-bg-color);
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-cancel-focus-color);
    }
  }
  &.info {
    background-color: var(--btn-info-bg-color);
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-info-focus-color);
    }
  }
  &:disabled {
    background-color: var(--btn-disabled-bg-color);
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-disabled-focus-color);
    }
  }
  &:hover {
    opacity: .6;
  }
  &.sm {
    font-size: calc(var(--app-font-size) * .9);
    padding-top: 0.25rem;
    padding-right: .75rem;
    padding-bottom: 0.25rem;
    padding-left: .75rem;
    
  }
  &.xs {
    font-size: calc(var(--app-font-size) * .7);
    padding-top: 0.15rem;
    padding-right: .35rem;
    padding-bottom: 0.15rem;
    padding-left: .35rem;
  }
  &.text-size {
    font-size: calc(var(--app-font-size) * .9);
    padding-top: 0.15rem;
    padding-right: .35rem;
    padding-bottom: 0.15rem;
    padding-left: .35rem;
    height: 28px;
  }
  &.close {
    color: var(--btn-close-color);
    background-color: var(--btn-close-bg-color);
    padding-top: .2rem;
    padding-right: .5rem;
    padding-bottom: .2rem;
    padding-left: .5rem;
    &.xs {
      font-size: calc(var(--app-font-size) * .7);
      padding-top: 0.15rem;
      padding-right: .35rem;
      padding-bottom: 0.15rem;
      padding-left: .35rem;
    }
    &:focus {
      border-width: 0px;
      outline-style: solid;
      outline-width: 0.2rem;
      outline-color: var(--btn-close-focus-color);
    }
  }
}
/* Context */
.context-menu-style {
  background-color: var(--modal-bg-color) !important;
}
/* Menu-DropDown */
.menu-dropdown {
  color: var(--menu-dropdown-color) !important;
  background-color: var(--menu-dropdown-bg-color) !important;
}
/* image */
.context-image {
  width: var(--app-font-size);
  height: var(--app-font-size);
  margin-right: 0.25rem;
}
/* label */
.label-form {
  font-size: calc(var(--app-font-size) * 1.0);
  color: var(--app-normal-label-color);
}
/* checkbox radio */
input[type=checkbox], input[type=radio] {
  accent-color: var(--checkbox-color);
  scale: 1.5;
  margin-left: 0.25rem;
  /* &:disabled {
    opacity: .5;
  } */
  &:focus {
    scale: 1.6;
    outline-offset: 1px;
    outline-style: dashed;
    outline-width: 1px;
    outline-color: var(--input-focused-bd-color);
    border-width: 0px;
  }
}
/* Wijmo */
/* 全般 */
.wj-control {
  background-color: inherit;
  &.wj-dropdown-panel {
    background-color: white;
  }
}
.wj-form-control {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  padding-left: 4px !important;
  padding-right: 4px !important;
}
.wj-tabheaders {
  overflow-y: auto;
  white-space: nowrap;
  .wj-tabheader {
    text-transform: none !important;
  }
}
/* icon */
.wj-glyph-calendar,
.wj-glyph-clock {
  color: var(--icon-color) !important;
  font-size: large !important;
}
/* flex-grid */
.wj-cells .wj-frozen {
  background: var(--grid-frozen-bg-color)
}
.wj-cells .wj-cell.wj-state-selected {
  background: var(--grid-select-bg-color) !important;
  color: var(--grid-select-color) !important;
}
.wj-cells .wj-cell.wj-state-multi-selected {
  background: var(--grid-multiselect-bg-color) !important;
  color: var(--grid-multiselect-color) !important;
}
.wj-cells input[type=checkbox] {
  display: none;
}
.wj-cells input[type=checkbox]:disabled + span {
  opacity: .5;
}
.wj-cells input[type=checkbox]:not(:checked) + span {
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 20px;
  position: relative;
  width: auto;
  &::before {
    position: absolute;
    top: 50%;
    left: 8px;
    display: block;
    margin-top: -9px;
    width: calc(var(--app-font-size) * 1.5);
    height: calc(var(--app-font-size) * 1.5);
    content: '';
    /* background: var(--checkbox-color); */
    border-radius: 3px;
  }
  &::after {
    border-top: 2px solid var(--app-normal-label-color);
    border-left: 2px solid var(--app-normal-label-color);
    border-right: 2px solid var(--app-normal-label-color);
    border-bottom: 2px solid var(--app-normal-label-color);
    content: '';
    display: block;
    width: calc(var(--app-font-size) * 1.3) !important;
    height: calc(var(--app-font-size) * 1.3) !important;
    left: 8px;
    margin-top: -7px;
    position: absolute;
    top: 50%;
    /* transform: rotate(45deg); */
    width: 5px;
  }
}
.wj-cells input[type=checkbox]:checked + span {
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 20px;
  position: relative;
  width: auto;
  &::before {
    position: absolute;
    top: 50%;
    left: 8px;
    display: block;
    margin-top: -9px;
    width: calc(var(--app-font-size) * 1.5);
    height: calc(var(--app-font-size) * 1.5);
    content: '';
    background: var(--checkbox-color);
    border-radius: 3px;
  }
  &::after {
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    content: '';
    display: block;
    height: var(--app-font-size);
    left: 14px;
    margin-top: -7px;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 5px;
  }
}
/* treeView */
.wj-treeview .wj-node{
  display: flex;
  align-items: center;
  height: calc(var(--font-size) * 3.0) !important;
  &.wj-state-selected {
    color: var(--tree-select-color) !important;
    background-color: var(--tree-select-bg-color) !important;
  }
  overflow: auto;
}

/* accordion tree styles */
/* hide collapse/expand glyphs */
.accordion.wj-treeview .wj-nodelist .wj-node:before {
    display: none;
}
/* level 0 nodes (headers) */
.accordion.wj-treeview .wj-nodelist>.wj-node {
    font-size: calc(var(--font-size) * 1.2);
    font-weight: bold;
    height: calc(var(--font-size) * 3.0) !important;
    padding: 6px 10px;
    color: white;
    background: #106cc8;
    margin-bottom: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
/* level 1 nodes (navigation items) */
.accordion.wj-treeview .wj-nodelist>.wj-nodelist>.wj-node {
    font-size: calc(var(--font-size) * 1.2);
    height: calc(var(--font-size) * 3.0) !important;
    font-weight: normal;
    padding: 0.25rem 1em;
    color: inherit;
    background: inherit;
    box-shadow: none;
}
.accordion.wj-treeview .wj-nodelist {
    padding-bottom: 6px;
}
.wj-flexgrid {
  .cell-added {
    background-color: var(--grid-new-cell-bg-color);
  }  
  .wj-cell.error-row {
    background-color: var(--input-error-bg-color);
  }
  /* .cell-changed {
    background-color: #d5edd5;
  } */
  /* .cell-readonly:not(.wj-header):not(.wj-state-selected) {
    color: $text-color !important;
    background-color: #e9ecef;
  }
  .cell-gray:not(.wj-header):not(.wj-state-selected) {
    color: $text-color !important;
    background-color: #e9ecef;
  }
  .cell-minus:not(.wj-header) {
    color: red !important;
  } */
}
/* sheet context-menu */
.wj-flexsheet-context-menu {
  background-color: #fff !important;
}
/* ListBox */
div:not(.context-menu-style).wj-listbox .wj-listbox-item:not(.wj-separator) {
  min-height: 25px;
  padding: 4px 6px 3px 6px;
}
.modal-footer {
  border-top-style: outset;
  padding-top: .5rem;
}

/* sweet-alert */
div:where(.swal2-container) {
  z-index: 2060 !important;
}
.swal2-popup.swal2-toast .swal2-html-container {
  font-size: calc(var(--app-font-size) * var(--app-font-size-xlg)) !important;
}
.ok-button {
  color: var(--ok-button-color) !important;
  background-color: var(--ok-button-bg-color) !important;
}
.cancel-button {
  color: var(--cancel-button-color) !important;
  background-color: var(--cancel-button-bg-color) !important;
}
.swal2-icon {
  /* height: 2.5rem;
  width: 2.5rem; */
  margin-top: 1.5rem;
  margin-bottom: .5rem;
  transform: scale(.8);
}
/* .swal2-icon-content {
  font-size: 1.75em !important;
} */
.swal2-html-container {
  max-height: 12rem;
  font-size: 1.0rem !important;
}
.swal2-html-container > div {
  max-height: inherit;
  overflow: auto;
}
/* ellipsis/word-wrap */

.text-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: normal;
}
.text-word-wrap {
  text-overflow: clip;
  white-space: normal;
  overflow: hidden;
  word-wrap: break-word;
}

.wj-dropdown-panel > .wj-multiselectlistbox {
  max-height: 400px;
  min-width: 300px;
  font-size: 120%;
}
</style>
