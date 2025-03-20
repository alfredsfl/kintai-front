export const PATH_TITLE = {
    ROOT: { path: '/', title: '', name: 'main' },
    SYSTEM: { path: '/system', title: 'システム設定', name: 'system' },
    LOGIN: { path: '/login', title: 'Login Page', name: 'main' },
} as const

export const getWindowId = (name: string) => {
    switch (true) {
        case name === 'system':
            return 'system'
        default:
            return 'main'
    }
}