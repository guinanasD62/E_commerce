import styles from "@/ui/customer/navbar/navbarC.module.css"
import Link from "next/link"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/customer",
      },
      {
        title: "Products",
        path: "/customer/products",
      },
      {
        title: "Cart",
        path: "customer/cart",
      },
      {
        title: "Login",
        path: "customer/login",
      }
  ]
}
]


const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.containerNav}>
        <div className={styles.userTitle}><Link href="/dashboard">E-commerce</Link></div>
        <ul className={styles.list}>
          <li><Link href="/customer/products" className={styles.containerCustomer}>Products</Link></li>
          <li><Link href="/customer/cart" className={styles.containerCustomer}>View Cart</Link></li>
          <li><Link href="/customer/logout" className={styles.containerCustomer}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar