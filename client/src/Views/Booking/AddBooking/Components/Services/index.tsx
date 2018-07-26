import * as React from 'react'
import { Container, Title, Row, Text, List } from './style'
import { Checkbox } from '../../../../../Components/Checkbox'

export const Services: React.SFC<{}> = () => (
    <Container>
        <Title>Services</Title>
        <List>
            <Row>
                <Checkbox onClick={() => null} />
                <Text>Airport pickup / $10 - per person</Text>
            </Row>

            <Row>
                <Checkbox onClick={() => null} />
                <Text>Parking / 5$ - per day</Text>
            </Row>

            <Row>
                <Checkbox onClick={() => null} />
                <Text>Breakfast / $7 - per day</Text>
            </Row>

            <Row>
                <Checkbox onClick={() => null} />
                <Text>Wifi / $15</Text>
            </Row>
        </List>
    </Container>
)
