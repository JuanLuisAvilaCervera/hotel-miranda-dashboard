import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Button } from '../src/components/common/Buttons'

afterEach(cleanup)
test('It has to show color #fc634c and backgroundcolor #23f538', () => {
  render(
    <div>
      <Button color={'#fc634c'} $backgroundcolor={'#23f538'}/>
    </div>
  )
  const buttonClass = Button().type.styledComponentId
  const buttonRoot = document.getElementsByClassName(buttonClass)
  const style = window.getComputedStyle(buttonRoot[0])
  expect(style.color).toBe('#fc634c')
  expect(style.$backgroundcolor).toBe('#23f538')
})