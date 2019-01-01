import React from 'react'

const User = ({user}) => {
  return (
    <tr >
        <td data-label="avatar">
          <img
            className="ui avatar image"
            src={user.avatar_url}
            alt={user.login}
          />
        </td>
        <td data-label="id">{user.id}</td>
        <td data-label="login">{user.login}</td>
      </tr>
  )
}

export default User
