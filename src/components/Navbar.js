import styled from 'styled-components';

const Navbar = () => {
    return (
        <nav
            style={{
                display: 'flex',
                color: '#EE2B47',
                border: '1px solid #F7FD04',
                margin: '5px',
                padding: '5px ',
                textAlign: 'center',
            }}
        >
            <h1
                style={{
                    border: '1px solid #EE2B47',
                    padding: '15px 0',
                    width: '80px',
                    fontSize: '1.3rem',
                }}
            >
                L O G O
            </h1>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    border: '1px solid #EE2B47',
                    width: '70%',
                    marginLeft: '5px',
                    fontSize: '1.5rem',
                }}
            ></ul>
            <div
                style={{
                    width: '30%',
                    border: '1px solid #EE2B47',
                }}
            >
                <div
                    style={{
                        border: '1px solid #EE2B47',
                        margin: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '5px 0',
                    }}
                >
                    <button
                        style={{
                            width: '150px',
                            height: '50px',
                            marginRight: '10px',
                        }}
                    >
                        B U T T O N 1
                    </button>
                    <button style={{ width: '150px', height: '50px' }}>
                        B U T T O N 2
                    </button>
                </div>
            </div>
            <div
                style={{
                    width: '80px',
                    border: '1px solid #EE2B47',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h3
                    style={{
                        border: '1px solid #EE2B47',
                        padding: '5px 5px',
                    }}
                >
                    N E M O
                </h3>
            </div>
        </nav>
    );
};

export default Navbar;
