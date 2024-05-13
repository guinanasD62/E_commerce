// "use client"

// import { useState } from "react"

// const Page = () => {
//     const [input, setInput] = useState("")

//   return (
//     <div>
//         <form>
//             <input type="test" onChange={e=> setInput(e.target.value)}></input>
//             <button onClick={send(input)}>Send</button>
//         </form>
//     </div>
//   )
// }

// export default Page
//aafter action


const Page = () => {

const handleForm = async (formData: { get: (arg0: string) => any; }) => {
    "use server"
    console.log(formData)
    const username = formData.get("username")
    console.log("Hello", username);
  };

  return (
    <div>
        <form action={handleForm}>
            <input type="text" name="username"></input>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Page