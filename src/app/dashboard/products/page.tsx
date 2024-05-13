
import { deleteProduct } from "@/lib/action";
import { fetchProducts } from "@/lib/data";
import styles from "@/ui/dashboard/products/products.module.css";
import Search from "@/ui/dashboard/search/search";
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = async () => {
  //fetching products data directly from inside
  const products = await fetchProducts();

 // console.log(products);
  return (
    <div className={styles.container}>
     <div className={styles.top}>
       <Search placeholder= "Search for a product ..." />
       {/* //add userpage */}
       <Link href="/dashboard/products/add">
         <button className={styles.addButton}>Add New</button>
       </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>            
            <td>Description</td>
            <td>Price_$</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {products.map((product) =>(
          <tr>
            <td><div className={styles.product}>
              <Image src={product.img || "/noavatar.png"} alt="" width={40}
                    height={40}  style={{ borderRadius: '50%' }}
                    className={styles.userImage}/>
              {product.title}
              </div>
            </td>   
            <td>{product.desc}</td>
            <td>{product.price}</td>
            <td>{product.createdAt?.toString().slice(4,16)}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
              <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
              </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product.id} />    
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
}

export default ProductsPage