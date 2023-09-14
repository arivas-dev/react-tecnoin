import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { GOOGLE_API_URL } from './constants'
import axios from 'axios'


const sites = [
  {
    name: 'Lago de Coatepeque',
    description: 'El lago de Coatepeque es un lago de origen volcánico ubicado en el departamento de Santa Ana, en El Salvador, a unos 18 km al sur de la ciudad de Santa Ana y a 74 km al oeste de San Salvador.​',
    image: 'https://1.bp.blogspot.com/-5_YCBI12sgA/YJvktjdyKII/AAAAAAAAAAY/JfQa3Cv6s8U6u1ErwyqnYbZOk92Sh4xHACLcBGAsYHQ/w1200-h630-p-k-no-nu/Lago-de-coatepeque-013.jpg',
  },
  {
    name : 'Lago de Ilopango',
    description : 'El lago de Ilopango es un lago de origen volcánico ubicado en el departamento de San Salvador, en El Salvador, a unos 12 km al este de la ciudad de San Salvador.​',
    image : 'https://elsalvador.travel/system/wp-content/uploads/2021/04/20210130_135810-1.jpg'
  }

]


const Separator = ({ text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <p>{text}</p>
      <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    </div>
  )
}

const Recommendation = ({ name, description, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}


const Busqueda = ({search,getPlaces}) => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '170px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Descubre aqui los lugares mas increibles</h3>
        <input type='text' onChange={({ target }) => getPlaces(target.value)} value={search} />
      </div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCgDE_nmF0a0XmH2e-FsTyQGDBqoG3DMFiA&usqp=CAU' alt='Descubre con nosotros' style={{ height: '100%', objectFit: 'cover' }} placeholder='Encuentralo aqui' />
      </div>
    </div>
  )
}

function App() {

  const [search, setSearch] = useState('')
  const [recommended, setRecommended] = useState(sites)

  useEffect(() => {
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log("GOOGLE_API_KEY:", GOOGLE_API_KEY)

  }, [])



  const getPlaces = async (value) => {
    setSearch(value)

    if(value === '') return setRecommended(sites) 

    const places = sites.find(site => site.name.toLowerCase().includes(value.toLowerCase()))

    setRecommended(places ? [places] : [])

  }
  return (
    <>
      <header>
        Aqui ira el header
      </header>
      <body>
        <Busqueda search={search} getPlaces={getPlaces}/>
        <Separator text='Paquetes' />

        {
          recommended.map(({ name, description, image }) => <Recommendation name={name} description={description} image={image} />)
        }
      </body>
    </>
  );
}

export default App;




  // const getPlaces = async (value) => {
  //   setSearch(value)

  //   try {

  //     const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  //     const url = GOOGLE_API_URL(GOOGLE_API_KEY, 'Lago de coatepeque')
  //     // const response = await fetch(url, {
  //     //   mode: 'no-cors',

  //     // })

  //     const config = {
  //       method: 'get',
  //       url,
  //       mode: 'no-cors',
  //       withcredentials: false,
  //     };

  //     // add config to avoid cors error across origin
  //     config.headers = {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //     };


  //     const response = await axios(config)
  //     console.log("response:", response)
  //     // const data = await response.json()
  //     // console.log("data:", data)
  //   } catch (error) {
  //     console.log("error:", error)
  //   }
  // }