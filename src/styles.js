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
    display: 'block',
    'margin-right': 'auto',
    'margin-left': 'auto',
    opacity: 0.5,
    'font-size': '35px',
    'text-align': 'center',
    width: '100%',
  },
  create__task: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    width: '100%',
    padding: [[10, 20]],
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
    padding: [[5, 20]],
    'margin-bottom': 5,
  },
  task__status: {
    width: '15%',
    height: 'auto',
  },
  task__title: {
    padding: [[0, 10]],
    width: '75%',
    'font-size': 18,
  },
  task__completed: {
    'text-decoration': 'line-through #000 !important',
    opacity: 0.4,
  },
  task__delete: {
    width: '10%',
    height: 'auto',
  },
  display__settings: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    'border-radius': 3,
    width: '100%',
    padding: [[5, 20]],
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
  auth_and_reg_container: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    'border-radius': 3,
    width: '100%',
    padding: [[20, 20]],
  },
  auth__and__reg__title: {
    'text-align': 'center',
    opacity: 0.7,
  },
  auth__and_reg__input: {
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-bottom': 10,
  },
  auth__and_reg__button: {
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top': 20,
    'margin-bottom': 20,
  },
  nav: {
    display: 'flex',
    'justify-content': 'space-between',
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    'border-radius': 3,
    width: '100%',
    padding: [[10, 20]],
  },
  unauthorized__todos: {
    'background-color': 'rgb(248, 248, 248)',
    'box-shadow': '1px 6px 22px -9px rgba(0,0,0,0.89)',
    'border-radius': 3,
    width: '100%',
    padding: [[5, 20]],
  },
  unauthorized__title: {
    'font-size': 16,
    'font-weight': 600,
    'text-transform': 'uppercase',
    opacity: 0.7,
    'text-align': 'center',
    'margin-bottom': '10px',
  },
  error__text: {
    'font-size': 12,
    color: 'red',
  },
});

export default useStyles;
