import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'
import { NotFound } from './pages/404'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { Success } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
