@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.container {
    max-width: 1500px;
    padding: 0 5%;
    margin:0 auto;
}
/* preloader */
.preloader_main{
    position: fixed;
    background: radial-gradient(circle, rgba(238,14,14,1) 0%, rgba(185,52,45,1) 35%);
    height: 100%;
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    transform: translateY(100%);
}
.preloader_main.activo{
    transform: translateY(0%);
}
.preloader_main .preloader{
    width: 140px;
    height: 140px;
}
/* end preloader */
header {
    background: rgb(238,14,14);
    background: radial-gradient(circle, rgba(238,14,14,1) 0%, rgba(185,52,45,1) 35%);
    padding: 100px 0;
    text-align: center;
    margin: 0 auto;
}

header .header_text {
    width: 60%;
    margin: 20px auto;
}

header .header_text h2 {
    font-size: 3.8rem;
    color: #F9F3EE;
}

header .header_text p {
    color: #F9F3EE;
    font-weight: 400;
    margin: 20px auto;
    max-width: 70%;
}

header .header_input {
    max-width: 500px;
    margin: 0 auto;
}

header .header_input input {
    width: 60%;
    height: 40px;
    border-radius: 7px;
    outline: none;
    border: none;
    padding: 10px;
    border: 2px solid transparent;
    font-size: 16px;
    text-transform: uppercase;
    color: rgb(83, 75, 75);
}

header .header_input input::placeholder {
    color: #2e455d;
}

header .header_input button {
    width: 30%;
    background-color: #fac507;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    font-weight: 500;
    border-radius: 7px;
    cursor: pointer;
    transition: 0.3s;
    text-transform: uppercase;
}

header .header_input button:hover {
    background-color: #ebbd16;
}

header .header_input p {
    text-align: left;
    margin-left: 30px;
    margin-top: 10px;
    font-size: 17px;
    display: none;
}
main{
    display: none;
    transform: translateX(100%);
    transition: all 0.5s;
}
main.active{
    transform: translateX(0);
}
main h1 {
    text-align: center;
    margin: 40px 0;
    font-size: 40px;
    font-weight: 700;
    color: #2e455d;
}

main .box-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

main .box {
    background: rgba(227, 197, 91, 0.616);
    background: linear-gradient(293deg, rgba(227, 197, 91, 0.76) 24%, rgba(248, 204, 46, 0.589) 54%);
    width: 500px;
    padding: 10px 16px; 
    height: 380px;
    border-radius: 5px;
}

.box .box_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.box .box_header img {
    width: 50px;
}

.box_header .texto_header h3 {
    font-size: 20px;
}

.box .content_header {
    margin-top: 15px;
}

.content_header .item {
    font-size: 18px;
    margin: 7px 0;
}

.content_header .item .item_titulo {
    font-weight: bolder;
}

footer {
    margin-top: 40px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ebbd1638;
    color: black;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}

footer .title {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 10px;
}

footer .redes-socias i {
    font-size: 27px;
    margin: 0 5px;
    color: black;
}
/* Responsivo */
@media (max-width:1100px) {
    main .box-container{
        flex-direction: column;
    }
    main .box-container .box:nth-of-type(1){
        margin-bottom: 70px;
    }
}
@media (max-width:520px) {
    main .box-container{
        padding: 20px;
    }
    main .box-container .box{
        width: 100%;
        height: 100%;
    }
}
@media (max-width:430px) {
    header .header_text h2{
        font-size: 2rem;
    }  
}
@media (max-width:500px) {
    .box_header .texto_header h3{
        font-size: 15px;
    }
}
@media (max-width:400px) {
    .box_header .texto_header h3{
        font-size: 13px;
    }
}
