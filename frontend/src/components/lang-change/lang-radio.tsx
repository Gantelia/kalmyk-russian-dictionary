import { Language } from '../../const';

import cl from 'classnames';
import './lang-radio.scss';

type LangButtonProps = {
  onChange: () => void;
  children: string;
  activeLang?: Language;
};

function LangRadio({ onChange, children, activeLang }: LangButtonProps) {
  return (
    <label
      className={cl('button, radio-label', {
        'radio-label--active': activeLang
      })}
    >
      <input
        className="visually-hidden"
        type="radio"
        name="language"
        id={children === 'Русский' ? Language.RUS : Language.XAL}
        onChange={onChange}
      ></input>
      {children}
    </label>
  );
}

export default LangRadio;
