import type { SweetAlertOptions } from "sweetalert2"
import Swal from "sweetalert2"
import { PATH_TITLE } from "~/constants/PATH_TITLE"

export const CommonUtils = {
  jsonSerializer: {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    },
  },
  activateWindow: (subName: string) => {
    if (subName) {
      const isWindowOpen = CommonUtils.isWindowOpen(subName)
      if (isWindowOpen.win) {
        if (isWindowOpen.isOpen) isWindowOpen.win?.focus()
        else isWindowOpen.win.close()
      }
    }
  },
  openWindow: (path: string, name?: string, opts?: string) => {
    // const _opts = opts ?? 'popup=1'
    const _opts = opts ?? ''
    const _name = name ?? '_blank'
    return window.open(path, _name, _opts);
  },

  isWindowOpen: (name: string, opts?: string) => {
    const isMain = window.name === PATH_TITLE.ROOT.name
    const _opts = opts ?? isMain?'width=100, height=100, popup=1':''
    const win = CommonUtils.openWindow('', name, _opts)
    return {
      win: win,
      isOpen: win?.location.pathname !== 'blank'
    }
  },

  showMessage: ({
    toast,
    position,
    timer,
    timerProgressBar,
    title,
    html,
    icon,
    iconColor,
    showConfirmButton,
    confirmButtonText,
    showDenyButton,
    denyButtonText,
    showCancelButton,
    cancelButtonText,
    focusCancel,
    width,
    heightAuto
  }: SweetAlertOptions) => {
    return Swal.fire({
      // toast
      toast: toast ?? false,
      position: position ?? 'center',
      timer: timer,
      timerProgressBar: timerProgressBar ?? true,
      // title
      title: title ?? '',
      // text
      html: html,
      // icon
      icon: icon,
      iconColor: iconColor,
      // button
      showConfirmButton: showConfirmButton ?? true,
      confirmButtonText: confirmButtonText ?? 'OK',
      showDenyButton: showDenyButton ?? false,
      denyButtonText: denyButtonText ?? 'DENY',
      showCancelButton: showCancelButton ?? true,
      cancelButtonText: cancelButtonText ?? 'CANCEL',
      // showCloseButton: false,
      customClass: {
        confirmButton: 'ok-button',
        cancelButton: 'cancel-button',
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      focusConfirm: !focusCancel,
      focusCancel: focusCancel,
      width: width,
      heightAuto: heightAuto ?? false,
    })
  },
}