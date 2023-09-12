import Textfield from './Textfield'

function Form() {
  return (
    <form className='border p-3 rounded'>
      <Textfield label='Nombre' name='name' />
      <Textfield label='Apellidos' name='lastNames' />
      <Textfield label='Email' name='email' />
      <button className='btn btn-primary'>Guardar</button>
    </form>
  )
}

export default Form
