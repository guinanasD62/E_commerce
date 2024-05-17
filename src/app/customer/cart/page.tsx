import React from 'react'
import styles from "@/ui/customer/products/cart/cart.module.css"
import { fetchOrders } from '@/lib/data'
import Image from 'next/image';
import { deleteOrder } from '@/lib/action';

const Cart = async () => {
   const orders = await fetchOrders();

   return (
    <div className={styles.container}>
        
        {/* <div className={styles.userItem}>
       <ul>
            <li>Diana</li>
            <li>$5</li>
        </ul> 
           <button>x</button> 
        </div>

        <div className={styles.userItem}>
        Diana  rose
           <button className='removeButton'>x</button> 
        </div>

        <div className={styles.userItem}>
        Diana  rose
           <button className='removeButton'>x</button> 
        </div> */}
          <div>
              <h2 className={styles.tableTitle}> Cart Items:</h2>
                         
              </div>
        <table className={styles.table}>
        <thead>
          <tr  className={styles.userItem}>
            <td className={styles.td}>Image</td>            
            <td className={styles.td}>Product Name</td>
            <td className={styles.td}>Color - Size</td>
            <td className={styles.td}>Price</td>
            <td className={styles.td}> <button className='removeButton'></button></td>
          </tr>
          </thead>
         <tbody>
            {orders.map((orders) => (
            <tr  className={styles.userItem}>
            <td className={styles.td}><div className={styles.product}>
               <Image src={orders.orderProductimg || "/noavatar.png"} alt="" width={40}
                     height={40}  style={{ borderRadius: '50%' }}
                     className={styles.productImage}/>
               </div></td>
               <td className={styles.td}>{orders.orderProducttitle}</td>
               <td className={styles.td}>{orders.orderProductcolor} - {orders.orderProductsize}</td>
               <td className={styles.td}>${orders.orderProductprice}</td>
               <td className={styles.td}>
               <form action={deleteOrder}>
                  <input type="hidden" name="id" value={orders.id} />    
                    <button className={styles.removeButton}>
                      x
                    </button>
                  </form>
                  </td>
               </tr>

               ))}
            </tbody>
            
        </table>
        <div>
        <p className={styles.total}> Total : </p>
              <button className={styles.checkOutBtn}> Check out </button>
              </div>
        </div>
  )
}

export default Cart