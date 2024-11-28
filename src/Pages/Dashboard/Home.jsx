import React from "react";
import"./home.css";


const Home = () => {
    return(
        <div className="home-container">
           

            <section className="home-content">
            <h1 className="home-titulo">Bem-Vindo ao Mundial Rock!</h1>
            <p className="home-descricao">
            O Maior Festival de Rock de Santa Catarina

Desde 2019, o Mundial Rock tem se consolidado como o maior e mais esperado festival de rock de Santa Catarina, reunindo fãs de diversas gerações em um único lugar. Com uma programação repleta de grandes atrações, o evento já trouxe ao palco algumas das maiores bandas do cenário nacional e internacional, garantindo uma experiência inesquecível para os amantes do rock.
Ao longo de suas edições, o festival contou com apresentações de nomes icônicos como Raimundos, Barão Vermelho, Angra, Nenhum de Nós, além de tributos emocionantes a gigantes como Guns N' Roses, Kiss, Queen e The Beatles. A diversidade musical é uma marca registrada do Mundial Rock, que celebra o rock em suas mais variadas vertentes, oferecendo desde clássicos do rock até as sonoridades mais modernas e alternativas.
Com uma estrutura impecável, o evento proporciona não apenas grandes shows, mas também um ambiente de interação e celebração entre os fãs, com exposições, atividades paralelas e uma atmosfera vibrante. O Mundial Rock se tornou um ponto de encontro para aqueles que vivem e respiram o espírito do rock, sendo uma verdadeira referência na cena musical de Santa Catarina.
Seja você um fã de longa data ou alguém que está descobrindo o universo do rock, o Mundial Rock é a oportunidade perfeita para viver a energia e a emoção que só o rock pode proporcionar. Não perca a chance de fazer parte deste festival épico e celebrar a música, a paixão e a história do rock!
     
            </p>
        </section>
        

        <section className="banner">
            <div className="banner-slider">
                <img src="path/to/banner1.png" alt="Banner 1"/>
                <img src="path/to/banner4.png" alt="Banner 4"/>
                <img src="path/to/banner5.png" alt="Banner 5"/>

                
            </div>
        </section>
        </div>
    );
};

export default Home; 