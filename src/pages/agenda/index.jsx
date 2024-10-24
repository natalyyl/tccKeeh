import './index.scss';
import Cabecalho from '../../components/cabecalho';

export default function Agenda() {
    return (

        <div className='agenda-page'>
            <div>
              <Cabecalho className="cabecalho"/>
            </div>
            <div className='botons'>
                <button>
                    Pessoal
                </button>
                <button>
                    Consultas 
                </button>
                <button>
                   Agenda completa
                </button>
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}