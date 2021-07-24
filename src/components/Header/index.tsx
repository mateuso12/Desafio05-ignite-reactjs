/* eslint-disable prettier/prettier */
import Link from 'next/link'
import styles from './header.module.scss'

export default function Header(): JSX.Element {
  return (
    <>
      <Link href='/'>
        <div className={styles.header}>
          <a href='/'>
            <img src="/images/Logo.svg" alt="logo" />
          </a>
        </div>

      </Link>
    </>
  )
}
