type Resolver = (
    parent: any,
    args: any,
    context: { userId: number },
    info: any
) => any

export interface ResolverMap {
    [key: string]: {
        [key: string]: Resolver
    }
}
