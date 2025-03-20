import { Popup } from '@grapecity/wijmo.input';
import { CancelEventArgs } from '@grapecity/wijmo';

export const useAuthPopup = () => {

  const authPopup: Ref<Popup|null> = useState(
    'authDialog',
    () => null
  )

  const initPopup = (popup: Popup) => {
    authPopup.value = popup
    _resolve.value = {}
  }

  // 認証成功以外ではPopupを閉じない
  const hiding = (popup: Popup, e:CancelEventArgs) => {
    if (!popup.dialogResult ) {
      e.cancel = true
    }   
  }

  // 認証結果Resolve
  const _resolve: Ref<any> = useState('authResolve', () => {})

  // 認証Promise
  const confirm = () =>  {
    // z-index変更
    let pModifier = (s: any, e: any) => {
      s.hostElement.style.zIndex = 
        Number(s.hostElement.style.zIndex) + 1000;
      s.shown.removeHandler(pModifier);
    };
    authPopup.value?.shown.addHandler(pModifier);

    authPopup.value?.show()
    return new Promise<boolean>((resolve) => {
      _resolve.value = resolve
    })
  }

  // 認証成功によりPromiseの結果をTrueに設定
  const close = () => {
    authPopup.value?.hide('Logged In.')
    if (typeof _resolve.value === 'function') {
      _resolve.value(true)
    } else {
      _resolve.value = true
    }
  }
  
  return {
    authPopup: authPopup,
    initPopup: initPopup,
    hiding: hiding,
    confirm: confirm,
    close: close,
  }
}