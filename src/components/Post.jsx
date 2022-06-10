import Card from './shared/Card'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import Button from './shared/Button'

const Post = () => {

    const status = 200
    const navigate = useNavigate()

    if(status === 404){
        return <Navigate to='/notfound' />
    }
    const onClick = () =>{
        console.log('Hello')
        navigate('/about')
    }

  return (
    <Card>
        <h1>This is a test post</h1>
        <button className='btn btn-primary' onClick={onClick} >Click</button>
        <Routes>
            <Route path='/show' element={<h1>Hello World</h1>} />
        </Routes>
    </Card>
  )
}

export default Post