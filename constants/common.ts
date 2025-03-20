export const APP_CODE = {
    // OK
    NonError: '000',
    // 対象データなし
    NotFindError: '100',
    // DB キー重複
    UniqueKeyError: '200',
    // DB 排他エラー
    ExclusiveError: '201',
    // アカウント 未認証
    AuthenticationError: '300',
    // アカウント 未認可
    AuthorityError: '301',
    // ログイン失敗
    LoginError: '310',
    // 二重ログイン
    DuplicateLogin: '320',
    // パラメータエラー、チェックエラー
    ParameterError: '800',
    // システムエラー
    SystemError: '900',
  };