import { ResolverMap } from '../../../types/resolverMap'
import { Reservation } from '../../../entity/Reservation'

export const resolver: ResolverMap = {
    Query: {
        reservations: () => Reservation.find({ relations: ['rooms'] })
    }
}
