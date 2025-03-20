import { useSessionStorage } from "@vueuse/core"

const authenticated = () => {
    return async () => {

    }
}

const login = (currentUser: Ref<object | null>, isLogging: Ref<boolean>) => {
    return async (username: string, password: string) => {

    }
}

const logout = (currentUser: Ref<object | null>) => {
    return async () => {
    }
}

export const useAuth = () => {
    const currentUser: Ref<any> = useSessionStorage(
        'currentUser',
        () => null,
        CommonUtils.jsonSerializer
    )
    const isLogging: Ref<boolean> = useState(
        'isLogging',
        () => false
    )
    const setCurrentUser = (user: any) => {
        currentUser.value = user
    }
    const isInitializing: Ref<boolean> = ref(false)

    return {
        currentUser: readonly(currentUser),
        clearUser: () => currentUser.value = null,
        setCurrentUser: setCurrentUser,
        isLogging: readonly(isLogging),
        authenticated: authenticated(),
        login: login(currentUser, isLogging),
        // initialLoad: initialLoad(isInitializing),
        isInitializing: isInitializing,
        logout: logout(currentUser)
    }
}