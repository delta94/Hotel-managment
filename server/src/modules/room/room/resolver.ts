import { ResolverMap } from '../../../types/resolverMap'
import { Room } from '../../../entity/Room'

export const resolver: ResolverMap = {
    Query: {
        room: async (_, { id }) => Room.findOne({ where: { roomNumber: id } })
    }
}
