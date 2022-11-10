import './FuelCost.css';

function FuelCost() {
  return (
    <section className='fuel-cost'>
      <h2 className='section-title'>Стоимость топлива</h2>
      <table className='fuel-cost__table'>
        <thead className='fuel-cost__table-thead'>
          <tr>
            <th className='fuel-cost__table-thead-cell'>Сорт топлива</th>
            <th className='fuel-cost__table-thead-cell'>Экологический класс</th>
            <th className='fuel-cost__table-thead-cell'>Производитель</th>
            <th className='fuel-cost__table-thead-cell'>Наличный расчет</th>
            <th className='fuel-cost__table-thead-cell'>Безналичный расчет</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='fuel-cost__table-blank-row' colSpan={5}></td>
          </tr>
          <tr>
            <td className='fuel-cost__table-long-cell' rowSpan={5}>ДТ</td>
            <td className='fuel-cost__table-cell fuel-cost__table-cell_ecoclass' rowSpan={3}>ЕВРО-5</td>
            <td className='fuel-cost__table-cell'>Газпромнефть</td>
            <td className='fuel-cost__table-cell'>45.43 р.</td>
            <td className='fuel-cost__table-cell'>44.43 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Лукойл</td>
            <td className='fuel-cost__table-cell'>45.16 р.</td>
            <td className='fuel-cost__table-cell'>43.98 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Роснефть</td>
            <td className='fuel-cost__table-cell'>42.34 р.</td>
            <td className='fuel-cost__table-cell'>41.64 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell fuel-cost__table-cell_ecoclass' rowSpan={2}>ЕВРО-4</td>
            <td className='fuel-cost__table-cell'>Газпромнефть</td>
            <td className='fuel-cost__table-cell'>-</td>
            <td className='fuel-cost__table-cell'>-</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Лукойл</td>
            <td className='fuel-cost__table-cell'>41.16 р.</td>
            <td className='fuel-cost__table-cell'>40.67 р.</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className='fuel-cost__table-blank-row' colSpan={5}></td>
          </tr>
          <tr>
            <td className='fuel-cost__table-long-cell' rowSpan={8}>АИ-95</td>
            <td className='fuel-cost__table-cell fuel-cost__table-cell_ecoclass' rowSpan={3}>ЕВРО-5</td>
            <td className='fuel-cost__table-cell'>Газпромнефть</td>
            <td className='fuel-cost__table-cell'>45.43 р.</td>
            <td className='fuel-cost__table-cell'>44.43 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Лукойл</td>
            <td className='fuel-cost__table-cell'>45.16 р.</td>
            <td className='fuel-cost__table-cell'>43.98 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Роснефть</td>
            <td className='fuel-cost__table-cell'>42.34 р.</td>
            <td className='fuel-cost__table-cell'>41.64 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell fuel-cost__table-cell_ecoclass' rowSpan={2}>ЕВРО-4</td>
            <td className='fuel-cost__table-cell'>Газпромнефть</td>
            <td className='fuel-cost__table-cell'>-</td>
            <td className='fuel-cost__table-cell'>-</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Лукойл</td>
            <td className='fuel-cost__table-cell'>41.16 р.</td>
            <td className='fuel-cost__table-cell'>40.67 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell fuel-cost__table-cell_ecoclass' rowSpan={3}>ЕВРО-3</td>
            <td className='fuel-cost__table-cell'>Газпромнефть</td>
            <td className='fuel-cost__table-cell'>-</td>
            <td className='fuel-cost__table-cell'>-</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Лукойл</td>
            <td className='fuel-cost__table-cell'>45.16 р.</td>
            <td className='fuel-cost__table-cell'>43.98 р.</td>
          </tr>
          <tr>
            <td className='fuel-cost__table-cell'>Роснефть</td>
            <td className='fuel-cost__table-cell'>42.34 р.</td>
            <td className='fuel-cost__table-cell'>41.64 р.</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default FuelCost;