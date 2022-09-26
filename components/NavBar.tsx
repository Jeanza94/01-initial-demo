
import { ActiveLink } from "./ActiveLink"
import styles from "./NavBar.module.css"

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {
    return (
        <nav className={styles['menu-containter']}>

            {
                menuItems.map(item => (
                    < ActiveLink text={item.text} href={item.href} key={item.href} />
                ))
            }



            {/* <ActiveLink text="Home" href="/" />
            <ActiveLink text="About" href="/about" />
            <ActiveLink text="Contact" href="/contact" />
            <ActiveLink text="Pricing" href="/pricing" /> */}

        </nav>
    )
}
