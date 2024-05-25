import './UserAvatar.css'

type UserAvatarProps = {
  userInitial: string
}

const UserAvatar = ({ userInitial }: UserAvatarProps) => {
  return (
    <div className='username-avatar'>
      <label>Welcome User</label>
      <div className='username-container'>{userInitial}</div>
    </div>
  )
}

export default UserAvatar
