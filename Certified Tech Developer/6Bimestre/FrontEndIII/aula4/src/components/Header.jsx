import React from 'react'

const Header = () => {
    return(
        <header style={{width: '100vw', height:'63px', backgroundColor:'#ed1b2e', display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
            <div style={{width: '43px', height: '43px', backgroundColor: '#fff', borderRadius: '100%', marginLeft: '10px'}}></div>
            <ul style={{display:'flex', listStyle:'none', gap: '20px', marginRight: '10px', color: "#fff"}}>
                <li><a>Home</a></li>
                <li><a>Contato</a></li>
                <li><a>Quem somos</a></li>
            </ul>
        </header>
    )
}

export default Header