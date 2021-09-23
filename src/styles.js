import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      color: 'black',
      fontFamily: ['Roboto', 'sans-serif'],
      backgroundColor: '#ebebe0',
    },
  },
  container: {
    margin: [[20, 350]],
    padding: 15,
  },
  main__title: {
    opacity: 0.5,
    'font-size': '35px',
    'text-align': 'center',
  },
  create__task: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    width: '100%',
    padding: [[10, 5]],
    'margin-bottom': 5,
    'border-radius': 3,
    display: 'flex',
  },
  task__input: {
    'padding-left': 10,
  },
  task: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    'border-radius': 3,
    width: '100%',
    display: 'flex',
    padding: [[5, 5]],
    'margin-bottom': 5,
  },
  task__status: {
    width: '15%',
    height: 'auto',
  },
  task__title: {
    padding: [[0, 10]],
    width: '70%',
    'font-size': 18,
  },
  task__completed: {
    'text-decoration': 'line-through #000 !important',
    opacity: 0.4,
  },
  task__delete: {
    width: '15%',
    height: 'auto',
  },
  display__settings: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    'border-radius': 3,
    width: '100%',
    padding: [[5, 5]],
    display: 'flex',
    'justify-content': 'space-between',
  },
  task__amount: {
    'font-size': 13,
    opacity: 0.7,
    'padding-left': 5,
  },
  display__modes: {
    width: '40%',
    display: 'flex',
    'justify-content': 'space-around',
  },
});

export default useStyles;
