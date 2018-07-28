import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { RoomsQuery_rooms, RoomsQuery } from '../../schemaTypes'

const query = gql`
    query RoomsQuery {
        rooms {
            roomNumber
            type
            price
            people
            isAvailable
        }
    }
`

export interface WithRoomsQuery {
    rooms: RoomsQuery_rooms[]
    loading: boolean
}

export const withRooms = graphql<any, RoomsQuery, {}, WithRoomsQuery>(query, {
    props: ({ data }) => {
        let rooms: RoomsQuery_rooms[] = []
        if (data && !data.loading && data.rooms) {
            rooms = data.rooms
        }
        return {
            rooms,
            loading: data ? data.loading : false
        }
    }
})
