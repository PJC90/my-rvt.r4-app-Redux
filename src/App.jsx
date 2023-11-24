
import './App.css'
import CardForm from './Components/CardForm'
import Card from './Components/Card'
import Example from './Components/Example'
import { useSelector } from 'react-redux'


function App() {
 const cities = useSelector((state)=>state.cities.value)
 //useSelector mi prende il value(in citiesSlice hai dichiarato il suo value iniziale) dello stato di cities(cities in store) 
  return (
    <>
    <Example/>
    <CardForm ></CardForm>
    
    <div className='grid grid-cols-5 gap-10'>
      {cities && cities.map((city)=>(
         <Card
         key={city.id}
         title={city.title}
         imgURL={city.imgUrl}
         isVisited={city.isVisited}
        description={city.description}
         >
         </Card>
      ))}
      </div>
    </>
  )
}

export default App