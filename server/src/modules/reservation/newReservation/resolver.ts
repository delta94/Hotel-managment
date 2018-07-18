import { ResolverMap } from '../../../types/resolverMap'
import { Reservation } from '../../../entity/Reservation'
import { Room } from '../../../entity/Room'

export const resolver: ResolverMap = {
    Mutation: {
        newReservation: async (_, { input }) => {
            const { userId, startDate, endDate, people, rooms } = input

            const reservation = Reservation.create({
                userId,
                startDate,
                endDate,
                people
            })
            const room = await Room.findByIds(rooms)

            reservation.rooms = [...room]

            await reservation.save()

            return true
        }
    }
}
