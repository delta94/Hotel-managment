import { ResolverMap } from '../../../types/resolverMap'
import { Service } from '../../../entity/Service'

export const resolver: ResolverMap = {
    Query: {
        services: () => Service.find()
    }
}
