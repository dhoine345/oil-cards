import React from 'react';
import InputMask from 'react-input-mask';
import './QuickOrder.css';

function QuickOrder() {
  return (
    <section className='quick-order'>
      <h2 className='quick-order__title'>Доставка топлива</h2>
      <form className='quick-order__form' name='quick-order'>
        <h2 className='quick-order__form-title'>Быстрый <span className='quick-order__form-title-span'>заказ топлива</span></h2>
        <fieldset className='quick-order__fieldset'>
          <label className='quick-order__input-label' htmlFor='name'>
            Имя
            <input className='quick-order__input' id='name' type='text' required minLength='2' maxLength='30' />
          </label>
          <label className='quick-order__input-label' htmlFor='phone'>
            Номер телефона
            <InputMask className='quick-order__input' id='phone' mask="+7 (999) 999-99-99" />
          </label>
          <button className='quick-order__submit-button' type='submit'>Заказать топливо</button>
        </fieldset>
          <label className='quick-order__checkbox-label'>
            <input className='quick-order__form-checkbox' type='checkbox'/>
            <span className='quick-order__checkbox-text'>Я согласен с условиями обработки данных</span>
          </label>
      </form>
    </section>
  )
}

export default QuickOrder;