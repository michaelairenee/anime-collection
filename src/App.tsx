import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Collection from './pages/collection'
import Home from './pages/home'
import AnimeDetail from './pages/home/detail'
import Template from './layouts/template'
// import { Modal } from './components/modal'
import { ModalProvider } from './context/useModal'
import { CollectionProvider } from './context/useCollection'
import CollectionDetail from './pages/collection/detail'
import PageNotFound from './pages/not-found'

function App() {
  return (
    <BrowserRouter>
      <CollectionProvider>
        <ModalProvider>
          <Template>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/anime/:id" element={<AnimeDetail />} />
              <Route path="/collection/:slug" element={<CollectionDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Template>

          {/* show all modal */}
          {/* <Modal /> */}
        </ModalProvider>
      </CollectionProvider>
    </BrowserRouter>
  )
}

export default App
