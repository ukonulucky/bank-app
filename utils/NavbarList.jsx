import Image from "next/image"
import Link from "next/link"

 const list  = [
    {
        id:1,
        item:"Homepage",
        
    },
    {
        id:2,
        item:"Products"
    },
    {
        id:3,
        item:"Menu"
    },
    {
        id:4,
        item:""
    },
    {
        id:5,
        item:"Events"
    },
    {
        id:6,
        item:"Blog"
    },
    {
        id:7,
        item:"Contact"
    }
]

 function NavbarList(){
    const navElement = list.map(i => {
      if(i.id === 1){
        console.log("this is i.d")
      return <li key={i.id} className="text-white font-semibold cursor-pointer capitalize">
            <Link href="/">
            {i.item}
            </Link>
        </li>
       
      }

        if(i.id === 4){
      return <li key={i.id}  className="flex items-center justify-center bg-blue-400 h-full">
        <Image
         src="/food.jpg"  
         width="50px" 
         height="40px"
         
      />
      </li>
        }
        return <li key={i.id} className="text-white font-semibold capitalize">
           
            {i.item}
        </li>
    })

    return <ul className="flex  items-center justify-between">
        {navElement}
    </ul>
}

export default NavbarList