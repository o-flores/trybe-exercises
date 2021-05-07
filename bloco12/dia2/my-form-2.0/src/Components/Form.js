import React, { Component } from 'react';

class Form extends Component {
  render() {

    const { changeHandler, state } = this.props;

    return (
      <form>
        <fieldset>
          <legend>Dados pessoais:</legend>
          <div>Nome:
          <input
              type='name'
              name='name'
              maxLength='40'
              required
              onChange={changeHandler}
              value={state.name}
            />
          </div>

          <div>Email:
          <input
              type='email'
              name='email'
              maxLength={50}
              required
              onChange={changeHandler}
              value={state.email}
            />
          </div>

          <div>CPF:
          <input
              type='text'
              name='cpf'
              maxLength={11}
              required
              onChange={changeHandler}
              value={state.cpf}
            />
          </div>

          <div>Endereço:
          <input
              type='text'
              name='adress'
              maxLength={200}
              required
              onChange={changeHandler}
              value={state.adress}
            />
          </div>

          <div>Cidade:
          <input
              type='text'
              name='city'
              maxLength={28}
              required
              onChange={changeHandler}
              value={state.city}
            />
          </div>
        </fieldset>
      </form>
    )
  }
}

export default Form;