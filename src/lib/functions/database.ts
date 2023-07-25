import { getDatabase } from '@firebase/database'
import { app } from './app'

export const db = getDatabase(app)

export { get, getDatabase, ref, set } from '@firebase/database'
