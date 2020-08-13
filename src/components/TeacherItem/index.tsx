import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/57420189?s=460&u=e3dac38acb163e163bdba6621b075ffbff9ee260&v=4" alt="Junior Nascimento" />
                <div>
                    <strong>Junior Nascimento</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de desenvolvimento web e móvel.
                <br /><br />
                Apaixonado por educação e mudar a vida das pessoas através da programação.
            </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;