interface StorageConfig {
  CART_KEY: string
}

const APP_KEY = '@coffee-delivery'

export const storageConfig: StorageConfig = {
  CART_KEY: `${APP_KEY}:cart-state-1.0.0`,
}
