import React, { ReactNode } from 'react'
import Header from './Header'

interface LayoutProps {
  children?: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-14">{children}</main>
    </>
  )
}

export default Layout
