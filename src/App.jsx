import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HeaderComponent } from './components/HeaderComponent.jsx'
import { FooterComponent } from './components/FooterComponent.jsx'
import ContentComponent from './components/ContentComponent.jsx'
import { MapDemo1 } from './components/MapDemo1.jsx'
import { MapDemo2 } from './components/MapDemo2.jsx'
import { MapDemo3 } from './components/MapDemo3.jsx'
import { MapDemo4 } from './components/MapDemo4.jsx'
import { MapDemo5 } from './components/MapDemo5.jsx'
import { MapDemo6 } from './components/MapDemo6.jsx'
import { MapDemo7 } from './components/MapDemo7.jsx'
import { MapDemo8 } from './components/MapDemo8.jsx'
import { NavBar } from './components/NavBar.jsx'
import { NetflixHome } from './components/NetflixHome.jsx'
import { NetflixShow } from './components/NetflixShow.jsx'
import { NetflixMovie } from './components/NetflixMovie.jsx'
import { Route, Routes } from 'react-router-dom'
import { HomeComponent } from './components/HomeComponent.jsx'
import { ErrorFound } from './components/ErrorFound.jsx'
import { Watch } from './components/Watch.jsx'
import { Teams } from './components/Teams.jsx'
import { TeamDetails } from './components/TeamDetails.jsx'
import { FunctionDemo } from './components/FunctionDemo.jsx'
import { UseStateDemo1 } from './components/UseStateDemo1.jsx'
import { UseStateDemo2 } from './components/UseStateDemo2.jsx'
import { UseStateDemo3 } from './components/UseStateDemo3.jsx'
import { Employee } from './components/Employee.jsx'
import { Input } from './components/Input.jsx'
import { FormDemo1 } from './components/Form/FormDemo1.jsx'
import { FormDemo2 } from './components/Form/FormDemo2.jsx'
import { FormDemo3 } from './components/Form/FormDemo3.jsx'
import { FormDemo4 } from './components/Form/FormDemo4.jsx'
import { FormDemo5 } from './components/Form/FormDemo5.jsx'
import { ApiDemo } from './components/ApiDemo.jsx'

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/teamdetails/:detail" element={<TeamDetails/>}/>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/netflixhome" element={<NetflixHome />} />
        <Route path="/netflixshow" element={<NetflixShow />} />
        <Route path="/netflixmovie" element={<NetflixMovie />} />
        <Route path="/watch/:name" element={<Watch/>}/>
        <Route path="/functiondemo" element={<FunctionDemo/>}/>
        <Route path="/usestatedemo1" element={<UseStateDemo1/>}/>
        <Route path="/usestatedemo2" element={<UseStateDemo2/>}/>
        <Route path="/usestatedemo3" element={<UseStateDemo3/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/formdemo1" element={<FormDemo1/>}/>
        <Route path="/formdemo2" element={<FormDemo2/>}/>
        <Route path="/formdemo3" element={<FormDemo3/>}/>
        <Route path="/formdemo4" element={<FormDemo4/>}/>
        <Route path="/formdemo5" element={<FormDemo5/>}/>
        <Route path="/apidemo" element={<ApiDemo/>}/>
        <Route path="/*" element={<ErrorFound/>}/>
      </Routes>
      <HeaderComponent></HeaderComponent>
      <ContentComponent></ContentComponent>
      <MapDemo1></MapDemo1>
      <MapDemo2></MapDemo2>
      <MapDemo3></MapDemo3>
      <MapDemo4></MapDemo4>
      <MapDemo5></MapDemo5>
      <MapDemo6></MapDemo6>
      <MapDemo7></MapDemo7>
      <MapDemo8></MapDemo8>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
