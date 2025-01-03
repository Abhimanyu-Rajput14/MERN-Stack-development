import React from 'react'
import Student from './Student'

const Main = () => {
  return (
    <div><h2>This is Main</h2>
      <Student Name="Abhimanyu" Class="Warrior"></Student>
      <Student Name="Rahul" Class="Joker"></Student>
      <Student Name="Tanveer" Class="Rakshas"></Student>
      <Student Name="Shadmaan" Class="Majnu"></Student>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, repudiandae!</p>
    </div>
  )
}

export default Main