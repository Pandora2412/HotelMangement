import Info from '../../components/Quanly/Info'

const ThongTin = () => {
    const leTanDB = require('../../model/quanly.json')
    return (
        <div className = "info">
            <Info info = {leTanDB[0]}></Info>
        </div>
        
    )
}

export default ThongTin