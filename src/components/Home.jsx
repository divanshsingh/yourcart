import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const img1 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-silver-config-202402?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1708371033112"

const img2 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000"
const img3 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-finish-select-gallery-202405-11inch-space-gray-wifi?wid=5120&hei=2880&fmt=webp&qlt=70&.v=SzlUeW5ITUpKK1FKdDdNS0xNUVhmM3hxSU9Rc1hENld5ZlZGbisxZU9hWHRiNzVnbmkvN1ZZYkRMenpIV2Q5ekNlK1pFRmg5Nk5jMkFxQWRaWlM3TXppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi82Sm1vYmRTdXVOSmZsWUgyTzhKVjNBPT0=&traceId=1"
const img4 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1540596407165"
const img5 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU2G3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693236163178"
const img6 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-202301-gallery-3?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1670630967367"
const img7 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-imac-24-202310?wid=1200&hei=1000&fmt=jpeg&qlt=90&.v=1697229623322"
const img8 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-mac-pro-202306?wid=645&hei=1000&fmt=p-jpg&qlt=95&.v=1683842370649"
const img9 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1626468075000"
const img10 = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MW4Q3_FV401_GEO_IN?wid=1420&hei=930&fmt=png-alpha&.v=1708710643474"

function Home() {

  const dispatch = useDispatch()

    const productList = [
        {
            name: "Mac Book",
            price: 999,
            imgSrc: img1,
            id: "wedcx"

        },
        {
            name: "Air Pods",
            price: 149,
            imgSrc: img2,
            id: "wedcxasda"

        },
        {
            name: "I Pad",
            price: 499,
            imgSrc: img3,
            id: "wef"

        },
        {
            name: "I Pencil",
            price: 129,
            imgSrc: img4,
            id: "gh"

        },
        {
            name: "USB-C Cable:",
            price: 19,
            imgSrc: img5,
            id: "rwf"

        },
        {
            name: "Mac Mini",
            price: 715,
            imgSrc: img6,
            id: "dfcds"

        },
        {
            name: "Mac Desktop Set",
            price: 19238,
            imgSrc: img7,
            id: "macdesk"

        },
        {
            name: "Mac Pro",
            price: 2989,
            imgSrc: img8,
            id: "macpro"

        },
        {
            name: "Mouse",
            price: 221,
            imgSrc: img9,
            id: "dfcmouseds"

        },
        {
            name: "I Watch",
            price: 233,
            imgSrc: img10,
            id: "iwacth"

        },
    ]

    const addToCardHandler = (options)=>{
      dispatch({type: "addToCart", payload: options})
      dispatch({type: "calculatePrice"})
        toast.success(`${options.name} added to cart`)
    }


  return (
    <div className='home'>
      {
        productList.map((i)=>(
            <ProductCard 
            key={i.id}
            name={i.name}
            imgSrc={i.imgSrc}
            price={i.price}
            id={i.id}
            handler={addToCardHandler}
            />
        ))
      }
    </div>
  )
}

const ProductCard = ( ({name, id, price, handler, imgSrc}) =>(
    <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={()=>handler({name, price, imgSrc, quantity: 1, id})}>Add to Cart</button>
    </div>
))

export default Home
