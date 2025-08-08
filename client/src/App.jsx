import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Dashboard from './pages/Dashboard'
import TaskDetails from './pages/TaskDetails'
import Tasks from './pages/Tasks'
import Trash from './pages/Trash'
import Users from './pages/Users'
import Login from './pages/login'
import { Layout } from './layouts/Layout'


function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
      {/* Gérer le routage de l'app*/}
      <Routes>
        {/* Afficher le composant Layout pour toutes les routes qui se trouvent à l'intérieur de ce Route  */}
        <Route element={<Layout />}>
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* un seul composant (Tasks) pour gérer tous les types de tâches en fonction du paramètre (status) */}
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/to-do/:status' element={<Tasks />} />
          <Route path='/task/:id' element={<TaskDetails />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/team' element={<Users />} />
        </Route>
        <Route path='/log-in' element={<Login />} />
      </Routes>
      <Toaster richColors />
    </main>)
}

export default App
