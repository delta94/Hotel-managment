import { ResolverMap } from '../../../types/resolverMap'
import { Room } from '../../../entity/Room'

export const resolver: ResolverMap = {
    Query: {
        rooms: () => Room.find({ relations: ['reservations'] })
    }
}
