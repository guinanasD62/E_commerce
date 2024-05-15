import { fetchProducts } from "@/lib/data";
import styles from "@/ui/customer/products/productsC.module.css";
import Search from "@/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";



const CustomerProductPage = async () => {
    const products = await fetchProducts();

    return (
        <div className={styles.container}>
          <div className={styles.top}>
          <Link href="/dashboard/products/addCart">
            <button className={styles.addButton}>Visit cart</button>
          </Link>
          </div>
          <div className={styles.cardGrid}>
{/*            
          {Array(6).fill(0).map((_, index) => (
          <div className={styles.card} key={index}> } */}
        {products.map((product) =>(
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={ product.img || "/noavatar.png" }alt="Product Image" width={80} height={80} className={styles.userProduct} />
                </div>
                <h1>{product.title}</h1>
                <p className={styles.price}>$ {product.price}</p>
                <p>{product.desc}</p>
                <p><button>Add to Cart</button></p>
              </div>
          
        ))}

        </div>
        </div>
      );
    };
    

  export default CustomerProductPage;