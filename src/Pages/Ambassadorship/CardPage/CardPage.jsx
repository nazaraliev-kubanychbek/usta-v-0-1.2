import './CardPage.scss';
import React from "react";
import CardImage1 from "./CardImages/CardImage1.png";
import CardImage2 from "./CardImages/CardImage2.png";
import CardImage3 from "./CardImages/CardImage3.png";
import CardImage4 from "./CardImages/CardImage4.png";
import CardImage5 from "./CardImages/CardImage5.png";
import CardImage6 from "./CardImages/CardImage6.png";
import CardImage7 from "./CardImages/CardImage7.png";







function CardPage() {
    return(
        <div className="cardpage">
            <div className="main-screen">
                <div className='main-screen-text'>
                    <h1 className='main-screen-title'>
                        ООО “ТухноИнновация”
                    </h1>
                    <h2 className='main-screen-description'>
                        USTA INTERNATIONAL продвигает продукты и инновации компаний партнеров, объясняя их преимущества на профессиональных мероприятиях и проектах
                    </h2>
                </div>
            </div>

            <div className="company-info">
                <table>
                    <tbody>
                        <tr>
                            <td>ИНН:</td>
                            <td>1234567890</td>
                        </tr>
                        <tr>
                            <td>КПП:</td>
                            <td>123456789</td>
                        </tr>
                        <tr>
                            <td>ОГРН:</td>
                            <td>1234567890123</td>
                        </tr>
                        <tr>
                            <td>Юридический адрес:</td>
                            <td>г. Москва, ул. Примерная, д. 1, офис 10</td>
                        </tr>
                        <tr>
                            <td>Фактический адрес:</td>
                            <td>г. Москва, ул. Примерная, д. 2, офис 20</td>
                        </tr>
                        <tr>
                            <td>Телефон:</td>
                            <td>+7 (495) 123-45-67</td>
                        </tr>
                        <tr>
                            <td>Электронная почта:</td>
                            <td>info@company.ru</td>
                        </tr>
                        <tr>
                            <td>Расчетный счет:</td>
                            <td>12345678901234567890</td>
                        </tr>
                        <tr>
                            <td>Банк:</td>
                            <td>ПАО "ПримерБанк"</td>
                        </tr>
                        <tr>
                            <td>БИК:</td>
                            <td>123456789</td>
                        </tr>
                        <tr>
                            <td>Корр. счет:</td>
                            <td>30101810000000000000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Фото блоки */}
       
<div className="images-cardpage">
  <div className="image-item">
    <img src={CardImage1} alt="CardImage1" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  <div className="image-item">
    <img src={CardImage2} alt="CardImage2" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  <div className="image-item">
    <img src={CardImage3} alt="CardImage3" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  <div className="image-item">
    <img src={CardImage4} alt="CardImage4" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  <div className="image-item">
    <img src={CardImage5} alt="CardImage5" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  <div className="image-item">
    <img src={CardImage6} alt="CardImage6" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  <div className="image-item">
    <img src={CardImage7} alt="CardImage7" />
    <div className="image-content">
      <h1 className='images-cardpage-title'>ООО "ТехноИнновация"</h1>
      <h2 className='images-cardpage-description'>
        г. Санкт-Петербург, ул. Прогресса, д. 25, офис 12
      </h2>
      <h2 className='images-cardpage-description'>
        ИНН: 1234567890
      </h2>
      <h2 className='images-cardpage-description'>
        КПП: 123456789
      </h2>
    </div>
  </div>
  {/* Добавьте другие блоки с изображениями по аналогии */}
</div>





        </div>
    );
}

export default CardPage;
