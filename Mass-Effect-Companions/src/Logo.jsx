import massEffectLogo from './assets/Mass_Effect_logo.png'
import './Logo.css'
function Logo () {
    return (
        <>
            <img
            src = {massEffectLogo}
            alt = "Mass Effect Logo"
            />
            <h1> Companions </h1>
        </>
    )
}

export default Logo;