// import { deleteUser } from "@/app/lib/actions";
// import { fetchUsers } from "@/app/lib/data";
// import Pagination from "@/app/ui/dashboard/pagination/pagination";

import { fetchUsers } from "@/lib/data"
import styles from "@/ui/dashboard/users/users.module.css"
import Search from "@/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import { deleteUser } from "@/lib/action";

const UsersPage = async () => {
 //fetching user data directlyfrom the inside
  const users = await fetchUsers();
  
//console.log(users);

  return (
    <div className={styles.container}>
     <div className={styles.top}>
       <Search placeholder= "Search for a user ..." />
       {/* //add userpage */}
       <Link href="/dashboard/users/add">
         <button className={styles.addButton}>Add New</button>
       </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {/* 1:10 */}
            <td>Name</td>            
            <td>Email</td>
            <td>Mobile</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
            <tr key={user._id}>
  
            <td><div className={styles.user}>
              <Image src={user.img || "/noavatar.png"} alt="" width={40}
                    height={30} style={{ borderRadius: '50%' }}
                    className={styles.userImage}/>
              {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.isAdmin? "Admin" : "Customer"}</td>
            <td>{user.isActive? "Active" : "Passive"}</td>
            <td>
              <div className={styles.buttons}>
              <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
              </Link>
              <form action={deleteUser}>
                <input type="hidden" name="id" value={user.id} />
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
};

export default UsersPage;