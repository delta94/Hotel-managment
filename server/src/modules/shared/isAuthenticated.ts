export const isAuthenticated = (userId: number) => {
    if (!userId) {
        throw new Error('Not Authenticated')
    }
}
