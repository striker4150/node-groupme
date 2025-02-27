import type { Client } from '..'
import { User, BaseManager } from '..'

interface UserManagerInterface {}

export default class UserManager extends BaseManager<User, typeof User> implements UserManagerInterface {
    constructor(client: Client) {
        super(client, User)
    }
}
