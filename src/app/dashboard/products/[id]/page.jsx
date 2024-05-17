// import { updateProduct } from "@/app/lib/actions";

import { updateProduct } from "@/lib/action";
import { fetchProduct } from "@/lib/data";
import styles from "@/ui/dashboard/products/singleProduct/singleProductPage.module.css";
import Image from "next/image";


const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  //console.log(product);

  // return 'test'
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.img || "/noavatar.png"} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action= {updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          {/*      
          Order ID 
          order.userid
          order.productid
          order.username
          order.username

          */}
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} /> 
          <label>Price $</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
          <option value="clothe">Clothe</option>
            <option value="phone">Phone</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
           <label>Image</label>
          <textarea
           type="text"
          name="img"
          placeholder={`Paste image source: ${product.img || ''}`}
        ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
    // <div></div>
  );
};

export default SingleProductPage;