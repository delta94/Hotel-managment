import * as React from 'react'
// import * as lodash from 'lodash'

import { Input } from 'src/Components/Input'
import { InputWrapper, UserList, UserAvatar, User, UserEmail } from './style'

interface State {
    email: string
}

export class ModalUser extends React.Component<{}, State> {
    state = {
        email: ''
    }

    changeEmail = (email: string) => this.setState({ email })

    render() {
        return (
            <>
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="Search for user..."
                        onChange={text => this.changeEmail(text)}
                    />
                </InputWrapper>

                <UserList>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => (
                        <User key={i}>
                            <UserAvatar />
                            <UserEmail>marcin@miler.com</UserEmail>
                        </User>
                    ))}
                </UserList>
            </>
        )
    }
}
