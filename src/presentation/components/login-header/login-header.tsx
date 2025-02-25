import React, { memo } from 'react'
import { Logo } from '@/presentation/components'
import Styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo/>
      <h1>Enquete para programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
