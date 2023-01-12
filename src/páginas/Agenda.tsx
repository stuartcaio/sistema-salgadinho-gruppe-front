import { useEffect, useState } from "react";
import Lateral from "../componentes/Lateral";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Corpo, Imagem, Item, Título } from "../styled-components/HomeSistemaStyled";
import { Principal } from "../styled-components/homeStyled";
import { Botão, Calendário, Formulário, Input, Título as Título__Formulário } from "../styled-components/AgendaStyle";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../componentes/Modal";
import 'react-toastify/dist/ReactToastify.css';
import api from "../Api";
import moment from 'moment';

function Agenda(){
    const [datas, setDatas] = useState<any[]>([]);
    const [dataSelecionada, setDataSelecionada] = useState(new Date());
    const [modalEhVisivel, setModalEhVisivel] = useState<boolean>(false);
    const [texto, setTexto] = useState<string>();

    function info(mensagem: string){
        toast.info(`${mensagem}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'toast'
        })
    }

    function days(date: any){
        let day = date.getDate();
        let month = (date.getMonth() + 1);
        if(date.getMonth() < 10){
            month = '0' + month
        }
        if(date.getDate() < 10){
            day = '0' + day
        }
            const realDate = day + '-' + month + '-' + date.getFullYear()
        if(datas.find(val => val === realDate)){
            return 'highlites'
        }
        return null
    }

    function emiteInformacao(dataSelecionada: any){
        const existe = datas.find((data: any) => {
            return data.data.slice(0, 10) === dataSelecionada
        })

        if(existe){
            setTexto(`Pagamento de salgadinho previsto para o dia ${dataSelecionada} | Empresa: ${existe.nomeEmpresa} | Usuário: ${existe.usuário}`);
        } else{
            setTexto('Nenhum pagamento de salgadinho previsto para este dia');
        }
    }

    function consultaData(){
        api.get('datas').then(({data}) => {
            setDatas(data)
        });
    }

    useEffect(() => {
        consultaData();
    }, []);

    useEffect(() => {
        emiteInformacao(moment(dataSelecionada).format('YYYY-MM-DD'));
    }, [modalEhVisivel]);

    return(
        <>
        <Corpo>
            <Lateral />
            <Principal style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '87.5vw'}}>
                <Calendário className="w-full h-full p-10">
                    <Formulário action="http://localhost:8080/adicionar-salgadinho" method="post">
                        <Título__Formulário>Adiciona um salgadinho</Título__Formulário>
                        <Input placeholder="Insira a data do salgadinho" type={'date'} name="data" required />
                        <Input placeholder="Insira o nome da empresa" name="nome" required />
                        <Input placeholder="Insira o nome do usuário" name="nomeUsuário" required />
                        <Botão type="submit">Enviar</Botão>
                    </Formulário>

                    <Calendar className='w-96 h-full rounded-x1 bg-violet-300' onClickDay={(value) => {
                        setDataSelecionada(value);
                        setModalEhVisivel(true);
                    }}

                    tileClassName={({date}) => {
                        days(date)
                        return null;
                    }}
                    />

                    {modalEhVisivel ? (
                        <Modal texto={texto} onClose={() => {setModalEhVisivel(false)}} />
                    ) : null}
                    
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </Calendário>
            </Principal>
        </Corpo>
        </>
    )
}

export default Agenda;