import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' }
]

const MySelect = () => (
  <Select options={options} />
)

export default MySelect