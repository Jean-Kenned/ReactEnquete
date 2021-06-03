import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src='data:image/png;base64,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'/>
        <h1>Enquete para programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail"/>
          <span className={Styles.status}></span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite seu senha"/>
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar Conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer}/>
    </div>
  )
}

export default Login
