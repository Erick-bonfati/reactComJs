
import './Rodape.css';

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape