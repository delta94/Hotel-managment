import { Container } from 'unstated'
import * as moment from 'moment'

interface State {
    date: moment.Moment
}

export class CalendarState extends Container<State> {
    state = {
        date: moment()
    }

    incrementWeek = () =>
        this.setState(({ date }) => ({ date: date.add(1, 'week') }))

    decrementWeek = () =>
        this.setState(({ date }) => ({ date: date.add(-1, 'week') }))
}
