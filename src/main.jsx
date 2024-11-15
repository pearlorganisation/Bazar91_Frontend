import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import   store  from './features/store.js'// import { PersistGate } from 'redux-persist/integration/react'
import { PersistGate } from 'redux-persist/lib/integration/react.js'
import { persistStore } from 'redux-persist'

let persistance = persistStore(store);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>            
      <PersistGate loading={null} persistor = {persistance}>
      <App />    

      </PersistGate>
    </Provider> 

  </StrictMode>,
)
