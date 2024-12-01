import './Requisites.scss';
import { useSelector } from 'react-redux';

const Requisites = ({data = {}}) => {

    const lang = useSelector(s => s.reducer.lang);
    return (
        <div className="container">
        <div className="company-detail-requisites">
            {/* 1 */}
          {data.inn_text && data.inn ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.inn_text
                  : lang === "en"
                  ? data.inn_text_en
                  : data.inn_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                { data.inn}
              </p>
            </div>
          ) : (
            ""
          )}
            {/* 2 */}
          {data.kpp_text && data.kpp ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.kpp_text
                  : lang === "en"
                  ? data.kpp_text_en
                  : data.kpp_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                { data.kpp}
              </p>
            </div>
          ) : (
            ""
          )}
        {/* 3 */}
{data.ogrn_text && data.ogrn ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.ogrn_text
                  : lang === "en"
                  ? data.ogrn_text_en
                  : data.ogrn_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.ogrn}
              </p>
            </div>
          ) : (
            ""
          )}
            {/* 4 */}
{data.legal_address_text && data.legal_address ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.legal_address_text
                  : lang === "en"
                  ? data.legal_address_text_en
                  : data.legal_address_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.legal_address}
              </p>
            </div>
          ) : (
            ""
          )}
            {/* 5 */}
{data.actual_address_text && data.actual_address ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.actual_address_text
                  : lang === "en"
                  ? data.actual_address_text_en
                  : data.actual_address_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.actual_address}
              </p>
            </div>
          ) : (
            ""
          )}
{/* 6 */}
{data.phone_text && data.phone ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.phone_text
                  : lang === "en"
                  ? data.phone_text_en
                  : data.phone_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                <a
                style={{
                    textDecoration: 'none',
                    color: '#000'
                }}
                href={`tel: ${data.phone}`}>{data.phone}</a>
              </p>
            </div>
          ) : (
            ""
          )}
        {/* 7 */}
{data.email_text && data.email ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.email_text
                  : lang === "en"
                  ? data.email_text_en
                  : data.email_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                <a style={{
                    textDecoration: 'none',
                    color: '#000'
                }} href={`mailto: ${data.email}`}>{data.email}</a>
              </p>
            </div>
          ) : (
            ""
          )}
            {/* 8 */}
{data.bank_account_text && data.bank_account ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.bank_account_text
                  : lang === "en"
                  ? data.bank_account_text_en
                  : data.bank_account_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.bank_account}
              </p>
            </div>
          ) : (
            ""
          )}
            {/* 9 */}
{data.bank_name_text && data.bank_name ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.bank_name_text
                  : lang === "en"
                  ? data.bank_name_text_en
                  : data.bank_name_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.bank_name}
              </p>
            </div>
          ) : (
            ""
          )}
            {/* 10 */}
{data.bik_text && data.bik ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.bik_text
                  : lang === "en"
                  ? data.bik_text_en
                  : data.bik_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.bik}
              </p>
            </div>
          ) : (
            ""
          )}
          {/* 11 */}

          {data.correspondent_account_text && data.correspondent_account ? (
            <div className="company-detail-requisites-item">
              <p className="company-detail-requisites-item-name">
                {lang === "ru"
                  ? data.correspondent_account_text
                  : lang === "en"
                  ? data.correspondent_account_text_en
                  : data.correspondent_account_text_ky}
                :
              </p>
              <p className="company-detail-requisites-item-value">
                {data.correspondent_account}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
}

export default Requisites;
