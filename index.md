<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>complete responsive app landing page website design tutorial</title>

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <!-- custom css file link  -->
<style>
#skip-to-content, .page-header, #content{
display: none;
}
</style>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

:root{
    --purple:#814096;
    --pink:#F83292;
    --gradient:linear-gradient(90deg, var(--purple), var(--pink));
}

*{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none; border:none;
    text-transform: capitalize;
}

*::selection{
    background:var(--pink);
    color:#fff;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

body{
    background:#f9f9f9;
}

section{
    min-height: 100vh;
    padding:0 9%;
    padding-top: 7.5rem;
    padding-bottom: 2rem;
}

.btn{
    display: inline-block;
    margin-top: 1rem;
    padding:.8rem 3rem;
    border-radius: 5rem;
    background:var(--gradient);
    font-size: 1.7rem;
    color:#fff;
    cursor: pointer;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    transition: all .3s linear;
}

.btn:hover{
    transform: scale(1.1);
}

.heading{
    text-align: center;
    background:var(--gradient);
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 3.5rem;
    text-transform: uppercase;
    padding:1rem;
}

header{
    position: fixed;
    top:0; left:0;
    width:100%;
    background:#fff;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    padding:2rem 9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
}

header .logo{
    font-size: 2rem;
    color:var(--purple);
}

header .logo span{
    color:var(--pink);
}

header .navbar a{
    font-size: 1.7rem;
    margin-left: 2rem;
    color:var(--purple);
}

header .navbar a:hover{
    color:var(--pink);
}

header input{
    display: none;
}

header label{
    font-size: 3rem;
    color:var(--purple);
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
}

.home{
    display: flex;
    align-items: center;
    justify-content: center;
    background:url(https://lh3.googleusercontent.com/fife/AAWUweUG7FNwj-cdJQEazmR1drzmzAe2S0iak7zpRYlzEzvwo7Q2gHOxL50j4u3kZsYiSGVipN0xI87RGKxznlraYZZ_UYTXyUUThLvFyBNyzb2Nc47vO-x-vtAeKc8Gqj82yyZmZ7sScuqZHIFqaMq4RUgfPwl71bc0L8GxN4L0DAMIlsLlK1unneYnwxpvPwqxA0s-5r4rTiOke2RT_Ki2EGB_Y8CJaqD5UWOH6GdEaNfeYItje1bUXWKhLVMrYfkocFEMn4jspwqcjN21REraMxVU6Uy_aCxMgdLMYQY4ot4d3lZupsAnKNu37IonJkSrM_JwqNkhGIAgWXTDrq9R2CX8FvlTIsKZoyO2SbswEtdO-ONWZhJu9CYucqheaPaaaORnWQNQPjf7stdxQ8J1KY35oJlu3fEQMQ586UFOPVP6LkFjs9ScHfkN4joPZvRrJ0Y5eCV3jzh3LfzKYcWmbaCvodAALS-8NZZQ5haSvfd8g2IVcfrMF-NDnDZtRB_dG3WDGW53Ql4Vm4pFdBEdxf_8UB8HkE5VXpNAoR8t_acOtLA-glIAjHpB5Rvfxzri2qb9sHxKBKluQs9r5LRhTaf2DdysGnbzftI6DHY1-f9hXywq7QFDOTgFrHKKb85SEs10WA9Lg3x8xdO0neaZMb4jQZNcRnRgn3_9b_FZkD1gWt1SEEYnYXRaJqphItlXfNr2HJHU1DoWCooyx2Wt8GyFTG0nHleMWg=w348-h260-p-k-nu-ft) no-repeat;
    background-size: cover;
    background-position: center;
}

.home .image img{
    width:40vw;
    animation: float 3s linear infinite;
}

@keyframes float{
    0%, 100%{
        transform: translateY(0rem);
    }
    50%{
        transform: translateY(-3.5rem);
    }
}

.home .content h3{
    font-size: 5.5rem;
    color:#333;
    text-transform: uppercase;
}

.home .content h3 span{
    color:var(--pink);
    text-transform: uppercase;
}

.home .content p{
    font-size: 1.7rem;
    color:#666;
    padding:1rem 0;
}

.features .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.features .box-container .box{
    flex:1 1 30rem;
    background:#fff;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    margin:1.5rem;
    padding:3rem 2rem;
    border-radius: .5rem;
    text-align: center;
    transition: .2s linear;
}

.features .box-container .box img{
    height: 15rem;
}

.features .box-container .box h3{
    font-size: 2rem;
    color:#333;
    padding-top: 1rem;
}

.features .box-container .box p{
    font-size: 1.3rem;
    color:#666;
    padding: 1rem 0;
}

.about{
    background:url(https://lh3.googleusercontent.com/fife/AAWUweXpBfYsrLEeEcSBMvNN0mlwrzDGOVG1pCy0oI_fgRo30IB7xTZPLjE6MCRQixYi7Njht7PYwghBWKB3rozcNdTfU6MmcnWrik_m7MI3l-iSGsPlzyVUfoo6VX73JVfBiAmuqApjp5EZdo7ISRtbYntSuIHo9uYBCtS1ysaMKw7vnQhSy3N2nB6D5cpbjMo_65rM_T962bNyD6iRGhK3983tbi1KUHU3V-qAIeHZz1L22zvC4sSp2amr5bd6gg2n4K1jzfXI9ChbQczXzROkI7qdxXd-VjH9K8l2zgl1KuUzssL-aC9vVwMP-pGOqAU_Tm3MQ7qEDY5f0zsWQWEKqUU86DN-Iz7LP0RF6TyjBKCLnAlCms2G3QbA4k2FJWRCVCEvYtbt_c352L1VGimkzuvj3aFmqGnOV8hHV38S_iwKhpwj4B6nI4JNRW6ZiZ2iUbr9DSMxxSitsMU7_iOP1N8CSHZdYMBhB4GYiuVwsRIkZIVst5RHwFmALfYPYHfm7xwlIIXXXUi1PwLn1u27Vf3ehbJxXKqq72fWLZEiIPfbFsEivbp_HTXgxXivCrtQrukIKcUPr7_zaXwqml8cD9jgFMVuspBxlJGtLPMV4ooaOc8LaInibyX17EyOBysN3mOVvV7TzgVVZa5FJsy_V36D0xJCYO3ZP1R6jyiqnEytIYw64MK2R2MNmfZQs0dlGFLjaVWqaZASvnyAfBN7PXCcUw4vEQRflg=w348-h260-p-k-nu-ft) no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 3rem;
}

.about .column{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.about .column .image{
    flex:1 1 40rem;
}

.about .column .image img{
    width:100%;
}

.about .column .content{
    flex:1 1 40rem;
}

.about .column .content h3{
    font-size: 3rem;
    color:#666;
}

.about .column .content p{
    font-size: 1.5rem;
    color:#666;
    padding:1rem 0;
}

.about .column .content .buttons a:last-child{
    margin-left: 2rem;
}

.newsletter{
    text-align: center;
    padding:5rem 1rem;
    background:url(https://lh3.googleusercontent.com/fife/AAWUweXslNnArYNyhybXaLvhn4bNSDnD-Sv7yZYcp35VZXCY7f-VxAY7qkdVYcWW37xy4y2FufD3XnLkuUzx2w74fG1ZrSdHcdP7B3JfxgLd9gg8SzqmIkfEgMtzLUbkqxe6zAtiSOBTgQLny-9SZaI3qvzP0QvIrgoYQwiAUgz7pn2M2T1i2O7UKVfE3KZnIkCsITuiyON1LJPZKB4UMLpxie9VvpOvdhG8PcHpCmzR4zqiZrOR9WzlSR86rWBIfPI2bBQeher3UxsyN-McTEdqKjN1xG1oQfhDObZvw3U04tKGfVp0tHxXYdDbjbZe8la0VNgjjprT19K0reLHvrpqwZbUJh3v847mDqt6trj-S6l-624eC6mJQ-FURTtsaWLMlrT-ST4UUyEjljFMdwoynGqrcsqRa3L5CRR20M6vkcOUMDmoSO5SnmkxocHT9lzuioNkp9-LQzVIOj8SpnNzaTFmnHyexl8VwHcg25hzG80h2wB6DqgQmxApLhj7mnxFfudl98h_YljOekebm7rHTy7vbLEk6CJg8lnMi8we8ipaS208q--mEEd8w5kueyPngkvbdaxMI_gRHDg_9m380Ph6_FdtL2DFlo2k7EmVphJjvyHMI82RxpI5AgFSv0fSae6JST3_2hLBoTY6igZ2SHau_TsLAQNv8GKh-HMtgpgHsJPstRThVKGr2dN0UcNsup6YsMSsPSWStOesgGDvSUCGUg8sNCt3VA=w348-h260-p-k-nu-ft) no-repeat;
    background-size: cover;
    background-position: center;
}

.newsletter h3{
    color:#fff;
    font-size: 3rem;
    text-transform: uppercase;
}

.newsletter p{
    color:#fff;
    font-size: 1.6rem;
    margin:2rem auto;
    width:70rem;
}

.newsletter form{
    display: flex;
    max-width: 70rem;
    border:.2rem solid #fff;
    padding:.5rem;
    border-radius: 5rem;
    margin:2rem auto;
    height:5.5rem;
}

.newsletter form input[type="email"]{
    padding:0 2rem;
    font-size: 1.7rem;
    background:none;
    width:100%;
    color:#fff;
    text-transform: none;
    background:none;
}

.newsletter form input[type="email"]::placeholder{
    color:#eee;
    text-transform: capitalize;
}

.newsletter form input[type="submit"]{
    background:#fff;
    width:20rem;
    font-size: 1.7rem;
    border-radius: 5rem;
    cursor: pointer;
}

.newsletter form input[type="submit"]:hover{
    color:var(--pink);
}

.review .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.review .box-container .box{
    background:#fff;
    margin:1rem;
    padding:1rem;
    text-align: center;
    position: relative;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    flex:1 1 30rem;
    border-radius: .5rem;
}

.review .box-container .box .fa-quote-right{
    position: absolute;
    top:1rem; right:2rem;
    font-size: 8rem;
    color:var(--pink);
    opacity: .3;
}

.review .box-container .box .user img{
    border-radius: 50%;
    object-fit: cover;
    height: 7rem;
    width:7rem;
    margin-top: 2rem;
}

.review .box-container .box .user h3{
    color:var(--pink);
    font-size: 2rem;
}

.review .box-container .box .user .stars i{
    color:var(--purple);
    font-size: 1.5rem;
    padding:1rem 0;
}

.review .box-container .box .comment{
    color:#666;
    font-size: 1.4rem;
    padding:1rem;
}

.pricing .box-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.pricing .box-container .box{
    flex:1 1 27rem;
    margin:1rem;
    padding:1rem;
    background:#fff;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: .5rem;
    text-align: center;
    padding-bottom: 3rem;
}

.pricing .box-container .box:nth-child(2),
.pricing .box-container .box:hover{
    border:.2rem solid var(--pink);
}

.pricing .box-container .box .title{
    color:var(--purple);
    font-size: 2.5rem;
    padding-top: 1rem;
}

.pricing .box-container .box .price{
    font-size: 4rem;
    color:var(--pink);
    padding:1rem 0;
}

.pricing .box-container .box .price span{
    font-size: 2rem;
}

.pricing .box-container .box ul{
    padding:1rem 0;
    list-style: none;
}

.pricing .box-container .box ul li{
    font-size: 1.7rem;
    color:#666;
    padding:.5rem 0;
}

.pricing .box-container .box ul li .fa-check{
    color:lightgreen;
}

.pricing .box-container .box ul li .fa-times{
    color:tomato;
}

.contact{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 4rem;
}

.contact .image{
    flex:1 1 40rem;
}

.contact .image img{
    width:100%;
    padding:2rem;
}

.contact form{
    flex:1 1 40rem;
    padding:2rem 3rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
    border-radius: .5rem;
    background:#fff;
}

.contact form .heading{
    text-align: left;
    padding:0;
    padding-bottom: 2rem;
}

.contact form .inputBox{
    position: relative;
}

.contact form .inputBox input, .contact form .inputBox textarea{
    width:100%;
    background:none;
    color:#666;
    margin:1.5rem 0;
    padding:.5rem 0;
    font-size: 1.7rem;
    border-bottom: .1rem solid rgba(0,0,0,.1);
    text-transform: none;
}

.contact form .inputBox textarea{
    resize: none;
    height: 13rem;
}

.contact form .inputBox label{
    position: absolute;
    top:1.7rem; left:0;
    font-size: 1.7rem;
    color:#666;
    transition: .2s linear;
}

.contact form .inputBox input:focus ~ label,
.contact form .inputBox input:valid ~ label,
.contact form .inputBox textarea:focus ~ label,
.contact form .inputBox textarea:valid ~ label{
    top:-.5rem;
    font-size: 1.5rem;
    color:var(--pink);
}

.footer{
    padding-top: 3rem;
    background:url(https://lh3.googleusercontent.com/fife/AAWUweWFZVzM6v-eSqAc3q8kR0bxDfdDjp_oSWqsfh7baGdfP8ZkZHrSTUmo6xkVKuYoYXNnnDWNGZaagII3CQXi3FCJF6hI_E64TL_mq3pIOVPeLcjVUDz2BCcevc4tjLMNhYt1tUrJ4drm13nXXlkU9ysT_orrZRti9KQaWr5ipxczyj1XYtWvKn3nx5S4KgMsW5i_PU-wyBjGOtB1J4TDo8GS07cmF6gWFr7ezfHwZJ35yURb8AZ8UGJRuBGv5dXHz9eYiFCcKguIsV14btLzIJO53Bwmk6wDBYjJpngUleYgaeOq8rVttMLINwhZvdnJm_Ge8inD_j2iW2bVWOPzG153aXPHYd4_NCATeWOlqTRdsKzyesJg_iq_asfaQBrPg6l0mHFOxEKHes8cpErtFkRGR9ZHco_WPkWYZtYNbqfC6q9j8TGMgJPQgdSqMLStrp16SaUGqMfqnbY50RyHVHhZByKyM3XwIkYaN9S9p-3F0jI7ISTpem1XboCqsULMylEfF0sS7cY9D3KOrRs749IpiesMQqcJKghdJDFQyayYezUENA4ZKJ_T3RGxh30djq6kp2fgVDpWTnJrd6g4f_T7KkWwsdgL7wK_RsASFEKhDAlTo7vyWZ4YbKKbwbiv7U4tUGtyWD45JTnGGNWBq8LJSahcTuzP2hPPZlQighGVVabyEe8EfbMzLN_8aag1rVyP0t6zzFsJpGytSrAu9GMvSP0mZJl68w=w348-h260-p-k-nu-ft) no-repeat;
    background-size: cover;
    background-position: center;
}

.footer .box-container{
    display: flex;
    flex-wrap: wrap;
}

.footer .box-container .box{
    flex:1 1 25rem;
    margin:2rem;
}

.footer .box-container .box h3{
    font-size: 2.5rem;
    padding:1rem 0;
    color:#fff;
    text-decoration: underline;
    text-underline-offset: 1rem;
}

.footer .box-container .box p{
    font-size: 1.5rem;
    padding:.5rem 0;
    color:#eee;
}

.footer .box-container .box a{
    display: block;
    font-size: 1.5rem;
    padding:.5rem 0;
    color:#eee;
}

.footer .box-container .box a:hover{
    text-decoration: underline;
}

.footer .box-container .box .info{
    display: flex;
    align-items: center;
}

.footer .box-container .box .info i{
    margin:.5rem 0;
    margin-right: 1rem;
    border-radius: 50%;
    background:#fff;
    color:var(--pink);
    font-size: 1.5rem;
    height:4.5rem;
    width:4.5rem;
    line-height: 4.5rem;
    text-align: center;
}

.footer .credit{
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: .1rem;
    color:#fff;
    border-top: .1rem solid #fff5;
    padding:2.5rem 1rem;
    text-align: center;
}














/* media queries  */

@media (max-width:1200px){
    
    html{
        font-size: 55%;
    }

}

@media (max-width:991px){
    
    section{
        padding:0 3%;
        padding-top: 7.5rem;
        padding-bottom: 2rem;
    }

}

@media (max-width:768px){

    header label{
        visibility: visible;
        opacity: 1;
    }

    header .navbar{
        position: absolute;
        top:100%; left: 0;
        width:100%;
        background:#fff;
        padding:1rem 2rem;
        border-top: .1rem solid rgba(0,0,0,.2);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
        transform-origin: top;
        transform: scaleY(0);
        opacity: 0;
        transition: .2s linear;
    }

    header .navbar a{
        display: block;
        margin:2rem 0;
        font-size: 2rem;
    }

    header input:checked ~ .navbar{
        transform: scaleY(1);
        opacity: 1;
    }

    header input:checked ~ label::before{
        content:'\f00d';
    }

    .home{
        flex-flow: column-reverse;
    }

    .home .image img{
        width:100%;
    }

    .home .content h3{
        font-size: 3.6rem;
    }

    .home .content p{
        font-size: 1.5rem;
    }

    .about{
        background-position: right;
    }

    .newsletter p{
        width:auto;
    }

}

@media (max-width:450px){
    
    html{
        font-size: 50%;
    }

    .about .column .content .buttons a{
        width:100%;
        text-align: center;
    }

    .about .column .content .buttons a:last-child{
        margin: 1rem 0;
    }

}
    </style>

</head>
<body>
    
<!-- header section starts  -->

<header>

    <a href="#" class="logo"><span>best</span>App</a>

    <input type="checkbox" id="menu-bar">
    <label for="menu-bar" class="fas fa-bars"></label>

    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#features">features</a>
        <a href="#about">about</a>
        <a href="#review">review</a>
        <a href="#pricing">pricing</a>
        <a href="#contact">contact</a>
    </nav>

</header>

<!-- header section ends -->

<!-- home section starts  -->

<section class="home" id="home">

    <div class="content">
        <h3>best mobile app <span>showcase</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit porro nam libero natus error consequatur sed repudiandae eos quo?</p>
        <a href="#" class="btn">download now</a>
    </div>

    <div class="image">
        <img src="https://lh3.googleusercontent.com/fife/AAWUweU8gTUgiLT4HVtpji7N1jU3fB3FoDIFpHm4uvxqCAt0IktAOMQctKtoRb5Zjf0SikGUNjJ904ZnXJlXrrSNVpAZkzZJ9QzEGju_v79k8yYj77P-D8_BuxCrhzfB9nAfWC1V7faDaSh357pFoPq3SmdtiMHD5n5r-mwJHH7Q5kMVyTaRIqMOyYwLd1wPjyGCgHeqt56_G_6rhi479t1leWKvdOZdO3zTDTFA_EzZeLeVsKouM2GE1fQLsXPRsBlhXqExxDClxWJ8zeVBFejJFGg0h9ls1WZBzQoRTYFcNOIoyheRnKwg1hh0y-KJ99C3_ilezyX6MSB9wZ5D9uxJZbuBYp4H3EHp_tLnayKbhX9MNZg8oECKlYMpbab_PFGhmSpGUh6RPItLOknOsJ7NFUPfeEE3NWZ7pT2C_bVlwHRRFgvjXzLXbLuxJHxWgZ3TeQQ3gppprj36Bbp9BwwGuULEc_0c2GT70AlfOTbKfbeGAgMwB4dywYlIR5D5YQvJ5nDlLnsRkA8nCHfiRJEhYiouMc67vH_MhZTQ4jd2iHpbb-6_gbRB37G_bGD_9DBTB-ttkV8mLrhL17YxWR5XtwhTxQnqRRayEJYOJ9795hJy0gTa6PQLnVIZaHab5CRB7_LmvMRWKeXO1NFKb2tEC0uovWP9JG7VdJXf11yDpITq1LwllZnIH22fM9CZlHhs7f1RVRljVvlqpUPw_5drBXO5fjveWTtECA=w348-h260-p-k-nu-ft" alt="">
    </div>

</section>

<!-- home section ends -->

<!-- features section starts  -->

<section class="features" id="features">

    <h1 class="heading"> app features </h1>

    <div class="box-container">

        <div class="box">
            <img src="https://lh3.googleusercontent.com/fife/AAWUweUT_a6MeMn7TY3K-MFSmeZ6eo-3Xl0gHaqhR7Wq9Ipx9418AGrT8Umd309_z_DH_A6kKWSYnAFy8CLoyWYEchZ2kLDpNVo3y1HemSRLkzY6DMO_Oz2dn6YqavJWRuWoP7vp8JDvt-4Cvc7G-22-yXQ0ua2UYwPz0pqDHLe4uf7cLLv3qdFK8aHXVSJZ-B3oNjfs6k2qFsWYEgMqK6E5udL9t_bS37cGE5wG6QDDmhX13HsVbrZGLBI9ze6_k-_CXkfqvXNY-lNuUaE2WUIYPvjFuxj6R41KGmxCa3TmDZa-V85K1pVzhtVE2qlrlI5jwPPKnywsNzkxUsI748pK2yHtk_5-LYZabQWhCV-fx67K8BzpwG37otbtzja1SZmcKCMQBDgEBkagUQPTcr1CpHJXZ5tNn9vwyFsoDbILCpW83NQ_KYNT7jh5VopzCCuhXtOGQQPrrSyFg5oMR32ioPUsi9dN10codFiZgHjQkpBu2adLgwDYPMfxFYUbC02vWXjeaSgrty02m9XPTnB5zwDmKcCbwnAKJbuYVFaW0PvrfqxjhGlqnIJ3rYmoMAtFDlR4t7Xk5ZGpzpB8j9ndAQhyUnLifNCquENlvU5KJFsHVVWmEl7--67N7ZFFNdZS16qUDrUT6Cs0ihTsm7q9taSsLTmKQjva9kqq_oeB_L4JGoKlVtwtY39agfukwP7CqBFeIgKqFPU26iStyiR3J-TNMyUAt227jg=w348-h260-p-k-nu-ft" alt="">
            <h3>amazing UI design</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <img src="https://lh3.googleusercontent.com/fife/AAWUweUa1oPzb-lx40SbNxtq5OJxt78K4ipYxtBThXNoKETyKKfJGPFGh8yiyrZUEPITtbt5MW8IYBKKBayM5nj2HIpWi_O1B_w0wr09-HOfaY74oVxYaTmtmI63l435VA1Im1fJztizpvvMMAzLcmhoY7ITX1aFPA_GJb09S-BFywm-mMP0O22In8mj_YoSiWXzc0wxpCBvNYidkjmLt22PbB3ySlbRqNbRH_v2CxJqjO_tnO_b_FQb_1rGbuwNEgJ8Fe5jcfYlqpPSBXGTNkKQctf-j9lGq2VI37ckEQ3Cl4d0fn46dTWkAejw5PNBxYk04uI6SeBPa3lq4RoF_8TfDbH4dITmD6cTY-1Amey8hLlhpd34Ts_5tRHhgOv0vg5NX4jPRgJjf2w7xCWoAungB1hKaOAtYK6raSwgk2M1DvX9-Hqf9oK0E78NkayltRDO2jGWTcVOes5-tLGdp_hG_thynggfJSfKiryo5ZqmM8rdc96zFOxyOf8TXvi4IgAiIRTMGdKdETggi11CNGRQWLnoW_3wGBpM_8iZ3KfP-iZyLYtOOBMS1EyAfGDgayv1s3jhtRn4sKkdXqPg3khNc7ESVFvw0aeOLciLQq4KHU5vacOVR2uUyauNU3FjrGSXipNAfdCZOhen-wTm2-OpLedsGjZYA9Zneohdh0Ndlux22Y-3NcuH7DZkGxJEsfg7u_DYksSn5hw6NGVr5eMSw6bEr32-1vTU_Q=w348-h260-p-k-nu-ft" alt="">
            <h3>soft and smooth animations</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <img src="https://lh3.googleusercontent.com/fife/AAWUweX1IynxIbUdLC1rxm6rWnVfsmmnC3cQRyu5iGt2Ss5zprbg161DHUq0Ony_r8TMjbnm-0rwlvjKipG7zPDAdR6OkqtA68E42DHa6bdLWyBk3to1si-7i85B4Ia9wmqq3VEoRL1Eyn_ALAgbSd3S-DJmgaLVe9anf4NlgvvtSpoOzEiwjXOhL1rpCIOlXtmVbXRsNkWTPvVfnWeOT9WjlPFVFctlVd1QpHSj17FYim6fDJXWitn-3sP2MP-HiN-zRsfwrwjbtIjhSdZNAhLmZFC1YOw4GZzykTwbudJ6ml0kmVGG6fChpGMqShu2g1x2qWGkHbDiPUoQYOnsFBq6KWxlsTYNnpDAcb6hQI8t8qDpNJAQtBli-b14rqtsKYbGH1RONxz42bpm0lVWdvopXSyRDG-9XfZb_zONdb1hurWNctiLlGQqg2IO7bwM50kQ67JcoSYIbZ-okYvD_Lb3nyNqWjjMStaeRpDubsUjbX2Cs9lndWpiVPPrW2J7xoKVxPVBwnD6oRcXft6AnGzn3DZygLdV03CcKh7_xFXrcQaxYwA4I_BkCIY9xrJPZZ3J1xxPxSOdQf05579FHowxNolVPVANeGfUz7O3NeiUkEwNqYiX3GWNwSLm7ZeviW-MJ8I6UAqvk7r9d7q7NlUQduEifIH2esypekCmUe0tB5eX6UXPpg51cPG3Nn38m0t5wc0pVnFNu_7wjezn2QqpLavJ2rXw8G2NJw=w348-h260-p-k-nu-ft" alt="">
            <h3>freindly interactions</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
            <a href="#" class="btn">read more</a>
        </div>

    </div>

</section>

<!-- features section ends -->

<!-- about section starts  -->

<section class="about" id="about">

    <h1 class="heading"> about the app </h1>

    <div class="column">

        <div class="image">
            <img src="https://lh3.googleusercontent.com/fife/AAWUweVR5xHHDV5DPe2x22PyhEyKC_gCGshsGIcBf3_skE9j7raW4gJkVLfz-OyIea2UR2GmyulUNdLlLCO09nKjHHsEIkDnJaemFA_NxouboFlfj11Fif6Dq4HIN_qKa-2aW7PZvQDNRtf0LMKpUiMlZjZr1d6Q6fPOLlki1NyDPXhUDQTexWHYUhenSautVetvDsMvf22riQ9uMcOTzRWFNP3cVuCr-xoomAlOYEoCydkfDmXyskAu6BjasQaWcT3VpBRmP4bqxlXJI_IK954lgL4DCO1xkGQW6hYi0nc_BRQE1n_row1NS0_k21_SSsqA3Vk8ev-ACciDeYTWvqIBG4au7FZZSgj8qXxS5kUYaqEnIAJPdRAJn7K_Qxuh-TphIHhp7w3kpOlJcvW6HOM51iMQjTh7i1G_eeCybHZBKjZACxImodddFKsf0ONvI_Y4VIrb39TEvlZpoElq3TPPyoPKhW-Xu_vN4BjCL34nv6WJZBkFWqyncS3pheh7Pfb7qpuqsd9y_V2X-FN1yitA9W6DwHknZMmd208_2o2RSCR896hkrYVgjnHoaYRn8zZn3_8a12XiEAlRIe9CQzpSnqIpTNb2GDhi3MBls8Zk6ZXkYbAmxsfRUPbkJ0In8hvxiST7haJj0rbwO6J9TnydJDQkenaimx8DvOO91mIJX8D55DzvO7zAW3zIKtSrtUBDuVndasxoVhPQgub2iKTjgofdrHQDtt016A=w348-h260-p-k-nu-ft" alt="">
        </div>

        <div class="content">
            <h3>Easy And Perfect Solution For Your Business App</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat deserunt saepe repudiandae veniam soluta minima dolor hic aperiam iure.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quaerat. Dolorem ratione saepe magni quo inventore porro ab voluptates eos, nam eius provident accusantium, quia similique est, repellendus et reiciendis.</p>
            <div class="buttons">
                <a href="#" class="btn"> <i class="fab fa-apple"></i> app store </a>
                <a href="#" class="btn"> <i class="fab fa-google-play"></i> google-play </a>
            </div>
        </div>

    </div>

</section>

<!-- about section ends -->

<!-- newsletter  -->

<div class="newsletter">

    <h3>Subscribe For New Features</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sed aliquam quibusdam neque magni magnam est laborum doloribus, facere dolores.</p>
    <form action="">
        <input type="email" placeholder="enter your email">
        <input type="submit" value="Subscribe">
    </form>

</div>

<!-- review section starts  -->

<section class="review" id="review">

    <h1 class="heading"> people's review </h1>

    <div class="box-container">

        <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="https://lh3.googleusercontent.com/fife/AAWUweXmlb3udov9Jvy1fydfVnX-6Lk51wkNsetsiqG2az_Ohtty5Sfpd8uQVYsVlmR2SLL2mISH4YDrxIddxmsjAikoUmsFZ5CF6hdn5GCTwahl9WaUEzuwH1zu8FL_5TpHaBhzzHFDr12zScmVZ90ZDCiFXNaB4f6qdtGkBL5LsSsUWQVf195jXuGyj83M2j2aeEDQ8FHgpVYRcreMASQlUAHQD__WFAqRD1PgQyCEoNuaQWxNkGIUg4TACJE6X92pywKRzqZvcQWMWIx26F7TkDBAkGMSM2T57dGxBfeasPt6p9XSo86N7zgxKcrTeWF80jmV9fdPD4Rv8eF03SoEBeTyWFDg-Fs-bUlrLcXZ_PPFNjWeRQHtwSh-kEYEQ-dRUdQWF7pk9JU4mmeAkEU7G-7CgPP1XgIP5CrzEH19Xq0yR36FxOmZFWYQc8acjWERuMpwCVmfmZVhdRsgDgOx2v5b1rx8NLdyqXWv6wc-V4BA-efua76xQLAa9N74zWnJk9eKpbniImHe-lqEhra0R_JAkyUmn3urxCbwqZZCZZRRzpgxOeorPp54wLY--URnfTSKVPVKdvwiLqR5FqRBolpi9Ya8I50gQ4TaU795TbMqj8aoSMf3wrbBdGyRgRPhRfsWey7_RR2t60ta69GwD7cBp8AEnf1ViqKCyU8NK3lPjWiu1u-ptQy0q8WYQP4Q_42eFLXoCPF73UhG6n2o4svvKXV7irjH5g=w348-h260-p-k-nu-ft" alt="">
                <h3>john deo</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="comment">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
                </div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="https://lh3.googleusercontent.com/fife/AAWUweWU3VKNUyRqIgf3pg6mKrUDbpbj3RwIXYFwaObacevwOi7NCOZXlMGlnScUCX6bWlgwRqSYCs227gymcxYihn0FRmL7-buaWdMdDE946g-3xTLw62bXQ8prasKVt3L5lZOZ8ghgu6WzvzVsyv0XtI7YsQfvXVqg-kbCeHdEVhJarCAlZWMSbqoRXmBm7qJ5mV9o3vpsZ5AxUI1i-Kle5MX5PELwTo7_9eBm5RmmH-RHfwl3Hll7BHQTUQLaZDOOmNDClEjlMaIpPardZsUjPG0a7M-E9HgHY7KylPuW_7BJysfkFTh0kmUx_ZndFIR8w3UPfAIUBM2vB-bEKQG3S2FphdRTpOSZuRrFhcEvGQYTAntD3n7yviNk5b1AXE8SRyctT-eZVJ1JfUjzljxDXLWbpLy65scTyCZfwhbxCr9OkjBSVjtgoVMXPGnh0V4bcf1pro_AdCKTtB4nEiZDnvYPE53HPn4IrFGpoudYBxFpQPV0L6WuqxRR9MI1WsVwvBMx_Mw-9KEseyrJgI5ahcOhvoFDV_Ho3Ykd7gitmZ30USjv76YIIVElJGYC3joIUasDGmEIpPh9crsqGF_BsGoe6RMATaZuKA8WGpxvO5cnOPjpgySsY4uGe0rPTDDS-dkOqFGAWUdpfhXdTGh19caVfALP0f8SYdm6VYvG2lebImdjkQW5RuEL1bUV3NXFKaLlujVEww0b1zOUlg0UNSgRF_RnmED4Ag=w348-h260-p-k-nu-ft" alt="">
                <h3>john deo</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="comment">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
                </div>
            </div>
        </div>

        <div class="box">
            <i class="fas fa-quote-right"></i>
            <div class="user">
                <img src="https://lh3.googleusercontent.com/fife/AAWUweVk7ZRd2WSgzVnmURlb5Q4cwYgDDtvGZ7_TvBb_QY5FoEhpGVnCEArEWHiQLyldXUF4gGCMLRXjQm2W73hZ0IrpyOQfCPXj0KYwYh3F2yOKK8Z0jsdHZ7hHWcDtvRB-ltHAX7vkxpLMbrci3O8obLnnw80QJR5IoJV0k0b0QbfUbw1IA3lWzv0IKxcmEtgfSYpUmHfNS6dqPuhHldmwbSxPRyLVRMuRkcVtxt-TfbbD_6oa-qGOuDX_abYvxkM6XM8jeMXdztIj7dR-LhTxQsamb8wzhdszsI7IoHKBbvy2x2twOoPYlRVahD4Lo85gU1UmzBZjyV1YxBSfiV_emxc5wPdt5XMbFuwmNTDUBKylnDMs4SSPuDDCOdPB8X8r5dzK-YJd1IvqApyME4iG8Xs9Za3-NpNfdA44ajlzHMITDuP8-uea8A07pxk2kHjucf5RLieNOc1WxU51LEIHXMgnuAWSIKQVzhj2V1OK5F4qcr4x2h1RBWj_iE646sPXVNDXNiP7JT1gHQaU7FynCcmfCI2F0aD4PV03fPouLkiQBjDmrsEGxNDTgvsE3G8_kOzQuoByIqdxSDfFR8vhgn1ONCp04OqkiOrAhvQDjPp36mTGQaqzU9MXdT1NAi3ulay-vhMX7jjHTqsi6baWfaMcBOgBVUTxZDfxFTQIZHIYzRmuz3fJhuL1xhjxes9BrhNZXCRJEawWfyNJqoFwcRn9c1M2DUOttw=w348-h260-p-k-nu-ft" alt="">
                <h3>john deo</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="comment">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
                </div>
            </div>
        </div>

    </div>

</section>

<!-- review section ends -->

<!-- pricing section starts  -->

<section class="pricing" id="pricing">

    <h1 class="heading"> Our Pricing Plans </h1>

    <div class="box-container">

        <div class="box">
            <h3 class="title">basic</h3>
            <div class="price">$10<span>/monthly</span></div>
            <ul>
                <li> <i class="fas fa-check"></i> 1000+ downloads </li>
                <li> <i class="fas fa-check"></i> No transaction fees </li>
                <li> <i class="fas fa-times"></i> unlimited storage </li>
                <li> <i class="fas fa-times"></i> 5 downloads </li>
            </ul>
            <a href="#" class="btn">check out</a>
        </div>

        <div class="box">
            <h3 class="title">standard</h3>
            <div class="price">$15<span>/monthly</span></div>
            <ul>
                <li> <i class="fas fa-check"></i> 1000+ downloads </li>
                <li> <i class="fas fa-check"></i> No transaction fees </li>
                <li> <i class="fas fa-check"></i> unlimited storage </li>
                <li> <i class="fas fa-times"></i> 5 downloads </li>
            </ul>
            <a href="#" class="btn">check out</a>
        </div>

        <div class="box">
            <h3 class="title">premium</h3>
            <div class="price">$25<span>/monthly</span></div>
            <ul>
                <li> <i class="fas fa-check"></i> 1000+ downloads </li>
                <li> <i class="fas fa-check"></i> No transaction fees </li>
                <li> <i class="fas fa-check"></i> unlimited storage </li>
                <li> <i class="fas fa-check"></i> 5 downloads </li>
            </ul>
            <a href="#" class="btn">check out</a>
        </div>

    </div>

</section>

<!-- pricing section ends -->

<!-- contact section starts  -->

<section class="contact" id="contact">

    <div class="image">
        <img src="https://lh3.googleusercontent.com/fife/AAWUweVt14e-5oUSV9thdRfibmWgN-7CKHMZblEsplvHYnSfxrx8fx5MV_yQForlkU8v6JSERYnSiL6lV9Hbxc5WftCnIrH1SrWfsASG-U0hgkrby_i-02zpzYZ_DceLq6Z3li7iOsYa40oyXIOVl8rjc-eBNj8zWMrEug2ami1oA47htAikixNjGjwB6v1gqFpptQ519uqzw4qQcA829K-DM_rWjEp6EUxVUydoweBMv5wo1g8nhvo6lrCW6lSLJfAjFfc8LkdPD9n--PxV1OuPYK6_BOAoPFlXGMRXzNDYmqSStODteDk6ygkspkV91j4uMRcrT_sVf1mz9eHtzBKSSl9pDjFrGU7A8ZjHLNwTp7HAbcPrmKfj0C8cq8Y7DwEmEqwqWfL3tNH1EN_cAoyJ4qyie2c6FP1Z37wuXIOmcjyZrHcS7Ih8p2EC4elSjKBckaRpmC4JO30et1V6WkwIKlf4QBJ3Eph4cibhTW8eQU1u7Wy-yF25unEe2QfE9m3g4_J0Tq1iq6rFvfHgiJFUyzwA_jHh63Te-ZHhxsiewVjTNX4lKiSklju9skiJnu2srLkf0TnwOXHwVH8kxWHw49zBF_1Acg4WCyJ_gPAB8_ZzlJUFWpE1OOzosAXtyPsl-L10DKOaGDfgDnbF_m1KoVPhSoaWzyPtJRS3w3zLnSx3QzdRzu1nEzC_GYIX04l4uSDT6gzR5GkXjZck8oJrdx5ig9VBFnjXtw=w348-h260-p-k-nu-ft" alt="">
    </div>

    <form action="">

        <h1 class="heading">contact us</h1>

        <div class="inputBox">
            <input type="text" required>
            <label>name</label>
        </div>

        <div class="inputBox">
            <input type="email" required>
            <label>email</label>
        </div>

        <div class="inputBox">
            <input type="number" required>
            <label>phone</label>
        </div>

        <div class="inputBox">
            <textarea required name="" id="" cols="30" rows="10"></textarea>
            <label>message</label>
        </div>

        <input type="submit" class="btn" value="send message">

    </form>

</section>

<!-- contact section edns -->

<!-- footer section starts  -->

<div class="footer">

    <div class="box-container">

        <div class="box">
            <h3>about us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur rerum consectetur architecto ad tempora blanditiis quo aliquid inventore a.</p>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">features</a>
            <a href="#">about</a>
            <a href="#">review</a>
            <a href="#">pricing</a>
            <a href="#">contact</a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">pinterest</a>
            <a href="#">twitter</a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <div class="info">
                <i class="fas fa-phone"></i>
                <p> +123-456-7890 <br> +111-2222-333 </p>
            </div>
            <div class="info">
                <i class="fas fa-envelope"></i>
                <p> example@gmail.com <br> example@gmail.com </p>
            </div>
            <div class="info">
                <i class="fas fa-map-marker-alt"></i>
                <p> mumbai, india - 400104 </p>
            </div>
        </div>

    </div>

    <h1 class="credit"> &copy; copyright @ 2021 by mr. web designer </h1>

</div>

</body>
</html>
