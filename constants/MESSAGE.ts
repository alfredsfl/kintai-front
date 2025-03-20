
// validation-message
export const vMessage = {
    string: {
      req: (...args: any) => `${args[0] ?? ''}入力して下さい。${args[1] ?? ''}`,
      min: (args: any) => `${args[0]}文字以上で入力してください。`,
      max: (args: any) => `${args[0]}文字以下で入力してください。`,
      len: (args: any) => `${args[0]}文字で入力してください。`,
      byt: (args: any) => `バイト数が超えています。${args[0]} > ${args[1]}byte`,
      eml: () => `メールアドレスの書式が正しくありません。`,
      url: () => `URLが正しくありません。`,
      reg: (args: any) => `文字タイプが正しくありません。:${args[0]}`,
      oth: () => `入力内容が正しくありません。`,
      ned: (args: any) => `${args[0]}は必須入力となります。`,
    },
    number: {
      req: () => `入力して下さい。`,
      min: (args: any) => `${args[0]}文字以上！`,
      max: (args: any) => `${args[0]}文字以下！`,
      len: (args: any) => `${args[0]}文字！！！`,
    },
    datetime: {
      req: () => `入力して下さい。`,
      typ: () => `日付を入力して下さい。`,
    },
    bin: {
      req: () => `入力して下さい。`,
    },
    numberType: {
      req: () => `入力して下さい。`,
    },
    dateType: {
      req: () => `入力して下さい。`,
    },
    conversion: {
      typ: () => `正しい値を設定してください。`,
    },
    ref: {
      typ: (args: any) => `参照指定子の値 ${args[0]}が無効です。'${args[1]}' と '${args[2]}' の文字が予約されており、参照指定子が '${args[3]}' で始まり '${args[4]}' で終わっていない限り、参照指定子の一部として使用できません。`,
      len: (args: any) => `注意: 指定した参照指定子の数は制限値${args[0]}を超えています。`,
      dup: (args: any) => `注意: 参照指定子が一意ではありません。\n参照指定子の値${args[0]}はこのサブアセンブリ内で一意でなければなりません。`,
      chr: (args: any) => `注意: 以下の文字は使用不可です。\nエスケープ開始文字：${args[0]}　終了文字：${args[1]}`,
      unt: (args: any) => `参照指定子入力時は、単位は「個」を指定してください。`,
      ref: (args: any) => `REF番は「B」を除く半角英大文字1文字、または1～999を入力してください。`,
      ick: (args: any) => `${args[0]}～${args[1]}を入力してください。`,
    },
  }