import {Context} from './Conext'
import {useState} from 'react'

const initialState = {
  night : {
    name : "night",
    background : '#212e37',
    color : "#fff"
  },
  light : {
    name: 'light',  
    background : '#dedede',
    color : '212e37'
  },
  finded : {}
}

export const ContextProvider = ({children}) => {

  const [theme, setState] = useState(initialState.night);
  const [flagFinded, setFlagFinded] = useState({})

  const switchTheme = () => {
    if(theme.name === 'night'){
      setState({...initialState.light})
    }else if(theme.name === 'light'){
      setState({...initialState.night})
    }
  }


  const addFlagFinded = (flag)  => {

    setFlagFinded(flag)

  }




  return(
    <Context.Provider value={{theme, switchTheme, flagFinded, addFlagFinded}}>
      {children}
    </Context.Provider>
  )
}
