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
  }
}

export const ContextProvider = ({children}) => {

  const [theme, setTheme] = useState(initialState.night);

  const switchTheme = () => {
    if(theme.name === 'night'){
      setTheme({...initialState.light})
    }else if(theme.name === 'light'){
      setTheme({...initialState.night})
    }

  }

  return(
    <Context.Provider value={{theme, switchTheme}}>
      {children}
    </Context.Provider>
  )
}
