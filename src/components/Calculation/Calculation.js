import { useEffect, useState } from 'react';
import './Calculation.css';
import { fuelCostPerLiter } from '../../utils/constants';
import { costWithoutDiscont } from '../../utils/constants';

function Calculation() {
  const [vollume, setVollume] = useState(1670);
  const [fuelCost, setFuelCost] = useState('');
  const [discount, setDiscount] = useState('');

  function handleInputRange(e) {
    setVollume(e.target.value);
  }

  function formatNumber (number) {
    const integer = Math.trunc(number);
    const fractional = number.toString().split('.')[1];
    return `${integer.toLocaleString()}.${fractional}`
  }

  useEffect(() => {
    const totalCost = (vollume * fuelCostPerLiter).toFixed(2);
    setFuelCost(formatNumber(totalCost));
  }, [vollume])

  useEffect(() => {
    const totalDiscount = (vollume * (costWithoutDiscont - fuelCostPerLiter)).toFixed(2);
    setDiscount(formatNumber(totalDiscount));
  }, [vollume])

  return(
    <section className='calculation'>
      <div className='calculation__container'>
        <h2 className='section-title'>Топливо с доставкой</h2>
        <form className='calculation__form'>
          <fieldset className='calculation__fieldset'>
            <label className='calculation__input-label' htmlFor='fuel-type'>Вид топлива</label>
            <select className='calculation__input' id='fuel-type'>
              <option className='calculation__option'>ДТ</option>
              <option className='calculation__option'>АИ-92</option>
              <option className='calculation__option'>АИ-95</option>
            </select>
            <label className='calculation__input-label' htmlFor='fuel-volume'>Объем топлива</label>
            <input className='calculation__input calculation__input_range-value' type='number' value={vollume} readOnly />
            <input className='calculation__input-range' id='fuel-volume' type='range' min='1' max='2000' onChange={handleInputRange} defaultValue='1670' />
            <label className='calculation__input-label' htmlFor='place-of-delivery'>Место доставки</label>
            <input className='calculation__input' id='place-of-delivery' type='text' />
            <label className='calculation__input-label' htmlFor='name'>Ваше имя</label>
            <input className='calculation__input' id='name' type='text' />
            <label className='calculation__input-label' htmlFor='phone'>Номер телефона</label>
            <input className='calculation__input' id='phone' type='tel' />
          </fieldset>
          <fieldset className='calculation__fieldset calculation__fieldset_result'>
            <h3 className='calculation__fieldset-result-title'>Итого</h3>
            <div className='calculation__result-cell'>
              <p className='calculation__result-cell-heading'>Стоимость топлива</p>
              <p className='calculation__result-cell-value'>{fuelCost} ₽</p>
            </div>
            <div className='calculation__result-cell'>
              <p className='calculation__result-cell-heading'>
                Цена за литр:
                <span className='calculation__result-cell-subheading'>Цена и стоимость указаны ориентировочно.
                Точные цену и стоимость собщит наш менеджер при подтверждении заявки.
                </span>
              </p>
              <p className='calculation__result-cell-value'>{fuelCostPerLiter.toLocaleString('ru', { minimumFractionDigits: 2 })} ₽</p>
            </div>
            <div className='calculation__result-cell'>
              <p className='calculation__result-cell-heading'>
                Выгода:
                <span className='calculation__result-cell-subheading'>При цене на АЗС  {costWithoutDiscont.toFixed(2)} ₽  за литр, цены актуальны на  23.11.2020 г.</span>
              </p>
              <p className='calculation__result-cell-value calculation__result-cell-value_benefit'>{discount} ₽</p>
            </div>
            <button type='submit' className='calculation__order-button'>Заказать топливо</button>
          </fieldset>
        </form>
      </div>
    </section>
  )
}

export default Calculation;