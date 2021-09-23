import * as axios from 'axios'
import { setTodosAll } from '../reducers/todoReducer'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
})

const fetchTodos = () => (dispatch) => {
  instance.get().then((response: any) => dispatch(setTodosAll(response.data)))
}

export default fetchTodos
