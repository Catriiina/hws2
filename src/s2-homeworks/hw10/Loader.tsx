import s from './Loader.module.css';

export const Loader = () => (
    <svg className={s.loader} viewBox="0 0 50 50">
        <circle className={s.circle} cx="25" cy="25" r="20" />
    </svg>
);
