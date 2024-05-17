import { addOrder } from "@/lib/action";
import { fetchProducts } from "@/lib/data";
import styles from "@/ui/customer/products/productsC.module.css";
import Search from "@/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import AddCartBtn from "@/ui/customer/btn/addCartBtn";

// interface MyButtonProps {
//   addCartBtn: boolean;
// }
const CustomerProductPage = async () => {
    const products = await fetchProducts();

    return (<>
        <div className={styles.container}>
          <div className={styles.top}>
          </div>


          <div className={styles.cardGrid}>
{/*            
          {Array(6).fill(0).map((_, index) => (
          <div className={styles.card} key={index}> } */}
      
      {products.map((product) => (
    <div className={styles.card} key={product._id}>
        <div className={styles.cardImage}>
            <Image 
                src={product.img || "/noavatar.png"} 
                alt="Product Image" 
                width={80} 
                height={80} 
                className={styles.userProduct} 
            />
        </div>
        <h1>{product.title}</h1>
        <p className={styles.price}>$ {product.price}</p>
        <p>{product.desc}</p>
        
        <form action={addOrder} method="post">
            <input type="hidden" name="orderProductId" value={product.id} />
            <input type="hidden" name="orderProductprice" value={product.price} />
            <input type="hidden" name="orderProducttitle" value={product.title} />
            <input type="hidden" name="orderProductimg" value={product.img} />
            <input type="hidden" name="orderProductcolor" value={product.color} />
            <input type="hidden" name="orderProductsize" value={product.size} />
            <input type="hidden" name="orderProductstock" value={product.stock} />
            <input type="hidden" name="delivered" value="1" />
            <input type="hidden" name="quantity" value="1" />
            <input type="hidden" name="totalPrice" value={product.price} />
            <input type="hidden" name="currentStock" value={product.stock} />
            <input type="hidden" name="orderStatus" value="addToCart" />

            {/* <button type="submit"></button> */}
            <div>
              <AddCartBtn />
               </div>
        </form>
    </div>
))}

 
      </div>
        </div>
        </>
      );
    };


  export default CustomerProductPage;