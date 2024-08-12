import React from 'react'

interface UserProfileProps {
  params: {
    id: string
  }
}

const UserProfile: React.FC<UserProfileProps> = ({params}) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-5xl font-extrabold text-gray-400 mb-12'>
        Profile
      </h1>
      <hr />
      <p className='text-4xl '>
        This is the profile page {params.id}
      </p>
    </div>
  )
}

export default UserProfile
