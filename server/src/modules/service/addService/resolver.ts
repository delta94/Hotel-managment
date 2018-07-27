import { ResolverMap } from '../../../types/resolverMap'
import { Service } from '../../../entity/Service'

export const resolver: ResolverMap = {
    Mutation: {
        addService: (_, { input }) => Service.create({ ...input }).save()
    }
}
