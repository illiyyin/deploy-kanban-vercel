import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import SideMenu from '../components/SideMenu'
import '@testing-library/jest-dom'

describe('SideMenu', () => {
  test('Home menu is shown', () => {
    render(
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})