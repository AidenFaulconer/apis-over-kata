export interface StoreActions {
    setAppContext: <T>(newState: T) => void,
    setLight: <T>(newState: T) => void,
    toggleTheme: <T>(newState: T) => void,
    setTheme: <T>(newState: T) => void,
    setGuest: <T>(newState: T) => void,
    setActors: <T>(newState: T[]) => void,
    setOnline: <T>(newState: T) => void,
    setMessages: <T>(newState: T) => void,
    getAuthToken: <T>(newState: T) => void,
    changeFormData: (source: string, input: any) => void,
}

export interface AppStore extends Record<string,any> {
  actions: StoreActions
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLargeDesktop: boolean
  width: string
  height: string
  light: Light
  theme: Theme
  users: Users
  messaging: Messaging
  auth: Auth
  [Symbol.iterator](): Iterator<AppStore>
}

export interface Light {
  brightness: number
  x: number
  y: number
  z: number
}

export interface Theme {
  element: string
  core: string
  mode: string
}

export interface Users {
  guest: Guest
  newGuestInput: NewGuestInput
  actors: any[]
  newActorInput: NewActorInput
} 

export interface Guest {
  id: any
  name: string
  email: string
  avatar: string
  isLoading: boolean
  isLoggedIn: boolean
  isLoggedOut: boolean
}

export interface NewGuestInput {
  id: any
  name: string
  email: string
  avatar: string
}

export interface NewActorInput {
  loading: boolean
  error: boolean
  id: any
  firstname: string
  middlename: string
  lastname: string
  films: Film[]
  roles: Role[]
}

export interface Film {
  id: any
  title: string
  updated_at: any
}

export interface Role {
  id: any
  title: string
  updated_at: any
}

export interface Messaging {
  isLoading: boolean
  online: Online
  messages: Message[]
  newMessageInput: NewMessageInput
}

export interface Online {
  loading: boolean
  error: boolean
  who: Who[]
}

export interface Who {
  id: any
  name: string
  avatar: any
}

export interface Message {
  body: string
  user: User
  timestamp: string
}

export interface User {
  avatar: string
  name: string
}

export interface NewMessageInput {
  body: string
  user: User2
  timestamp: string
}

export interface User2 {
  avatar: string
  name: string
}

export interface Auth {
  isLoading: boolean
  isLoggedIn: boolean
  isLoggedOut: boolean
  isLoggedInAdmin: boolean
  token: any
  user: any
  error: any
}
