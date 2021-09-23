import React from 'react'
import { connect } from 'react-redux'
import TodosCreatorContainer from './TodosCreater/TodosCreatorContainer'
import Settings from './Settings/Settings'
import fetchTodos from '../../../redux/asyncActions/todoAsync'

type MyProps = {
  fetchTodos(): void
}

const TodosAll: React.FunctionComponent<MyProps> = ({ fetchTodos }) => {
  React.useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <section>
      <TodosCreatorContainer />
      <Settings />
    </section>
  )
}

const mapDispatchToProps = {
  fetchTodos,
}

export default connect(null, mapDispatchToProps)(TodosAll)
