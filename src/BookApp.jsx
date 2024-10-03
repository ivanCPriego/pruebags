import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { NavBarBook } from './book/ui/NavBarBook'
import { Home } from './book/pages/Home'
import { Employees } from './book/pages/Employees.jsx'
import { CarouselBook } from './book/pages/CarouselBook'

export const BookApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarBook/> }>
            <Route index element={ <Home /> } />
            <Route path='carousel' element={ <CarouselBook /> } />
            <Route path='empleados' element={ <Employees /> } />
            <Route path='*' element={ <Navigate replace to="/"/> }/>
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  )
}

