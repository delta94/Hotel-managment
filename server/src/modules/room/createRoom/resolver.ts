import { ResolverMap } from '../../../types/resolverMap'
import { Room } from '../../../entity/Room'
import { isAuthenticated } from '../../shared/isAuthenticated'

export const resolver: ResolverMap = {
    Mutation: {
        createRoom: async (_, { input }, { userId }) => {
            isAuthenticated(userId)

            await Room.create({
                ...input
            }).save()

            return true
        }
    }
}
