export type user = {
    username: string,
    email: string,
    password: string,
    token: string,
    bio: string,
    image: string,
}

export type userLogin = Pick<user, 'email' | 'password'>;
export type userRegister = Pick<user, 'username' | 'email' | 'password'>;
export type userPut = Partial<user>;