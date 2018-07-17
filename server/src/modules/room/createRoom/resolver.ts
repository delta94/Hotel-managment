import { ResolverMap } from '../../../types/resolverMap'
import { Room } from '../../../entity/Room'

export const resolver: ResolverMap = {
    Mutation: {
        createRoom: async (_, { input }) => {
            await Room.create({
                ...input
            }).save()

            return true
        }
    }
}
