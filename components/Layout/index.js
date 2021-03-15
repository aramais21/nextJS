import style from './style.module.css';

const Layout = ({children}) => {
    return (
        <div className = {style.wrapper} >
            {children}
        </div>
    )
}

export default Layout;