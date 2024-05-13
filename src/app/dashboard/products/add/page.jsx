
import { addProduct } from "@/lib/action"
import styles from "@/ui/dashboard/products/addProduct/addProduct.module.css"

const AddProductPage = () => {
  return (
    <div className={styles.container}>
 
      <form  action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        {/* pushing name to db */}
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="clothe">Clothe</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        {/* <input type="number" placeholder="price name="price required*/}
        <input type="number" placeholder="price $" name="price" required />
        <input type="number" placeholder="stock" name="stock" required />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <textarea
          name="img"
          id="img"
          placeholder="Product's image link address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;