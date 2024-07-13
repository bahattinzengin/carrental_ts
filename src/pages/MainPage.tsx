import { useEffect, useState } from "react"
import Hero from "../components/Hero"
import { fetchCars } from "../utils/fetchCars"
import { CarType } from "../types"
import Card from "../components/Card"
import ShowMore from "../components/ShowMore"
import { useSearchParams } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import CustomFilter from "../components/CustomFilter"
import { fuels, years } from "../constant"

const MainPage = () => {
  const [params] = useSearchParams();
  const [cars,setCars]=useState<CarType[]|null> (null)
  const [isError,setIsError]=useState<boolean>(false)
  const paramsObj = Object.fromEntries(params.entries());
  console.log(paramsObj);

useEffect(()=>{
  
  
  fetchCars(paramsObj)
  .then((data)=>setCars(data))
  .catch(() => setIsError(true));


},[params])
console.log(cars);


  return (
    <div >
<Hero/>
<div 
id="catalogue"
className="mt-12 padding-x padding-y max-width"
>
<div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
{/* filtreleme alanı */}

<div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </div>



{!cars ? (
  <div>
    <h2> Yükleniyor...</h2>
  </div>
):isError? (
  <div>
    <h2>
      Üzgünüz verileri alırken hata oluştu.
    </h2>
  </div>
): cars.length < 1 ?(
<div>
  <h2>
    Aradığınız kriterlere uygun araba bulunamadı
  </h2>
</div>
):(
  <section>
    <div  className="home__cars-wrapper">
      {cars.map((car,i)=>(
        <Card key={i} car={car} />
      ))}
    </div>

<ShowMore/>

  </section>
)
}
</div>
    </div>
  )
}

export default MainPage